// import { HashLink as Link } from "react-router-hash-link";
import { v4 } from "uuid";
import Aos from "aos";
import "aos/dist/aos.css";

import { imgHandler } from "../Components/imgHandler";
// import MapChart from "../Components/mapChart";

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
    },
    {
      img: "/img/home/industry-device.png",
      alt: "工控電池",
    },
    {
      img: "/img/home/e-bike.png",
      alt: "e-bike",
    },
    {
      img: "/img/home/service.png",
      alt: "戴著黃色安全帽的男人在白板畫圖",
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

Aos.init({
  offset: 100,
  delay: 50,
});

const Home = () => {
  return (
    <div className="home">
      <div className="container-home">
        {/* 首頁大圖 */}
        <img src={imgHandler("/img/home/title-page.png")} alt="Etica形象圖" />

        <div className="container-home-txt">
          <h2>專業電池模組製造及維運</h2>
          <p>
            明曜科技致力於提供儲能、工控設備及E-bike電源管理解決方案，能提供完整的MIT一站式客製化服務來幫助各領域業主解決電源上的問題。
          </p>
        </div>

        {/* <ul className="imgOption">
          <li className="point point1">
            <Link
              to="/solution_commercial_facility#commercial-facility"
              className="point_a"
            >
              <span className="point_span" />
              <div className="point_wrap">
                <span>電力設施</span>
              </div>
            </Link>
          </li>
          <li className="point point2">
            <Link
              to="/solution_transportation_application#transportation-application"
              className="point_a"
            >
              <span className="point_span" />
              <div className="point_wrap">
                <span>交通應用</span>
              </div>
            </Link>
          </li>
          <li className="point point3">
            <Link
              to="/solution_greenEnergy_industry#greenEnergy-industry"
              className="point_a"
            >
              <span className="point_span" />
              <div className="point_wrap">
                <span>綠能產業</span>
              </div>
            </Link>
          </li>
          <li className="point point4">
            <Link to="/solution_public_house#public-house" className="point_a">
              <span className="point_span" />
              <div className="point_wrap">
                <span>公設住宅</span>
              </div>
            </Link>
          </li>
          <li className="point point5">
            <Link
              to="/solution_industry_application#industry-application"
              className="point_a"
            >
              <span className="point_span" />
              <div className="point_wrap">
                <span>工業應用</span>
              </div>
            </Link>
          </li>
        </ul> */}
      </div>
      {/* <a
        href="http://www.freepik.com"
        rel="noreferrer"
        target="_blank"
        className="copyright"
      >
        Designed by macrovector / Freepik
      </a> */}

      {/* 橫幅 */}
      <div className="banner-home">
        <div className="hexagon">
          <a href="#service">服務項目</a>
          <a href="#international">國際認證</a>
          <a href="#client">全球客戶</a>
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
                <img src={imgHandler(service.img)} alt={service.alt}></img>
              ))}
              <h4>儲能系統</h4>
              <h4>工控電池</h4>
              <h4>E-bike</h4>
              <h4>維運管理</h4>
            </div>
          </div>
          <h2>服項</h2>
          <h2>務目</h2>
        </div>

        {/* 國際認證 */}
        <div className="wrap">
          <div className="topline" id="international"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <div className="certification" data-aos="fade-right">
            <img src={imgHandler("/img/Certification mark.jpg")} alt="test" />
          </div>
          <h2>國認</h2>
          <h2>際證</h2>
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
          <h2>相新</h2>
          <h2>關聞</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
