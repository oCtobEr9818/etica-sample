import { useState } from "react";
import { v4 } from "uuid";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

import { imgHandler } from "../Components/imgHandler";
import { motionVariants } from "../motionSettings";
import OverlayImage from "../Components/overlayImage";

const data = {
  bannerImage: [
    {
      img: "/img/home/img01.png",
      alt: "樹林區公司外觀",
    },
    {
      img: "/img/home/img_7.png",
      alt: "三重區公司外觀實際圖",
    },
    {
      img: "/img/home/img_5.png",
      alt: "三重區公司外觀示意圖",
    },
    {
      img: "/img/home/img_6.png",
      alt: "三重區公司外觀示意圖",
    },
  ],
  services: [
    {
      img: "/img/home/energy-storage.png",
      alt: "ESS儲能櫃",
      title: "儲能系統",
      path: "/solution#solution-img",
    },
    {
      img: "/img/home/industry-device.png",
      alt: "工控裝置",
      title: "工控裝置",
      path: "/product-industrial-battery#industry-device",
    },
    {
      img: "/img/home/e-bike.png",
      alt: "e-bike",
      title: "E-bike",
      path: "/product-ebike#bicycle",
    },
    {
      img: "/img/home/service.png",
      alt: "戴著黃色安全帽的男人在白板畫圖",
      title: "維運管理",
      path: "/maintenance-management#O&M",
    },
  ],
  news: [
    {
      url: "/img/home/EnergyTaiwan.jpg", // https://booth.e-taitra.com.tw/zh-tw/2023PV/map/ex/143478,
      alt: "展覽場地圖",
      title: "邀請您蒞臨2023年台灣國際智慧能源週",
      date: "2023/10/18~2023/10/20",
    },
  ],
};

Aos.init({
  offset: 100,
  delay: 50,
  once: true,
});

const Home = () => {
  const { t, i18n } = useTranslation();
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayImageUrl, setOverlayImageUrl] = useState("");

  const handleNewsItemClick = (url) => {
    setOverlayImageUrl(url);
    setShowOverlay(true);
  };

  const changeLetterSpacing = i18n.language === "en" ? "english" : "taiwanese";

  return (
    <motion.div
      variants={motionVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3, type: "linear" }}
      className="home"
    >
      <div className="container-home">
        {/* 首頁大圖 */}
        <img src={imgHandler("/img/home/title-page.png")} alt="Etica形象圖" />

        <div className="container-home-txt">
          <h2>{t("專業電池模組製造及維運")}</h2>
          <p>
            {t(
              "明曜科技致力於提供儲能、工控設備及E-bike電源管理解決方案，能提供完整的MIT一站式客製化服務來幫助各領域業主解決電源上的問題。"
            )}
          </p>
        </div>
      </div>

      {/* 橫幅 */}
      <div className="banner-home">
        <div className="hexagon">
          <a href="#service">{t("服務項目")}</a>
          <a href="#international">{t("國際認證")}</a>
          <a href="#news">{t("相關新聞")}</a>
        </div>
        <h1>ETICA</h1>
        <div className="imgWrap">
          {data.bannerImage.map((imageItem) => (
            <img
              data-fancybox="gallery"
              data-caption={imageItem.alt}
              data-aos="zoom-in"
              data-aos-duration="500"
              src={imgHandler(imageItem.img)}
              alt={imageItem.alt}
              key={v4()}
            />
          ))}
        </div>
      </div>

      <div className="content">
        {/* 服務項目 */}
        <div className="wrap">
          <div className="topline" id="service"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <div className="service">
            <div
              className="service-content"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              {data.services.map((service) => (
                <div className="service-content-wrap" key={v4()}>
                  <img src={imgHandler(service.img)} alt={service.alt} />

                  <Link to={service.path}>{t(service.title)}</Link>
                </div>
              ))}
            </div>
          </div>
          <h2 className={changeLetterSpacing}>{t("服項")}</h2>
          <h2 className={changeLetterSpacing}>{t("務目")}</h2>
        </div>

        {/* 國際認證 */}
        <div className="wrap">
          <div className="topline" id="international"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <div
            className="certification"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img
              src={imgHandler("/img/Certification mark.png")}
              alt="國際認證"
            />
          </div>
          <h2 className={changeLetterSpacing}>{t("國認")}</h2>
          <h2 className={changeLetterSpacing}>{t("際證")}</h2>
        </div>

        {/* 相關新聞 */}
        <div className="wrap">
          <div className="topline" id="news"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <div className="news" data-aos="fade-right" data-aos-duration="500">
            {data.news.map((newsItem) => (
              <div className="news-wrap" key={v4()}>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                <button onClick={() => handleNewsItemClick(newsItem.url)}>
                  {t(newsItem.title)}
                </button>
                <span>{newsItem.date}</span>
              </div>
            ))}
          </div>
          <h2 className={changeLetterSpacing}>{t("相新")}</h2>
          <h2 className={changeLetterSpacing}>{t("關聞")}</h2>
        </div>

        {showOverlay && (
          <OverlayImage
            imageUrl={imgHandler(overlayImageUrl)}
            alt={data.news[0].alt}
            onClose={() => setShowOverlay(false)}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Home;
