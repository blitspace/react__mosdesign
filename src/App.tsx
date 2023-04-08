import { ReactElement } from 'react';

import Footer from './Footer'
import TopBar from './TopBar'

import './App.css'


function App({ children }: { children: ReactElement }) {
  return (
    <div className="App">
      <TopBar />
      { children }
      <Footer />
    </div>
  )
}

export default App
