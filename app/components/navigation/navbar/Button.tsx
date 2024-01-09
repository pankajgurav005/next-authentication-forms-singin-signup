// import { MouseEventHandler } from "react";

import { MouseEventHandler } from "react";

function Button(props: { openModal: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  return(
    <>
      <button className="h-12 rounded-lg bg-white font-bold px-5" onClick={props.openModal}>Sign In</button>
    </>
  )
}

export default Button;
