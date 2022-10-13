import { css } from "@emotion/css"

type Props = {
  text: string
}

const Question = (props: Props) => {
  return (
    <>
      <h2
        class={css`
          margin-bottom: 18px;
          font-weight: bold;
        `}
      >
        問題1
      </h2>
      <p
        class={css`
          font-size: 16px;
        `}
      >
        {props.text}
      </p>
    </>
  )
}

export default Question
