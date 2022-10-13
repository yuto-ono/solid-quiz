import "../global.css"
import Choices from "./Choices"
import Container from "./Container"
import Question from "./Question"

const App = () => {
  return (
    <Container>
      <Question text="ここに問題文が入ります" />
      <Choices />
    </Container>
  )
}

export default App
