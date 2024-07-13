import { SliderCustom } from "@/components/Advance/SliderBlock.tsx"
import { map, size } from "lodash"
import { CATEGORY_THUMB_1 } from "../../../../public"

const categories = [
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
]

export const CategoryBlock = () => {
  return (
    <SliderCustom title={"Popular categories"} childrenLength={size(categories)}>
      {map(categories, (category, index) => {
        return (
          <div key={index} className={"flex flex-col cursor-pointer"}>
            <img alt="" src={category.image} className={"rounded-full"} />
            <div className="mt-[19px] text-center">{category.content}</div>
          </div>
        )
      })}
    </SliderCustom>
  )
}
