import { BANNER_NEWS_LETTER } from "../../../../public"

export const Newsletter = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BANNER_NEWS_LETTER})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={"w-full h-[325px]"}
    ></div>
  )
}
