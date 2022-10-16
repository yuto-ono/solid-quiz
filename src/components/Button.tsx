import { css } from "@emotion/css"
import { JSX } from "solid-js"

type Props = {
  onClick?: () => void
  children: JSX.Element
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      class={css`
        width: 100%;
        background: #3498db;
        padding: 8px;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        box-shadow: 0 4px 0 #2880b9;
        border: none;
        &:hover {
          opacity: 0.8;
        }
      `}
    >
      {props.children}
    </button>
  )
}

export default Button
