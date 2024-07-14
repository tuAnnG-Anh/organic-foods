import { TArticle } from "@/types/artcile.ts"
import { FC } from "react"
import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import moment from "moment"

type Props = {
  article: TArticle
}
export const ArticleItem: FC<Props> = ({ article }) => {
  return (
    <div className={"border flex flex-col"}>
      <div className={"overflow-hidden max-h-[240px]"}>
        <img src={article.image} width={500} height={240} className={"w-full cursor-pointer duration-500 h-auto block object-cover"} alt={article.title} />
      </div>
      <div className={"flex gap-2.5 p-7.5 items-start justify-end flex-1 flex-col"}>
        <div className={"flex items-center justify-center text-black-315"}>
          <div className={"text-center"}>
            <i className="fa-regular fa-calendar text-lg"></i>
            <span className={"text-base ml-2 leading-[35.36px]"}>{moment(article.created_at).format("Do MMM YYYY")}</span>
          </div>
          <div className={"text-center ml-5"}>
            <i className="fa-regular fa-folder text-lg"></i>
            <span className={"text-base ml-2 leading-[35.36px]"}>{article.category}</span>
          </div>
        </div>

        {/*title*/}

        <div className={"text-black-500 text-[21px] capitalize font-semibold leading-[29px] line-clamp-2"}>{article.title}</div>

        {/*description*/}
        <div className={"text-black-350 text-[17px] leading-[25.5px] line-clamp-3"}>{article.description}</div>

        {/*read more*/}
        <ButtonCustom
          variant={"link"}
          type={"link"}
          title={"READ MORE"}
          className={"p-0 h-auto font-semibold pb-[5px] border-0 rounded-none border-b-2 border-black-800"}
          textClassName={"uppercase text-[15px] leading-[18px]"}
        />
      </div>
    </div>
  )
}
