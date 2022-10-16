import { css } from "@emotion/css"

type Props = {
  text: string
}

const Explanation = (props: Props) => {
  return (
    <p
      class={css`
        font-size: 16px;
      `}
    >
      {props.text}
    </p>
  )
}

export default Explanation
