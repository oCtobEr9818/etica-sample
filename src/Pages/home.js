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
  };

  return (
    <div className="home">
      <div className="container"></div>

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
