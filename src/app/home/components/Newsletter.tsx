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
      className={"w-full h-[325px] flex justify-center items-center"}
    >
      <div className={"flex gap-17.5 "}>
        <div className={"max-w-[450px] text-white flex flex-col justify-between"}>
          <div className={"text-[38px] leading-10 font-medium capitalize"}>Get 20% discount on your first purchase</div>
          <div className={"text-[19px] leading-10"}>Just Sign Up & Register it now to become member.</div>
        </div>

        <div className={"flex flex-col justify-between w-[523px] gap-3.5"}>
          <Input
            allowClear
            type="email"
            id="email"
            placeholder={"Email address"}
            prefix={<i className="fa-solid fa-envelope text-base mr-2"></i>}
            className={"h-14 text-black-275 py-2.5 text-base [&_.ant-input]:placeholder-black-550 [&_.ant-input]:text-black-550 px-5 rounded-none"}
          />
          <ButtonCustom title={"SUBSCRIBE NOW"} textClassName={"text-base leading-9 text-white"} className={"rounded-none h-15"} />
        </div>
      </div>
    </div>
  )
}
