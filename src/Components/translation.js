import { useTranslation } from "react-i18next";

export default function SwitchLanguage() {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <select
        className="lang-menu"
        onChange={(e) => handleChangeLanguage(e.target.value)}
      >
        <option value="zh-TW">zh-TW</option>
        <option value="en">English</option>
      </select>
    </>
  );
}
