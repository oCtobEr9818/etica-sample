import ContentTitle from "../Components/content-title";
import Content from "../Components/content";

const AboutUs = () => {
  const data = {
    aboutus: {
      title: "關於我們",
      image: process.env.PUBLIC_URL + "/img/aboutus.png",
      alt: "三個人在開會，兩個男人一個女人，其中一個男人有地中海",
    },
    introduction: {
      title: "公司簡介",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
      atque facilis, assumenda architecto fugit beatae nostrum nesciunt
      dolor! Soluta asperiores consectetur amet minus, sint accusamus illum
      ullam at animi eius.`,
      image: process.env.PUBLIC_URL + "/img/company.png",
      alt: "淺藍色為底的圖片，裡面有一棟房子，房子旁邊有一棵樹",
    },
    history: {
      title: "歷史沿革",
      content: "",
      image: process.env.PUBLIC_URL + "/img/book.png",
      alt: "淺藍色為底的圖片，一本書和一支筆",
    },
    business: {
      title: "經營理念",
      content: "",
      image: process.env.PUBLIC_URL + "/img/peopleMoney.png",
      alt: "淺藍色為底的圖片，一個人被鈔票圍著",
    },
    feature: {
      title: "未來展望",
      content: "",
      image: process.env.PUBLIC_URL + "/img/earth.png",
      alt: "淺藍色為底的圖片，一架飛機繞著地球飛",
    },
  };

  return (
    <div className="about">
      <div className="container">
        <img src={data.aboutus.image} alt={data.aboutus.alt} />

        <div className="slash">
          <h2>{data.aboutus.title}</h2>
        </div>
      </div>

      {/* 公司簡介 */}
      <ContentTitle title={data.introduction.title} />
      <Content
        image={data.introduction.image}
        alt={data.introduction.alt}
        content={data.introduction.content}
      />
      {/* 歷史沿革 */}
      <ContentTitle title={data.history.title} />
      <Content
        image={data.history.image}
        alt={data.history.alt}
        content={data.history.content}
      />
      {/* 經營理念 */}
      <ContentTitle title={data.business.title} />
      <Content
        image={data.business.image}
        alt={data.business.alt}
        content={data.business.content}
      />
      {/* 未來展望 */}
      <ContentTitle title={data.feature.title} />
      <Content
        image={data.feature.image}
        alt={data.feature.alt}
        content={data.feature.content}
      />
    </div>
  );
};

export default AboutUs;
