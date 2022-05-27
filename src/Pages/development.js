const Development = () => {
  const data = {
    development: {
      title: "研發",
      image: process.env.PUBLIC_URL + "/img/development.png",
      alt: "暫無圖片",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.development.image} alt={data.development.alt} />
        <div className="slash">
          <h2>{data.development.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Development;
