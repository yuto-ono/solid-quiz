import "../global.css"
import Choices from "./Choices"
import Container from "./Container"
import Question from "./Question"

const App = () => {
  return (
    <Container>
      <Question text="ここに問題文が入ります" />
      <Choices choices={["選択肢 1", "選択肢 2", "選択肢 3"]} />
    </Container>
  )
}

export default App
