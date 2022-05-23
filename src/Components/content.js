const Content = ({ image, content, alt }) => {
  return (
    <div className="content">
      <img className="content-img" src={image} alt={alt} />
      <p>{content}</p>
    </div>
  );
};

export default Content;
