const Development = () => {
  const data = {
    development: {
      title: "研發",
      image: process.env.PUBLIC_URL + "/img/development.png",
      alt: "暫無圖片",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.development.image} alt={data.development.alt} />
        <div className="slash">
          <h2>{data.development.title}</h2>
        </div>
      </div>

      <div className="development-content">
        <div className="development-wrap">
          {/* 水冷高壓 */}
          <img src={process.env.PUBLIC_URL + "/img/WCHP.jpg"} alt="水冷高壓" />
          <div className="development-txt">
            <h2>水冷高壓儲能</h2>
            <p>
              透過儲能電池櫃間相互串連
              整合BMS(電池管理系統)與BPU(電池保護單元)、
              EMS(能源管理系統)的通訊控制 打造千伏等級的高壓儲能系統
            </p>
          </div>

          {/* 防延燒專利 */}
          <div className="development-txt">
            <h2>防延燒專利</h2>
            <p>
              取得中華民國專利認證，利用獨家的防延燒材質隔板，
              減少鋰電池意外燃燒時產生的連鎖反應，有效提高儲能系統的安全性
            </p>
          </div>
          <img src={process.env.PUBLIC_URL + "/img/ASD.jpg"} alt="防延燒設計" />

          {/* 集裝箱(大型儲能) */}
          <img
            src={process.env.PUBLIC_URL + "/img/Container.jpg"}
            alt="集裝箱(大型儲能)"
          />
          <div className="development-txt">
            <h2>集裝箱(大型儲能)</h2>
            <p>
              貨櫃式的儲能系統，通過各項嚴格的工業安規與電力技術標準
              提供大規模的工業用電/太陽能電廠完整的解決方案
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
