import ButtonStore from "@/components/Advance/ButtonStore.tsx"
import { BANNER_APP } from "../../../../public"

export const PromoteApp = () => {
  return (
    <div className={"bg-green-200 h-[531px] flex items-end relative"}>
      <div className={"w-[1225px] grid grid-cols-2 items-center mx-auto"}>
        <div className={"flex flex-col gap-5 h-fit "}>
          <div className={"capitalize text-black-550 text-2xl"}>Download Organic App</div>
          <div className={"text-black-450 text-lg leading-[45px]"}>Online Orders made easy, fast and reliable</div>
          <div className={"flex gap-[14px]"}>
            <ButtonStore.Google />
            <ButtonStore.AppStore />
          </div>
        </div>
        <img src={BANNER_APP} alt="Promote App" width={600} height={475} className={"object-cover w-full"} />
      </div>
    </div>
  )
}
