import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const ProductESS = () => {
  const data = {
    product_img: {
      image: "/img/sub-product.png",
      alt: "ESS Energy Storage System",
    },
    product2_content: {
      water: {
        img: "/img/ET48 Hybrid.png",
        alt: "水冷高壓儲能櫃",
      },
      house: {
        img: "/img/indoor.png",
        alt: "家用儲能櫃",
      },
      wallmounted: {
        img: "/img/wallmounted.png",
        alt: "壁掛式儲能櫃",
      },
      energyStorageBox: {
        img: "/img/energyStorageBox2.png",
        alt: "集裝箱",
      },
      etica_c: {
        img: "/img/etica-c.png",
        alt: "etica-c",
      },
      etica_c2: {
        img: "/img/etica-c2.png",
        alt: "etica-c2",
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
      etica_p: {
        img: "/img/etica-p.png",
        alt: "etica-p",
      },
    },
  };
  return (
    <Layout>
      <div className="banner">
        <img
          src={imgHandler(data.product_img.image)}
          alt={data.product_img.alt}
        />
      </div>

      {/* 水冷高壓儲能櫃 */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.water.img)}
            alt={data.product2_content.water.alt}
          />
          <div className="subtitle">
            <h2 id="ET48">水冷高壓儲能櫃</h2>
            <ul>
              <li>容量可依客戶需求擴充</li>
              <li>內建OTA軟韌體讀取功能</li>
              <li>電池模組包含防延燒專利設計(專利號：10940384260號)</li>
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

      {/* 集裝箱 */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <div className="subtitle">
            <h2 id="energyStorageBox">集裝箱</h2>
            <ul>
              <li>Bank：Including 20 Packs</li>
              <li>40呎：Including 16 Banks</li>
              <li>750~1080 V / 3 MWh</li>
            </ul>
          </div>
          <img
            src={imgHandler(data.product2_content.energyStorageBox.img)}
            alt={data.product2_content.energyStorageBox.alt}
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
              <td>48 V</td>
            </tr>
            <tr>
              <th>瓦數</th>
              <td>9.2 kWh</td>
            </tr>
            <tr>
              <th>容量</th>
              <td>192 Ah</td>
            </tr>
            <tr>
              <th>工作電流</th>
              <td>3200 A</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Etica-C */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.etica_c.img)}
            alt={data.product2_content.etica_c.alt}
          />
          <img
            src={imgHandler(data.product2_content.etica_c2.img)}
            alt={data.product2_content.etica_c2.alt}
          />

          <div className="subtitle">
            <h2 id="Etica-C">Etica-C</h2>
            <ul>
              <li>使用20尺貨櫃</li>
              <li>一體化設計，單櫃3.72MWh</li>
              <li>適用於較大型案場</li>
              <li>獨立主動式消防系統</li>
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
              <li>單機體小，2.28m(h)*1.3m(w)*1.3m(d)</li>
              <li>
                組合式設計，單櫃 372.7kWh
                <br />
                輸出功率配置獨立範圍 1.1MW ~ 3.7MW
              </li>
              <li>適用於不規則案場</li>
              <li>主動式消防系統</li>
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
              <li>適用於家用儲能</li>
              <li>當太陽能充足時，電力會優先提供給家庭使用</li>
              <li>當陰天、夜晚或停電時，電池的電力會轉換成交流電給家庭使用</li>
              <li>
                適用範圍：家庭、電力不足或不穩定的郊區，不可斷電的儀器或設備
              </li>
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
              <td>650mm * 268mm * 1568mm L*W*H</td>
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
              <li>適用於家用儲能</li>
              <li>當太陽能充足時，電力會優先提供給家庭使用</li>
              <li>當陰天、夜晚或停電時，電池的電力會轉換成交流電給家庭使用</li>
              <li>
                適用範圍：家庭、電力不足或不穩定的郊區，不可斷電的儀器或設備
              </li>
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

      {/* Etica-P */}
      <div className="product-ESS-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.etica_p.img)}
            alt={data.product2_content.etica_p.alt}
          />
          <div className="subtitle">
            <h2 id="Etica-P">Etica-P</h2>
            <ul>
              <li>
                「儲能配合充電樁整合」方案，提供最佳的容量方案
                <br />
                "PCS+電池+充電樁" 整合控制
              </li>
              <li>
                儲能系統依據預設之條件、整合及連動
                PCS、電池、充電樁之充/放電行為
              </li>
              <li>
                於「離峰時段」啟動儲能充電將電池充滿電力，預備於次日支援充電樁之用電
              </li>
              <li>
                於「尖峰時段」配合充電樁電動車充電時之用電、由儲能系統釋放電力，以抵銷用電之需量壓力；依此可以實現負載轉移之需求
              </li>
              <li>可與電力聚合商合作，參與台電公司電力輔助服務之競標</li>
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
              <th>電池模組</th>
              <td>16S1P</td>
            </tr>
            <tr>
              <th>平均電壓</th>
              <td>806.4 V</td>
            </tr>
            <tr>
              <th>電壓範圍</th>
              <td>672 ~ 918.4 V</td>
            </tr>
            <tr>
              <th>輸入/輸出充電電流</th>
              <td>最大28 A (0.25C)</td>
            </tr>
            <tr>
              <th>輸入/輸出放電電流</th>
              <td>最大60 A (0.5C)</td>
            </tr>
            <tr>
              <th>充電環境溫度</th>
              <td>10 ~ 42 °C (cell temperature)</td>
            </tr>
            <tr>
              <th>放電環境溫度</th>
              <td>-10 ~ 55 °C (cell temperature)</td>
            </tr>
            <tr>
              <th>環境濕度</th>
              <td>30 ~ 85 % (no condensation)</td>
            </tr>
            <tr>
              <th>功率</th>
              <td>96 kWh</td>
            </tr>
            <tr>
              <th>海拔高度</th>
              <td>{"<"}2000 m</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ProductESS;
