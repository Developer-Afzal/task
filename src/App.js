import Homepage from "./Pages/Homepage";
import './assets/Styles.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Homepage/>
      <Routes>
        <Route path="/" components={<Homepage/>}/>
      </Routes> 
      </BrowserRouter>
   
    </>
  );
}

export default App;
