import { createSignal, Show } from "solid-js"
import "../global.css"
import Button from "./Button"
import Choices from "./Choices"
import Container from "./Container"
import Explanation from "./Explanation"
import Question from "./Question"
import Result from "./Result"
import Title from "./Title"

const App = () => {
  const [judged, setJudged] = createSignal(false)
  const [yourAnswer, setYourAnswer] = createSignal("")
  const [isCorrect, setIsCorrect] = createSignal(false)

  const judge = (choice: string) => {
    setJudged(true)
    setYourAnswer(choice)
    setIsCorrect(choice === answer)
  }

  const reset = () => {
    setJudged(false)
    setYourAnswer("")
  }

  return (
    <Container>
      <Title>Solid Quiz</Title>
      <Question text={questionText} />
      <Choices
        choices={choices}
        judge={judge}
        judged={judged()}
        yourAnswer={yourAnswer()}
        answer={answer}
      />
      <Show when={judged()}>
        <Result isCorrect={isCorrect()} />
        <Show when={isCorrect()}>
          <Explanation text={explanationText} />
        </Show>
        <Button onClick={reset}>リトライ</Button>
      </Show>
    </Container>
  )
}

export default App

const questionText =
  "素のJavaScriptに匹敵する高いパフォーマンス、JSXで書ける、きめ細かいリアクティビティ、仮想DOMを使用しないなどの特徴をもつ、 Ryan Carniato 氏が開発したフロントエンドのフレームワークは何でしょう？"

const choices = ["React", "SolidJS", "Svelte"]

const answer = "SolidJS"

const explanationText =
  "SolidJS は、 React の思想を取り入れつつも、仮想DOMを使用しない独自の実装をすることで、素のJavaScript並の高いパフォーマンスを実現しました。"
