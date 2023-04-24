const Performance = () => {
  const data = {
    banner_data: {
      image: process.env.PUBLIC_URL + "/img/sub-performance.png",
      alt: "實際案場使用情境",
    },
    content_data: {
      data01: {
        image: process.env.PUBLIC_URL + "/img/performance-01.png",
        alt: "很多黑色外型的pack",
      },
      data02: {
        image: process.env.PUBLIC_URL + "/img/performance-02.png",
        alt: "彰濱工業區案場",
      },
      data03: {
        image: process.env.PUBLIC_URL + "/img/performance-03.png",
        alt: "消防署設備師士蒞臨講習",
      },
      data04: {
        image: process.env.PUBLIC_URL + "/img/performance-04.png",
        alt: "案場照",
      },
      data05: {
        image: process.env.PUBLIC_URL + "/img/performance-05.png",
        alt: "五個人在案場拍照",
      },
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.banner_data.image} alt={data.banner_data.alt} />
      </div>

      <div className="performance-content">
        <div className="content-wrap">
          <h1>指標案例</h1>

          <div className="performance-content">
            <img
              src={data.content_data.data01.image}
              alt={data.content_data.data01.alt}
            />
            <img
              src={data.content_data.data02.image}
              alt={data.content_data.data02.alt}
            />
            <h2>台灣第一座併網AFC案場 @彰濱工業區</h2>
          </div>
          <div className="performance-content">
            <h2>儲能設備消防系統示範案場</h2>
            <img
              src={data.content_data.data03.image}
              alt={data.content_data.data03.alt}
            />
          </div>
          <div className="performance-content">
            <img
              src={data.content_data.data04.image}
              alt={data.content_data.data04.alt}
            />
            <img
              src={data.content_data.data05.image}
              alt={data.content_data.data05.alt}
            />
            <h2>第一座符合併網型儲能標準的用電大戶表後儲能案場</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
