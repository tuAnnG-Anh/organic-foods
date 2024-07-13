import { TProduct } from "@/types/product.ts"
import { FC, useState } from "react"
import { Rate } from "antd"
import { classNames } from "@/util/Common.ts"
import { InputQuantity } from "@/components/Basic/InputNumber.tsx"
import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"

type Props = {
  product: TProduct
}
export const ProductCart: FC<Props> = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const [value, setValue] = useState(0)

  return (
    <div className={"h-full relative"}>
      <div
        className={classNames(
          "p-2.5 rounded-[20px] h-full gap-2.5 bg-white cursor-pointer flex flex-col items-center justify-between",
          hovered && "absolute px-7.5 z-10 py-6.5 duration-200 -top-6.5 -left-7.5 -right-7.5 -bottom-6.5 shadow-3 h-[470px]"
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={"w-full flex items-center justify-center"}>
          <img src={product.image} alt={product.name} className={"block max-w-full max-h-[210px]"} />
        </div>
        <div className={"flex w-full flex-col gap-[5px] items-center justify-end text-black-500"}>
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
          {hovered && <InputQuantity classGroup={"mt-[15px]"} setValue={(value) => setValue(value as number)} maxValue={10} value={value} />}
          {hovered && (
            <div className={"mt-5 flex gap-2 w-full"}>
              <ButtonCustom
                title={"ADD TO CART"}
                buttonSize={"small"}
                icon={<i className="fa-sharp fa-light fa-cart-plus"></i>}
                className={"gap-2 rounded-[10px] group hover:text-primary flex-1 text-black-800 text-[13px]"}
                variant={"outline"}
              />
              <ButtonCustom buttonSize={"small"} icon={<i className="fa-light fa-heart"></i>} className={"-2 rounded-[10px] hover:text-primary text-black-800 text-[13px]"} variant={"outline"} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
