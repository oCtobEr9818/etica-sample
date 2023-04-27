import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  solution_img: {
    image: imgHandler("/img/sub-solution.png"),
    alt: "一大塊太陽能板架設在停車場",
  },

  content_img: {
    data01: {
      image: imgHandler("/img/greenEnergyIndustry_img1.png"),
      alt: "風力發電 太陽能板 Etica儲能櫃",
    },
    data02: {
      image: imgHandler("/img/greenEnergyIndustry_img2.png"),
      alt: "汽車充電站",
    },
  },
};

const GreenEnergyIndustry = () => {
  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="greenEnergy-industry">
        <div className="content-wrap">
          <h1 id="greenEnergy-industry">綠能產業</h1>

          <p>
            適用範圍：太陽能電站、漁電共生、科技植栽。
            光儲結合可將白天太陽光所生產的電能移轉到晚上使用，有效舒緩夜間尖峰供電。政府為鼓勵太陽光電案場設置儲能系統，已公告躉購費率機制保障業者合理利潤，再以競標決定儲能系統輸出電能躉購費率。
          </p>

          <div className="greenEnergy-industry-content">
            <img
              src={data.content_img.data01.image}
              alt={data.content_img.data01.alt}
            />
            <img
              src={data.content_img.data02.image}
              alt={data.content_img.data02.alt}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GreenEnergyIndustry;
