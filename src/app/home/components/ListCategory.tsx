import { isEmpty, map } from "lodash"
import { CategoryItem } from "@/components/Advance/CategoryItem.tsx"

const categories = [
  "Blue diamon almonds",
  "Angie’s Boomchickapop Corn",
  "Salty kettle Corn",
  "Chobani Greek Yogurt",
  "Sweet Vanilla Yogurt",
  "Foster Farms Takeout Crispy wings",
  "Warrior Blend Organic",
  "Encore Seafoods Stuffed Alaskan Salmon",
  "Chao Cheese Creamy",
  "Chicken meatballs",
  "Werther’s caramel hard candies",
  "Mate coffee creamer",
  "Pasture raised chicken eggs",
  "Tree top fruit water",
  "Natural Vanilla Light Roast Coffee",
  "Sweet Vanilla essence Yogurt",
]

export const ListCategory = () => {
  return (
    <section id={"listCategory"} className={"mt-4 md:my-2.5"}>
      <h2 className={"text-xl md:text-2xl text-black-550 leading-[38px] capitalize m-0 font-normal"}>People are also looking for</h2>
      {!isEmpty(categories) && (
        <div className={"flex gap-3 md:gap-[15px] flex-wrap mt-4 md:mt-5"}>
          {map(categories, (category, index) => {
            return <CategoryItem key={index} category={category} />
          })}
        </div>
      )}
    </section>
  )
}
