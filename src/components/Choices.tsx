import { css } from "@emotion/css"
import { For } from "solid-js"

type Props = {
  choices: string[]
  answer: string
  judged: boolean
  yourAnswer: string
  judge: (choice: string) => void
}

const Choices = (props: Props) => {
  return (
    <ul
      class={css`
        list-style: none;
        padding: 0;
        margin-top: 10px;
      `}
    >
      <For each={props.choices}>
        {(choice) => {
          const handleClick = () => {
            if (!props.judged) {
              props.judge(choice)
            }
          }
          return (
            <li
              onClick={handleClick}
              class={getItemStyle(choice, props.judged, props.yourAnswer)}
            >
              {choice}
            </li>
          )
        }}
      </For>
    </ul>
  )
}

export default Choices

const getItemStyle = (choice: string, judged: boolean, yourAnswer: string) => {
  if (judged) {
    if (choice === yourAnswer) {
      return selectedItemStyle
    }
    return disableItemStyle
  }
  return normalItemStyle
}

const itemStyle = css`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`

const normalItemStyle = css`
  ${itemStyle};
  cursor: pointer;
  &:hover {
    background: #f8f8f8;
  }
`

const disableItemStyle = css`
  ${itemStyle};
  background-color: #eee;
  color: #666;
`

const selectedItemStyle = css`
  ${itemStyle};
  background-color: #9fc;
`
