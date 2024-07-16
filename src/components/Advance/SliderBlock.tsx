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
  slidesToShow?: number
  slidesToScroll?: number
  header?: boolean
  nextBtn?: ReactNode
  prevBtn?: ReactNode
  showButton?: boolean
  classHeader?: string
  onSeeAll?: () => void
  viewAll?: boolean
  className?: string
} & Settings
export const SliderCustom: FC<Props> = ({
  children,
  title,
  responsive = [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
  slidesToShow = 6,
  slidesToScroll = 3,
  childrenLength,
  nextBtn,
  header = true,
  prevBtn,
  showButton = true,
  onSeeAll,
  classHeader,
  viewAll = true,
  className,
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
    autoplay: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next + 1),
    className: classNames("[&_.slick-slide]:p-0 [&._slick-track]:grid", className),
    responsive,
    slidesToShow,
    slidesToScroll,
    adaptiveHeight: false,
    ...otherOptions,
  }

  return (
    <div className="slider-container">
      {header && (
        <div className={classNames("mb-4 md:mb-[19px] justify-between flex items-center", classHeader)}>
          <div className={"md:text-2xl text-xl leading-[38.73px] text-black-550 capitalize"}>{title}</div>
          <div className={"flex items-center gap-12.5 cursor-pointer"}>
            {viewAll && (
              <div className={"hidden text-black-325 sm:flex items-center gap-[8.52px]   font-semibold leading-[21.79px] duration-200 hover:text-black-600"} onClick={onSeeAll}>
                View All Categories <i className="fa-solid fa-right text-[8px]"></i>
              </div>
            )}
            {showButton && (
              <div className={"flex gap-[13.85px]"}>
                <div onClick={previous}>{prevBtn || <ButtonCustom buttonSize={"mini"} disabled={(currentSlide || 0) <= 1} icon={<i className="fa-solid fa-chevron-left"></i>} />}</div>
                <div onClick={next}>
                  {nextBtn || <ButtonCustom buttonSize={"mini"} disabled={(childrenLength || 0) - currentSlide < breakpointSlide} icon={<i className="fa-solid fa-chevron-right"></i>} />}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Slider {...settings} centerPadding={"40px"}>
        {children}
      </Slider>
    </div>
  )
}
// ,
// {
//   breakpoint: 1280,
//   settings: {
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   },
// },
// {
//   breakpoint: 768,
//   settings: {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   },
// },
// {
//   breakpoint: 640,
//   settings: {
//     slidesToShow: 2,
//     slidesToScroll: 1,
//   },
// },
// {
//   breakpoint: 480,
//   settings: {
//     slidesToScroll: 1,
//     slidesToShow: 1,
//   },
// },
