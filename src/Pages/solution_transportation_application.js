import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  solution_img: {
    image: imgHandler("/img/sub-solution.png"),
    alt: "一大塊太陽能板架設在停車場",
  },
  content_data: {
    data01: {
      image: imgHandler("/img/transportationApplication_img1.png"),
      alt: "20呎儲能櫃",
    },
    data02: {
      image: imgHandler("/img/transportationApplication_img2.png"),
      alt: "20呎儲能櫃",
    },
  },
};

const TransportationApplication = () => {
  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="transportation-application">
        <div className="content-wrap">
          <h1 id="transportation-application">交通應用</h1>

          <p>
            適用於快速充電站等裝置。本產品具耐高壓與防延燒等設計，亦可依其需求再與其他rack並聯以提升其容量，同時供應多台電動車充電，符合客戶使用需求。
          </p>

          <div className="transportation-application-content">
            <img
              src={data.content_data.data01.image}
              alt={data.content_data.data01.alt}
            />
            <img
              src={data.content_data.data02.image}
              alt={data.content_data.data02.alt}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransportationApplication;
