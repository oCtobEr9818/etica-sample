import { useTranslation } from "react-i18next";

export default function SwitchLanguage() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <select
        className="lang-menu"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="tw">中文</option>
        <option value="en">English</option>
      </select>
    </>
  );
}
