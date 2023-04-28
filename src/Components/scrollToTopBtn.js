import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  // 設定 isFixed 狀態為 false，表示按鈕一開始不固定在畫面底部
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 如果向下滑動超過 500px 且距離底部 250px（若螢幕寬度小於 768px 則為 130px），就將按鈕固定在畫面底部
      if (
        window.pageYOffset > 500 &&
        window.innerHeight + window.pageYOffset <
          document.body.offsetHeight - (window.innerWidth < 768 ? 130 : 250)
      ) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll); // 監聽網頁滾動事件
    return () => window.removeEventListener("scroll", handleScroll); // 移除監聽事件
  }, []);

  // 點擊按鈕時將畫面滑動到頂部
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // 設定按鈕的 CSS style
  const style = {
    position: isFixed ? "fixed" : "absolute",
    bottom: isFixed // 如果 isFixed 狀態為 true，則按鈕的 bottom 距離為 100px 或 350px，否則 bottom 距離為 50px 或 180px
      ? window.innerWidth < 768 // 如果螢幕寬度小於 768px，則 bottom 距離為 50px，否則 bottom 距離為 100px
        ? "50px"
        : "100px"
      : window.innerWidth < 768 // 如果螢幕寬度小於 768px，則 bottom 距離為 180px，否則 bottom 距離為 350px
      ? "180px"
      : "350px",
    right: window.innerWidth < 768 ? "8%" : "3%", // 如果螢幕寬度小於 768px，則 right 距離為 8%，否則 right 距離為 3%
  };

  return (
    <button style={style} className="scroll-to-top" onClick={handleClick}>
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
};

export default ScrollToTopButton;
