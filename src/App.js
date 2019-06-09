import React from 'react'
import Toolbar from './Components/Toolbar/Toolbar.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.js'
import Contact from './Components/Contact.js'
import Products from './Components/Products.js'
import About from './Components/About.js'
import { render } from 'react-dom'

class Main extends React.Component {
  render () {    
    return ( 
      <div className="App">

        <BrowserRouter>
          <switch>
            <Route exact path='/'  component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/products' component={Products} /> 
          </switch>
        </BrowserRouter>

      </div>
    )
  }
}

render(<Main />, document.getElementById('root'))
