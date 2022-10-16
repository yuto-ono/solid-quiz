import { css } from "@emotion/css"
import { JSX } from "solid-js/jsx-runtime"

type Props = {
  children: JSX.Element
}

const Title = (props: Props) => {
  return (
    <h1
      class={css`
        margin: 0 0 24px;
        font-size: 24px;
        font-weight: bold;
      `}
    >
      {props.children}
    </h1>
  )
}

export default Title
