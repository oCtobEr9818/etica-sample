import React, { useRef } from "react";
import GoogleMapReact from "google-map-react";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import mapKey from "../Components/key";
// import { token } from "../Components/api/token";
import { mailUrl } from "../Components/api/mail_url";
import { Layout } from "../Components/Layout";
import { useFormValidate } from "../Components/useFormValidate";

const Contact = () => {
  const { t } = useTranslation();

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

  // 取得 CSRF token
  // useEffect(() => {
  //   fetch(token)
  //     .then((response) => response.text())
  //     .then((csrfToken) => {
  //       // 將 CSRF 令牌設置到 meta 標籤中
  //       const metaTag = document.querySelector('meta[name="csrf-token"]');
  //       if (metaTag) {
  //         metaTag.setAttribute("content", csrfToken);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("無法取得 CSRF 令牌:", error);
  //     });
  // }, []);

  // 獲取CSRF令牌
  // const csrfToken = document
  //   .querySelector('meta[name="csrf-token"]')
  //   .getAttribute("content");

  const form = useRef();

  // 發送email
  async function sendEmail(e) {
    e.preventDefault();

    // 檢查是否有未填寫的欄位
    if (!nameIsValid) {
      alert("姓名尚未填寫！");
      return;
    } else if (!emailIsValid) {
      alert("電子信箱尚未填寫或格式錯誤！");
      return;
    } else if (!subjectIsValid) {
      alert("主旨尚未填寫！");
      return;
    } else if (!contentIsValid) {
      alert("內容尚未填寫！");
      return;
    }

    try {
      // 取得 token
      // const response = await fetch(token);
      // const _token = await response.text();
      // console.log(_token);

      // 構建郵件資料
      const formData = new FormData(form.current);
      const requestBody = Object.fromEntries(formData.entries());

      // 發送郵件
      await fetch(mailUrl, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-type": "application/json",
          // "X-CSRF-TOKEN": csrfToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("訊息已發送！");
          form.current.reset();
        });
    } catch (error) {
      console.error("發生錯誤:", error);
      alert("發生錯誤，無法發送訊息！");
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

        {/* <input type="hidden" name="_token" value={csrfToken} /> */}

        <div className="form-wrap">
          <input
            type="submit"
            value={t("送出")}
            className="submit"
            disabled={!nameIsValid || !emailIsValid}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
