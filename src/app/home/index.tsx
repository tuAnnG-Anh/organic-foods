import { Banner } from "@/app/home/components/Banner.tsx"
import { CategoryBlock } from "@/app/home/components/CategoryBlock.tsx"
import { ProductBlock } from "@/app/home/components/ProductBlock.tsx"

export const Home = () => {
  return (
    <div className="screen">
      <Banner />
      <div className={"container grid grid-cols-1 gap-10 my-10"}>
        <CategoryBlock />
        <ProductBlock />
      </div>
    </div>
  )
}
