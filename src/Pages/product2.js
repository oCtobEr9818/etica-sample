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
        <img
          src={imgHandler(data.product2_content.water.img)}
          alt={data.product2_content.water.alt}
        />

        <div className="contentWrap">
          <h2 id="ET48">水冷高壓儲能櫃</h2>
          <table>
            <thead>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      {/* 家用儲能櫃 & 太陽能轉變器 */}
      <div className="product2-content">
        <div className="contentWrap">
          <h2 id="house">家用儲能櫃 & 太陽能轉變器</h2>
          <table>
            <thead>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
            </thead>
          </table>
          <button>查看文件</button>
        </div>

        <img
          src={imgHandler(data.product2_content.house.img)}
          alt={data.product2_content.house.alt}
        />
      </div>

      {/* 壁掛式儲能箱 */}
      <div className="product2-content">
        <img
          src={imgHandler(data.product2_content.wallmounted.img)}
          alt={data.product2_content.wallmounted.alt}
        />

        <div className="contentWrap">
          <h2 id="wallmounted">壁掛式儲能箱</h2>
          <table>
            <thead>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
            </thead>
          </table>
          <button>查看文件</button>
        </div>
      </div>

      {/* 集裝箱 */}
      <div className="product2-content">
        <div className="contentWrap">
          <h2 id="energyStorageBox">集裝箱</h2>
          <table>
            <thead>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
            </thead>
          </table>
        </div>

        <img
          src={imgHandler(data.product2_content.energyStorageBox.img)}
          alt={data.product2_content.energyStorageBox.alt}
        />
      </div>
    </div>
  );
};

export default Product2;
