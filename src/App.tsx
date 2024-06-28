import './App.css'
import LoginForm from './components/LoginForm'
import StockList from './components/StockList';
import AuthProvider from './contexts/AuthProvider';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  

  return (
    <>
    <AuthProvider >
      <Router>
        <nav>
              <Link to="/">Stocks</Link> | <Link to="/login">Login</Link>
        </nav>
        <p></p><hr></hr>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<StockList />} />
        </Routes>
      </Router>
    </AuthProvider>
      
    </>
  )
}

export default App
