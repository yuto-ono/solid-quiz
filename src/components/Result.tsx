import { css } from "@emotion/css"

type Props = {
  isCorrect: boolean
}

const Result = (props: Props) => {
  return (
    <p
      class={css`
        display: flex;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 20px;
        line-height: 1;
      `}
    >
      <i class={props.isCorrect ? correctIconStyle : incorrectIconStyle} />
      {props.isCorrect ? "正解です！" : "不正解です…"}
    </p>
  )
}

export default Result

const iconStyle = css`
  position: relative;
  display: block;
  width: 36px;
  height: 36px;
  margin-right: 10px;
`

const correctIconStyle = css`
  ${iconStyle};
  border-radius: 50%;
  border: 4px solid #0c6;
`

const incorrectIconStyle = css`
  ${iconStyle};
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc(50% - 2px);
    left: -20%;
    width: 140%;
    height: 4px;
    background-color: #c00;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`
