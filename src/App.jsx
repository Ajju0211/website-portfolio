
import StartingAnimation from './pages/StartingAnimation/StartingAnimation.jsx'
import '@fontsource/offside'; 

import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  
  return (
    <BrowserRouter>
      <StartingAnimation />
    </BrowserRouter>
  )
}

export default App;
