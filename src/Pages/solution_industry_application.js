import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  solution_img: {
    image: imgHandler("/img/sub-solution.png"),
    alt: "一大塊太陽能板架設在停車場",
  },
  content_img: {
    data01: {
      image: imgHandler("/img/industryApplication_img3.png"),
      alt: "工業應用示意圖",
    },
  },
};

Aos.init({
  offset: 100,
  delay: 50,
  once: true,
});

const IndustryApplication = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="industry-application">
        <div className="content-wrap">
          <h1 id="industry-application" data-aos="fade-up">
            {t("工業應用")}
          </h1>

          <p data-aos="fade-up">
            {t(
              "工廠用電首重穩定，電壓不足或突然斷電都可能造成設備損壞或產品報銷。另外，台灣為加速達成淨零碳排，要求用電契約容量逾5,000瓩的用電大戶，應於2025年之前建置至少契約容量10%的再生能源發電設施或儲能設備，提早完成的廠戶可酌減再生能源或儲能設備的義務建置容量。無論有無再生能源發電設施，工廠建置儲能設備都能達到節省電費、穩定電力供應及能耗監控的效果，亦能參與電力交易平台獲取額外收益。"
            )}
          </p>
          <p data-aos="fade-up">
            {t(
              "明曜的儲能系統產品線完整，可因應現場環境、客戶需求、法規限制提供適合的產品及整體規劃。"
            )}
          </p>
          <div className="linkToESS" data-aos="fade-up">
            <Link to="/product-ESS">{t("產品資訊")}</Link>
          </div>

          <div className="industry-application-content">
            <img
              src={data.content_img.data01.image}
              alt={data.content_img.data01.alt}
              data-aos="fade-up"
              data-aos-duration="500"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndustryApplication;
