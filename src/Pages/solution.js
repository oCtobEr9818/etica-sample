import ContentTitle from "../Components/content-title";
import { imgHandler } from "../Components/imgHandler";

const Solution = () => {
  const data = {
    solution_img: {
      title: "解決方案",
      image1: imgHandler("/img/solution.png"),
      image2: imgHandler("/img/solution-test.png"),
      image3: imgHandler("/img/squares.png"),
      alt: "一大塊太陽能板架設在停車場",
    },
    public: {
      image: {
        indoorImg: imgHandler("/img/indoor.png"),
        outdoorImg: imgHandler("/img/outdoor.png"),
        wallMountedImg: imgHandler("/img/wallmounted.png"),
        energyStorageBoxImg: imgHandler("/img/energyStorageBox.png"),
      },
      content: {
        indoorContent: `微電網儲能櫃-室內型
                        Pack:48V / 192Ah / 9.2kWh
                        Bank:串聯 14 Packs
                        525-756V / 129kW
                        額定電流:200-250A
                        1100*1332*1585 mm`,
        outdoorContent: `微電網儲能櫃-戶外型
                        Pack:48V / 192Ah / 9.2kWh
                        Bank:串聯 20 Packs
                        750-1080V / 184kW
                        額定電流:200-250A
                        1100*1332*2100 mm`,
        wallMountedContent: `壁掛式儲能櫃
                            Pack:48V / 9.2kWh
                            1400*750*250 mm / 100kg
                            Single phase 3-wires
                            output 110 / 220 VAC
                            6KW Hybrid PV inverter`,
        energyStorageBoxContent: `40呎集裝箱儲能櫃
                                  Pack:48V / 192Ah / 9.2kWh
                                  Bank:串聯 20 Packs
                                  40呎:Including16 Banks
                                  750~1080V * 3MW
                                  額定電流:3200A`,
      },
      alt: {
        indoorAlt: "微電網儲能櫃-室內型",
        outdoorAlt: "微電網儲能櫃-戶外型",
        wallMountedAlt: "壁掛式儲能櫃",
        energyStorageBoxAlt: "40呎集裝箱儲能櫃",
      },
    },
    commercialFacility: {
      title: "商業設施",
      id: "commercialFacility",
      image: {
        blueImg: imgHandler("/img/commercialFacility1.png"),
        threeImg: imgHandler("/img/commercialFacility2.png"),
      },
      alt: "商辦，商場，飯店，微電網儲能櫃-室內型，微電網儲能櫃-戶外型，Pack Bank，額定電流",
    },
    trsportationApplication: {
      title: "交通應用",
      id: "trsportationApplication",
      image: {
        blueImg: imgHandler("/img/trsportationApplication1.png"),
        threeImg: imgHandler("/img/trsportationApplication2.png"),
        batteryImg1: imgHandler("/img/battery1.png"),
        batteryImg2: imgHandler("/img/battery2.png"),
      },
      alt: "停車場EV，充電站，交通工具:腳踏車，微電網儲能櫃-室內型，微電網儲能櫃-戶外型，Pack Bank，額定電流",
    },
    publicHouse: {
      title: "公設住宅",
      id: "publicHouse",
      image: {
        blueImg: imgHandler("/img/publicHouse1.png"),
        threeImg: imgHandler("/img/publicHouse2.png"),
      },
      alt: "公設，社區住宅，微電網儲能櫃-室內型，微電網儲能櫃-戶外型，壁掛式儲能櫃，Pack Bank，額定電流",
    },
    industryApplication: {
      title: "工業應用",
      id: "industryApplication",
      image: {
        blueImg: imgHandler("/img/industryApplication1.png"),
        threeImg: imgHandler("/img/industryApplication2.png"),
      },
      alt: "太陽能電廠用電大戶，微電網儲能櫃-室內型，微電網儲能櫃-戶外型，40呎集裝箱儲能櫃，Pack Bank，額定電流",
    },
    greenEnergyIndustry: {
      title: "綠能產業",
      id: "greenEnergyIndustry",
      image: {
        blueImg: imgHandler("/img/greenEnergyIndustry1.png"),
        threeImg: imgHandler("/img/greenEnergyIndustry2.png"),
      },
      alt: "魚電共生，魚菜共生，科技植栽，40呎集裝箱儲能櫃，微電網儲能櫃-戶外型，Pack Bank，額定電流",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img
          src={data.solution_img.image2}
          alt={data.solution_img.alt}
          id="solution2"
        />
        <img
          src={data.solution_img.image1}
          alt={data.solution_img.alt}
          id="solution1"
        />
        <img
          src={data.solution_img.image3}
          alt="squares"
          className="squares square1"
        />
        <img
          src={data.solution_img.image3}
          alt="squares"
          className="squares square2"
        />

        <div className="slash">
          <h2>{data.solution_img.title}</h2>
        </div>
      </div>

      {/* 商業設施 */}
      <ContentTitle
        title={data.commercialFacility.title}
        id={data.commercialFacility.id}
      />
      <div className="solution-img">
        <img
          className="blueImg"
          src={data.commercialFacility.image.blueImg}
          alt={data.commercialFacility.alt}
        />
        <div className="wrap">
          <div className="imgWrap">
            <img
              className="indoorImg"
              src={data.public.image.indoorImg}
              alt={data.public.alt.indoorAlt}
            />
            <p>{data.public.content.indoorContent}</p>
          </div>
          <img
            className="threeImg"
            src={data.commercialFacility.image.threeImg}
            alt={data.commercialFacility.alt}
          />
          <div className="imgWrap">
            <img
              className="outoorImg"
              src={data.public.image.outdoorImg}
              alt={data.public.alt.outdoorAlt}
            />
            <p>{data.public.content.outdoorContent}</p>
          </div>
        </div>
      </div>

      {/* 交通應用 */}
      <ContentTitle
        title={data.trsportationApplication.title}
        id={data.trsportationApplication.id}
      />
      <div className="solution-img">
        <img
          className="blueImg"
          src={data.trsportationApplication.image.blueImg}
          alt={data.trsportationApplication.alt}
        />
        <div className="wrap">
          <div className="imgWrap">
            <img
              className="indoorImg"
              src={data.public.image.indoorImg}
              alt={data.public.alt.indoorAlt}
            />
            <p>{data.public.content.indoorContent}</p>

            <img
              className="outoorImg"
              src={data.public.image.outdoorImg}
              alt={data.public.alt.outdoorAlt}
            />
            <p>{data.public.content.outdoorContent}</p>
          </div>
          <img
            className="threeImg"
            src={data.trsportationApplication.image.threeImg}
            alt={data.trsportationApplication.alt}
          />
          <div className="imgWrap">
            <img
              className="battery1"
              src={data.trsportationApplication.image.batteryImg1}
              alt={data.trsportationApplication.alt}
            />
            <img
              className="battery2"
              src={data.trsportationApplication.image.batteryImg2}
              alt={data.trsportationApplication.alt}
            />
          </div>
        </div>
      </div>

      {/* 公設住宅 */}
      <ContentTitle title={data.publicHouse.title} id={data.publicHouse.id} />
      <div className="solution-img">
        <img
          className="blueImg"
          src={data.publicHouse.image.blueImg}
          alt={data.publicHouse.alt}
        />
        <div className="wrap">
          <div className="imgWrap">
            <img
              className="indoorImg"
              src={data.public.image.indoorImg}
              alt={data.public.alt.indoorAlt}
            />
            <p>{data.public.content.indoorContent}</p>
            <img
              className="outoorImg"
              src={data.public.image.outdoorImg}
              alt={data.public.alt.outdoorAlt}
            />
            <p>{data.public.content.outdoorContent}</p>
          </div>
          <img
            className="threeImg"
            src={data.publicHouse.image.threeImg}
            alt={data.publicHouse.alt}
          />
          <div className="imgWrap">
            <img
              src={data.public.image.wallMountedImg}
              alt={data.public.alt.wallMountedAlt}
            />
            <p>{data.public.content.wallMountedContent}</p>
          </div>
        </div>
      </div>

      {/* 工業應用 */}
      <ContentTitle
        title={data.industryApplication.title}
        id={data.industryApplication.id}
      />
      <div className="solution-img">
        <img
          className="blueImg"
          src={data.industryApplication.image.blueImg}
          alt={data.industryApplication.alt}
        />
        <div className="wrap">
          <div className="imgWrap">
            <img
              className="indoorImg"
              src={data.public.image.indoorImg}
              alt={data.public.alt.indoorAlt}
            />
            <p>{data.public.content.indoorContent}</p>
            <img
              className="outoorImg"
              src={data.public.image.outdoorImg}
              alt={data.public.alt.outdoorAlt}
            />
            <p>{data.public.content.outdoorContent}</p>
          </div>
          <img
            className="threeImg"
            src={data.industryApplication.image.threeImg}
            alt={data.industryApplication.alt}
          />
          <div className="imgWrap">
            <img
              src={data.public.image.energyStorageBoxImg}
              alt={data.public.alt.energyStorageBoxAlt}
            />
            <p>{data.public.content.energyStorageBoxContent}</p>
          </div>
        </div>
      </div>

      {/* 綠能產業 */}
      <ContentTitle
        title={data.greenEnergyIndustry.title}
        id={data.greenEnergyIndustry.id}
      />
      <div className="solution-img">
        <img
          className="blueImg"
          src={data.greenEnergyIndustry.image.blueImg}
          alt={data.greenEnergyIndustry.alt}
        />
        <div className="wrap">
          <div className="imgWrap">
            <img
              className="outoorImg"
              src={data.public.image.outdoorImg}
              alt={data.public.alt.outdoorAlt}
            />
            <p>{data.public.content.outdoorContent}</p>
          </div>
          <img
            className="threeImg"
            src={data.greenEnergyIndustry.image.threeImg}
            alt={data.greenEnergyIndustry.alt}
          />
          <div className="imgWrap">
            <img
              src={data.public.image.energyStorageBoxImg}
              alt={data.public.alt.energyStorageBoxAlt}
            />
            <p>{data.public.content.energyStorageBoxContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
