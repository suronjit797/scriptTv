import { Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import './App.css'
import 'react-multi-carousel/lib/styles.css';

import Ellipse4 from './assets/Ellipse4.png'

import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="app" style={{ backgroundImage: `url(${Ellipse4})` }}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>


    </div>
  )
}

export default App
