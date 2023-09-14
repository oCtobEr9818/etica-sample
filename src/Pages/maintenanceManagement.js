import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  banner: {
    img: "/img/sub-maintenance-management.png",
    alt: "維運管理banner圖片",
  },
  maintenance_management_content: {
    img: "/img/service-process.png",
    alt: "服務流程",
  },
};

Aos.init({
  offset: 100,
  delay: 50,
  once: true,
});

const MaintenanceManagement = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="banner">
        <img src={imgHandler(data.banner.img)} alt={data.banner.alt} />
      </div>

      <div className="maintenance-management-content">
        <div className="contentWrap">
          <div className="subTitle" data-aos="fade-up" data-aos-duraction="500">
            <h2 id={"O&M"}>{t("維運管理")}</h2>
            <p>
              {t(
                "儲能設備在建置完成運轉後才是挑戰的開始。除了電池自然老化，外部環境的粉塵、鹽害等亦會造成儲能系統無法維持高效率的調度，嚴重影響用電穩定及安全。為提升設備的壽命及安全性，建置前的規畫及運轉後維運管理同等重要。"
              )}
            </p>
            <p>
              {t(
                "明曜的儲能設備可搭配智能維運監測系統，在運作過程有任何問題發生時，可於第一時間由網路登入確認系統狀態與Log歷史資料，協助解決異常問題，維運範圍涵蓋水冷系統、消防系統及電池櫃。"
              )}
            </p>
          </div>

          <img
            src={imgHandler(data.maintenance_management_content.img)}
            alt={data.maintenance_management_content.alt}
            data-aos="fade-up"
            data-aos-duraction="500"
          />
        </div>
      </div>
    </Layout>
  );
};

export default MaintenanceManagement;
