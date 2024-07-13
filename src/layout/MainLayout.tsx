import { FC, ReactNode } from "react"
import { Header } from "@/layout/Header.tsx"
import { Footer } from "@/layout/Footer.tsx"

type Props = {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div id={"main-layout"}>
      <Header />
      <div className={"content"}>{children}</div>
      <Footer />
    </div>
  )
}
