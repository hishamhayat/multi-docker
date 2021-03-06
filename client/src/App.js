import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Fib from './Fib'
import OtherPage from './OtherPage'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Fab Calculator</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App