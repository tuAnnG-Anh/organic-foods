import ButtonStore from "@/components/Advance/ButtonStore.tsx"
import { BANNER_APP } from "../../../../public"

export const PromoteApp = () => {
  return (
    <div className={"bg-green-200 mt-4 md:mt-0 h-fit xl:h-[531px] flex items-end relative"}>
      <div className={"p-4 sm:px-8 xl:px-0 max-w-[1225px] w-full h-full md:h-auto grid grid-cols-1 sm:grid-cols-2 items-center mx-auto"}>
        <div className={"flex flex-col xl:gap-5 h-fit"}>
          <div className={"capitalize text-black-550 text-lg md:text-2xl"}>Download Organic App</div>
          <div className={"text-black-450 mt-4s text-lg md:leading-[45px]"}>Online Orders made easy, fast and reliable</div>
          <div className={"flex gap-[14px] scale-50 lg:scale-100 -translate-x-1/4 lg:translate-x-0"}>
            <ButtonStore.Google />
            <ButtonStore.AppStore />
          </div>
        </div>
        <div className={"flex-1 h-full w-full text-center"}>
          <img src={BANNER_APP} alt="Promote App" width={600} height={475} className={"object-cover w-2/3 inline-block h-full md:w-full"} />
        </div>
      </div>
    </div>
  )
}
