import { useTranslation } from "react-i18next";

import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  product_img: {
    image: "/img/sub-industryDevice.png",
    alt: "ESS Energy Storage System",
  },
  product4_content: {
    operating_area: {
      img: "/img/operatingArea.png",
      alt: "作業工廠",
    },
  },
};

const ProductIndustrialBattery = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="banner">
        <img
          src={imgHandler(data.product_img.image)}
          alt={data.product_img.alt}
        />
      </div>

      <div className="product-industrial-battery-content">
        <div className="contentWrap">
          <div className="subtitle">
            <h2 id="industry-device">{t("工控裝置")}</h2>

            <p>
              {t(
                "從行動式數據終端設備到手持POS機，堅固耐用的行動電子設備越來越受歡迎，這些設備需要功能強大、輕量化且堅固耐用的電源解決方案。明曜是業界最有經驗的工業用行動電子設備電池設計和製造商之一，可以運用日韓電池大廠的電池芯，針對每個客戶對於功能、電量計、通訊協議、場景控制、面板顯示等獨特需求客製化設計生產，為客戶帶來最合適的產品。"
              )}
            </p>
          </div>
          <img
            src={imgHandler(data.product4_content.operating_area.img)}
            alt={data.product4_content.operating_area.alt}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductIndustrialBattery;
