import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-wrap">
        <h2>{t("明曜科技總公司")}</h2>
        <p>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {t("新北市樹林區柑園街二段122巷3號10樓(巨人科技)")}
        </p>
        <p>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          SERVICE@ETICABATTERY.COM
        </p>
        <p>
          <i className="fa fa-phone" aria-hidden="true"></i>
          886-2-26801603
        </p>
        <p>
          <i className="fa fa-fax" aria-hidden="true"></i>
          886-2-26689564
        </p>
      </div>

      <div className="footer-wrap">
        <h2>{t("三重新廠(2023下半年落成)")}</h2>
        <p>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {t("新北市三重區中興北街89號")}
        </p>
      </div>

      <p id="copyright">&copy;Copyright {t("明曜科技版權所有")}</p>
    </div>
  );
};

export default Footer;
