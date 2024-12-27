import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './componants/Navbar.jsx';
// import Sidebar from './componants/Sidebar.jsx';
// import Counter from './componants/Counter.jsx';
// import Form from './componants/Form.jsx';
// import Form1 from './componants/Form1.jsx';
// import Form2 from './componants/Form2.jsx';
import Crud from './componants/Crud.jsx';
// import Bootstrap from './Componants2/Bootstrap.jsx'
// import Navbar1 from './Componants2/Navbar1.jsx';

// import {Route ,Routes} from "react-router-dom"
// import Home from "./Componants2/Home.jsx"
// import About from "./Componants2/About.jsx"
// import Services from "./Componants2/Services.jsx"
// import Contact from "./Componants2/Contact.jsx"
// import LoginForm from './Componants2/Loginform.jsx';

// import Youtubenav from './Youtube/Youtubenav.jsx'
// import Youtubesidebar from './Youtube/Youtubesidebar.jsx'
// import Contant from './Youtube/Contant.jsx'

// import CommentBox from './Componants2/CommentBox'


function App() {
  

  return (
    <div>
        {/* <Navbar /> */}
        {/* <Sidebar/> */}
        {/* <Counter/> */}
          {/* <Form/> */}
          {/* <Form1/> */}
          {/* <Form2/> */}
          <Crud/>

       {/* <Bootstrap/> */}

       {/* <Navbar1/>
       <LoginForm/> */}

       {/* <Youtubenav />
       <Youtubesidebar />
       <Contant/> */}
       
       {/* <CommentBox/> */}

{/* 
{<Routes>
  
       <Route path="/Home" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/" element={<LoginForm />} /> 
       <Route path="/Services" element={<Services/>}/> 
       <Route path="/Contact" element={<Contact/>}/> 
      
</Routes> } */}
      



    </div>
    
 
  )
}

export default App
