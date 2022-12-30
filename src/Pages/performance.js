const Performance = () => {
  const data = {
    development: {
      image: process.env.PUBLIC_URL + "/img/sub-performance.png",
      alt: "實際案場使用情境",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.development.image} alt={data.development.alt} />
      </div>

      <img
        src={process.env.PUBLIC_URL + "/img/send_thumbnail.png"}
        alt="暫無圖片，資料建置中"
        style={{
          width: "700px",
          display: "flex",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default Performance;
