import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  product_img: {
    img: "/img/ebike-banner.png",
    alt: "ESS Energy Storage System",
  },
  product3_content: {
    bicycle: {
      img: "/img/bicycle.png",
      alt: "電動單車電池模組",
    },
    cart: {
      img: "/img/cart.png",
      alt: "電動推車電池模組",
    },
  },
};

Aos.init({
  offset: 100,
  delay: 50,
  once: true,
});

const ProductEbike = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="banner">
        <img
          src={imgHandler(data.product_img.img)}
          alt={data.product_img.alt}
        />
      </div>

      {/* 電動單車電池模組 */}
      <div className="product-ebike-content">
        <div className="subTitle" data-aos="fade-up" data-aos-duraction="500">
          <h2 id="bicycle">{t("電動單車電池模組")}</h2>
          <p>
            {t(
              "輕型電動載具種類繁多，其中電動自行車的全球市場在歐洲人熱衷戶外運動的風潮中蓬勃發展，台灣廠商在供應鏈中扮演舉足輕重的角色。與代步車、電動輪椅等不同，電動自行車設計者傾向將電池置於車架內，使外型更接近專業自行車，但也造成避震、重心位置等零組件設計問題，電池續航力也是使用者關心的重要性能。"
            )}
          </p>
          <p>
            {t(
              "明曜的EV電池專為輕型電動載具而設計，採用超強合金和世界一流的先進技術，使電池壽命更長，適用於電動摩托車、自行車、代步車、電動輪椅、高爾夫球車等。"
            )}
          </p>
        </div>

        <img
          src={imgHandler(data.product3_content.bicycle.img)}
          alt={data.product3_content.bicycle.alt}
          data-aos="fade-up"
          data-aos-duraction="500"
        />

        <div className="contentWrap">
          <table>
            <tbody>
              <tr>
                <th>{t("規格 \\ 型號")}</th>
                <th>Down Tube(ETI)</th>
                <th>In-Frame(EEL- IE mini)</th>
                <th>Rear Rack(RK-4C)</th>
              </tr>
              <tr>
                <th>{t("電壓")}</th>
                <td>36 V</td>
                <td>36 V</td>
                <td>36 V</td>
              </tr>
              <tr>
                <th>{t("電容")}</th>
                <td>11.6 Ah / 14 Ah</td>
                <td>11.6 Ah / 14 Ah</td>
                <td>11.6 Ah / 14 Ah</td>
              </tr>
              <tr>
                <th>{t("最大電流")}</th>
                <td>22 A / 28 A</td>
                <td>22 A / 28 A</td>
                <td>22 A / 28 A</td>
              </tr>
              <tr>
                <th>{t("尺寸")}</th>
                <td>398mm * 127mm * 93.5mm L*W*H</td>
                <td>430mm * 64mm * 74mm L*W*H</td>
                <td>407mm * 148mm * 76mm L*W*H</td>
              </tr>
              <tr>
                <th>{t("介面卡")}</th>
                <td>UART or CANBUS</td>
                <td>UART or CANBUS</td>
                <td>UART or CANBUS</td>
              </tr>
              <tr>
                <th>{t("保護機制")}</th>
                <td>OVP/SCP/OTP/UTP/UVP/OCP</td>
                <td>OVP/SCP/OTP/UTP/UVP/OCP</td>
                <td>OVP/SCP/OTP/UTP/UVP/OCP</td>
              </tr>
              <tr>
                <th>{t("更新")}</th>
                <td>Bootloader / *IOT</td>
                <td>Bootloader / *IOT</td>
                <td>Bootloader / *IOT</td>
              </tr>
              <tr>
                <th>{t("認證")}</th>
                <td>UN38.3/CE/FCC/*EN 13849-1</td>
                <td>UN38.3/CE/FCC/*EN 13849-1</td>
                <td>UN38.3/CE/FCC/*EN 13849-1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ProductEbike;
