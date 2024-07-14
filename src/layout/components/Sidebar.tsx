import { Drawer } from "antd"
import { FC } from "react"
import { map } from "lodash"

type Props = {
  open: boolean
  onCancel: () => void
}

const categories = [
  {
    icon: <i className="fa-regular fa-tomato"></i>,
    name: "Fruits and vegetables",
  },
  {
    icon: <i className="fa-regular fa-farm"></i>,
    name: "Dairy and Eggs",
  },
  {
    icon: <i className="fa-regular fa-turkey"></i>,
    name: "Meat and Poultry",
  },
  {
    icon: <i className="fa-regular fa-fish"></i>,
    name: "Seafood",
  },
  {
    icon: <i className="fa-solid fa-pie"></i>,
    name: "Bakery and Bread",
  },
  {
    icon: <i className="fa-regular fa-can-food"></i>,
    name: "Canned Goods",
  },
  {
    icon: <i className="fa-regular fa-soft-serve"></i>,
    name: "Frozen Foods",
  },
  {
    icon: <i className="fa-regular fa-bowl-rice"></i>,
    name: "Pasta and Rice",
  },
  {
    icon: <i className="fa-regular fa-mug-saucer"></i>,
    name: "Breakfast Foods",
  },
  {
    icon: <i className="fa-regular fa-cookie-bite"></i>,
    name: "Snacks and Chips",
  },
  {
    icon: <i className="fa-regular fa-mug-hot"></i>,
    name: "Beverages",
  },
  {
    icon: null,
    name: "water, juice, soda, and tea",
  },
  {
    icon: <i className="fa-regular fa-salt-shaker"></i>,
    name: "Condiments and Sauces",
  },
  {
    icon: <i className="fa-regular fa-salt-shaker"></i>,
    name: "Spices and Seasonings",
  },
  {
    icon: <i className="fa-regular fa-bread-loaf"></i>,
    name: "Baking Supplies",
  },
  {
    icon: null,
    name: "Deli and Prepared Foods",
  },
  {
    icon: <i className="fa-regular fa-bottle-baby"></i>,
    name: "Baby Food and Formula",
  },
  {
    icon: <i className="fa-regular fa-flask-round-potion"></i>,
    name: "Health and Wellness",
  },
  {
    icon: <i className="fa-regular fa-bell"></i>,
    name: "Household Supplies",
  },
  {
    icon: <i className="fa-regular fa-person-carry-box"></i>,
    name: "Personal Care",
  },
]

export const Sidebar: FC<Props> = ({ open, onCancel }) => {
  return (
    <Drawer
      open={open}
      placement={"left"}
      width={368}
      title={null}
      headerStyle={{
        display: "none",
      }}
      footer={null}
      classNames={{
        body: "px-[31px] py-[43px]",
      }}
      closable
      onClose={onCancel}
      destroyOnClose
    >
      <div>
        <div className={"py-2.5 flex items-center justify-between mb-2.5"}>
          <div className={"uppercase text-xs leading-[30px] text-black-310 tracking-wider"}>MENU</div>
          <div className={"h-6 flex items-center justify-center w-6 cursor-pointer text-black-550 hover:text-black-900"} onClick={onCancel}>
            <i className="fa-light fa-xmark text-[20px]"></i>
          </div>
        </div>
      </div>

      {/*Categories*/}
      <div className={"flex gap-2.5 flex-col"}>
        {map(categories, (category) => {
          return (
            <div className={"border-dashed flex  gap-2.5 items-center border-0 text-black-900 border-b border-[#3333334D]/30 cursor-pointer hover:text-primary hover:border-primary"}>
              {category.icon && <div className={"text-[18px]"}>{category.icon}</div>}
              <div className={"text-[17px] leading-[42px] capitalize"}>{category.name}</div>
            </div>
          )
        })}
      </div>
    </Drawer>
  )
}
