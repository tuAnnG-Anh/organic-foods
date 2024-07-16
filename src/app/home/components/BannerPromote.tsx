import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import { BANNER_1, BANNER_2, BANNER_3 } from "../../../../public"

export const BannerPromote = () => {
  return (
    <div className={"grid grid-cols-1 2xl:grid-cols-[900px_minmax(0px,_1fr)] sm:grid-rows-2 sm:grid-cols-2 gap-4 md:gap-7.5 h-[640px] py-4 md:py-10"}>
      <div
        className={"sm:row-span-1 sm:col-span-2 lg:row-span-2 lg:col-span-1 w-full h-full flex items-center px-10"}
        style={{
          backgroundImage: `url(${BANNER_1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={"flex flex-col md:gap-2.5 text-white"}>
          <div className={"text-xl uppercase font-semibold md:text-[40px] md:leading-14 "}>Items On Sale</div>
          <div className={"md:text-xl leading-7"}>Discounts up to 30%</div>
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
        className={"w-full h-full col-span-1 sm:col-span-1 lg:row-span-1 lg:col-span-1 row-span-1 flex items-center px-10"}
        style={{
          backgroundImage: `url(${BANNER_2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={"flex flex-col md:gap-2.5 text-white"}>
          <div className={"text-xl uppercase font-semibold md:text-[40px] md:leading-14 "}>Items On Sale</div>
          <div className={"md:text-xl leading-7"}>Discounts up to 30%</div>
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
        className={"w-full h-full flex items-center px-10 sm:col-span-1 lg:row-span-1 lg:col-span-1"}
        style={{
          backgroundImage: `url(${BANNER_3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={"flex flex-col md:gap-2.5 text-white"}>
          <div className={"text-xl uppercase font-semibold md:text-[40px] md:leading-14 "}>Items On Sale</div>
          <div className={"md:text-xl leading-7"}>Discounts up to 30%</div>
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
