
import Navbar from './components/Navbar'
import Bloglist from './components/Bloglist'
import { inject } from '@vercel/analytics';

function App() {
  inject();

  return (

    <>
    <Navbar />
    <Bloglist />
     </>
  )
}

export default App
