const Content = ({ imageL, imageR, altL, altR, content }) => {
  return (
    <div className="content">
      <img className="contentLeft-img" src={imageL} alt={altL} />
      <img className="contentRight-img" src={imageR} alt={altR} />
      <p>{content}</p>
    </div>
  );
};

export default Content;
