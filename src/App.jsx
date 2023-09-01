import './App.css'
import Book from './Components/Book/Book'
import Error404 from './Components/Error404/Error404'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/book' element={<Book />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
