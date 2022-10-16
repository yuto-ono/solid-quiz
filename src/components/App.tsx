import "../global.css"
import Choices from "./Choices"
import Container from "./Container"
import Question from "./Question"
import Title from "./Title"

const App = () => {
  return (
    <Container>
      <Title>Solid Quiz</Title>
      <Question text={questionText} />
      <Choices choices={choices} />
    </Container>
  )
}

export default App

const questionText =
  "素のJavaScriptに匹敵する高いパフォーマンス、JSXで書ける、きめ細かいリアクティビティ、仮想DOMを使用しないなどの特徴をもつ、 Ryan Carniato 氏が開発したフロントエンドのフレームワークは何でしょう？"

const choices = ["React", "SolidJS", "Svelte"]
