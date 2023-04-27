import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const ProductEbike = () => {
  const data = {
    product_img: {
      image: "/img/sub-product.png",
      alt: "ESS Energy Storage System",
    },
    product3_content: {
      bicycle: {
        img: "/img/bicycle.png",
        alt: "電動單車電池模組",
      },
      cart: {
        img: "/img/cart.png",
        alt: "電動推車電池模組",
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

      {/* 電動單車電池模組 */}
      <div className="product-ebike-content">
        <img
          src={imgHandler(data.product3_content.bicycle.img)}
          alt={data.product3_content.bicycle.alt}
        />
        <h2 id="bicycle">電動單車電池模組</h2>
        <div className="contentWrap">
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>

      {/* 電動推車電池模組 */}
      <div className="product-ebike-content">
        <img
          src={imgHandler(data.product3_content.cart.img)}
          alt={data.product3_content.cart.alt}
        />
        <h2 id="cart">電動推車電池模組</h2>

        <div className="contentWrap">
          <table>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ProductEbike;
