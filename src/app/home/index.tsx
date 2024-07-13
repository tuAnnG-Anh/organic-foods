import { Banner } from "@/app/home/components/Banner.tsx"
import { CategoryBlock } from "@/app/home/components/CategoryBlock.tsx"
import { ProductBlock } from "@/app/home/components/ProductBlock.tsx"
import { BannerPromote } from "@/app/home/components/BannerPromote.tsx"
import { BestSellingBlock } from "@/app/home/components/BestSellingBlock.tsx"
import { ProductOnSale } from "@/app/home/components/ProductOnSale.tsx"
import { ArticleBlock } from "@/app/home/components/ArticleBlock.tsx"

export const Home = () => {
  return (
    <div className="screen">
      <Banner />
      <div className={"container grid grid-cols-1 gap-10 my-10"}>
        <CategoryBlock />
        <ProductBlock />
        <BannerPromote />
        <BestSellingBlock />
        <ProductOnSale />
        <ArticleBlock />
      </div>
    </div>
  )
}
