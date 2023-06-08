import { HashLink as Link } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";

import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  solution_img: {
    img: imgHandler("/img/sub-solution.png"),
    alt: "一大塊太陽能板架設在停車場",
  },
  solution_content: {
    img: "/img/home/test.jpg",
    alt: "",
  },
};

Aos.init({
  offset: 100,
  delay: 50,
  once: true,
});

const Solution = () => {
  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.img} alt={data.solution_img.alt} />
      </div>

      <div className="container-solution">
        <img
          src={imgHandler(data.solution_content.img)}
          alt={data.solution_content.alt}
          id="solution-img"
        />

        <div className="solution-content">
          <ul className="imgOption">
            <li className="point point1">
              <Link
                to="/solution-commercial-facility#commercial-facility"
                className="point_a"
              >
                <span className="point_span" />
                <div className="point_wrap">
                  <span>電力設施</span>
                </div>
              </Link>
            </li>
            <li className="point point2">
              <Link
                to="/solution-transportation-application#transportation-application"
                className="point_a"
              >
                <span className="point_span" />
                <div className="point_wrap">
                  <span>交通應用</span>
                </div>
              </Link>
            </li>
            <li className="point point3">
              <Link
                to="/solution-greenEnergy-industry#greenEnergy-industry"
                className="point_a"
              >
                <span className="point_span" />
                <div className="point_wrap">
                  <span>光儲整合</span>
                </div>
              </Link>
            </li>
            <li className="point point4">
              <Link
                to="/solution-public-house#public-house"
                className="point_a"
              >
                <span className="point_span" />
                <div className="point_wrap">
                  <span>公設住宅</span>
                </div>
              </Link>
            </li>
            <li className="point point5">
              <Link
                to="/solution-industry-application#industry-application"
                className="point_a"
              >
                <span className="point_span" />
                <div className="point_wrap">
                  <span>工業應用</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Solution;
