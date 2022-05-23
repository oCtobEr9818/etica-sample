const Development = () => {
  return (
    <div className="development">
      <div className="container">
        <img src={process.env.PUBLIC_URL + ""} alt="test" />
        <div className="slash">
          <h2>研發</h2>
        </div>
      </div>
    </div>
  );
};

export default Development;
