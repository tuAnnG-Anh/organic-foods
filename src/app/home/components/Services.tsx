import { map } from "lodash"
import { ServiceItem } from "@/components/Advance/ServiceItem.tsx"
import { TService } from "@/types/services.ts"
import { ICON_BOX, ICON_CHECK, ICON_DAILY, ICON_LOCK, ICON_PROTECT } from "../../../../public"

const services: TService[] = [
  {
    id: 1,
    icon: ICON_BOX,
    title: "Free delivery",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 2,
    icon: ICON_LOCK,
    title: "secure payment",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 3,
    icon: ICON_PROTECT,
    title: "Quality guarantee",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 4,
    icon: ICON_CHECK,
    title: "guaranteed savings",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 5,
    icon: ICON_DAILY,
    title: "Daily offers",
    text: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
]
export const Services = () => {
  return (
    <section id={"service"}>
      <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-1 gap-5"}>
        {map(services, (service) => {
          return <ServiceItem key={service.id} service={service} />
        })}
      </div>
    </section>
  )
}
