import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';
import View from './components/View';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='view/:id' element={<View/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
