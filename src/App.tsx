import Margins from './components/layout/Margins'
import Home from './components/pages/Home'
import Like from './components/pages/Like'
import Dislike from './components/pages/Dislike'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Margins>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/like' component={Like} />
          <Route path='/dislike' component={Dislike} />
        </Switch>
      </Router>
    </Margins>
  )
}

export default App
