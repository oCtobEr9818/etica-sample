import ContentTitle from "../Components/content-title";
import Content from "../Components/content";
import { imgHandler } from "../Components/imgHandler";

const AboutUs = () => {
  const data = {
    aboutus: {
      title: "關於我們",
      image: process.env.PUBLIC_URL + "/img/aboutus.png",
      alt: "三個人在開會，兩個男人一個女人，其中一個男人有地中海",
    },
    introduction: {
      title: "公司簡介",
      id: "introduction",
      content: `自 2002 年成立以來，明曜科技致力於研發及製造儲能電池、3C和可攜式手持設備。我們的客戶遍布全球,且提供完整的客製化方案來幫助各領域業主解決電源上的問題。

      我們亦投入大量精力和資源開發現在當前的核心市場產品，更致力於產品研發及創新,用於汽車、ESS 和機器人領域等新興應用的新電池技術。
      
      明曜科技正在持續努力，以期許成為提供替代能源和次世代能源來保護地球環境的企業。
      
      誠實和務實是我司一貫的作業指標—始終以客戶需求為優先，專注於提升產品的價值及品質。`,
      image: process.env.PUBLIC_URL + "/img/company.png",
      alt: "淺藍色為底的圖片，裡面有一棟房子，房子旁邊有一棵樹",
    },
    history: {
      title: "歷史沿革",
      id: "history",
      content: "",
      book: {
        image: process.env.PUBLIC_URL + "/img/book.png",
        alt: "淺藍色為底的圖片，一本書和一支筆",
      },
      milestone: {
        image: process.env.PUBLIC_URL + "/img/milestone.jpg",
        alt: `2002 - ETICA Battery INC. was founded
              2022 - UL Certification
              2003 - ISO 9001 Certification
              2008 - TUV Certification
              2018 - RTICA expanded to 3000 m^2
              2020 - ISO 16949 Certification
              2021 - Production base expanded to 8000 m^2
        `,
      },
    },
    business: {
      title: "經營理念",
      id: "business",
      content: "",
      image: process.env.PUBLIC_URL + "/img/peopleMoney.png",
      alt: "淺藍色為底的圖片，一個人被鈔票圍著",
    },
    feature: {
      title: "未來展望",
      id: "feature",
      content: "",
      image: process.env.PUBLIC_URL + "/img/earth.png",
      alt: "淺藍色為底的圖片，一架飛機繞著地球飛",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        {/* <img src={data.aboutus.image} alt={data.aboutus.alt} />

        <div className="slash">
          <h2>{data.aboutus.title}</h2>
        </div> */}
        <img
          src={imgHandler("/img/解決方案04.jpg")}
          alt="解決方案04"
          style={{ width: "100%" }}
        />
      </div>

      {/* 公司簡介 */}
      <ContentTitle title={data.introduction.title} id={data.introduction.id} />
      <Content
        imageL={data.introduction.image}
        altL={data.introduction.alt}
        imageR=""
        altR=""
        content={data.introduction.content}
      />

      {/* 歷史沿革 */}
      <ContentTitle title={data.history.title} id={data.history.id} />
      <Content
        imageL={data.history.book.image}
        altL={data.history.book.alt}
        imageR={data.history.milestone.image}
        altR={data.history.milestone.alt}
        content={data.history.content}
      />

      {/* 經營理念 */}
      <ContentTitle title={data.business.title} id={data.business.id} />
      <Content
        imageL={data.business.image}
        altL={data.business.alt}
        imageR=""
        altR=""
        content={data.business.content}
      />
      {/* 未來展望 */}
      <ContentTitle title={data.feature.title} id={data.feature.id} />
      <Content
        imageL={data.feature.image}
        altL={data.feature.alt}
        imageR=""
        altR=""
        content={data.feature.content}
      />
    </div>
  );
};

export default AboutUs;
