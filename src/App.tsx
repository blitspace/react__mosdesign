import { ReactElement } from 'react';
import { atom } from 'jotai'

import Footer from './Footer'
import TopBar from './TopBar'

import './App.css'
import FullScreenNav from './FullScreenNav';
import ScrollToTop from './Pages/ScrollToTop';


function App({ enableScrollToTop = true, children }: { enableScrollToTop?: boolean, children: ReactElement }) {
  const menuOpen = atom(false);

  return (
    <div className="relative App">
      {enableScrollToTop && <ScrollToTop />}
      <FullScreenNav />
      <TopBar />
      { children }
      {/* <Footer sticky={false} /> */}
    </div>
  )
}

export default App
