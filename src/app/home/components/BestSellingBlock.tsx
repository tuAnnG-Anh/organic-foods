import { SliderCustom } from "@/components/Advance/SliderBlock.tsx"
import { map, size } from "lodash"
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

export const BestSellingBlock = () => {
  return (
    <SliderCustom
      slidesToScroll={4}
      className={"z-[2] [&_.slick-slide]:px-[15px] [&_.slick-slide]:!h-full [&_.slick-slide>div]:h-full [&_.slick-list]:-mx-[15px] [&_.slick-list]:my-0"}
      slidesToShow={6}
      title={"Best Selling Products"}
      childrenLength={size(products)}
      viewAll={false}
      classHeader={"mb-5 md:mb-10"}
    >
      {map(products, (product, index) => {
        return <ProductCart className={"h-full"} key={index} product={product} />
      })}
    </SliderCustom>
  )
}
