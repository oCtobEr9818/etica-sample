import { useTranslation } from "react-i18next";

import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  solution_img: {
    image: imgHandler("/img/sub-solution.png"),
    alt: "一大塊太陽能板架設在停車場",
  },
  constent_data: {
    data01: {
      image: imgHandler("/img/commercialFacility_plan1.png"),
      alt: "獨立水冷電池櫃",
    },
    data02: {
      image: imgHandler("/img/commercialFacility_plan2.png"),
      alt: "20呎儲能櫃",
    },
  },
};

const CommercialFacility = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="commercial-facility">
        <div className="content-wrap">
          <h1 id="commercial-facility">{t("電力設施")}</h1>

          <p>
            {t(
              "電力交易平台為台電依電業法所設置，同時推動日前輔助服務市場與備用容量市場。日前輔助服務市場的目的在於電力系統納入更多能快速反應、彈性大且多元之外部資源，維持整體電網穩定；備用容量市場方便售電業者籌措法律規定的備用供電容量，避免超載。日前輔助服務市場商品分為調頻備轉(sReg、dReg)、E-dReg、即時備轉及補充備轉，儲能系統多以調頻備轉或E-dReg的形式參與。"
            )}
          </p>
          <p>
            {t(
              "明曜以獨家技術研發+C20呎貨櫃儲能系統，以一半面積達成傳統40呎儲能櫃的儲存容量；另有+O戶外型儲能獨立櫃，適合中小型案場規畫使用。二者均搭載先進冷卻及消防技術使其更安全。"
            )}
          </p>

          <div className="commercial-facility-content">
            <ul>
              <li>{t("方案一：20呎儲能櫃")}</li>
            </ul>
            <img
              src={data.constent_data.data02.image}
              alt={data.constent_data.data02.alt}
            />
          </div>

          <div className="commercial-facility-content">
            <ul>
              <li>{t("方案二：獨立水冷電池櫃")}</li>
            </ul>
            <img
              src={data.constent_data.data01.image}
              alt={data.constent_data.data01.alt}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommercialFacility;