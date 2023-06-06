import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Content = ({
  imageL,
  imageR,
  altL,
  altR,
  content,
  // content2,
  // content3,
}) => {
  const { t } = useTranslation();

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
      <p>{t(`${content}`)}</p>
    </div>
  );
};

export default Content;
