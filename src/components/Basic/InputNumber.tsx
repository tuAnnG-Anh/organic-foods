"use client"

import { InputNumber, InputNumberProps } from "antd"
import classNames from "classnames"
import { FC, useCallback, useMemo, useState } from "react"
import { css } from "@emotion/css"

type Props = {
  className?: string
  value?: number
  maxValue?: number
  setValue?: (value: number | null) => void
  disabled?: boolean
  propType?: string
  onBlurs?: () => void
  batchSize?: number
  classGroup?: string
} & InputNumberProps

export const InputQuantity: FC<Props> = ({ className = "", value = 0, classGroup, setValue, disabled = false, maxValue, onBlurs, batchSize, ...props }) => {
  const [focus, setFocus] = useState(false)

  const newBatchSize = useMemo(() => batchSize || 1, [batchSize])

  const checkIsMultiples = useMemo(() => value! % newBatchSize === 0, [newBatchSize, value])
  console.log(value)
  const onDecrease = useCallback(() => {
    const calcValue = value! - newBatchSize
    if (checkIsMultiples) {
      return setValue?.(calcValue > 0 ? calcValue : 0)
    } else {
      return setValue?.((value! < newBatchSize ? calcValue : value!) - (calcValue % newBatchSize))
    }
  }, [newBatchSize, checkIsMultiples, setValue, value])

  const onIncrease = useCallback(() => {
    const calcValue = value! + newBatchSize
    if (checkIsMultiples) {
      return setValue?.(calcValue < maxValue! ? calcValue : maxValue!)
    } else {
      return setValue?.(calcValue - (calcValue % newBatchSize))
    }
  }, [newBatchSize, checkIsMultiples, maxValue, setValue, value])

  const inputClassName = css({
    "input.ant-input-number-input": {
      textAlign: "center",
      padding: 0,
    },
  })

  return (
    <div className={classNames("flex items-center justify-center rounded w-fit overflow-hidden", classGroup)}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          !disabled && value > 0 && onDecrease()
        }}
        className={`px-2 h-[26px] mr-[3px] rounded-md flex items-center justify-center border ${!disabled && value > 0 ? "cursor-pointer hover:text-primary duration-200 hover:border-primary" : "cursor-not-allowed"} `}
      >
        <i className={classNames("fa-regular text-[8px] fa-minus", (!disabled && value! > 0) || !disabled ? "" : "text-gray-300")}></i>
      </div>

      <InputNumber
        className={classNames("rounded-md shadow-none text-center w-[31px] h-[26px]", focus ? "border border-primary" : "", inputClassName, className)}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false)
          onBlurs?.()
        }}
        controls={false}
        value={value}
        max={maxValue}
        maxLength={1}
        {...props}
      />

      <div
        onClick={(e) => {
          e.stopPropagation()
          !disabled && value! < maxValue! && onIncrease()
        }}
        className={`px-2 h-[26px] ml-[3px] rounded-md flex items-center justify-center border  ${!disabled && value! < maxValue! ? "cursor-pointer hover:text-primary duration-200 hover:border-primary" : "cursor-not-allowed"}`}
      >
        <i className={classNames("fa-regular fa-plus text-[8px]", !disabled && value! < maxValue! ? "" : "text-gray-300")}></i>
      </div>
    </div>
  )
}
