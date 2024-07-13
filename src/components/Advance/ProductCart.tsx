import { TProduct } from "@/types/product.ts"
import { FC } from "react"
import { Rate } from "antd"

type Props = {
  product: TProduct
}
export const ProductCart: FC<Props> = ({ product }) => {
  return (
    <div className={"p-2.5 cursor-pointer flex flex-col gap-2.5 items-center justify-center"}>
      <img src={product.image} alt={product.name} width={"auto"} height={210} className={"w-auto h-52.5"} />
      <div className={"flex flex-col gap-[5px] items-center justify-center text-black-500"}>
        <div>{product.name}</div>
        <div className={"font-openSans flex gap-2 items-center font-semibold"}>
          <span className={"line-through text-black-400 text-[15px]"}>${product.price.toFixed(2)}</span>

          <span className={"text-black-400 text-[17px]"}>${product.salePrice.toFixed(2)}</span>

          <div className={"text-black-300 border-black-250 border h-5 px-[7px] flex items-center text-xs font-semibold"}>{product.percent}% OFF</div>
        </div>
        <div className={"flex gap-2.5 items-center"}>
          <Rate allowHalf defaultValue={product.rate} disabled className={"text-[13px] leading-5 grid grid-cols-5 w-25 justify-items-center [&_.ant-rate-star]:m-0 "} />
          <div className={"text-black-300 font-semibold text-[15px]"}>({product.reviews})</div>
        </div>
      </div>
    </div>
  )
}
