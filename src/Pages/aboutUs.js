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
      content: `Since its founding in 2002, ETICA BATTERY INC. has experienced incredible growth. With its customer base in the rapidly evolving notebook computer, cellular phone, and handheld device markets.
        
        Etica has dedicated its considerable energies and resources to developing products in its current core markets, as well as new battery technologies for emerging applications such as automotive, ESS,and robot sector.
        
        These are the deliverables and tools Etica is using to be an enterprise affording energy of substitute and next generation for protection of earth environment.

        The principles that guided the company in its energetic pursuit of growth are honesty and pragmatism-Always putting customers first, emphasizing standards-based quality.`,
      image: process.env.PUBLIC_URL + "/img/company.png",
      alt: "淺藍色為底的圖片，裡面有一棟房子，房子旁邊有一棵樹",
    },
    history: {
      title: "歷史沿革",
      content: "",
      book: {
        image: process.env.PUBLIC_URL + "/img/book.png",
        alt: "淺藍色為底的圖片，一本書和一支筆",
      },
      milestone: {
        image: process.env.PUBLIC_URL + "/img/milestone.png",
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
        imageL={data.introduction.image}
        altL={data.introduction.alt}
        imageR=""
        altR=""
        content={data.introduction.content}
      />

      {/* 歷史沿革 */}
      <ContentTitle title={data.history.title} />
      <Content
        imageL={data.history.book.image}
        altL={data.history.book.alt}
        imageR={data.history.milestone.image}
        altR={data.history.milestone.alt}
        content={data.history.content}
      />

      {/* 經營理念 */}
      <ContentTitle title={data.business.title} />
      <Content
        imageL={data.business.image}
        altL={data.business.alt}
        imageR=""
        altR=""
        content={data.business.content}
      />
      {/* 未來展望 */}
      <ContentTitle title={data.feature.title} />
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
