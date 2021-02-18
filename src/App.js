import React from 'react'
import './App.css';

//importing components
import MyNavbar from "./components/my-navbar/navbar.component.jsx";
import MyCarousel from "./components/my-carousel/my-carousel.component.jsx";
import TitleMessage from "./components/title-message/title-message.component.jsx";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
}

export default App;
