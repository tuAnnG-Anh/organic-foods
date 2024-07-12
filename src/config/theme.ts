// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#FF4000",
    colorBgContainer: "#ffffff",
    colorBorder: "#d9d9d9",
  },
  components: {
    Message: {
      contentBg: "#333333",
      colorText: "#FFFFFF",
    },
  },
};
