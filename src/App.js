// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Register from './routes/Register'
// import Login from './routes/Login'
import Navbar from "./routes/Navbar";
// import Profile from "./routes/Profil";
// import ContactUs from "./routes/Contact";
import Details from './routes/Details';

function App() {
  return (
        <Router>
          <Navbar/>
          <Routes>
            {/* <Route path="/" element={<Register></Register>} /> */}
            {/* <Route path="/" element={<Login></Login>} /> */}
            {/* <Route path="/" element={<Profile></Profile>} /> */}
            <Route path="/" element={<Details></Details>} />
            {/* <Route path="/" element={<ContactUs></ContactUs>} /> */}
            {/* <Route path="/add" element={<Add></Add>} />
            <Route path="/logout" element={<Login></Login>} />
            <Route path="/list">
              <Route index element={<List></List>} />
              <Route path=":id" element={<Edit></Edit>} />
            </Route> */}
            {/* <Route path="/add" element={<Login></Login>} /> */}
          </Routes>
        </Router>
      );
    }
    
export default App;