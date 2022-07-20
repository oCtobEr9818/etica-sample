import React, { useRef } from "react";
import GoogleMapReact from "google-map-react";
import mapKey from "../Components/key";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // useEffect(() => {
  //   const handleEnter = (e) => {
  //     if (e.key === "Enter") {
  //       e.preventDefault();

  //       console.log("pressed Enter");
  //     }
  //   };

  //   document.addEventListener("keydown", handleEnter);

  //   return () => {
  //     document.addEventListener("keydown", handleEnter);
  //   };
  // }, []);

  // function validateForm() {
  //   let x =
  //     document.forms["contact-form"]["fullname"]["company"]["email"]["msg"]
  //       .value;
  //   if (x === "") {
  //     alert("欄位不能空白!");
  //     return false;
  //   }
  // }

  // 發送email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "test123456",
        "template_112nvyd",
        form.current,
        "sCK8COnh4d-o6DHKh"
      )
      .then(
        () => {
          alert("已送出信件！");
        },
        () => {
          alert("送出失敗，請稍後再試一次");
        }
      );
    form.current.reset();
  };

  // google地圖標記點
  const CustomMarker = ({ text }) => (
    <div className="markPoint">
      <div className="point">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
      </div>
      <div className="text">{text}</div>
    </div>
  );

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapKey }}
          defaultCenter={{ lat: 24.998752, lng: 121.4247906 }}
          defaultZoom={12}
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
          <label>姓名：</label>
          <input
            type="text"
            name="user_name"
            placeholder="請輸入姓名或英文名字"
          />
          <br />
        </div>
        <div className="form-wrap">
          <label>公司：</label>
          <input
            type="text"
            name="company"
            placeholder="請輸入您的公司，若為個人請填個人"
          />
          <br />
        </div>
        <div className="form-wrap">
          <label>電子信箱：</label>
          <input type="email" name="email" placeholder="請輸入常用的電子信箱" />
          <br />
        </div>
        <div className="form-wrap">
          <label>內容：</label>
          <textarea name="message" cols="30" rows="10" />
        </div>
        <div className="form-wrap">
          <input type="submit" value="送出" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
