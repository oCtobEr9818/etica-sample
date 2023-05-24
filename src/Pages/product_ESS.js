import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  product_img: {
    image: "/img/sub-product.png",
    alt: "ESS Energy Storage System",
  },
  product2_content: {
    etica_c: {
      img: "/img/etica-c.png",
      alt: "etica-c",
    },
    etica_o: {
      img: "/img/etica-o.png",
      alt: "etica-o",
    },
    etica_r1: {
      img: "/img/etica-r1.png",
      alt: "etica-r1",
    },
    etica_r3: {
      img: "/img/etica-r3.png",
      alt: "etica-r3",
    },
    water: {
      img: "/img/etica-r4.png",
      alt: "etica-r4",
    },
  },
};

const ProductESS = () => {
  return (
    <Layout>
      <div className="banner">
        <img
          src={imgHandler(data.product_img.image)}
          alt={data.product_img.alt}
        />
      </div>

      {/* Etica-C */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.etica_c.img)}
            alt={data.product2_content.etica_c.alt}
          />

          <div className="subtitle">
            <h2 id="Etica-C">Etica-C</h2>
            <ul>
              <li>20呎貨櫃儲能系統</li>
              <li>一體化設計，單櫃3.72MWh</li>
              <li>獨立主動式消防系統</li>
              <li>適用於D-reg、E-dreg、用電大戶表後儲能系統等</li>
            </ul>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <th>項目</th>
              <th>規格</th>
            </tr>
            <tr>
              <th>化學成分</th>
              <td>LiFePO4</td>
            </tr>
            <tr>
              <th>電池櫃組成</th>
              <td>416S1P x 10 Racks (max)</td>
            </tr>
            <tr>
              <th>輸出功率</th>
              <td>3.72MWh</td>
            </tr>
            <tr>
              <th>額定功率</th>
              <td>3.72MW (1.0C)</td>
            </tr>
            <tr>
              <th>最大電流</th>
              <td>2800A (Maximum)</td>
            </tr>
            <tr>
              <th>電池運作溫度</th>
              <td>-20~45℃</td>
            </tr>
            <tr>
              <th>額定電壓</th>
              <td>1331.2V (Cell = 3.2V)</td>
            </tr>
            <tr>
              <th>電壓</th>
              <td>1164.8~1497.6V (電芯電壓範圍2.8V~3.6V)</td>
            </tr>
            <tr>
              <th>通訊介面</th>
              <td>Modbus TCP</td>
            </tr>
            <tr>
              <th>HMI</th>
              <td>Linux interface, IPC, PLC 介面整合</td>
            </tr>
            <tr>
              <th>電芯認證</th>
              <td>UN38.3, UL1973, UL9540A, IEC 62619</td>
            </tr>
            <tr>
              <th>電池櫃認證</th>
              <td>UL1973, UL9540, IEC 62619 (Under Process)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Etica-O */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <div className="subtitle">
            <h2 id="Etica-O">Etica-O</h2>
            <ul>
              <li>單機體小，組合式設計</li>
              <li>輸出功率配置獨立範圍 1.1MW ~ 3.7MW</li>
              <li>主動式消防系統</li>
              <li>
                適用於飯店、商用備用電源、汽車快充站、中小型不可斷電的儀器或設備
              </li>
            </ul>
          </div>
          <img
            src={imgHandler(data.product2_content.etica_o.img)}
            alt={data.product2_content.etica_o.alt}
          />
        </div>

        <table>
          <tbody>
            <tr>
              <th>項目</th>
              <th>規格</th>
            </tr>
            <tr>
              <th>電池模組</th>
              <td>CATL 280Ah 52S1P Battery pack</td>
            </tr>
            <tr>
              <th>電池櫃組成</th>
              <td>
                8串電池 {"&"} 控制器 {"&"} 水冷機 {"&"} Novec 1230消防系統
              </td>
            </tr>
            <tr>
              <th>輸出功率</th>
              <td>372kWh</td>
            </tr>
            <tr>
              <th>電壓</th>
              <td>1164.8~1497.6 VCD (電芯電壓範圍2.8~3.6 V)</td>
            </tr>
            <tr>
              <th>充電溫度範圍</th>
              <td>0~50℃</td>
            </tr>
            <tr>
              <th>放電溫度範圍</th>
              <td>-20~55℃</td>
            </tr>
            <tr>
              <th>尺寸</th>
              <td>1560mm * 1330mm * 2203mm L*W*H </td>
            </tr>
            <tr>
              <th>重量</th>
              <td>3550kg</td>
            </tr>
            <tr>
              <th>通訊介面</th>
              <td>CAN Bus</td>
            </tr>
            <tr>
              <th>HMI</th>
              <td>Linux 系統, IPC, PLC介面整合</td>
            </tr>
            <tr>
              <th>電芯認證</th>
              <td>UN38.3, UL1973, UL9540A, IEC 62619</td>
            </tr>
            <tr>
              <th>電池櫃認證</th>
              <td>UL1973, UL9540, IEC 62619 (Under Process)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Etica-R1 */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.etica_r1.img)}
            alt={data.product2_content.etica_r1.alt}
          />
          <div className="subtitle">
            <h2 id="Etica-R1">Etica-R1</h2>
            <ul>
              <li>家用儲能系統</li>
              <li>一體化設計</li>
              <li>Hybrid PV inverter 6kW</li>
              <li>適用於家庭、電力不足或不穩定的郊區，不可斷電的儀器或設備</li>
            </ul>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <th>項目</th>
              <th>規格</th>
            </tr>
            <tr>
              <th>電壓</th>
              <td>51.2V</td>
            </tr>
            <tr>
              <th>容量</th>
              <td>5.12kW x2 = 10.24kW</td>
            </tr>
            <tr>
              <th>輸出功率</th>
              <td>5kw (0.5C)</td>
            </tr>
            <tr>
              <th>通訊介面</th>
              <td>RS 485 Battery / RS232</td>
            </tr>
            <tr>
              <th>電池組成</th>
              <td>(8s1p X 2) x2</td>
            </tr>
            <tr>
              <th>重量</th>
              <td>180 kg</td>
            </tr>
            <tr>
              <th>尺寸</th>
              <td>596mm * 351mm * 1132mm L*W*H</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Etica-R3 */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <div className="subtitle">
            <h2 id="Etica-R3">Etica-R3</h2>
            <ul>
              <li>家用儲能系統</li>
              <li>一體化設計</li>
              <li>Hybrid PV inverter 8kW</li>
              <li>適用於家庭、電力不足或不穩定的郊區，不可斷電的儀器或設備</li>
            </ul>
          </div>
          <img
            src={imgHandler(data.product2_content.etica_r3.img)}
            alt={data.product2_content.etica_r3.alt}
          />
        </div>
        <table>
          <tbody>
            <tr>
              <th>項目</th>
              <th>規格</th>
            </tr>
            <tr>
              <th>電壓</th>
              <td>51.2 V (25°C)</td>
            </tr>
            <tr>
              <th>功率</th>
              <td>5.12 kWh</td>
            </tr>
            <tr>
              <th>標準充電/放電電流</th>
              <td>50 A</td>
            </tr>
            <tr>
              <th>最大充電/放電持續電流</th>
              <td>100 A</td>
            </tr>
            <tr>
              <th>電池自放電率</th>
              <td>≤3% / 月 (25 ℃，50% SOC)</td>
            </tr>
            <tr>
              <th>迴圈壽命</th>
              <td>
                ≥5, 200 次 (0.5C / 0.5C，70% DOD)
                <br />
                ≥3, 500 次 (0.5C / 0.5C，80%DOD)
              </td>
            </tr>
            <tr>
              <th>出場荷電狀態</th>
              <td>30% ~ 40%</td>
            </tr>
            <tr>
              <th>內壓等級</th>
              <td>1500 V DC</td>
            </tr>
            <tr>
              <th>絕緣電阻</th>
              <td>{">"}100 MΩ</td>
            </tr>
            <tr>
              <th>IP等級</th>
              <td>IP20</td>
            </tr>
            <tr>
              <th>海拔高度</th>
              <td>{"<"}2000 m</td>
            </tr>
            <tr>
              <th>工作溫度</th>
              <td>
                0℃~55℃ (充電)，-20℃~55℃ (放電)
                <br />
                -10℃~30℃
                <br />
                5%~95%，RH
              </td>
            </tr>
            <tr>
              <th>重量</th>
              <td>48 kg</td>
            </tr>
            <tr>
              <th>尺寸</th>
              <td>444mm * 465mm * 132mm L*W*H</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Etica-R4 */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.water.img)}
            alt={data.product2_content.water.alt}
          />
          <div className="subtitle">
            <h2 id="Etica-R4">Etica-R4</h2>
            <ul>
              <li>工業用儲能系統</li>
              <li>一體化設計</li>
              <li>Hybrid PV inverter 6kW</li>
              <li>可以依需求增加電池組數量加長使用時間</li>
            </ul>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <th>項目</th>
              <th>規格</th>
            </tr>
            <tr>
              <th>電壓</th>
              <td>48 V</td>
            </tr>
            <tr>
              <th>標準充電電流</th>
              <td>50 A</td>
            </tr>
            <tr>
              <th>瓦數</th>
              <td>9.6kWh</td>
            </tr>
            <tr>
              <th>IP等級</th>
              <td>IP22</td>
            </tr>
            <tr>
              <th>工作溫度</th>
              <td>-10~45℃</td>
            </tr>
            <tr>
              <th>重量</th>
              <td>80 kg</td>
            </tr>
            <tr>
              <th>尺寸</th>
              <td>676mm＊565mm＊1011mm L*W*H</td>
            </tr>
            <tr>
              <th>供電需求</th>
              <td>
                Single phase 3-wires
                <br />
                output 110 / 220 VAC
                <br />
                6KW Hybrid PV inverter
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ProductESS;
