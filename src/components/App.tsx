import { Layout } from "./Layout/Layout"
import { Header } from "./Layout/Header/Header"
import { Main } from "./Layout/Main/Main"
import { Footer } from "./Layout/Footer/Footer"
import "./App.scss"

function App() {
  return (
    <div className="app">
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </div>
  )
}

export default App
