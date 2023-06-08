import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Content = ({
  imageL = null,
  imageR = null,
  altL = "",
  altR = "",
  content = "",
  content2 = "",
  content3 = "",
}) => {
  const { t } = useTranslation();

  Aos.init({
    offset: 100,
    delay: 50,
    once: true,
  });

  return (
    <div className="content">
      <img className="contentLeft-img" src={imageL} alt={altL} />
      <img
        className="contentRight-img"
        src={imageR}
        alt={altR}
        data-aos="zoom-in-up"
        data-aos-duration="500"
      />
      <div className="content-txt" data-aos="fade-up" data-aos-duration="500">
        <p>{t(`${content}`)}</p>
        <p>{t(`${content2}`)}</p>
        <p>{t(`${content3}`)}</p>
      </div>
    </div>
  );
};

export default Content;
