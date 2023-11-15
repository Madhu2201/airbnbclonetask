import React from 'react';
import './App.css'
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage'
import Thirdpage from './components/Thirdpage';
import Bookingpage from './components/Bookingpage';
import Fourthpage from './components/Fourthpage';
import Fifthpage from './components/Fifthpage';
import Sixthpage from './components/Sixthpage';
import Seventhpage from './components/Seventhpage';
import Eigthpage from './components/Eigthpage';
import Ninethpage from './components/Ninethpage';
import Tenthpage from './components/Tenthpage';
import Eleventhpage from './components/Eleventhpage';
import Twelthpage from './components/Twelthpage';
import Thirteenthpage from './components/Thirteenthpage';
import Fourteenthpage from './components/Fourteenthpage';
import Fifteenthpage from './components/Fifteenthpage';
import Seventeenthpage from './components/Seventeenthpage';
import Sixteenthpages from './components/Sixteenthpages';
import Eighteenthpages from './components/Eighteenthpages';


const App = () => {
  return (
    <div>
    <Header/>

    <div className='mainpage'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product/0" element={<Firstpage/>}/>
      <Route path="/product/1" element={<Secondpage/>} />
      <Route path="/product/2" element={<Thirdpage/>}/>
      <Route path="/product/3" element={<Fourthpage/>}/>
      <Route path="/product/4" element={<Fifthpage/>}/>
      <Route path="/product/5" element={<Sixthpage/>}/>
      <Route path="/product/6" element={<Seventhpage/>}/>
      <Route path="/product/7" element={<Eigthpage/>}/>
      <Route path="/product/8" element={<Ninethpage/>}/>
      <Route path="/product/9" element={<Tenthpage/>}/>
      <Route path="/product/10" element={<Eleventhpage/>}/>
      <Route path="/product/11" element={<Twelthpage/>}/>
      <Route path="/product/12" element={<Thirteenthpage/>}/>
      <Route path="/product/13" element={<Fourteenthpage/>}/>
      <Route path="/product/14" element={<Fifteenthpage/>}/>
      <Route path="/product/15" element={<Sixteenthpages/>}/>
      <Route path="/product/16" element={<Seventeenthpage/>}/>
      <Route path="/product/17" element={<Eighteenthpages/>}/>
    
      <Route path="/checkout" element={<Bookingpage/>}/>
     
      </Routes>
      
    
      </div>





      
    </div>
  );
};

export default App;