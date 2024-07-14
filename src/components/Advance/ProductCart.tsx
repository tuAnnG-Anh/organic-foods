import { TProduct } from "@/types/product.ts"
import { FC, useState } from "react"
import { Rate } from "antd"
import { classNames } from "@/util/Common.ts"
import { InputQuantity } from "@/components/Basic/InputNumber.tsx"
import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"

type Props = {
  product: TProduct
  className?: string
}
export const ProductCart: FC<Props> = ({ product, className }) => {
  const [value, setValue] = useState(0)

  return (
    <div className={classNames("h-full relative right-0", className)}>
      <div
        className={classNames(
          "p-2.5 h-full gap-2.5 bg-white cursor-pointer flex flex-col items-center shadow-transparent  justify-between"
          // hovered && "rounded-[20px] z-[1] gap-10 duration-200 px-7.5 py-6.5 -translate-x-4 absolute top-0 shadow-3 h-fit"
        )}
      >
        <div className={"w-full flex items-center justify-center"}>
          <img src={product.image} alt={product.name} height={230} className={"block max-w-full object-cover max-h-[210px]"} />
        </div>
        <div className={"flex w-full flex-col gap-[5px] items-center justify-end text-black-500"}>
          <div>{product.name}</div>
          <div className={"font-openSans flex flex-wrap gap-[5px] md:gap-2 items-center font-semibold"}>
            <span className={"line-through text-black-400 text-[15px]"}>${product.price.toFixed(2)}</span>

            <span className={"text-black-400 text-[17px]"}>${product.salePrice.toFixed(2)}</span>

            <div className={"text-black-300 border-black-250 border h-5 px-[7px] flex items-center text-xs font-semibold"}>{product.percent}% OFF</div>
          </div>
          <div className={"flex gap-2.5 items-center"}>
            <Rate allowHalf defaultValue={product.rate} disabled className={"text-[13px] leading-5 grid grid-cols-5 w-25 justify-items-center [&_.ant-rate-star]:m-0 "} />
            <div className={"text-black-300 font-semibold text-[15px]"}>({product.reviews})</div>
          </div>
          <InputQuantity classGroup={"mt-[15px]"} setValue={(value) => setValue(value as number)} maxValue={10} value={value} />
          <div className={"mt-5 flex gap-2 w-full"}>
            <ButtonCustom
              title={"ADD TO CART"}
              buttonSize={"small"}
              icon={<i className="fa-sharp fa-light fa-cart-plus"></i>}
              className={"gap-2 rounded-[10px] duration-200 hover:text-primary flex-1 text-black-800 text-[13px]"}
              variant={"outline"}
            />
            <ButtonCustom
              buttonSize={"small"}
              icon={<i className="fa-light fa-heart"></i>}
              className={"-2 rounded-[10px] duration-200 hover:text-primary text-black-800 text-[13px]"}
              variant={"outline"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
