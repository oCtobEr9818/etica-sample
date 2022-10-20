import ContentTitle from "../Components/content-title";
import Content from "../Components/content";
import { imgHandler } from "../Components/imgHandler";

const AboutUs = () => {
  const data = {
    aboutus: {
      title: "關於我們",
      image: imgHandler("/img/sub-aboutus.png"),
      alt: "辦公室內有木製的ETICA字樣",
    },
    introduction: {
      title: "公司簡介",
      id: "introduction",
      content: `自 2002 年成立以來，明曜科技致力於研發及製造儲能電池、3C和可攜式手持設備。我們的客戶遍布全球,且提供完整的客製化方案來幫助各領域業主解決電源上的問題。

      我們亦投入大量精力和資源開發現在當前的核心市場產品，更致力於產品研發及創新,用於汽車、ESS 和機器人領域等新興應用的新電池技術。
      
      明曜科技正在持續努力，以期許成為提供替代能源和次世代能源來保護地球環境的企業。`,
      image: imgHandler("/img/company.png"),
      alt: "淺藍色為底的圖片，裡面有一棟房子，房子旁邊有一棵樹",
    },
    history: {
      title: "歷史沿革",
      id: "history",
      content: "",
      book: {
        image: imgHandler("/img/book.png"),
        alt: "淺藍色為底的圖片，一本書和一支筆",
      },
      milestone: {
        image: imgHandler("/img/milestone.jpg"),
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
      content: `我們最基本的理念是，一旦做出承諾，必定不計代價，全力以赴；我們用人的首要條件是品格與才能，並充分給與個人發揮的空間，讓他們可以充分發揮各自的優點。
      
      誠實和務實是我司一貫的作業指標—始終以客戶需求為優先，專注於提升產品的價值及品質。

      雖然來自不同的領域，但大家共同一心想著發展儲能的目標前行。此建立的團隊為明曜儲能提供了多面向的發展，也因此做出了與眾不同的產品。
      `,
      image: imgHandler("/img/peopleMoney.png"),
      alt: "淺藍色為底的圖片，一個人被鈔票圍著",
    },
    feature: {
      title: "未來展望",
      id: "feature",
      content: `明曜科技團隊透過與世界級的大廠合作，學習各品牌的優點及經驗，也讓明曜團隊的技術經驗持續成長。

      盡可能讓更多的人使用儲能的系統，以降低地球資源過度消耗，也減少電力供給不穩定的問題，提供給未來更美好的生活品質。

      未來明曜團隊以提供各種多樣化的儲能系統為目標。
      `,
      image: imgHandler("/img/earth.png"),
      alt: "淺藍色為底的圖片，一架飛機繞著地球飛",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.aboutus.image} alt={data.aboutus.alt} />

        {/* <div className="slash">
          <h2>{data.aboutus.title}</h2>
        </div> */}
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
