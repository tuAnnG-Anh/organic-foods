import { Banner } from "@/app/home/components/Banner.tsx"
import { CategoryBlock } from "@/app/home/components/CategoryBlock.tsx"

export const Home = () => {
  return (
    <div className="screen">
      <Banner />
      <div className={"container py-10"}>
        <CategoryBlock />
      </div>
    </div>
  )
}
