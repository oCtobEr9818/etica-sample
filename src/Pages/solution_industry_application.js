import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const IndustryApplication = () => {
  const data = {
    solution_img: {
      image: imgHandler("/img/sub-solution.png"),
      alt: "一大塊太陽能板架設在停車場",
    },
    content_img: {
      data01: {
        image: imgHandler("/img/industryApplication_img1.png"),
        alt: "",
      },
      data02: {
        image: imgHandler("/img/industryApplication_img2.png"),
        alt: "",
      },
    },
  };

  return (
    <Layout>
      <div className="banner">
        <img src={data.solution_img.image} alt={data.solution_img.alt} />
      </div>

      <div className="industry-application">
        <div className="content-wrap">
          <h1 id="industry-application">工業應用</h1>

          <div className="industry-application-content">
            <ul>
              <li>用電大戶</li>
            </ul>

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

export default IndustryApplication;
