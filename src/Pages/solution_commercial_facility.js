import { imgHandler } from "../Components/imgHandler";

const CommercialFacility = () => {
  const data = {
    solution_img: {
      image: imgHandler("/img/sub-solution.png"),
      alt: "一大塊太陽能板架設在停車場",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="commercial-facility">
        <div className="content-wrap">
          <h1>電力設施</h1>
          <p>
            可參與電力交易平台，於電力系統納入更多能快速反應、具彈性且多元之外部資源；並設立備用容量市場，提供備用供電容量義務者籌措備用供電容量之市場交易管道。
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommercialFacility;
