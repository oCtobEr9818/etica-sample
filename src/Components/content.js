import Aos from "aos";
import "aos/dist/aos.css";

const Content = ({ imageL, imageR, altL, altR, content }) => {
  Aos.init({
    offset: 100,
    delay: 50,
  });

  return (
    <div className="content">
      <img className="contentLeft-img" src={imageL} alt={altL} />
      <img
        className="contentRight-img"
        src={imageR}
        alt={altR}
        data-aos="zoom-in-up"
      />
      <p>{content}</p>
    </div>
  );
};

export default Content;
