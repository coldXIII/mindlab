import { PropsIconColor } from "@/types"

const MinusIcon = ({ color }: PropsIconColor) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 13.498H6C5.73478 13.498 5.48043 13.3926 5.29289 13.2051C5.10536 13.0176 5 12.7632 5 12.498C5 12.2328 5.10536 11.9784 5.29289 11.7909C5.48043 11.6033 5.73478 11.498 6 11.498H18C18.2652 11.498 18.5196 11.6033 18.7071 11.7909C18.8946 11.9784 19 12.2328 19 12.498C19 12.7632 18.8946 13.0176 18.7071 13.2051C18.5196 13.3926 18.2652 13.498 18 13.498Z"
        fill={color}
      />
    </svg>
  )
}

export default MinusIcon
