import { imgHandler } from "../Components/imgHandler";

const Product2 = () => {
  const data = {
    product_img: {
      image: "/img/product.png",
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
    },
  };
  return (
    <div className="container">
      <div className="banner">
        <img
          src={imgHandler(data.product_img.image)}
          alt={data.product_img.alt}
        />
        <div className="slash">
          <h2>ESS產品資訊</h2>
        </div>
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
              <td>1011*676*565 mm</td>
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
              <td>1100*1332*1585 mm</td>
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
              <td>1400*750*250 mm</td>
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
    </div>
  );
};

export default Product2;
