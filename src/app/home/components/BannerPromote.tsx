import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import { BANNER_1, BANNER_2, BANNER_3 } from "../../../../public"

export const BannerPromote = () => {
  return (
    <div className={"grid grid-cols-[900px_minmax(0px,_1fr)] grid-rows-2 gap-7.5 h-[640px] py-10"}>
      <div
        className={"row-span-2 w-full h-full flex items-center px-10"}
        style={{
          backgroundImage: `url(${BANNER_1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={"flex flex-col gap-2.5 text-white"}>
          <div className={"uppercase font-semibold text-[40px] leading-14 "}>Items On Sale</div>
          <div className={"text-xl leading-7"}>Discounts up to 30%</div>
          <ButtonCustom
            variant={"link"}
            type={"link"}
            title={"SHOP NOW"}
            className={"p-0 h-auto w-fit font-semibold pb-[5px] border-0 bg-transparent text-white hover:text-primary rounded-none border-b-2 border-white"}
            textClassName={"uppercase text-[17px] leading-5 font-semibold"}
          />
        </div>
      </div>

      <div
        className={"w-full h-full flex items-center px-10"}
        style={{
          backgroundImage: `url(${BANNER_2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={"flex flex-col gap-2.5 text-white"}>
          <div className={"uppercase font-semibold text-[40px] leading-14 "}>Items On Sale</div>
          <div className={"text-xl leading-7"}>Discounts up to 30%</div>
          <ButtonCustom
            variant={"link"}
            type={"link"}
            title={"SHOP NOW"}
            className={"p-0 h-auto w-fit font-semibold pb-[5px] border-0 bg-transparent text-white hover:text-primary rounded-none border-b-2 border-white"}
            textClassName={"uppercase text-[17px] leading-5 font-semibold"}
          />
        </div>
      </div>

      <div
        className={"w-full h-full flex items-center px-10"}
        style={{
          backgroundImage: `url(${BANNER_3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={"flex flex-col gap-2.5 text-white"}>
          <div className={"uppercase font-semibold text-[40px] leading-14 "}>Items On Sale</div>
          <div className={"text-xl leading-7"}>Discounts up to 30%</div>
          <ButtonCustom
            variant={"link"}
            type={"link"}
            title={"SHOP NOW"}
            className={"p-0 h-auto w-fit font-semibold pb-[5px] border-0 bg-transparent text-white hover:text-primary rounded-none border-b-2 border-white"}
            textClassName={"uppercase text-[17px] leading-5 font-semibold"}
          />
        </div>
      </div>
    </div>
  )
}
