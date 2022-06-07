import { imgHandler } from "../Components/imgHandler";
import { v4 } from "uuid";

const Home = () => {
  const data = {
    bannerImage: [
      {
        img: "/img/home/img01.png",
        alt: "公司外觀",
      },
      {
        img: "/img/home/img02.png",
        alt: "公司Logo牆面",
      },
      {
        img: "/img/home/img03.png",
        alt: "公司Logo牆面",
      },
      {
        img: "/img/home/img04.png",
        alt: "公司大廳",
      },
    ],
    globalClient: {
      img: "/img/home/globalclient.png",
      alt: `美國和歐洲
            DATALOGIC
            HONEYWELL
            IBM
            UBIQCONN
            ZONAR
            ASIA
            ACBEL
            ASKEY
            MOLICEL
            OLYMPUS
            中華電信
            卡西歐
            電裝 WAVE
            JVCKENWOOD
            LAWSON
            SEVEN-ELEVEN
            手機 `,
    },
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

  return (
    <div className="home">
      <div className="container-home">
        <img src={process.env.PUBLIC_URL + "/img/home/test.png"} alt="test" />
        <ul className="imgOption">
          <li className="point point1">
            <a href="#" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>關於我們</span>
              </div>
            </a>
          </li>
          <li className="point point2">
            <a href="#" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>解決方案</span>
              </div>
            </a>
          </li>
          <li className="point point3">
            <a href="#" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>研發</span>
              </div>
            </a>
          </li>
          <li className="point point4">
            <a href="#" className="point_a">
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
          <div className="news">
            {data.news.map((newsItem) => (
              <div className="news-wrap" key={v4()}>
                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                <a href={newsItem.url} target="_blank">
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
          <img
            src={imgHandler(data.globalClient.img)}
            alt={data.globalClient.alt}
          />
          <h2>全客</h2>
          <h2>球戶</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
