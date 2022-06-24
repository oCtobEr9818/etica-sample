import { imgHandler } from "../Components/imgHandler";

const Product3 = () => {
  const data = {
    product_img: {
      image: "/img/product.png",
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
    <div className="container">
      <div className="banner">
        <img
          src={imgHandler(data.product_img.image)}
          alt={data.product_img.alt}
        />
        <div className="slash">
          <h2>LEV產品資訊</h2>
        </div>
      </div>

      {/* 電動單車電池模組 */}
      <div className="product3-content">
        <img
          src={imgHandler(data.product3_content.bicycle.img)}
          alt={data.product3_content.bicycle.alt}
        />
        <div className="contentWrap">
          <h2 id="bicycle">電動單車電池模組</h2>
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

      {/* 電動推車電池模組 */}
      <div className="product3-content">
        <img
          src={imgHandler(data.product3_content.cart.img)}
          alt={data.product3_content.cart.alt}
        />

        <div className="contentWrap">
          <h2 id="cart">電動推車電池模組</h2>
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
    </div>
  );
};

export default Product3;
