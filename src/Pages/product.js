import ContentTitle from "../Components/content-title";

const Product = () => {
  const data = {
    product_img: {
      image: process.env.PUBLIC_URL + "/img/product.png",
      alt: "ESS Energy Storage System",
    },
    industrialBattery: {
      title: "工控電池",
      content: {
        p1: `Optimized Solution for Energy Saving & High-quality Power Energy Storage System(ESS) stores electric energy and utilizes them for later consumption. It is purposed to improve energy efficiency, by enhancing the quality of renewable energy that results stabilization of power supply system. ETI provides most optimal energy solution for the users using our state-of-the-art energy storage system.`,
        p2: `In order to be closer to modern wireless network services, ETICA's ESS supports small cell, NiMH system, backup power, main power,etc., and the most important thing is to use ETICA's ESS battery through 5G LTE technology.`,
      },
      image: {
        hexegon: process.env.PUBLIC_URL + "/img/hexegon.png",
        handheld: process.env.PUBLIC_URL + "/img/handheld.png",
      },
      alt: "手持式，行動電話，醫療",
    },
    eBikeLEV: {
      title: "e-bike.LEV",
      image: process.env.PUBLIC_URL + "/img/e-bike.png",
      alt: "e-Bike,e-bike,Etica Battery",
    },
    energyStorageBattery: {
      title: "ESS儲能電池",
      content: {
        p1: `Optimized Solution for Energy Saving & High-quality Power Energy Storage System(ESS) stores electric energy and utilizes them for later consumption. It is purposed to improve energy efficiency, by enhancing the quality of renewable energy that results stabilization of power supply system. ETI provides most optimal energy solution for the users using our state-of-the-art energy storage system.`,
        p2: `In order to be closer to modern wireless network services, ETICA's ESS supports small cell, NiMH system, backup power, main power,etc., and the most important thing is to use ETICA's ESS battery through 5G LTE technology.`,
      },
      image: process.env.PUBLIC_URL + "/img/ESS.png",
      alt: "ESS batery, ESS儲能電池",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.product_img.image} alt={data.product_img.alt} />
        <div className="slash">
          <h2>產品資訊</h2>
        </div>
      </div>

      {/* 工控電池 */}
      <ContentTitle title={data.industrialBattery.title} />
      <div className="industrialBattery-img">
        <img
          className="hexegon"
          src={data.industrialBattery.image.hexegon}
          alt={data.industrialBattery.alt}
        />
        <img
          className="handheld"
          src={data.industrialBattery.image.handheld}
          alt={data.industrialBattery.alt}
        />
      </div>
      <p>{data.industrialBattery.content.p1}</p>
      <p>{data.industrialBattery.content.p2}</p>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th scope="col">Specification \ Model</th>
              <th scope="col">1S1P:PMH02</th>
              <th scope="col">2S4P:UQB02</th>
              <th scope="col">3S1P:AL001</th>
              <th scope="col">4S1P:RSD01</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Nominal Voltage</th>
              <td>3.8V</td>
              <td>7.4V</td>
              <td>10.8V</td>
              <td>14.4V</td>
            </tr>
            <tr>
              <th scope="row">Voltage range</th>
              <td>3.8~2.8V</td>
              <td>7.4~6.6V</td>
              <td>10.8~8.25V</td>
              <td>12.0~16.8V</td>
            </tr>
            <tr>
              <th scope="row">Discharge current</th>
              <td>1.6A</td>
              <td>6.8A</td>
              <td>3.5A</td>
              <td>4.2A</td>
            </tr>
            <tr>
              <th scope="row">Max. discharge current</th>
              <td>3A</td>
              <td>7.63A</td>
              <td>4.5A</td>
              <td>5.04A</td>
            </tr>
            <tr>
              <th scope="row">Charge current</th>
              <td>1.6A</td>
              <td>4.4A</td>
              <td>1.8A</td>
              <td>4.2A</td>
            </tr>
            <tr>
              <th scope="row">Charge Operating temp</th>
              <td>0~45</td>
              <td>0~45</td>
              <td>0~45</td>
              <td>0~45</td>
            </tr>
            <tr>
              <th scope="row">Discharge Operating temp</th>
              <td>-20~60</td>
              <td>-20~60</td>
              <td>-20~60</td>
              <td>-20~60</td>
            </tr>
            <tr>
              <th scope="row">Communication</th>
              <td>I2C</td>
              <td>SUMBUS</td>
              <td>SUMBUS</td>
              <td>SUMBUS</td>
            </tr>
            <tr>
              <th scope="row">Dimensions</th>
              <td>89*69.3*28.9mm</td>
              <td>152*126*15mm</td>
              <td>89*69.3*28.9mm</td>
              <td>TBD</td>
            </tr>
            <tr>
              <th scope="row">Weight</th>
              <td>67g</td>
              <td>300g</td>
              <td>210g</td>
              <td>336g</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* e-bike */}
      <ContentTitle title={data.eBikeLEV.title} />
      <img
        className="ebike-img"
        src={data.eBikeLEV.image}
        alt={data.eBikeLEV.alt}
      />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th scope="col">Specification</th>
              <th scope="col">Down Tube(ETI)</th>
              <th scope="col">In-Frame(EEL- IE mini)</th>
              <th scope="col">Rear Rack(RK-4C)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Voltage (V)</th>
              <td>36V</td>
              <td>36V</td>
              <td>36V</td>
            </tr>
            <tr>
              <th scope="row">Capacity (Ah)</th>
              <td>11.6Ah / 14Ah</td>
              <td>11.6Ah / 14Ah</td>
              <td>11.6Ah / 14Ah</td>
            </tr>
            <tr>
              <th scope="row">Max Current (A)</th>
              <td>22A / 28A</td>
              <td>22A / 28A</td>
              <td>22A / 28A</td>
            </tr>
            <tr>
              <th scope="row">Dimension (mm)</th>
              <td>L398 x W127 x H93.5</td>
              <td>L430 x W64 x H74</td>
              <td>L407 x W148 x H76</td>
            </tr>
            <tr>
              <th scope="row">Communication</th>
              <td>UART or CANBUS</td>
              <td>UART or CANBUS</td>
              <td>UART or CANBUS</td>
            </tr>
            <tr>
              <th scope="row">Protection</th>
              <td>OVP/SCP/TOP/UTP/UVP/OCP</td>
              <td>OVP/SCP/TOP/UTP/UVP/OCP</td>
              <td>OVP/SCP/TOP/UTP/UVP/OCP</td>
            </tr>
            <tr>
              <th scope="row">Update</th>
              <td>Bootloader / *IOT</td>
              <td>Bootloader / *IOT</td>
              <td>Bootloader / *IOT</td>
            </tr>
            <tr>
              <th scope="row">Certifications</th>
              <td>UN38.3/CE/FCC/*EN 13849-1</td>
              <td>UN38.3/CE/FCC/*EN 13849-1</td>
              <td>UN38.3/CE/FCC/*EN 13849-1</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ESS儲能電池 */}
      <ContentTitle title={data.energyStorageBattery.title} />
      <img
        className="ESS-img"
        src={data.energyStorageBattery.image}
        alt={data.energyStorageBattery.alt}
      />
      <p>{data.energyStorageBattery.content.p1}</p>
      <p>{data.energyStorageBattery.content.p2}</p>
    </div>
  );
};

export default Product;
