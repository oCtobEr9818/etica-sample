import { imgHandler } from "../Components/imgHandler";

const Product2 = () => {
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
    <div className="container">
      <div className="banner">
        <img
          src={imgHandler(data.product_img.image)}
          alt={data.product_img.alt}
        />
      </div>

      {/* 水冷高壓儲能櫃 */}
      <div className="product2-content">
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
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>電壓</th>
              <th>瓦數</th>
              <th>重量</th>
              <th>尺寸</th>
              <th>供電需求</th>
            </tr>
            <tr>
              <td>48 V</td>
              <td>9.6 kWh</td>
              <td>120 kg</td>
              <td>676mm＊565mm＊1011mm L*W*H</td>
              <td>
                Single phase 3-wires
                <br />
                output 110 / 220 VAC
                <br />
                6KW Hybrid PV inverter
              </td>
            </tr>
          </thead>
        </table>
      </div>

      {/* 家用儲能櫃 & 太陽能轉變器 */}
      <div className="product2-content">
        <div className="contentWrap">
          <div className="subtitle">
            <h2 id="house">家用儲能櫃 & 太陽能轉變器</h2>
            <ul>
              <li>EV 快充專用儲能櫃</li>
            </ul>
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>

          <img
            src={imgHandler(data.product2_content.house.img)}
            alt={data.product2_content.house.alt}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>電壓</th>
              <th>容量</th>
              <th>瓦數</th>
              <th>工作電流</th>
              <th>尺寸</th>
            </tr>
            <tr>
              <td>48V</td>
              <td>192Ah</td>
              <td>9.2kWh</td>
              <td>200~250 A</td>
              <td>1100mm＊1332mm＊1585mm L*W*H</td>
            </tr>
          </thead>
        </table>
      </div>

      {/* 壁掛式儲能箱 */}
      <div className="product2-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.wallmounted.img)}
            alt={data.product2_content.wallmounted.alt}
          />
          <div className="subtitle">
            <h2 id="wallmounted">壁掛式儲能箱</h2>
            <ul>
              <li>內建 OTA 軟韌體讀取功能</li>
            </ul>
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>電壓</th>
              <th>瓦數</th>
              <th>尺寸</th>
              <th>重量</th>
              <th>供電需求</th>
            </tr>
            <tr>
              <td>48 V</td>
              <td>9.2 kWh</td>
              <td>250mm＊750mm＊1400mm L*W*H</td>
              <td>100 kg</td>
              <td>
                Single phase 3-wires
                <br />
                output 110 / 220 VAC
                <br />
                6KW Hybrid PV inverter
              </td>
            </tr>
          </thead>
        </table>
      </div>

      {/* 集裝箱 */}
      <div className="product2-content">
        <div className="contentWrap">
          <div className="subtitle">
            <h2 id="energyStorageBox">集裝箱</h2>
            <ul>
              <li>Bank：Including 20 Packs</li>
              <li>40呎：Including 16 Banks</li>
              <li>750~1080 V / 3 MWh</li>
            </ul>
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>
          <img
            src={imgHandler(data.product2_content.energyStorageBox.img)}
            alt={data.product2_content.energyStorageBox.alt}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>電壓</th>
              <th>容量</th>
              <th>瓦數</th>
              <th>工作電流</th>
            </tr>
            <tr>
              <td>48V</td>
              <td>192Ah</td>
              <td>9.2kWh</td>
              <td>3200A</td>
            </tr>
          </thead>
        </table>
      </div>

      {/* Etica-C */}
      <div className="product2-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product2_content.etica_c.img)}
            alt={data.product2_content.etica_c.alt}
          />
          <div className="subtitle">
            <h2 id="Etica-C">Etica-C</h2>
            <ul>
              <li>使用20尺貨櫃</li>
              <li>一體化設計，單櫃3.72MWh</li>
              <li>適用於較大型案場</li>
              <li>獨立主動式消防系統</li>
            </ul>
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>系統配置</th>
              <th>裝機容量</th>
              <th>額定功率</th>
              <th>額定電流</th>
              <th>標準電壓</th>
            </tr>
            <tr>
              <td>416S1P * 10 機架 (最大)</td>
              <td>3.72 MWh</td>
              <td>3.72 MWh(1.0C)</td>
              <td>2800 A (最大)</td>
              <td>1331.2 V (電池 = 3.2 V)</td>
            </tr>
          </thead>
        </table>
      </div>

      {/* Etica-O */}
      <div className="product2-content">
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
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>
          <img
            src={imgHandler(data.product2_content.etica_o.img)}
            alt={data.product2_content.etica_o.alt}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>電壓</th>
              <th>輸出功率</th>
              <th>尺寸</th>
              <th>重量</th>
            </tr>
            <tr>
              <td>
                1164.8 ~ 1497.6 VCD
                <br />
                電芯電壓範圍2.8 ~ 3.6 V
              </td>
              <td>372 kWh</td>
              <td>2203mm * 1330mm * 1560mm L*W*H</td>
              <td>3550 kg</td>
            </tr>
          </thead>
        </table>
      </div>

      {/* Etica-R1 */}
      <div className="product2-content">
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
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>電壓</th>
              <th>電池能量</th>
              <th>輸出功率</th>
              <th>尺寸</th>
              <th>重量</th>
            </tr>
            <tr>
              <td>51.2 V</td>
              <td>5.12 KW * 2 = 10.24 KW</td>
              <td>5 KW (0.5 C)</td>
              <td>650mm * 268mm * 1568mm L*W*H</td>
              <td>180 Kg</td>
            </tr>
          </thead>
        </table>
      </div>

      {/* Etica-R3 */}
      <div className="product2-content">
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
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>
          <img
            src={imgHandler(data.product2_content.etica_r3.img)}
            alt={data.product2_content.etica_r3.alt}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>電壓</th>
              <th>功率</th>
              <th>尺寸</th>
              <th>重量</th>
            </tr>
            <tr>
              <td>51.2 V (25°C)</td>
              <td>5.12 kWh</td>
              <td>444mm * 465mm * 132mm L*W*H</td>
              <td>48 kg</td>
            </tr>
          </thead>
        </table>
      </div>

      {/* Etica-P */}
      <div className="product2-content">
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
            <br />
            <a href="https://google.com" rel="noreferrer">
              document
            </a>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>平均電壓</th>
              <th>電壓範圍</th>
              <th>功率</th>
            </tr>
            <tr>
              <td>806.4 V</td>
              <td>672 ~ 918.4 V</td>
              <td>96 kWh</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Product2;
