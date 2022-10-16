import { css } from "@emotion/css"

const Explanation = () => {
  return (
    <p
      class={css`
        font-size: 16px;
      `}
    >
      SolidJS は、 React
      の思想を取り入れつつも、仮想DOMを使用しない独自の実装をすることで、素のJavaScript並の高いパフォーマンスを実現しました。
    </p>
  )
}

export default Explanation
