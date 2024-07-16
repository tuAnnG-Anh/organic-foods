import { BANNER_NEWS_LETTER } from "../../../../public"
import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import { Input } from "antd"

export const Newsletter = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BANNER_NEWS_LETTER})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={"w-full mt-4 px-4 lg:px-0 md:mt-0 h-[325px] flex justify-center items-center"}
    >
      <div className={"flex lg:gap-17.5 h-full justify-evenly lg:justify-between lg:flex-row flex-col"}>
        <div className={"max-w-[450px] mb-4 lg:mb-0 text-white flex flex-col items-center text-center lg:text-start lg:justify-center"}>
          <div className={"text-lg md:text-[38px] md:leading-10 font-medium capitalize"}>Get 20% discount on your first purchase</div>
          <div className={"text-[19px] md:leading-10"}>Just Sign Up & Register it now to become member.</div>
        </div>

        <div className={"flex flex-col justify-between lg:w-[523px] gap-3.5"}>
          <Input
            allowClear
            type="email"
            id="email"
            placeholder={"Email address"}
            prefix={<i className="fa-solid fa-envelope text-base mr-2"></i>}
            className={"md:h-14 text-black-275 py-2.5 text-base [&_.ant-input]:placeholder-black-550 [&_.ant-input]:text-black-550 px-5 rounded-none"}
          />
          <ButtonCustom title={"SUBSCRIBE NOW"} textClassName={"text-base leading-9 text-white"} className={"rounded-none h-12 md:h-15"} />
        </div>
      </div>
    </div>
  )
}
