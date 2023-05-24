import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  solution_img: {
    image: imgHandler("/img/sub-solution.png"),
    alt: "一大塊太陽能板架設在停車場",
  },
  constent_data: {
    data01: {
      image: imgHandler("/img/publicHouse_img1.png"),
      alt: "公設住宅示意圖",
    },
  },
};

const PublicHouse = () => {
  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="public-house">
        <div className="content-wrap">
          <h1 id="public-house">公設住宅</h1>

          <p>
            家用儲能適用於家庭、電力不足或不穩定的郊區、不可斷電的儀器或設備。當電源充足時，電力會優先提供給家庭使用，並將電池充飽電。當停電時，電池的電力會轉換成交流電給家電用品或重機電使用。近年在業界的推動下，新完工的住宅社區大樓多以儲能系統取代傳統的柴油發電機或鉛酸電池作為消防緊急供電設備，解決後者帶來的空氣汙染及低能量密度的問題。
          </p>
          <p>
            明曜的家用儲能系統+R系列設計二種規格：10kWh及20kWh，可結合太陽能發電設施，在住家內建構一個完整創能、儲能、節能的微電網，實踐綠色新生活。
          </p>

          <div className="public-house-content">
            <img
              src={data.constent_data.data01.image}
              alt={data.constent_data.data01.alt}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PublicHouse;
