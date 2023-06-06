import { useTranslation } from "react-i18next";

import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  solution_img: {
    image: imgHandler("/img/sub-solution.png"),
    alt: "一大塊太陽能板架設在停車場",
  },

  content_img: {
    data01: {
      image: imgHandler("/img/greenEnergyIndustry_img3.png"),
      alt: "綠能產業示意圖",
    },
  },
};

const GreenEnergyIndustry = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="greenEnergy-industry">
        <div className="content-wrap">
          <h1 id="greenEnergy-industry">{t("光儲整合")}</h1>

          <p>
            {t(
              "全球減碳浪潮（RE100、SBTi科學基礎減碳目標、歐洲碳關稅等）及台灣停用核電的政策驅使下，以太陽能、風力為主的再生能源發電逐漸受各方重視。再生能源發電占台灣2022年總發電量約8.6%，比例僅略低於核能發電，對整體電力供需的重要性日益增加。再生能源運用發展長期受限於自然環境變化導致的不穩定，間歇性再生能源大幅增加時可能衝擊傳統電力系統，除了雙向電力潮流影響電力品質與系統保護之外，再生能源出力的快速變化亦將影響整體供需平衡，構成系統調度的挑戰。"
            )}
          </p>
          <p>
            {t(
              "太陽能電板搭配儲能系統一併規劃已蔚為趨勢，明曜的儲能系統規格多元，且能與光電模組完美配合，與客戶共同建構完整的解決方案。"
            )}
          </p>

          <div className="greenEnergy-industry-content">
            <img
              src={data.content_img.data01.image}
              alt={data.content_img.data01.alt}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GreenEnergyIndustry;
