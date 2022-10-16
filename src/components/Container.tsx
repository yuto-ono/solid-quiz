import { css } from "@emotion/css"
import { JSX } from "solid-js"

type Props = {
  children: JSX.Element
}

const Container = (props: Props) => {
  return (
    <section
      class={css`
        width: min(600px, 85%);
        margin: 16px auto;
        background-color: #fff;
        border-radius: 4px;
        padding: 16px;
        position: relative;
      `}
    >
      {props.children}
    </section>
  )
}

export default Container
