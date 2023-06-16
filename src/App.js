import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage.js';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Routes>
          <Route path="/search/:searchTerm" element={ <><div className="app_page"><Sidebar /><SearchPage /></div></>}>
          </Route>
          <Route path="/" element={ <><div className="app_page"><Sidebar /><RecommendedVideos /></div></>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
