import { LOGO_SMALL } from "../../public"
import Search from "antd/es/input/Search"
import { classNames } from "@/util/Common.ts"
import { css } from "@emotion/css"
import { map } from "lodash"
import { Sidebar } from "@/layout/components/Sidebar.tsx"
import { useState } from "react"
import { Affix } from "antd"

const categories = [
  {
    id: "home",
    link: "#",
    title: "Home",
    active: true,
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
    icon: <i className="fa-regular fa-circle-user text-[20px]"></i>,
  },
  {
    id: "bookmark",
    link: "#",
    icon: <i className="fa-regular fa-bookmark text-[20px]"></i>,
  },
  {
    id: "cart",
    icon: <i className="fa-regular fa-cart-shopping text-[20px]"></i>,
  },
]

export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [fixed, setFixed] = useState(false)

  return (
    <Affix offsetTop={0} onChange={(value) => setFixed(!!value)}>
      <section id={"header"} className={"screen bg-white z-[99999]"}>
        <div className={classNames("pl-5 py-3 md:py-[18.5px] flex justify-between items-center", fixed && " shadow-sm")}>
          {/*Logo and menu*/}
          <div className={"flex items-center flex-row-reverse md:flex-row justify-between w-1/2 md:w-auto"}>
            <img src={LOGO_SMALL} alt="logo" className={"translate-x-1/2 md:translate-x-0 w-[43.41px] h-[34.41px]"} />
            <div className={"ml-[5px] hidden md:block text-[40px] font-medium leading-10"}>Organic</div>
            <div onClick={() => setOpenMobileMenu(!openMobileMenu)}>
              {!openMobileMenu ? <i className="fa-solid fa-bars text-lg duration-200 cursor-pointerc block md:hidden"></i> : <i className="fa-light fa-xmark text-[20px]"></i>}
            </div>

            <i className="fa-solid fa-bars text-lg duration-200 cursor-pointer hover:text-primary md:block ml-5 hidden" onClick={() => setOpenSidebar(true)}></i>
          </div>

          {/*Search bar*/}
          <Search
            placeholder="Search products"
            allowClear
            enterButton="Search"
            type="email"
            className={classNames(
              "hidden md:block",
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
          <div className={"items-center justify-center hidden md:flex"}>
            {map(categories, (category) => {
              return (
                <div
                  key={category.id}
                  className={classNames(
                    "px-5 relative cursor-pointer w-[83px] after:contents-[''] flex items-center justify-center h-[47px] group after:hidden after:absolute after:left-0 after:right-0 after:bg-CabbagePont-900 after:h-[3px] after:-bottom-[18.5px]",
                    category.active && "after:block"
                  )}
                >
                  <a href={category.link} className={"uppercase text-black-900 font-medium group-hover:text-primary text-sm no-underline"}>
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
                <div key={c.id} className={classNames("px-5 cursor-pointer", c.id !== "user" && "hidden")}>
                  <div className={"text-black-900 md:hover:text-primary"}>{c.icon}</div>
                </div>
              )
            })}
          </div>
        </div>

        <Sidebar open={openSidebar} onCancel={() => setOpenSidebar(false)} />
        <div className={classNames("hidden sm:hidden", openMobileMenu && "block")} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {map(categories, (category) => {
              return (
                <a key={category.id} href={category.link} className="block no-underline text-black-900 rounded-md bg-white px-3 py-2 text-base font-medium " aria-current="page">
                  {category.title}
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </Affix>
  )
}
