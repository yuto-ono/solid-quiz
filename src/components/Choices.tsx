import { css } from "@emotion/css"
import { For } from "solid-js"

type Props = {
  choices: string[]
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
        {(choice) => (
          <li
            class={css`
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 10px;
              margin-bottom: 10px;
              cursor: pointer;
              &:hover {
                background: #f8f8f8;
              }
            `}
          >
            {choice}
          </li>
        )}
      </For>
    </ul>
  )
}

export default Choices
