// theme/themeConfig.ts
import type { ThemeConfig } from "antd"

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#6BB252",
    colorBgContainer: "#ffffff",
    colorBorder: "#D3D3D3",
  },
  components: {
    Message: {
      contentBg: "#333333",
      colorText: "#FFFFFF",
    },
  },
}
