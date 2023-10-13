// import { useTranslation } from "react-i18next";
// import Aos from "aos";
// import "aos/dist/aos.css";

// import { imgHandler } from "../Components/imgHandler";
// import { Layout } from "../Components/Layout";

// const data = {
//   product_img: {
//     img: "/img/sub-product.png",
//     alt: "ESS Energy Storage System",
//   },
//   product2_content: {
//     etica_c: {
//       img: "/img/etica-c.png",
//       alt: "etica+c",
//     },
//     etica_o: {
//       img: "/img/etica-o.png",
//       alt: "Etica+o",
//     },
//     etica_r1: {
//       img: "/img/etica-r1.png",
//       alt: "Etica+R1",
//     },
//     etica_r2: {
//       img: "/img/etica-r2.png",
//       alt: "Etica+R2",
//     },
//     etica_r3: {
//       img: "/img/etica-r3.png",
//       alt: "Etica+R3",
//     },
//   },
// };

// Aos.init({
//   offset: 100,
//   delay: 50,
//   once: true,
// });

const ProductESS = () => {
  // const { t } = useTranslation();

  return (
    <>
      {/* <div className="banner">
        <img
          src={imgHandler(data.product_img.img)}
          alt={data.product_img.alt}
        />
      </div> */}

      {/* Etica+C */}
      {/* <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.etica_c.img)}
            alt={data.product2_content.etica_c.alt}
            data-aos="fade-right"
            data-aos-duraction="500"
          />

          <div
            className="subTitle"
            data-aos="fade-left"
            data-aos-duraction="500"
          >
            <h2 id="Etica+C">
              Etica <sup>+</sup>C
            </h2>
            <ul>
              <li>{t("20呎貨櫃儲能系統")}</li>
              <li>{t("一體化設計，單櫃3.72MWh")}</li>
              <li>{t("獨立主動式消防系統")}</li>
              <li>{t("適用於D-reg、E-dreg、用電大戶表後儲能系統等")}</li>
            </ul>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <th>{t("項目")}</th>
              <th>{t("規格")}</th>
            </tr>
            <tr>
              <th>{t("化學成分")}</th>
              <td>LiFePO4</td>
            </tr>
            <tr>
              <th>{t("電池櫃組成")}</th>
              <td>416S1P x 10 Racks (max)</td>
            </tr>
            <tr>
              <th>{t("輸出功率")}</th>
              <td>3.72MWh</td>
            </tr>
            <tr>
              <th>{t("額定功率")}</th>
              <td>3.72MW (1.0C)</td>
            </tr>
            <tr>
              <th>{t("最大電流")}</th>
              <td>2800A (Maximum)</td>
            </tr>
            <tr>
              <th>{t("電池運作溫度")}</th>
              <td>-20~45℃</td>
            </tr>
            <tr>
              <th>{t("額定電壓")}</th>
              <td>1331.2V (Cell = 3.2V)</td>
            </tr>
            <tr>
              <th>{t("電池電壓")}</th>
              <td>1164.8~1497.6V (cell 2.8V~3.6V)</td>
            </tr>
            <tr>
              <th>{t("通訊介面")}</th>
              <td>Modbus TCP</td>
            </tr>
            <tr>
              <th>{t("HMI")}</th>
              <td>Linux system, IPC, PLC interface integration</td>
            </tr>
            <tr>
              <th>{t("電芯認證")}</th>
              <td>UN38.3, UL1973, UL9540A, IEC 62619</td>
            </tr>
            <tr>
              <th>{t("電池櫃認證")}</th>
              <td>UL1973, UL9540, IEC 62619 (Under Process)</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Etica+O */}
      {/* <div className="product-ESS-content">
        <div className="contentWrap">
          <div
            className="subTitle"
            data-aos="fade-right"
            data-aos-duraction="500"
          >
            <h2 id="Etica+O">
              Etica <sup>+</sup>O
            </h2>
            <ul>
              <li>{t("單機體小，組合式設計")}</li>
              <li>{t("輸出功率配置獨立範圍 1.1MW ~ 3.7MW")}</li>
              <li>{t("主動式消防系統")}</li>
              <li>
                {t(
                  "適用於飯店、商用備用電源、汽車快充站、中小型不可斷電的儀器或設備"
                )}
              </li>
            </ul>
          </div>
          <img
            src={imgHandler(data.product2_content.etica_o.img)}
            alt={data.product2_content.etica_o.alt}
            data-aos="fade-left"
            data-aos-duraction="500"
          />
        </div>

        <table>
          <tbody>
            <tr>
              <th>{t("項目")}</th>
              <th>{t("規格")}</th>
            </tr>
            <tr>
              <th>{t("電池模組")}</th>
              <td>CATL 280Ah 52S1P Battery pack</td>
            </tr>
            <tr>
              <th>{t("電池櫃組成")}</th>
              <td>{t("8串電池 & 控制器 & 水冷機 & Novec 1230消防系統")}</td>
            </tr>
            <tr>
              <th>{t("輸出功率")}</th>
              <td>372kWh</td>
            </tr>
            <tr>
              <th>{t("電池電壓")}</th>
              <td>1164.8~1497.6 VCD (cell 2.8~3.6 V)</td>
            </tr>
            <tr>
              <th>{t("充電溫度範圍")}</th>
              <td>0~50℃</td>
            </tr>
            <tr>
              <th>{t("放電溫度範圍")}</th>
              <td>-20~55℃</td>
            </tr>
            <tr>
              <th>{t("尺寸")}</th>
              <td>1560mm * 1330mm * 2203mm L*W*H </td>
            </tr>
            <tr>
              <th>{t("重量")}</th>
              <td>3550kg</td>
            </tr>
            <tr>
              <th>{t("通訊介面")}</th>
              <td>CAN Bus</td>
            </tr>
            <tr>
              <th>{t("HMI")}</th>
              <td>Linux system, IPC, PLC interface integration</td>
            </tr>
            <tr>
              <th>{t("電芯認證")}</th>
              <td>UN38.3, UL1973, UL9540A, IEC 62619</td>
            </tr>
            <tr>
              <th>{t("電池櫃認證")}</th>
              <td>UL1973, UL9540, IEC 62619 (Under Process)</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Etica+R1 */}
      {/* <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.etica_r1.img)}
            alt={data.product2_content.etica_r1.alt}
            data-aos="fade-right"
            data-aos-duraction="500"
          />
          <div
            className="subTitle"
            data-aos="fade-left"
            data-aos-duraction="500"
          >
            <h2 id="Etica+R1">
              Etica <sup>+</sup>R1
            </h2>
            <ul>
              <li>{t("家用儲能系統")}</li>
              <li>{t("一體化設計")}</li>
              <li>{t("Hybrid PV inverter 6kW")}</li>
              <li>
                {t("適用於家庭、電力不足或不穩定的郊區，不可斷電的儀器或設備")}
              </li>
            </ul>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <th>{t("項目")}</th>
              <th>{t("規格")}</th>
            </tr>
            <tr>
              <th>{t("電池電壓")}</th>
              <td>51.2V</td>
            </tr>
            <tr>
              <th>{t("電池功率")}</th>
              <td>5.12kW x2 = 10.24kW</td>
            </tr>
            <tr>
              <th>{t("輸出功率")}</th>
              <td>5kw (0.5C)</td>
            </tr>
            <tr>
              <th>{t("通訊介面")}</th>
              <td>RS 485 Battery / RS232</td>
            </tr>
            <tr>
              <th>{t("電池組成")}</th>
              <td>(8s1p X 2) x2</td>
            </tr>
            <tr>
              <th>{t("重量")}</th>
              <td>180 kg</td>
            </tr>
            <tr>
              <th>{t("尺寸")}</th>
              <td>596mm * 351mm * 1132mm L*W*H</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Etica+R2 */}
      {/* <div className="product-ESS-content">
        <div className="contentWrap">
          <div
            className="subTitle"
            data-aos="fade-right"
            data-aos-duraction="500"
          >
            <h2 id="Etica+R2">
              Etica <sup>+</sup>R2
            </h2>
            <ul>
              <li>{t("家用儲能系統")}</li>
              <li>{t("一體化設計")}</li>
              <li>{t("Hybrid PV inverter 8kW")}</li>
              <li>
                {t("適用於家庭、電力不足或不穩定的郊區，不可斷電的儀器或設備")}
              </li>
            </ul>
          </div>
          <img
            src={imgHandler(data.product2_content.etica_r2.img)}
            alt={data.product2_content.etica_r2.alt}
            data-aos="fade-left"
            data-aos-duraction="500"
          />
        </div>
        <table>
          <tbody>
            <tr>
              <th>{t("項目")}</th>
              <th>{t("規格")}</th>
            </tr>
            <tr>
              <th>{t("電池電壓")}</th>
              <td>51.2 V (25°C)</td>
            </tr>
            <tr>
              <th>{t("電池功率")}</th>
              <td>18 kWh</td>
            </tr>
            <tr>
              <th>{t("標準充電/放電電流")}</th>
              <td>50 A</td>
            </tr>
            <tr>
              <th>{t("最大充電/放電持續電流")}</th>
              <td>100 A</td>
            </tr>
            <tr>
              <th>{t("電池自放電率")}</th>
              <td>≤3% / 月 (25 ℃，50% SOC)</td>
            </tr>
            <tr>
              <th>{t("出場荷電狀態")}</th>
              <td>30% ~ 40%</td>
            </tr>
            <tr>
              <th>{t("Inverter功率")}</th>
              <td>8 kW / 10 kVA</td>
            </tr>
            <tr>
              <th>{t("Inverter輸出")}</th>
              <td>110 V / 220 V AC</td>
            </tr>
            <tr>
              <th>{t("IP等級")}</th>
              <td>IP54</td>
            </tr>
            <tr>
              <th>{t("海拔高度")}</th>
              <td>{"<"}2000 m</td>
            </tr>
            <tr>
              <th>{t("工作溫度")}</th>
              <td>
                0℃~55℃ ({t("充電")})，-20℃~55℃ ({t("放電")})
                <br />
                -10℃~30℃
                <br />
                5%~95%，RH
              </td>
            </tr>
            <tr>
              <th>{t("重量")}</th>
              <td>300 kg</td>
            </tr>
            <tr>
              <th>{t("尺寸")}</th>
              <td>401mm * 750mm * 1510mm L*W*H</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Etica+R3 */}
      {/* <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.etica_r3.img)}
            alt={data.product2_content.etica_r3.alt}
            data-aos="fade-right"
            data-aos-duraction="500"
          />
          <div
            className="subTitle"
            data-aos="fade-left"
            data-aos-duraction="500"
          >
            <h2 id="Etica+R3">
              Etica <sup>+</sup>R3
            </h2>
            <ul>
              <li>{t("工業用儲能系統")}</li>
              <li>{t("一體化設計")}</li>
              <li>{t("Hybrid PV inverter 6kW")}</li>
              <li>{t("可以依需求增加電池組數量加長使用時間")}</li>
            </ul>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <th>{t("項目")}</th>
              <th>{t("規格")}</th>
            </tr>
            <tr>
              <th>{t("電池電壓")}</th>
              <td>48 V (25°C)</td>
            </tr>
            <tr>
              <th>{t("電池功率")}</th>
              <td>9.6 kWh</td>
            </tr>
            <tr>
              <th>{t("標準充電/放電電流")}</th>
              <td>50 A</td>
            </tr>
            <tr>
              <th>{t("最大充電/放電持續電流")}</th>
              <td>100 A</td>
            </tr>
            <tr>
              <th>{t("電池自放電率")}</th>
              <td>≤3% / 月 (25 ℃，50% SOC)</td>
            </tr>
            <tr>
              <th>{t("太陽能功率")}</th>
              <td>6 kW</td>
            </tr>
            <tr>
              <th>{t("Inverter功率")}</th>
              <td>5 kW</td>
            </tr>
            <tr>
              <th>{t("Inverter輸出")}</th>
              <td>110 V / 220 V AC</td>
            </tr>
            <tr>
              <th>{t("IP等級")}</th>
              <td>IP20</td>
            </tr>
            <tr>
              <th>{t("海拔高度")}</th>
              <td>{"<"}2000 m</td>
            </tr>
            <tr>
              <th>{t("工作溫度")}</th>
              <td>
                0℃~55℃ ({t("充電")})，-20℃~55℃ ({t("放電")})
                <br />
                -10℃~30℃
                <br />
                5%~95%，RH
              </td>
            </tr>
            <tr>
              <th>{t("重量")}</th>
              <td>120 kg</td>
            </tr>
            <tr>
              <th>{t("尺寸")}</th>
              <td>676mm * 565mm * 749mm L*W*H</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* <div className="product-ESS-txt">
        <p>
          {t(
            "*本公司對此產品規格任何遺漏、錯誤陳述或非事實陳述（不論明示或暗示）不承擔任何責任，索取進一步資訊請洽業務。"
          )}
        </p>
        <p>{t("*產品圖片僅供參考，實際產品可能有所不同。")}</p>
      </div> */}

      <div style={{ height: "800px", position: "relative" }}>
        <iframe
          title="eticaIframe"
          id="eticaIframe"
          src="https://service47082.wixsite.com/etica-battery/blank"
          frameborder="0"
          width="100%"
          height="100%"
          style={{
            zIndex: "20",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default ProductESS;
