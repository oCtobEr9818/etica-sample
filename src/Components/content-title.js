const ContentTitle = ({ title, id }) => {
  return (
    <div className="content-title">
      <div className="wrap">
        <h2 id={id}>{title}</h2>

        <div className="decoraction">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentTitle;
