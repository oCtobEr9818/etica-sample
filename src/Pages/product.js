import { HashLink as Link } from "react-router-hash-link";
import ContentTitle from "../Components/content-title";
import { imgHandler } from "../Components/imgHandler";
import { v4 } from "uuid";

const Product = () => {
  const data = {
    product_img: {
      image: "/img/sub-product.png",
      alt: "ESS Energy Storage System, ETICA 儲能櫃",
    },
    industrialBattery: {
      title: "工控電池",
      image: [
        {
          img: "/img/1S1P.jpg",
          alt: "1S1P",
          url: "/product_industrial_battery#1S1P",
        },
      ],
    },
    eBikeLEV: {
      title: "e-bike.LEV",
      image: [
        {
          img: "/img/bicycle.png",
          alt: "腳踏車",
          url: "/product_ebike#bicycle",
        },
        {
          img: "/img/cart.png",
          alt: "推車",
          url: "/product_ebike#cart",
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
          url: "/product_ESS#ET48",
        },
        {
          img: "/img/indoor.png",
          alt: "家用儲能櫃 & 太陽能轉變器",
          url: "/product_ESS#house",
        },
        {
          img: "/img/wallmounted.png",
          alt: "壁掛式儲能箱",
          url: "/product_ESS#wallmounted",
        },
        {
          img: "/img/energyStorageBox2.png",
          alt: "集裝箱",
          url: "/product_ESS#energyStorageBox",
        },
        {
          img: "/img/etica-c.png",
          alt: "etica-c",
          url: "/product_ESS#Etica-C",
        },
        {
          img: "/img/etica-o.png",
          alt: "etica-o",
          url: "/product_ESS#Etica-O",
        },
        {
          img: "/img/etica-r1.png",
          alt: "etica-r1",
          url: "/product_ESS#Etica-R1",
        },
        {
          img: "/img/etica-r3.png",
          alt: "etica-r3",
          url: "/product_ESS#Etica-R3",
        },
        {
          img: "/img/etica-p.png",
          alt: "etica-p",
          url: "/product_ESS#Etica-P",
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
