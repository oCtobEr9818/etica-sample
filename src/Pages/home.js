import { v4 } from "uuid";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import { imgHandler } from "../Components/imgHandler";

Aos.init({
  offset: 100,
  delay: 50,
});

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLetterSpacing = i18n.language === "en" ? "english" : "taiwanese";

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
      },
      {
        img: "/img/home/industry-device.png",
        alt: "工控電池",
        title: "工控電池",
      },
      {
        img: "/img/home/e-bike.png",
        alt: "e-bike",
        title: "E-bike",
      },
      {
        img: "/img/home/service.png",
        alt: "戴著黃色安全帽的男人在白板畫圖",
        title: "維運管理",
      },
    ],
    news: [
      {
        url: "https://money.udn.com/money/story/5735/6128448?from=edn_related_storybottom",
        title: "明曜異業結盟展企圖心 今年營收上看10億",
        date: "2022/03/01",
      },
    ],
  };

  return (
    <div className="home">
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
          <a href="#client">{t("全球客戶")}</a>
        </div>
        <h1>ETICA</h1>
        <div className="imgWrap">
          {data.bannerImage.map((imageItem) => (
            <img
              data-fancybox="gallery"
              data-caption={imageItem.alt}
              data-aos="zoom-in"
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
            <div className="service-content" data-aos="fade-right">
              {data.services.map((service) => (
                <div className="service-content-wrap" key={v4()}>
                  <img src={imgHandler(service.img)} alt={service.alt}></img>
                  <h4>{t(service.title)}</h4>
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
          <div className="certification" data-aos="fade-right">
            <img
              src={imgHandler("/img/Certification mark.jpg")}
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
          <div className="news" data-aos="fade-right">
            {data.news.map((newsItem) => (
              <div className="news-wrap" key={v4()}>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                <a href={newsItem.url} rel="noreferrer" target="_blank">
                  {newsItem.title}
                </a>
                <span>{newsItem.date}</span>
              </div>
            ))}
          </div>
          <h2 className={changeLetterSpacing}>{t("相新")}</h2>
          <h2 className={changeLetterSpacing}>{t("關聞")}</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
