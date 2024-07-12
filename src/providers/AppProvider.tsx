import { ConfigProvider } from "antd"
import { FC, ReactNode } from "react"
import { themeConfig } from "@/config/theme.ts"
import { MainLayout } from "@/layout/MainLayout.tsx"

type Props = {
  logged?: boolean
  children: ReactNode
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ConfigProvider theme={themeConfig}>
      <MainLayout>{children}</MainLayout>
    </ConfigProvider>
  )
}
