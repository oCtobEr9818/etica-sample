import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const datas = [
  {
    id: "Etica-C1",
    img: "/img/ess/c-1.png",
    alt: "Etica-C展覽網頁圖片1",
  },
  {
    id: "Etica-C2",
    img: "/img/ess/c-2.png",
    alt: "Etica-C展覽網頁圖片2",
  },
  {
    id: "Etica-C3",
    img: "/img/ess/c-3.png",
    alt: "Etica-C展覽網頁圖片3",
  },
  {
    id: "Etica-C4",
    img: "/img/ess/c-4.png",
    alt: "Etica-C展覽網頁圖片4",
  },
  {
    id: "Etica-C5",
    img: "/img/ess/c-5.png",
    alt: "Etica-C展覽網頁圖片5",
  },
  {
    id: "Etica-C6",
    img: "/img/ess/c-6.png",
    alt: "Etica-C展覽網頁圖片6",
  },
  {
    id: "Etica-C7",
    img: "/img/ess/c-7.png",
    alt: "Etica-C展覽網頁圖片7",
  },
  {
    id: "Etica-C8",
    img: "/img/ess/c-8.png",
    alt: "Etica-C展覽網頁圖片8",
  },
];

const ProductC = () => {
  return (
    <Layout>
      <div className="banner">
        <img
          src={imgHandler("/img/sub-product.png")}
          alt="ESS Energy Storage System"
        />
      </div>

      <div className="product-C">
        {datas.map((data) => (
          <img id={data.id} src={imgHandler(data.img)} alt={data.alt} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductC;
