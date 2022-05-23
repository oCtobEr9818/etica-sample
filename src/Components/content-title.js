const ContentTitle = ({ title }) => {
  return (
    <div className="content-title">
      <div className="wrap">
        <h2>{title}</h2>

        <div className="decoraction">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentTitle;
