import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import { ArticleItem } from "@/components/Advance/ArticleItem.tsx"
import { map } from "lodash"
import { TArticle } from "@/types/artcile.ts"
import { POST_THUMB_1, POST_THUMB_2, POST_THUMB_3 } from "../../../../public"

const articles: TArticle[] = [
  {
    image: POST_THUMB_1,
    title: "10 Crazy ways to minimize oil in your diet with numerous health benefits",
    description: "consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
    category: "Health",
    created_at: "2021-09-20",
    link: "#",
  },
  {
    image: POST_THUMB_2,
    title: "10 Crazy ways to minimize oil in your diet with numerous health benefits",
    description: "consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
    category: "Health",
    created_at: "2021-09-20",
    link: "#",
  },
  {
    image: POST_THUMB_3,
    title: "10 Crazy ways to minimize oil in your diet with numerous health benefits",
    description: "consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
    category: "Health",
    created_at: "2021-09-20",
    link: "#",
  },
]

export const ArticleBlock = () => {
  return (
    <section id={"article"}>
      <div className={"flex items-center justify-between"}>
        <h2 className={"m-0 text-2xl text-black-550 capitalize font-normal"}>our latest articles</h2>
        <ButtonCustom className={"leading-4 uppercase"} textClassName={"uppercase"} title={"view aLL"} />
      </div>
      {/*list product*/}
      <div className={"mt-5 grid grid-cols-3 gap-13"}>
        {map(articles, (article, index) => {
          return <ArticleItem key={index} article={article} />
        })}
      </div>
    </section>
  )
}
