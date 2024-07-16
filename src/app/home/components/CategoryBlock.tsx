import { SliderCustom } from "@/components/Advance/SliderBlock.tsx"
import { map, size } from "lodash"
import { CATEGORY_THUMB_1, CATEGORY_THUMB_2, CATEGORY_THUMB_3, CATEGORY_THUMB_4, CATEGORY_THUMB_5, CATEGORY_THUMB_6, CATEGORY_THUMB_7, CATEGORY_THUMB_8 } from "../../../../public"

const categories = [
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_2,
    content: "Breads & Sweets",
  },
  {
    image: CATEGORY_THUMB_3,
    content: "Wine & Drinks",
  },
  {
    image: CATEGORY_THUMB_4,
    content: "Oil & Ghee",
  },
  {
    image: CATEGORY_THUMB_5,
    content: "Raw Meat",
  },
  {
    image: CATEGORY_THUMB_6,
    content: "Natural Herbs",
  },
  {
    image: CATEGORY_THUMB_7,
    content: "Eggs",
  },
  {
    image: CATEGORY_THUMB_8,
    content: "Bakery",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_2,
    content: "Breads & Sweets",
  },
  {
    image: CATEGORY_THUMB_3,
    content: "Wine & Drinks",
  },
  {
    image: CATEGORY_THUMB_4,
    content: "Oil & Ghee",
  },
  {
    image: CATEGORY_THUMB_5,
    content: "Raw Meat",
  },
  {
    image: CATEGORY_THUMB_6,
    content: "Natural Herbs",
  },
  {
    image: CATEGORY_THUMB_7,
    content: "Eggs",
  },
  {
    image: CATEGORY_THUMB_8,
    content: "Bakery",
  },
  {
    image: CATEGORY_THUMB_1,
    content: "Fruits & Veges",
  },
  {
    image: CATEGORY_THUMB_2,
    content: "Breads & Sweets",
  },
  {
    image: CATEGORY_THUMB_3,
    content: "Wine & Drinks",
  },
  {
    image: CATEGORY_THUMB_4,
    content: "Oil & Ghee",
  },
  {
    image: CATEGORY_THUMB_5,
    content: "Raw Meat",
  },
  {
    image: CATEGORY_THUMB_6,
    content: "Natural Herbs",
  },
  {
    image: CATEGORY_THUMB_7,
    content: "Eggs",
  },
  {
    image: CATEGORY_THUMB_8,
    content: "Bakery",
  },
]

export const CategoryBlock = () => {
  return (
    <div className={"overflow-hidden mt-4 md:mt-0"}>
      <SliderCustom
        slidesToScroll={4}
        slidesToShow={8}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ]}
        title={"Popular categories"}
        childrenLength={size(categories)}
        className={"[&_.slick-slide]:px-2 [&_.slick-list]:-mx-2 md:[&_.slick-slide]:px-[15.5px] md:[&_.slick-list]:-mx-[15.5px] [&_.slick-list]:my-0"}
      >
        {map(categories, (category, index) => {
          return (
            <div key={index} className={"flex flex-col cursor-pointer"}>
              <div className={"rounded-full overflow-hidden w-full border-2 hover:border-primary border-transparent duration-500"}>
                <img alt="" src={category.image} width={160} height={160} className={"hover:scale-110 w-full h-full object-cover duration-500"} />
              </div>
              <div className="mt-[19px] text-center">{category.content}</div>
            </div>
          )
        })}
      </SliderCustom>
    </div>
  )
}
