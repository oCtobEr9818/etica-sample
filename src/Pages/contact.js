import React, { useRef } from "react";
import GoogleMapReact from "google-map-react";
import emailjs from "@emailjs/browser";

import mapKey from "../Components/key";
import { useFormValidate } from "../Components/useFormValidate";
import { Layout } from "../Components/Layout";

const Contact = () => {
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

  // 發送email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if (!nameIsValid || !emailIsValid || !subjectIsValid || !contentIsValid) {
      return;
    }

    emailjs
      .sendForm(
        "test123456",
        "template_112nvyd",
        form.current,
        "sCK8COnh4d-o6DHKh"
      )
      .then((e) => {
        if (e) {
          alert("已送出信件！");
        }
      });
    form.current.reset();
  };

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
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-wrap">
          <label>
            姓名{" "}
            <span>
              *{nameError && <p className="error-text">此欄位不能為空白</p>}
            </span>
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="請留下姓名或者公司名稱"
            onChange={onChangeName}
            onBlur={onBlurName}
            className={nameInputClasses}
          />

          <br />
        </div>

        <div className="form-wrap">
          <label>
            電子信箱{" "}
            <span>
              *
              {emailError && <p className="error-text">格式錯誤或欄位為空白</p>}
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="請輸入常用的電子信箱"
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
            className={emailInputClasses}
          />

          <br />
        </div>

        <div className="form-wrap">
          <label>
            主旨{" "}
            <span>
              *{subjectError && <p className="error-text">此欄位不能為空白</p>}
            </span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="請輸入主旨"
            onChange={onChangeSubject}
            onBlur={onBlurSubject}
            className={subjectInputClasses}
          />

          <br />
        </div>

        <div className="form-wrap">
          <label>
            內容{" "}
            <span>
              *{contentError && <p className="error-text">此欄位不能為空白</p>}
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
          <input
            type="submit"
            value="送出"
            className="submit"
            disabled={!nameIsValid || !emailIsValid}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
