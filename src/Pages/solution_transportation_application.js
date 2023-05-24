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
      alt: "交通應用示意圖",
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
            電動車因近年電池安全性提升、生產技術成熟加上價格漸趨親民，成為用路人的新寵。2022年台灣車市冷卻，電動車銷量反成長超過一倍至16,120輛，占總汽車銷量3.75%。電動車上路帶動充電站的廣泛布建，其中快速充電站可在幾十分鐘輸出長途旅行所需的電量，結合儲能設備更可提升服務量能及充電站業主的收益，多設置於公共停車場等戶外場所。
          </p>
          <p>
            明曜的儲能系統具耐高壓與防延燒等設計，亦可依其需求再與其他rack並聯以提升其容量，搭配快速充電站可同時供應多台電動車充電，符合大型商場及停車場服務商使用需求。
          </p>

          <div className="transportation-application-content">
            <img
              src={data.content_data.data01.image}
              alt={data.content_data.data01.alt}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransportationApplication;
