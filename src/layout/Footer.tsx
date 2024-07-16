import { map } from "lodash"
import { useState } from "react"
import { classNames } from "@/util/Common.ts"
import { LOGO_WITH_TEXT } from "../../public"
import { css } from "@emotion/css"
import Search from "antd/es/input/Search"

const socials = [
  {
    name: "Facebook",
    link: "https://web.facebook.com/",
    icon: <i className="fa-brands fa-facebook-f"></i>,
    active: true,
  },
  {
    name: "Twitter",
    link: "https://x.com/",
    icon: <i className="fa-brands fa-twitter"></i>,
    active: false,
  },
  {
    name: "Pinterest",
    link: "https://www.pinterest.com/",
    icon: <i className="fa-brands fa-pinterest"></i>,
    active: false,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: <i className="fa-brands fa-instagram"></i>,
    active: false,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/",
    icon: <i className="fa-brands fa-youtube"></i>,
    active: false,
  },
]

const itemsFooter = [
  {
    title: "Quick Links",
    list: [
      {
        title: "Home",
        link: "#",
      },
      {
        title: "About Us",
        link: "#about-us",
      },
      {
        title: "Offers",
        link: "#offers",
      },
      {
        title: "Services",
        link: "#services",
      },
      {
        title: "Contact",
        link: "#contact",
      },
      {
        title: "Us",
        link: "#us",
      },
    ],
  },
  {
    title: "About",
    list: [
      {
        title: "How It Work",
        link: "#about/how-it-work",
      },
      {
        title: "Our Packages",
        link: "#about/our-packages",
      },
      {
        title: "Promotions",
        link: "#about/promotions",
      },
      {
        title: "Refer a Friend",
        link: "#about/refer-a-friend",
      },
    ],
  },
  {
    title: "Help Center",
    list: [
      {
        title: "Payment",
        link: "#help-center/payment",
      },
      {
        title: "Shipping",
        link: "#help-center/shipping",
      },
      {
        title: "Product",
        link: "#help-center/product",
      },
      {
        title: "Return",
        link: "#help-center/return",
      },
      {
        title: "FAQs",
        link: "#help-center/faqs",
      },
      {
        title: "Checkout",
        link: "#help-center/checkout",
      },
      {
        title: "Other issues",
        link: "#help-center/other-issues",
      },
    ],
  },
]

export const Footer = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id={"footer"} className={"container"}>
      <div className={"flex items-start justify-between flex-1 pt-4 md:pt-15"}>
        <div>
          <img alt={""} src={LOGO_WITH_TEXT} width={300} height={71} className={"w-[300px] max-h-[375px] object-cover block mb-3.5"} />
          <div className={"flex gap-[13.12px] mx-[43px] "}>
            {map(socials, (item, index) => {
              return (
                <a
                  href={item.link}
                  key={index}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={classNames(
                    "text-lg border-[#EFEFEF] no-underline shadow-2 duration-500 h-[45px] bg-white w-[42.19px] text-black-300 border hover:text-black-600 cursor-pointer justify-center rounded flex items-center",
                    hovered === index && "shadow-1"
                  )}
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
        {map(itemsFooter, (item, index) => {
          return (
            <div key={index} className={"flex flex-col gap-[19px] "}>
              <div className={"text-lg font-semibold text-black-550 capitalize"}>{item.title}</div>
              <div className={"flex flex-col"}>
                {map(item.list, (list, index) => {
                  return (
                    <a href={list.link} key={index} className={"text-black-350 no-underline cursor-pointer duration-200 leading-[34.24px] text-base hover:text-black-550"}>
                      {list.title}
                    </a>
                  )
                })}
              </div>
            </div>
          )
        })}

        <div className={"flex flex-col gap-[29px] max-w-[330px]"}>
          <div className={"text-lg font-semibold text-black-550 capitalize"}>Our Newsletter</div>

          <div className={"text-black-350 text-base leading-[34.24px]"}>Subscribe to our newsletter to get updates about our grand offers.</div>

          <Search
            placeholder="Enter your email-address"
            allowClear
            type="email"
            id="email"
            enterButton="SEND"
            className={classNames(
              css({
                ".ant-input-affix-wrapper": {
                  borderWidth: "1px",
                  height: "47px",
                  fontSize: "15px",
                  padding: "13.5px 15px",
                  borderStartStartRadius: "10px !important",
                  backgroundColor: "#F1F1F1",
                  borderEndStartRadius: "10px !important",
                },
                ".ant-input-search-button": {
                  height: "47px",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  borderStartEndRadius: "10px !important",
                  borderEndEndRadius: "10px !important",
                  padding: "15px 17px",
                },
              })
            )}
          />
        </div>
      </div>
      <div className={"border-t border-black-200 flex-col sm:flex-row max-w-[1500px] mt-12.5 sm:h-23.5 text-black-350 text-base leading-[34.24px] flex items-center justify-between"}>
        <div>© 2024 Organic. All rights reserved.</div>
        <div className={""}>
          Copy by <span className={"text-black-400 font-bold"}>tuAnnG-Anh</span>
        </div>
      </div>
    </section>
  )
}
