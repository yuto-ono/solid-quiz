import { css } from "@emotion/css"
import "../global.css"

const App = () => {
  return (
    <section
      class={css`
        width: 400px;
        margin: 16px auto;
        background-color: #fff;
        border-radius: 4px;
        padding: 16px;
        position: relative;
      `}
    >
      <p
        class={css`
          margin-bottom: 16px;
          font-weight: bold;
        `}
      >
        問題
      </p>
      <ul
        class={css`
          list-style: none;
          padding: 0;
          margin-bottom: 16px;
        `}
      >
        <li class={optionStyle}>選択肢 1</li>
        <li class={optionStyle}>選択肢 2</li>
        <li class={optionStyle}>選択肢 3</li>
      </ul>
    </section>
  )
}

export default App

const optionStyle = css`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #f8f8f8;
  }
`
