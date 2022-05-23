import Content from "../Components/content";

const Product = () => {
  const data = {
    product_img: {
      image: process.env.PUBLIC_URL + "/img/product.png",
      alt: "ESS Energy Storage System",
    },
    industrialBattery: {
      title: "工控電池",
      content: "",
      image: process.env.PUBLIC_URL + "/img/hexegon.png",
      alt: "手持式，行動電話，醫療",
    },
    eBikeLEV: {
      title: "e-bile.LEV",
      content: "",
    },
    energyStorageBattery: {
      title: "ESS儲能電池",
      content: "",
    },
  };

  return (
    <div className="product">
      <div className="container">
        <img src={data.product_img.image} alt={data.product_img.alt} />
        <div className="slash">
          <h2>產品資訊</h2>
        </div>
      </div>

      <Content title={data.industrialBattery.title} />
      <img
        className="product-img"
        src={data.industrialBattery.image}
        alt={data.industrialBattery.alt}
      />
      <Content title={data.eBikeLEV.title} />
      <Content title={data.energyStorageBattery.title} />
    </div>
  );
};

export default Product;
