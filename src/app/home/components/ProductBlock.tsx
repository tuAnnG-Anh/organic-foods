import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import { map } from "lodash"
import {
  PRODUCT_THUMB_1,
  PRODUCT_THUMB_10,
  PRODUCT_THUMB_11,
  PRODUCT_THUMB_12,
  PRODUCT_THUMB_13,
  PRODUCT_THUMB_14,
  PRODUCT_THUMB_15,
  PRODUCT_THUMB_16,
  PRODUCT_THUMB_17,
  PRODUCT_THUMB_18,
  PRODUCT_THUMB_2,
  PRODUCT_THUMB_3,
  PRODUCT_THUMB_4,
  PRODUCT_THUMB_5,
  PRODUCT_THUMB_6,
  PRODUCT_THUMB_7,
  PRODUCT_THUMB_8,
  PRODUCT_THUMB_9,
} from "../../../../public"
import { ProductCart } from "@/components/Advance/ProductCart.tsx"
import { TProductList } from "@/types/product.ts"

const products: TProductList = [
  {
    image: PRODUCT_THUMB_1,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_2,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_3,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_4,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_5,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_6,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_7,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_8,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_9,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_10,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_11,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_12,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_13,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_14,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_15,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_16,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_17,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
  {
    image: PRODUCT_THUMB_18,
    name: "Munch Crunchy Cookies",
    price: 11.0,
    salePrice: 8.0,
    percent: 10,
    rate: 4.5,
    reviews: 221,
  },
]

export const ProductBlock = () => {
  return (
    <section id={"products"}>
      <div className={"mt-4 md:mt-0 md:px-2.5 md:h-[106px] flex items-center justify-between"}>
        <h2 className={"text-xl md:text-2xl m-0 text-black-550 capitalize font-normal"}>Freshly arrived</h2>
        <ButtonCustom className={"leading-4 h-10 xl:h-11.5 px-3 md:px-5 uppercase"} textClassName={"uppercase"} title={"view all"} />
      </div>
      {/*list product*/}
      <div className={"gap-4 md:mt-10 mt-5 md:px-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-7.5 grid-rows-3"}>
        {map(products, (product, index) => {
          return <ProductCart key={index} product={product} />
        })}
      </div>
    </section>
  )
}
