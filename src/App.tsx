import { ReactElement } from 'react';
import { atom } from 'jotai'

import Footer from './Footer'
import TopBar from './TopBar'

import './App.css'
import FullScreenNav from './FullScreenNav';


function App({ children }: { children: ReactElement }) {
  const menuOpen = atom(false);

  return (
    <div className="relative App">
      <FullScreenNav />
      <TopBar />
      { children }
      <Footer />
    </div>
  )
}

export default App
