import { useTranslation } from "react-i18next";

export default function SwitchLanguage() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button onClick={() => changeLanguage("tw")}>中文</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </>
  );
}
