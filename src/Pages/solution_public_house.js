import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const PublicHouse = () => {
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

  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="public-house">
        <div className="content-wrap">
          <h1 id="public-house">公設住宅</h1>

          <p>
            適用範圍：家庭、電力不足或不穩定的郊區、不可斷電的儀器或設備。
            當電源充足時，電力會優先提供給家庭使用，並將電池充飽電。當停電時，電池的電力會轉換成交流電給家庭或重機電使用。
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
