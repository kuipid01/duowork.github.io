import { Link } from "gatsby"
import React from "react"

type ButtonProps = {
  name: string
  btnClass: string
  isLink: boolean
  linkTo: any
  btnType?: "button" | "submit" | "reset"
  btnDisabled?: boolean
  btnClicked?: () => {}
}

function Button({
  name,
  isLink,
  btnClass,
  linkTo,
  btnType,
  btnDisabled = false,
  btnClicked
}: ButtonProps) {
  if (!isLink) {
    return (
      <button type={btnType} className={btnClass} disabled={btnDisabled}>
        {name}
      </button>
    )
  } else {
    return (
      <button type={btnType} className={btnClass} disabled={btnDisabled} onClick={btnClicked}>
        <Link to={linkTo}>{name}</Link>
      </button>
    )
  }
}

export default Button
