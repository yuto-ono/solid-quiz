import "../global.css"
import Choices from "./Choices"
import Container from "./Container"
import Explanation from "./Explanation"
import Question from "./Question"
import Result from "./Result"
import Title from "./Title"

const App = () => {
  return (
    <Container>
      <Title>Solid Quiz</Title>
      <Question text={questionText} />
      <Choices choices={choices} />
      <Result isCorrect />
      <Result isCorrect={false} />
      <Explanation text={explanationText} />
    </Container>
  )
}

export default App

const questionText =
  "素のJavaScriptに匹敵する高いパフォーマンス、JSXで書ける、きめ細かいリアクティビティ、仮想DOMを使用しないなどの特徴をもつ、 Ryan Carniato 氏が開発したフロントエンドのフレームワークは何でしょう？"

const choices = ["React", "SolidJS", "Svelte"]

const explanationText =
  "SolidJS は、 React の思想を取り入れつつも、仮想DOMを使用しない独自の実装をすることで、素のJavaScript並の高いパフォーマンスを実現しました。"
