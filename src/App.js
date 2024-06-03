import React from 'react'
import Header from './component/Header'
import Body from './component/Body'
import AboutMe from './component/AboutMe'
import MyWorks from './component/MyWorks'
import Contact from './component/Contact'
import MyServices from './component/myServices'

const App = () => {
  return (
    <div>
     <Header />
     <Body />
     <AboutMe />
     <MyServices/>
     <MyWorks />
     <Contact/>
    </div>
  )
}

export default App;
