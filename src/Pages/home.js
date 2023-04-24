import { imgHandler } from "../Components/imgHandler";
import { HashLink as Link } from "react-router-hash-link";
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

  return (
    <div className="home">
      <div className="container-home">
        {/* 首頁大圖 */}
        <img src={imgHandler("/img/home/test.jpg")} alt="Etica形象圖" />

        <ul className="imgOption">
          <li className="point point1">
            <Link to="/solution_commercial_facility" className="point_a">
              <span className="point_span" /> {/* 白色圓點 */}
              <div className="point_wrap">
                <span>商業設施</span>
              </div>
            </Link>
          </li>
          <li className="point point2">
            <Link to="/solution_transportation_application" className="point_a">
              <span className="point_span" />
              <div className="point_wrap">
                <span>交通應用</span>
              </div>
            </Link>
          </li>
          <li className="point point3">
            <Link to="/solution_greenEnergy_industry" className="point_a">
              <span className="point_span" />
              <div className="point_wrap">
                <span>綠能產業</span>
              </div>
            </Link>
          </li>
          <li className="point point4">
            <Link to="/solution_public_house" className="point_a">
              <span className="point_span" />
              <div className="point_wrap">
                <span>公設住宅</span>
              </div>
            </Link>
          </li>
          <li className="point point5">
            <Link to="/solution_industry_application" className="point_a">
              <span className="point_span" />
              <div className="point_wrap">
                <span>工業應用</span>
              </div>
            </Link>
          </li>
        </ul>
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
        {/* 相關新聞 */}
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

        {/* 全球客戶 */}
        <div className="wrap">
          <div className="topline" id="client"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <div className="client" data-aos="fade-right">
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
