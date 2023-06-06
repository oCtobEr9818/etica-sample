import { useTranslation } from "react-i18next";

const ContentTitle = ({ title, id }) => {
  const { t } = useTranslation();

  return (
    <div className="content-title">
      <div className="wrap">
        <h2 id={id}>{t(title)}</h2>

        <div className="decoraction">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentTitle;
