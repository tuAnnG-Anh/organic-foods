import { BANNER_1, BANNER_2, BANNER_3 } from "../../../../public"

export const BannerPromote = () => {
  return (
    <div className={"grid grid-cols-2 grid-rows-2 gap-7.5 h-[640px] py-10"}>
      <img alt={""} src={BANNER_1} className={"row-span-2 w-full h-full"} />
      <img alt={""} src={BANNER_2} className={"w-full h-full"} />
      <img alt={""} src={BANNER_3} className={"w-full h-full"} />
    </div>
  )
}
