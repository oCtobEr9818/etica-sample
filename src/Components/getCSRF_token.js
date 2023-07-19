import { useEffect } from "react";
import token from "./api/token";

export const getCSRFtoken = () => {
  useEffect(() => {
    // 呼叫 API 取得 CSRF 令牌
    fetch(token)
      .then((response) => response.text())
      .then((csrfToken) => {
        // 將 CSRF 令牌設置到 meta 標籤中
        const metaTag = document.querySelector('meta[name="csrf-token"]');
        if (metaTag) {
          metaTag.setAttribute("content", csrfToken);
        }
      })
      .catch((error) => {
        console.error("無法取得 CSRF 令牌:", error);
      });
  }, []);
};
