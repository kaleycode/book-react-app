import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Home from './home.jsx';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';

function App() {

  return (
    <>
      <Header></Header>
      <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path = '/' exact component={< Home />}></Route>
      </Routes>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default App