import { FC } from "react"

type Props = {
  category: string
}
export const CategoryItem: FC<Props> = ({ category }) => {
  return <div className={"text-black-450 text-base leading-[21px] rounded-[10px] px-3 py-2.5 bg-green-200 cursor-pointer hover:bg-green-600 hover:text-black-550 duration-200"}>{category}</div>
}
