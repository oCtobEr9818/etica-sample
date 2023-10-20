import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const datas = [
  {
    id: "Etica-O1",
    img: "/img/ess/o-1.png",
    alt: "Etica-O展覽網頁圖片1",
  },
  {
    id: "Etica-O2",
    img: "/img/ess/o-2.png",
    alt: "Etica-O展覽網頁圖片2",
  },
  {
    id: "Etica-O3",
    img: "/img/ess/o-3.png",
    alt: "Etica-O展覽網頁圖片3",
  },
  {
    id: "Etica-O4",
    img: "/img/ess/o-4.png",
    alt: "Etica-O展覽網頁圖片4",
  },
  {
    id: "Etica-O5",
    img: "/img/ess/o-5.png",
    alt: "Etica-O展覽網頁圖片5",
  },
  {
    id: "Etica-O6",
    img: "/img/ess/o-6.png",
    alt: "Etica-O展覽網頁圖片6",
  },
  {
    id: "Etica-O7",
    img: "/img/ess/o-7.png",
    alt: "Etica-O展覽網頁圖片7",
  },
  {
    id: "Etica-O8",
    img: "/img/ess/o-8.png",
    alt: "Etica-O展覽網頁圖片8",
  },
  {
    id: "Etica-O9",
    img: "/img/ess/o-9.png",
    alt: "Etica-O展覽網頁圖片9",
  },
];

const ProductO = () => {
  return (
    <Layout>
      <div className="banner">
        <img
          src={imgHandler("/img/sub-product.png")}
          alt="ESS Energy Storage System"
        />
      </div>

      <div className="product-O">
        {datas.map((data) => (
          <img id={data.id} src={imgHandler(data.img)} alt={data.alt} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductO;
