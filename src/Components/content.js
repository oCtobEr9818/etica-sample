import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Content = ({
  imageL = null,
  altL = "",
  firstParagraph = "",
  secondParagraph = "",
  thirdParagraph = "",
  judge = false,
}) => {
  const { t } = useTranslation();

  Aos.init({
    offset: 100,
    delay: 50,
    once: true,
  });

  return (
    <div className="content">
      <img
        className="contentLeft-img"
        src={imageL}
        alt={altL}
        data-aos="fade-up"
        data-aos-duration="500"
      />
      <div
        className="milestone"
        style={{ display: `${judge === false ? "none" : "inline-block"}` }}
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <table>
          <tbody>
            <tr>
              <th>2002</th>
              <td>{t("明曜科技成立，從事工控手持裝置電池模組製造")}</td>
            </tr>
            <tr>
              <th>2007</th>
              <td>{t(`工廠取得ISO9001：2008認證`)}</td>
            </tr>
            <tr>
              <th>2008</th>
              <td>{t("通過TUV工廠認證")}</td>
            </tr>
            <tr>
              <th>2009</th>
              <td>{t("開發HVDC系統")}</td>
            </tr>
            <tr>
              <th>2013</th>
              <td>{t("進入日本最大電裝品牌DENSO供應鏈")}</td>
            </tr>
            <tr>
              <th>2016</th>
              <td>{t("開發新產品應用於賓士貨卡")}</td>
            </tr>
            <tr>
              <th rowSpan={2}>2017</th>
              <td>{t("入選鄧白氏中小企業菁英獎")}</td>
            </tr>
            <tr>
              <td>{t("工廠取得ISO9001：2015認證")}</td>
            </tr>
            <tr>
              <th>2018</th>
              <td>{t("新營運總部啟用")}</td>
            </tr>
            <tr>
              <th>2019</th>
              <td>{t("開拓儲能系統產品線")}</td>
            </tr>
            <tr>
              <th rowSpan={2}>2020</th>
              <td>{t("研發輕型電動載具電池")}</td>
            </tr>
            <tr>
              <td>{t("取得IATF16949認證")}</td>
            </tr>
            <tr>
              <th>2022</th>
              <td>{t("三重新廠動工")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="content-txt" data-aos="fade-up" data-aos-duration="500">
        <p>{t(`${firstParagraph}`)}</p>
        <p>{t(`${secondParagraph}`)}</p>
        <p>{t(`${thirdParagraph}`)}</p>
      </div>
    </div>
  );
};

export default Content;
