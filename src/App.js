import {Component} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

class App extends Component {
  state = {activeLanguage: 'HI'}

  render() {
    return (
      <>
        <Header />
        <LandingSection />
        <FeaturesSection />
      </>
    )
  }
}

export default App
