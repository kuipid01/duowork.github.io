import { Link } from "gatsby";
import React from "react";

type ButtonProps = {
  name: string,
  btnClass: string,
  isLink: boolean,
  linkTo: any,
  btnType?: "button" | "submit" | "reset"
}

function Button({ name, btnClass, isLink, linkTo, btnType }: ButtonProps) {

  if (!isLink) {
    return (<button className={btnClass}>{name}</button>); 
  } else {
    return (
      <button className={btnClass} type={btnType}>
        <Link to={linkTo}>{name}</Link>
      </button>
    )
  }
}

export default Button
