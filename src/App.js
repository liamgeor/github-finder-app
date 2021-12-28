import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen bg-gray-700 overflow-x-hidden">
            <Navbar/>
            <main className='container mx-auto mb-5 bg-gray-700 '>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/NotFound' element={<NotFound/>}/>
                <Route path='/*' element={<NotFound/>}/>
              </Routes>
            </main>
            <Footer/>
        </div>
        
      </Router>
    </GithubProvider>
  );
}

export default App;
