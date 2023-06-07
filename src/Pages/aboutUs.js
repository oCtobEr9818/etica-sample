import ContentTitle from "../Components/content-title";
import Content from "../Components/content";
import { imgHandler } from "../Components/imgHandler";
import { Layout } from "../Components/Layout";

const data = {
  aboutus: {
    image: imgHandler("/img/sub-aboutus.png"),
    alt: "辦公室內有木製的ETICA字樣",
  },
  introduction: {
    title: "公司簡介",
    id: "introduction",
    content: `明曜科技自2002年成立以來，致力於提供儲能、3C、可攜式手持設備及電動自行車電源管理解決方案。我們的團隊在電池產業累積逾二十年豐富經驗，陸續取得ISO、UL、TUV認證，亦投入大量精力和資源開發現在的核心市場產品，更專注於研發及創新。我們的客戶遍布全球，能提供完整的MIT一站式客製化生產方案來幫助各領域業主解決電源上的問題，建立長期穩定的合作關係。`,
    image: imgHandler("/img/company.png"),
    alt: "淺藍色為底的圖片，裡面有一棟房子，房子旁邊有一棵樹",
  },
  history: {
    title: "企業沿革",
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
    contentLine1:
      "我們最基本的理念是，一旦做出承諾，必定不計代價，全力以赴；我們用人的首要條件是品格與才能，並充分給與個人發揮的空間，讓他們可以充分發揮各自的優點。",
    contentLine2:
      "誠實和務實是我司一貫的作業指標—始終以客戶需求為優先，專注於提升產品的價值及品質。",
    contentLine3:
      "雖然來自不同的領域，但大家共同一心想著發展儲能的目標前行。此建立的團隊為明曜儲能提供了多面向的發展，也因此做出了與眾不同的產品。",
    image: imgHandler("/img/peopleMoney.png"),
    alt: "淺藍色為底的圖片，一個人被鈔票圍著",
  },
  feature: {
    title: "未來展望",
    id: "feature",
    contentLine1:
      "明曜科技團隊透過與世界級的大廠合作，學習各品牌的優點及經驗，也讓明曜團隊的技術經驗持續成長。",
    contentLine2:
      "盡可能讓更多的人使用儲能的系統，以降低地球資源過度消耗，也減少電力供給不穩定的問題，提供給未來更美好的生活品質。",
    contentLine3: "未來明曜團隊以提供各種多樣化的儲能系統為目標。",
    image: imgHandler("/img/earth.png"),
    alt: "淺藍色為底的圖片，一架飛機繞著地球飛",
  },
};

const AboutUs = () => {
  return (
    <Layout>
      <div className="banner">
        <img src={data.aboutus.image} alt={data.aboutus.alt} />
      </div>

      {/* 公司簡介 */}
      <ContentTitle title={data.introduction.title} id={data.introduction.id} />
      <Content
        imageL={data.introduction.image}
        altL={data.introduction.alt}
        content={data.introduction.content}
      />

      {/* 企業沿革 */}
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
        content={data.business.contentLine1}
        content2={data.business.contentLine2}
        content3={data.business.contentLine3}
      />
      {/* 未來展望 */}
      <ContentTitle title={data.feature.title} id={data.feature.id} />
      <Content
        imageL={data.feature.image}
        altL={data.feature.alt}
        imageR=""
        altR=""
        content={data.feature.contentLine1}
        content2={data.feature.contentLine2}
        content3={data.feature.contentLine3}
      />
    </Layout>
  );
};

export default AboutUs;
