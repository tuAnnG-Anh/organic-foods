import { BANNER, ICON_REFRESH, ICON_SHIPPING, ICON_TEA } from "../../../../public"
import { map } from "lodash"
import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import { formatNumber } from "@/util/Common.ts"

const items = [
  {
    title: "Fresh from farm",
    icon: <img alt="" src={ICON_REFRESH} width={64} height={64} className={"w-10 h-10"} />,
    content: "Consectetur adipiscing elit Sagittis sed ptibus",
    bgColor: "#F95F09",
  },
  {
    title: "100% Organic",
    icon: <img alt="" src={ICON_TEA} width={54} height={54} className={"w-10 h-10"} />,
    content: "Consectetur adipiscing elit Sagittis sed ptibus",
    bgColor: "#364127",
  },
  {
    title: "Free delivery",
    icon: <img alt="" src={ICON_SHIPPING} width={62} height={62} className={"w-10 h-10"} />,
    content: "Consectetur adipiscing elit Sagittis sed ptibus",
    bgColor: "#6BB252",
  },
]

const process = [
  {
    count: 19000,
    content: "Variety of Products",
  },

  {
    count: 9000,
    content: "Happy Customers",
  },
  {
    count: 10000,
    content: "Store Locations",
  },
]

export const Banner = () => {
  return (
    <section id={"banner"} className={"relative md:mt-21 mt-14.5 xl:mt-22.5"}>
      {/*Banner*/}
      <img src={BANNER} alt={"Banner"} width={1800} height={814} className={"w-full h-100 md:h-auto max-h-[814px] object-cover block"} />

      {/*content*/}

      <div className={" absolute lg:w-[566px] flex gap-4 lg:gap-10 flex-col top-20 left-7.5 md:top-[10%] md:left-15 2xl:left-[271px] 2xl:top-[122px]"}>
        <div className={"text-black-800 text-2xl lg:leading-[82px] lg:text-[69px]"}>
          <span className={"text-primary font-bold"}>Organic</span> Foods
          <br /> at your <span className={"font-bold"}>Doorstep</span>
        </div>

        <div className={"flex gap-[10px]"}>
          <ButtonCustom title={"Start Shopping"} buttonSize={"large"} textClassName={""} className={"px-6 h-10 text-sm md:text-lg md:h-12 lg:px-10 lg:h-15 lg:text-lg rounded-[110px]"} />
          <ButtonCustom title={"Join us"} buttonSize={"large"} className={"px-6 h-10 text-sm md:text-lg md:h-12 lg:px-10 lg:h-15 lg:text-lg rounded-[100px]"} variant={"dark"} />
        </div>

        <div className={"lg:py-5 gap-4 md:gap-5 flex flex-wrap items-center"}>
          {map(process, (item, index) => {
            return (
              <div key={index} className={"text-black-900 flex items-center gap-2.5 max-w-[165px] uppercase"}>
                <div className={"font-bold text-lg lg:text-2xl leading-[38.4px]"}>{formatNumber(item.count)}</div>
                <div className={"text-sm leading-[16.8px]"}>{item.content}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/*something*/}
      <div className={"xl:absolute text-white grid grid-cols-1 md:grid-cols-3 w-full xl:w-[1280px] bottom-0 left-1/2 xl:-translate-x-1/2"}>
        {map(items, (item, index) => {
          return (
            <div key={index} className={"flex gap-5 p-4 md:p-5 items-start justify-center"} style={{ backgroundColor: item.bgColor }}>
              {item.icon}
              <div>
                <h1 className={"font-semibold text-lg md:text-xl m-0 leading-7 md:leading-[33.6px]"}>{item.title}</h1>
                <p className={"text-sm md:text-base m-0 leading-[26.4px]"}>{item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
