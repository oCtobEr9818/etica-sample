import { imgHandler } from "../Components/imgHandler";
import { v4 } from "uuid";
import Aos from "aos";
import "aos/dist/aos.css";
import MapChart from "../Components/mapChart";

const Home = () => {
  const data = {
    bannerImage: [
      {
        img: "/img/home/img01.png",
        alt: "樹林區公司外觀",
      },
      {
        img: "/img/home/img_2.png",
        alt: "三重區公司外觀示意圖",
      },
      {
        img: "/img/home/img_3.png",
        alt: "三重區公司外觀示意圖",
      },
      {
        img: "/img/home/img_4.png",
        alt: "三重區公司外觀示意圖",
      },
    ],
    news: [
      {
        url: "https://money.udn.com/money/story/5735/6128448?from=edn_related_storybottom",
        title: "明曜異業結盟展企圖心 今年營收上看10億",
        date: "2022/03/01",
      },
      {
        url: "https://money.udn.com/money/story/5735/6128448?from=edn_related_storybottom",
        title: "Lorem ipsum dolor sit amet consectetur Sapiente, enim!",
        date: "2022/03/14",
      },
      {
        url: "https://money.udn.com/money/story/5735/6128448?from=edn_related_storybottom",
        title: "Lorem ipsum dolor sit amet consectetur.",
        date: "2022/03/16",
      },
    ],
  };

  Aos.init({
    offset: 100,
    delay: 50,
  });

  return (
    <div className="home">
      <div className="container-home">
        <img src={process.env.PUBLIC_URL + "/img/home/test.png"} alt="test" />
        <ul className="imgOption">
          <li className="point point1">
            <a href="#test" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>關於我們</span>
              </div>
            </a>
          </li>
          <li className="point point2">
            <a href="#test" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>解決方案</span>
              </div>
            </a>
          </li>
          <li className="point point3">
            <a href="#test" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>研發</span>
              </div>
            </a>
          </li>
          <li className="point point4">
            <a href="#test" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>產品資訊</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="banner-home">
        <div className="hexagon">
          <a href="#news">相關新聞</a>
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
        <div className="wrap">
          <div className="topline" id="news"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <div className="news" data-aos="fade-up">
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

        <div className="wrap">
          <div className="topline" id="international"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <h2>國認</h2>
          <h2>際證</h2>
        </div>

        <div className="wrap">
          <div className="topline" id="client"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <div className="certification" data-aos="fade-right">
            <MapChart />
            <table>
              <tbody>
                <tr>
                  <th style={{ color: "#f00" }}>台灣</th>
                  <td>7-Eleven</td>
                  <td>亞旭 ASKEY</td>
                  <td>研揚 AAEON</td>
                  <td>攸泰 Ubiqconn</td>
                  <td>威霸科技 Poslab</td>
                  <td>菲力 Fairly</td>
                  <td>乾坤富 ENDRICH</td>
                  <td>達旺電力 UrVOLT</td>
                  <td>群光電能 Chicony</td>
                  <td>台泥儲能 TCC</td>
                  <td>大眾電腦 FIC</td>
                </tr>
                <tr>
                  <th></th>
                  <td>康舒 AcBel</td>
                  <td>彬松 ARTRON</td>
                  <td>中華電信CHT</td>
                  <td>台達電子 DELTA</td>
                  <td>華城電機</td>
                  <td>緯創 Wistron</td>
                  <td>宇辰系統 YUCHEN</td>
                  <td>金鋐建設</td>
                  <td>奧林巴斯 OLYMPUS</td>
                  <td>泓德能源 HDRE</td>
                  <td>能元 MOLICEL</td>
                </tr>
                <tr>
                  <th style={{ color: "#f90" }}>日本</th>
                  <td>CASIO</td>
                  <td>DENSO WAVE</td>
                  <td>MAP</td>
                  <td>SATORI</td>
                  <td>JVCKENWOOD</td>
                  <td>LAWSON</td>
                </tr>
                <tr>
                  <th style={{ color: "#0af" }}>美國</th>
                  <td>2T</td>
                  <td>Motive</td>
                  <td>Honeywell</td>
                  <td>IBM</td>
                  <td>ZONAR</td>
                </tr>
                <tr>
                  <th style={{ color: "#faf" }}>歐洲</th>
                  <td>DATALOGIC</td>
                  <td>Aava Mobile</td>
                  <td>RPB Safety</td>
                  <td>AMPLER</td>
                </tr>
                <tr>
                  <th style={{ color: "#00f" }}>中國</th>
                  <td>
                    ASKEY
                    <br />
                    (江蘇)
                  </td>
                  <td>
                    AcBel
                    <br />
                    (東莞)
                  </td>
                </tr>
                <tr>
                  <th style={{ color: "#0aa" }}>韓國</th>
                  <td>POINT Mobile</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>全客</h2>
          <h2>球戶</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
