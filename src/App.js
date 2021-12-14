import './App.css';
import React from 'react';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';

function HomeRouter() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<HomeRouter />} />
      <Route path={'about'} element={<About />} />
      {/*
      <Header />
      <DashBoard />
      */}
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}

export default App;
