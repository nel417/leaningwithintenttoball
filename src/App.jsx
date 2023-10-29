
import Navbar from './components/Navbar'
import Bloglist from './components/Bloglist'
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
    <Navbar />
    <Bloglist />
    <Analytics />
     </>
  )
}

export default App
