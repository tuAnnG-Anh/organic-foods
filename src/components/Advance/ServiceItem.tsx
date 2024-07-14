import { TService } from "@/types/services.ts"
import { FC } from "react"

type Props = {
  service: TService
}
export const ServiceItem: FC<Props> = ({ service }) => {
  return (
    <div className={"flex flex-col gap-2.5 text-black-500  border border-black-225 px-7.5 py-5"}>
      <img src={service.icon} alt={service.title} className={"w-12 h-12"} />
      <div className={"text-[21px] font-semibold leading-[25.12px]"}>{service.title}</div>
      <div className={"text-[17px] text-base leading-6"}>{service.text}</div>
    </div>
  )
}
