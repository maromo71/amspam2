import Card from "./components/card"
import Footer from "./components/footer"
import Header from "./components/header"
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
    </div>
  )
}
export default App