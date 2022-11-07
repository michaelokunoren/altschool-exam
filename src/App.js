import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import RepoContent from './pages/RepoContent';
import Repository from './pages/Repository';

function App() {

  return (
    <div className="App">
      <Navbar />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repository/:id" element={<Repository />} />
      <Route path="/repositories/repository/:name" element={<RepoContent />} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </div>
  )

        }
export default App;
