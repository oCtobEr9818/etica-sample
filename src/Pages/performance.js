const Performance = () => {
  const data = {
    development: {
      title: "實績案例",
      image: process.env.PUBLIC_URL + "/img/解決方案05.jpg",
      alt: "暫無圖片",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img
          src={data.development.image}
          alt={data.development.alt}
          style={{ width: "100%" }}
        />
        <div className="slash">
          <h2>{data.development.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Performance;
