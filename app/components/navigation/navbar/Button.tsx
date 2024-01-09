// import { MouseEventHandler } from "react";

import { MouseEventHandler } from "react";

function Button(props: { openModal: MouseEventHandler<HTMLButtonElement> | undefined; innerText: any }) {
  return(
    <>
      <button className="h-12 rounded-lg bg-white font-bold px-5" onClick={props.openModal}>{props.innerText}</button>
    </>
  )
}

export default Button;
