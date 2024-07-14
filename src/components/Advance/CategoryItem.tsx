import { FC } from "react"

type Props = {
  category: string
}
export const CategoryItem: FC<Props> = ({ category }) => {
  return (
    <div className={"text-black-450 text-base leading-[21px] rounded-[10px] md:px-3 px-2 py-1.5 md:py-2.5 bg-green-200 cursor-pointer hover:bg-green-600 hover:text-black-550 duration-200"}>
      {category}
    </div>
  )
}
