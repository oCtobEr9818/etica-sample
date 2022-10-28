import { imgHandler } from "../Components/imgHandler";

const Product4 = () => {
  const data = {
    product_img: {
      image: "/img/sub-product.png",
      alt: "ESS Energy Storage System",
    },
    product4_content: {
      AS1P: {
        img: "/img/1S1P.jpg",
        alt: "1S1P",
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

      <div className="product4-content">
        <div className="contentWrap">
          <img
            src={imgHandler(data.product4_content.AS1P.img)}
            alt={data.product4_content.AS1P.alt}
          />

          <div className="subtitle">
            <h2 id="1S1P">1S1P</h2>
            <ul>
              <li></li>
              <li></li>
            </ul>
            <br />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>電壓</th>
              <th>電壓範圍</th>
              <th>放電電流</th>
              <th>最大放電電流</th>
              <th>充電電流</th>
              <th>充電工作溫度</th>
              <th>放電工作溫度</th>
              <th>通訊</th>
              <th>尺寸</th>
              <th>重量</th>
            </tr>
            <tr>
              <td>3.8 V</td>
              <td>3.8~2.8 V</td>
              <td>1.6 A</td>
              <td>3 A</td>
              <td>1.6 A</td>
              <td>0~45 °C</td>
              <td>-20~60 °C</td>
              <td>I2C</td>
              <td>89*69.3*28.9 mm</td>
              <td>67 g</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Product4;
