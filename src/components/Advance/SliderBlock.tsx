import { FC, ReactNode, useEffect, useRef, useState } from "react"
import Slider, { Settings } from "react-slick"
import { ButtonCustom } from "@/components/Basic/ButtonCustom.tsx"
import { classNames } from "@/util/Common.ts"
import { find } from "lodash"

type Props = {
  children: ReactNode
  title?: string
  childrenLength?: number
  responsive?: any
} & Settings
export const SliderCustom: FC<Props> = ({
  children,
  title,
  responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
  childrenLength,
  ...otherOptions
}) => {
  const sliderRef = useRef<any>(null)
  const [currentSlide, setCurrentSlide] = useState(1)
  const [breakpointSlide, setBreakpointSlide] = useState(8)
  const next = () => {
    sliderRef.current.slickNext()
  }

  const previous = () => {
    sliderRef.current.slickPrev()
  }

  useEffect(() => {
    setBreakpointSlide(find(responsive, (r) => sliderRef.current && sliderRef.current.state.breakpoint === r.settings.breakpoint)?.settings?.slidesToScroll || 8)
  }, [responsive])

  const settings = {
    ref: sliderRef,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 6,
    autoplay: false,
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next + 1),
    className: classNames("[&_.slick-slide]:p-0 [&_.slick-slide]:px-[15.5px] [&_.slick-list]:-mx-[15.5px] [&_.slick-list]:my-0"),
    responsive,
    ...otherOptions,
  }

  return (
    <div className="slider-container">
      <div className={"mb-10 justify-between flex items-center"}>
        <div className={"text-2xl leading-[38.73px] text-black-550 capitalize"}>{title}</div>
        <div className={"flex gap-[13.85px]"}>
          <ButtonCustom onClick={previous} buttonSize={"mini"} disabled={(currentSlide || 0) <= 1} icon={<i className="fa-solid fa-chevron-left"></i>} />
          <ButtonCustom onClick={next} buttonSize={"mini"} disabled={(childrenLength || 0) - currentSlide < breakpointSlide} icon={<i className="fa-solid fa-chevron-right"></i>} />
        </div>
      </div>
      <Slider {...settings} centerPadding={"40px"}>
        {children}
      </Slider>
    </div>
  )
}
