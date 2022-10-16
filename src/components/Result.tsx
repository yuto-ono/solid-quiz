import { css } from "@emotion/css"

const Result = () => {
  return (
    <div
      class={css`
        display: flex;
        align-items: center;
        line-height: 1;
        margin-top: 30px;
        margin-bottom: 20px;
      `}
    >
      <p
        class={css`
          margin-right: 10px;
          color: #0c6;
          font-weight: bold;
          font-size: 40px;
        `}
      >
        ○
      </p>
      <p
        class={css`
          font-size: 20px;
        `}
      >
        正解です！
      </p>
    </div>
  )
}

export default Result
