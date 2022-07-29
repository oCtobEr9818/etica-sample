import { HashLink as Link } from "react-router-hash-link";
import ContentTitle from "../Components/content-title";
import { imgHandler } from "../Components/imgHandler";
import { v4 } from "uuid";

const Product = () => {
  const data = {
    product_img: {
      image: "/img/product.png",
      alt: "ESS Energy Storage System",
    },
    industrialBattery: {
      title: "工控電池",
      image: [
        {
          img: "/img/1S1P.jpg",
          alt: "1S1P",
          url: "/product4#1S1P",
        },
      ],
    },
    eBikeLEV: {
      title: "e-bike.LEV",
      image: [
        {
          img: "/img/bicycle.png",
          alt: "腳踏車",
          url: "/product3#bicycle",
        },
        {
          img: "/img/cart.png",
          alt: "推車",
          url: "/product3#cart",
        },
      ],
      bgImage: {
        img: "/img/EV.jpg",
        alt: "EV-bg",
      },
    },
    energyStorageBattery: {
      title: "ESS儲能電池",
      image: [
        {
          img: "/img/ET48 Hybrid.png",
          alt: "水冷高壓儲能櫃",
          url: "/product2#ET48",
        },
        {
          img: "/img/indoor.png",
          alt: "家用儲能櫃 & 太陽能轉變器",
          url: "/product2#house",
        },
        {
          img: "/img/wallmounted.png",
          alt: "壁掛式儲能箱",
          url: "/product2#wallmounted",
        },
        {
          img: "/img/energyStorageBox2.png",
          alt: "集裝箱",
          url: "/product2#energyStorageBox",
        },
      ],
      bgImage: {
        img: "/img/3-53405622.jpg",
        alt: "ESS-bg",
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
          <h2>產品資訊</h2>
        </div>
      </div>

      {/* ESS儲能電池 */}
      <ContentTitle title={data.energyStorageBattery.title} />
      <div className="product-content">
        <div className="imgWrap">
          {data.energyStorageBattery.image.map((item) => (
            <Link to={item.url}>
              <img src={imgHandler(item.img)} alt={item.alt} key={v4} />
            </Link>
          ))}
        </div>
        <div className="right-title">
          <h2>ESS</h2>
          <div className="title-bg">
            <img
              src={imgHandler(data.energyStorageBattery.bgImage.img)}
              alt={data.energyStorageBattery.bgImage.alt}
            />
          </div>
        </div>
      </div>

      {/* e-bike */}
      <ContentTitle title={data.eBikeLEV.title} />
      <div className="product-content">
        <div className="imgWrap">
          {data.eBikeLEV.image.map((item) => (
            <Link to={item.url}>
              <img src={imgHandler(item.img)} alt={item.alt} key={v4} />
            </Link>
          ))}
        </div>
        <div className="right-title">
          <h2>LEV</h2>
          <div className="title-bg">
            <img
              src={imgHandler(data.eBikeLEV.bgImage.img)}
              alt={data.eBikeLEV.bgImage.alt}
            />
          </div>
        </div>
      </div>

      {/* 工控電池 */}
      <ContentTitle title={data.industrialBattery.title} />
      <div className="product-content">
        <div className="imgWrap">
          {data.industrialBattery.image.map((item) => (
            <Link to={item.url}>
              <img src={imgHandler(item.img)} alt={item.alt} key={v4} />
            </Link>
          ))}
        </div>
        <div className="right-title">
          <h2>工控電池</h2>
          <div className="title-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
