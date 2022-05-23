import ContentTitle from "../Components/content-title";

const Solution = () => {
  const data = {
    solution_img: {
      title: "解決方案",
      image: process.env.PUBLIC_URL + "/img/solution.png",
      alt: "一大塊太陽能板架設在停車場",
    },
    commercialFacility: {
      title: "商業設施",
      image: process.env.PUBLIC_URL + "/img/commercialFacility.png",
      alt: "商辦，商場，飯店，微電網儲能櫃-室內型，微電網儲能櫃-戶外型，Pack Bank，額定電流",
    },
    trsportationApplication: {
      title: "交通應用",
      image: process.env.PUBLIC_URL + "/img/trsportationApplication.png",
      alt: "停車場EV，充電站，交通工具:腳踏車，微電網儲能櫃-室內型，微電網儲能櫃-戶外型，Pack Bank，額定電流",
    },
    publicHouse: {
      title: "公設住宅",
      image: process.env.PUBLIC_URL + "/img/publicHouse.png",
      alt: "公設，社區住宅，微電網儲能櫃-室內型，微電網儲能櫃-戶外型，壁掛式儲能櫃，Pack Bank，額定電流",
    },
    industryApplication: {
      title: "工業應用",
      image: process.env.PUBLIC_URL + "/img/industryApplication.png",
      alt: "太陽能電廠用電大戶，微電網儲能櫃-室內型，微電網儲能櫃-戶外型，40呎集裝箱儲能櫃，Pack Bank，額定電流",
    },
    greenEnergyIndustry: {
      title: "綠能產業",
      image: process.env.PUBLIC_URL + "/img/greenEnergyIndustry.png",
      alt: "魚電共生，魚菜共生，科技植栽，40呎集裝箱儲能櫃，微電網儲能櫃-戶外型，Pack Bank，額定電流",
    },
  };

  return (
    <div className="solution">
      <div className="container">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
        <div className="slash">
          <h2>{data.solution_img.title}</h2>
        </div>
        <div className="elevator">
          <ul>
            <li>商業設施</li>
            <li>交通應用</li>
            <li>公設住宅</li>
            <li>工業應用</li>
            <li>綠能產業</li>
          </ul>
        </div>
      </div>

      {/* 商業設施 */}
      <ContentTitle title={data.commercialFacility.title} />
      <img
        className="solution-img"
        src={data.commercialFacility.image}
        alt={data.commercialFacility.alt}
      />
      {/* 交通應用 */}
      <ContentTitle title={data.trsportationApplication.title} />
      <img
        className="solution-img"
        src={data.trsportationApplication.image}
        alt={data.trsportationApplication.alt}
      />
      {/* 公設住宅 */}
      <ContentTitle title={data.publicHouse.title} />
      <img
        className="solution-img"
        src={data.publicHouse.image}
        alt={data.publicHouse.alt}
      />
      {/* 工業應用 */}
      <ContentTitle title={data.industryApplication.title} />
      <img
        className="solution-img"
        src={data.industryApplication.image}
        alt={data.industryApplication.alt}
      />
      {/* 綠能產業 */}
      <ContentTitle title={data.greenEnergyIndustry.title} />
      <img
        className="solution-img"
        src={data.greenEnergyIndustry.image}
        alt={data.greenEnergyIndustry.alt}
      />
    </div>
  );
};

export default Solution;
