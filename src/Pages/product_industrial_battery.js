import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const ProductIndustrialBattery = () => {
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
    <Layout>
      <div className="banner">
        <img
          src={imgHandler(data.product_img.image)}
          alt={data.product_img.alt}
        />
      </div>

      <div className="product-industrial-battery-content">
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
          <tbody>
            <tr>
              <th>項目</th>
              <th>規格</th>
            </tr>
            <tr>
              <th>電壓</th>
              <td>3.8 V</td>
            </tr>
            <tr>
              <th>電壓範圍</th>
              <td>3.8~2.8 V</td>
            </tr>
            <tr>
              <th>放電電流</th>
              <td>1.6 A</td>
            </tr>
            <tr>
              <th>最大放電電流</th>
              <td>3 A</td>
            </tr>
            <tr>
              <th>充電電流</th>
              <td>1.6 A</td>
            </tr>
            <tr>
              <th>充電工作溫度</th>
              <td>0 ~ 45 °C</td>
            </tr>
            <tr>
              <th>放電工作溫度</th>
              <td>-20 ~ 60 °C</td>
            </tr>
            <tr>
              <th>通訊介面</th>
              <td>I2C</td>
            </tr>
            <tr>
              <th>尺寸</th>
              <td>89mm * 69.3mm * 28.9mm </td>
            </tr>
            <tr>
              <th>重量</th>
              <td>67 g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ProductIndustrialBattery;
