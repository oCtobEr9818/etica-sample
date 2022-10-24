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
    </div>
  );
};

export default Performance;
