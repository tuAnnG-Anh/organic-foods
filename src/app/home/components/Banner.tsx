import { BANNER, ICON_REFRESH, ICON_SHIPPING, ICON_TEA } from "../../../../public"
import { map } from "lodash"
import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import { formatNumber } from "@/util/Common.ts"

const items = [
  {
    title: "Fresh from farm",
    icon: <img alt="" src={ICON_REFRESH} width={64} height={64} />,
    content: "Consectetur adipiscing elit Sagittis sed ptibus",
    bgColor: "#F95F09",
  },
  {
    title: "100% Organic",
    icon: <img alt="" src={ICON_TEA} width={54} height={54} />,
    content: "Consectetur adipiscing elit Sagittis sed ptibus",
    bgColor: "#364127",
  },
  {
    title: "Free delivery",
    icon: <img alt="" src={ICON_SHIPPING} width={62} height={62} />,
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
    <section id={"banner"} className={"relative"}>
      {/*Banner*/}
      <img src={BANNER} alt={"Banner"} width={1800} height={814} className={"w-full h-80 md:h-auto max-h-[814px] object-cover block"} />

      {/*content*/}

      <div className={" absolute w-[566px] flex gap-10 flex-col left-[271px] top-[122px]"}>
        <div className={"text-black-800 text-[69px]"}>
          <span className={"text-primary font-bold"}>Organic</span> Foods
          <br /> at your <span className={"font-bold"}>Doorstep</span>
        </div>

        <div className={"flex gap-[10px]"}>
          <ButtonCustom title={"Start Shopping"} size={"large"} className={"rounded-[110px]"} />
          <ButtonCustom title={"Join us"} size={"large"} className={"rounded-[100px]"} variant={"dark"} />
        </div>

        <div className={"py-5 gap-5 flex items-center"}>
          {map(process, (item, index) => {
            return (
              <div key={index} className={"text-black-900 flex items-center gap-2.5 max-w-[165px] uppercase"}>
                <div className={"font-bold text-2xl leading-[38.4px]"}>{formatNumber(item.count)}</div>
                <div className={"text-sm leading-[16.8px]"}>{item.content}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/*something*/}
      <div className={"md:absolute text-white grid grid-cols-1 md:grid-cols-3 w-full md:w-[1280px] bottom-0 left-1/2 md:-translate-x-1/2"}>
        {map(items, (item, index) => {
          return (
            <div key={index} className={"flex gap-5 p-5 items-start justify-center"} style={{ backgroundColor: item.bgColor }}>
              {item.icon}
              <div>
                <h1 className={"font-semibold text-xl m-0 leading-[33.6px]"}>{item.title}</h1>
                <p className={"text-base m-0 leading-[26.4px]"}>{item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
