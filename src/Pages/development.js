import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";

import { Layout } from "../Components/Layout";
import { imgHandler } from "../Components/imgHandler";

const data = {
  development: {
    image: imgHandler("/img/sub-development.png"),
    alt: "動力研發部開發環境",
  },
};

Aos.init({
  offset: 100,
  delay: 50,
  once: true,
});

const Development = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="banner">
        <img src={data.development.image} alt={data.development.alt} />
      </div>

      <div className="development-content">
        <h2 id={"R&D"} data-aos="fade-up" data-aos-duraction="500">
          技術研發
        </h2>

        <div className="content-wrap">
          {/* 水冷高壓 */}
          <img
            src={imgHandler("/img/WCHP.png")}
            alt="水冷高壓"
            data-aos="fade-right"
          />
          <div
            className="content-txt"
            data-aos="fade-up"
            data-aos-duraction="500"
          >
            <h2>{t("水冷高壓儲能")}</h2>
            <p>
              {t(
                "透過儲能電池櫃間相互串連整合BMS(電池管理系統)與BPU(電池保護單元)、EMS(能源管理系統)的通訊控制 打造千伏等級的高壓儲能系統。"
              )}
            </p>
          </div>

          {/* 防延燒專利 */}
          <div
            className="content-txt"
            data-aos="fade-up"
            data-aos-duraction="500"
          >
            <h2>{t("防延燒專利")}</h2>
            <p>
              {t(
                "取得中華民國專利認證，利用獨家的防延燒材質隔板，減少鋰電池意外燃燒時產生的連鎖反應，有效提高儲能系統的安全性。"
              )}
            </p>
          </div>
          <img
            src={imgHandler("/img/ASD.jpg")}
            alt="防延燒設計"
            data-aos="fade-left"
          />

          {/* 集裝箱(大型儲能) */}
          <img
            src={imgHandler("/img/Container.png")}
            alt="集裝箱(大型儲能)"
            data-aos="fade-right"
          />
          <div
            className="content-txt"
            data-aos="fade-up"
            data-aos-duraction="500"
          >
            <h2>{t("集裝箱(大型儲能)")}</h2>
            <p>
              {t(
                "貨櫃式的儲能系統，通過各項嚴格的工業安規與電力技術標準提供大規模的工業用電/太陽能電廠完整的解決方案。"
              )}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Development;
