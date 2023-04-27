import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  solution_img: {
    image: imgHandler("/img/sub-solution.png"),
    alt: "一大塊太陽能板架設在停車場",
  },
  constent_data: {
    data01: {
      image: imgHandler("/img/commercialFacility_plan1.png"),
      alt: "獨立水冷電池櫃",
    },
    data02: {
      image: imgHandler("/img/commercialFacility_plan2.png"),
      alt: "20呎儲能櫃",
    },
  },
};

const CommercialFacility = () => {
  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="commercial-facility">
        <div className="content-wrap">
          <h1 id="commercial-facility">電力設施</h1>

          <p>
            可參與電力交易平台，於電力系統納入更多能快速反應、具彈性且多元之外部資源；並設立備用容量市場，提供備用供電容量義務者籌措備用供電容量之市場交易管道。
          </p>

          <div className="commercial-facility-content">
            <ul>
              <li>方案一：獨立水冷電池櫃</li>
            </ul>
            <img
              src={data.constent_data.data01.image}
              alt={data.constent_data.data01.alt}
            />
          </div>

          <div className="commercial-facility-content">
            <ul>
              <li>方案二：20呎儲能櫃</li>
            </ul>
            <img
              src={data.constent_data.data02.image}
              alt={data.constent_data.data02.alt}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommercialFacility;
