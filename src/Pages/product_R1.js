import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const datas = [
  {
    id: "Etica-R11",
    img: "/img/ess/r1-1.png",
    alt: "Etica-R1展覽網頁圖片1",
  },
  {
    id: "Etica-R12",
    img: "/img/ess/r1-2.png",
    alt: "Etica-R1展覽網頁圖片2",
  },
  {
    id: "Etica-R13",
    img: "/img/ess/r1-3.png",
    alt: "Etica-R1展覽網頁圖片3",
  },
  {
    id: "Etica-R14",
    img: "/img/ess/r1-4.png",
    alt: "Etica-R1展覽網頁圖片4",
  },
];

const ProductR1 = () => {
  return (
    <Layout>
      <div className="banner">
        <img
          src={imgHandler("/img/sub-product.png")}
          alt="ESS Energy Storage System"
        />
      </div>

      <div className="product-R1">
        {datas.map((data) => (
          <img id={data.id} src={imgHandler(data.img)} alt={data.alt} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductR1;
