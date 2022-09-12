import { Link } from "gatsby";
import React from "react"

type ButtonProps = {
  name: string,
  btnClass: string,
  isLink: boolean,
  linkTo: any,
}

function Button({ name, btnClass, isLink, linkTo }: ButtonProps) {

  if (!isLink) {
    return (<button className={btnClass}>{name}</button>); 
  } else {
    return (
      <button className={btnClass}>
        <Link to={linkTo}>{name}</Link>
      </button>
    )
  }
}

export default Button
