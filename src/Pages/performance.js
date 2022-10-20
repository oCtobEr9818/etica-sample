const Performance = () => {
  const data = {
    development: {
      title: "實績案例",
      image: process.env.PUBLIC_URL + "/img/sub-performance.png",
      alt: "實際案場使用情境",
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <img src={data.development.image} alt={data.development.alt} />
        {/* <div className="slash">
          <h2>{data.development.title}</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Performance;
