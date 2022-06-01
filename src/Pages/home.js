const Home = () => {
  const data = {
    image: {
      img01: process.env.PUBLIC_URL + "/img/home/img01.png",
      img02: process.env.PUBLIC_URL + "/img/home/img02.png",
      img03: process.env.PUBLIC_URL + "/img/home/img03.png",
      img04: process.env.PUBLIC_URL + "/img/home/img04.png",
      globalClient: process.env.PUBLIC_URL + "/img/home/globalclient.png",
    },
    alt: {
      alt01: "公司外觀",
      alt02: "公司Logo牆面",
      alt03: "公司Logo牆面",
      alt04: "公司大廳",
      globalClientAlt: `美國和歐洲
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
            <a href="" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>工控電池</span>
              </div>
            </a>
          </li>
          <li className="point point2">
            <a href="" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>e-bike</span>
              </div>
            </a>
          </li>
          <li className="point point3">
            <a href="" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>ESS儲能電池</span>
              </div>
            </a>
          </li>
          <li className="point point4">
            <a href="" className="point_a">
              <span className="point_span"></span>
              <div className="point_wrap">
                <span>40呎集裝箱</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="banner-home">
        <div className="hexagon">
          <span>相關新聞</span>
          <span>國際認證</span>
          <span>全球客戶</span>
        </div>
        <h1>ETICA</h1>
        <div className="imgWrap">
          <img src={data.image.img01} alt={data.alt.alt01} />
          <img src={data.image.img02} alt={data.alt.alt02} />
          <img src={data.image.img03} alt={data.alt.alt03} />
          <img src={data.image.img04} alt={data.alt.alt04} />
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <div className="topline"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <div className="news">
            {data.news.map((newsItem) => (
              <div className="news-wrap">
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                <a href={newsItem.url}>{newsItem.title}</a>
                <span>{newsItem.date}</span>
              </div>
            ))}
          </div>
          <h2>相新</h2>
          <h2>關聞</h2>
        </div>

        <div className="wrap">
          <div className="topline"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <h2>國認</h2>
          <h2>際證</h2>
        </div>

        <div className="wrap">
          <div className="topline"></div>
          <div className="trapezoid"></div>
          <div className="underline"></div>
          <img src={data.image.globalClient} alt={data.alt.globalClientAlt} />
          <h2>全客</h2>
          <h2>球戶</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
