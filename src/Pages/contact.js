import React, { useRef } from "react";
import GoogleMapReact from "google-map-react";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import mapKey from "../Components/key";
import { mailUrl } from "../Components/api/mail_url";
import { Layout } from "../Components/Layout";
import { useFormValidate } from "../Components/useFormValidate";

// 比較漂亮的alert
const ReactSwal = withReactContent(Swal);

const Contact = () => {
  const { t } = useTranslation();

  // 按下送出後的loading畫面
  const loadingSwal = () => {
    return ReactSwal.fire({
      didOpen: () => {
        ReactSwal.showLoading();
      },
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
  };
  // 顯示成功送出後的訊息
  const sucessSwal = (text) => {
    return ReactSwal.fire({
      icon: "success",
      title: `${text}`,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: 1500,
    });
  };
  // 顯示錯誤訊息
  const errorSwal = (text) => {
    return ReactSwal.fire({
      icon: "error",
      title: `${text}`,
      didOpen: () => {
        ReactSwal.hideLoading();
      },
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: 1000,
    });
  };

  const emailRule =
    /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmailFormat = (value) => emailRule.test(value);

  const {
    isValid: nameIsValid,
    hasError: nameError,
    onChangeValue: onChangeName,
    onBlurValue: onBlurName,
  } = useFormValidate(isNotEmpty);

  const {
    isValid: emailIsValid,
    hasError: emailError,
    onChangeValue: onChangeEmail,
    onBlurValue: onBlurEmail,
  } = useFormValidate(isEmailFormat);

  const {
    isValid: subjectIsValid,
    hasError: subjectError,
    onChangeValue: onChangeSubject,
    onBlurValue: onBlurSubject,
  } = useFormValidate(isNotEmpty);

  const {
    isValid: contentIsValid,
    hasError: contentError,
    onChangeValue: onChangeContent,
    onBlurValue: onBlurContent,
  } = useFormValidate(isNotEmpty);

  const form = useRef();

  // 發送email
  async function sendEmail(e) {
    e.preventDefault();

    const submitButton = form.current.querySelector('input[type="submit"]');
    submitButton.disabled = true;

    const loadingModal = loadingSwal();

    if (!nameIsValid || !emailIsValid || !subjectIsValid || !contentIsValid) {
      loadingModal.close();

      submitButton.disabled = false;

      // 檢查是否有未填寫的欄位
      if (!nameIsValid) {
        errorSwal("姓名尚未填寫！");
        return;
      } else if (!emailIsValid) {
        errorSwal("電子信箱尚未填寫或格式錯誤！");
        return;
      } else if (!subjectIsValid) {
        errorSwal("主旨尚未填寫！");
        return;
      } else if (!contentIsValid) {
        errorSwal("內容尚未填寫！");
        return;
      }
    } else {
      try {
        // 構建郵件資料
        const formData = new FormData(form.current);
        const requestBody = Object.fromEntries(formData.entries());

        // 發送郵件
        await fetch(mailUrl, {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-type": "application/json",
          },
        }).then((response) => {
          if (response.status === 200) {
            loadingModal.close();
            sucessSwal("訊息已發送！");
            form.current.reset();
          } else if (response.status === 422) {
            loadingModal.close();
            submitButton.disabled = false;
          } else {
            throw new Error("Server error");
          }
        });
        // .then((response) => response.json())
        // .then((data) => {
        //   console.log(data);
        //   loadingModal.close();
        //   sucessSwal("訊息已發送！");
        //   form.current.reset();
        // });
      } catch (error) {
        loadingModal.close();
        console.error("發生錯誤:", error);
        errorSwal("發生錯誤，無法發送訊息！");
      }
    }
  }

  const throttledSendEmail = _.throttle(sendEmail, 2000);

  const nameInputClasses = nameError ? "invalid" : "";
  const emailInputClasses = emailError ? "invalid" : "";
  const subjectInputClasses = emailError ? "invalid" : "";
  const contentInputClasses = emailError ? "invalid" : "";

  // google地圖標記點
  const CustomMarker = ({ text }) => (
    <div className="markPoint">
      <div
        className="point"
        style={{
          width: "50px",
          color: "#f00",
          fontSize: "3em",
          position: "absolute",
          top: "-40px",
        }}
      >
        <i className="fa fa-map-marker" aria-hidden="true"></i>
      </div>
      <div
        className="text"
        style={{
          width: "140px",
          color: "#f00",
          fontSize: "1.3em",
          fontWeight: "600",
          position: "absolute",
          top: "-40px",
          left: "20px",
        }}
      >
        {text}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapKey }}
          defaultCenter={{ lat: 24.998752, lng: 121.4247906 }}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
        >
          <CustomMarker
            lat={24.9553234}
            lng={121.3841572}
            text="明曜科技總公司"
          />
          <CustomMarker lat={25.0480859} lng={121.469599} text="三重新廠" />
        </GoogleMapReact>
      </div>

      {/* 聯絡我們表單 */}
      <form ref={form} onSubmit={throttledSendEmail} className="contact-form">
        <div className="form-wrap">
          <label>
            {t("姓名")}{" "}
            <span>
              *
              {nameError && (
                <p className="error-text">{t("此欄位不能為空白")}</p>
              )}
            </span>
          </label>
          <input
            type="text"
            name="user_name"
            placeholder={t("請留下姓名或者公司名稱")}
            onChange={onChangeName}
            onBlur={onBlurName}
            className={nameInputClasses}
          />

          <br />
        </div>

        <div className="form-wrap">
          <label>
            {t("電子信箱")}{" "}
            <span>
              *
              {emailError && (
                <p className="error-text">{t("格式錯誤或欄位為空白")}</p>
              )}
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder={t("請輸入常用的信箱")}
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            className={emailInputClasses}
          />

          <br />
        </div>

        <div className="form-wrap">
          <label>
            {t("主旨")}{" "}
            <span>
              *
              {subjectError && (
                <p className="error-text">{t("此欄位不能為空白")}</p>
              )}
            </span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder={t("請輸入主旨")}
            onChange={onChangeSubject}
            onBlur={onBlurSubject}
            className={subjectInputClasses}
          />

          <br />
        </div>

        <div className="form-wrap">
          <label>
            {t("內容")}{" "}
            <span>
              *
              {contentError && (
                <p className="error-text">{t("此欄位不能為空白")}</p>
              )}
            </span>
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            onChange={onChangeContent}
            onBlur={onBlurContent}
            className={contentInputClasses}
          />
        </div>

        <div className="form-wrap">
          <input type="submit" value={t("送出")} className="submit" />
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
