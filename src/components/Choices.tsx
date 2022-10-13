import { css } from "@emotion/css"

const Choices = () => {
  return (
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
  )
}

export default Choices

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
