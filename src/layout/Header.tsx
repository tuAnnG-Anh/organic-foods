import { ICON_BOOKMARK, ICON_CART, ICON_MENU, ICON_USER, LOGO_SMALL } from "../../public"
import Search from "antd/es/input/Search"
import { classNames } from "@/util/Common.ts"
import { css } from "@emotion/css"
import { map } from "lodash"

const categories = [
  {
    id: "home",
    link: "#",
    title: "Home",
  },
  {
    id: "sale",
    link: "#",
    title: "Sale",
  },
  {
    id: "stores",
    link: "#",
    title: "Stores",
  },
  {
    id: "about",
    link: "#",
    title: "About",
  },
  {
    id: "contact",
    link: "#",
    title: "Contact",
  },
]

const cart = [
  {
    id: "user",
    icon: <img alt={""} src={ICON_USER} width={24} height={24} />,
  },
  {
    id: "bookmark",
    link: "#",
    icon: <img alt={""} src={ICON_BOOKMARK} width={24} height={24} />,
  },
  {
    id: "cart",
    icon: <img alt={""} src={ICON_CART} width={24} height={24} />,
  },
]

export const Header = () => {
  return (
    <section id={"header"} className={"screen"}>
      <div className={"pl-5 py-[18.5px] flex justify-between items-center"}>
        {/*Logo and menu*/}
        <div className={"flex items-center"}>
          <img src={LOGO_SMALL} alt="logo" className={"w-[43.41px] h-[34.41px]"} />
          <div className={"ml-[5px] text-2xl"}>Organic</div>
          <img alt={""} src={ICON_MENU} width={24} height={24} className={"ml-5 cursor-pointer"} />
        </div>

        {/*Search bar*/}
        <Search
          placeholder="Search products"
          allowClear
          enterButton="Search"
          type="email"
          className={classNames(
            css({
              width: "500px",
              ".ant-input-affix-wrapper": {
                borderWidth: "1px",
                height: "52px",
                fontSize: "15px",
                padding: "8px 16px",
                borderStartStartRadius: "10px !important",
                backgroundColor: "#F5F5F5",
                borderEndStartRadius: "10px !important",
              },
              ".ant-input-search-button": {
                height: "52px",
                fontSize: "14px",
                textTransform: "uppercase",
                borderStartEndRadius: "10px !important",
                borderEndEndRadius: "10px !important",
                padding: "8px 22px",
              },
            })
          )}
        />

        {/*Categories*/}
        <div className={"flex items-center justify-center"}>
          {map(categories, (category) => {
            return (
              <div
                key={category.id}
                className={
                  "px-5 relative cursor-pointer w-[83px] after:contents-[''] flex items-center justify-center h-[47px] hover:after:block after:hidden after:absolute after:left-0 after:right-0 after:bg-CabbagePont-900 after:h-[3px] after:-bottom-[18.5px]"
                }
              >
                <a href={category.link} className={"uppercase text-black-900 font-medium text-sm no-underline"}>
                  {category.title}
                </a>
              </div>
            )
          })}
        </div>

        {/*Cart and user*/}

        <div className={"flex items-center justify-center"}>
          {map(cart, (c) => {
            return (
              <div key={c.id} className={"px-5 cursor-pointer "}>
                <div className={"text-black-900"}>{c.icon}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
