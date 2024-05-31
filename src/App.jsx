import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Homepage from "./npages/Homepage";
import Productpage from "./npages/Productpage";
import Notfound from "./npages/Notfound";
import Menu from "./Menu";




const App = () => {
  return (

    <div>

      <BrowserRouter>
      <Menu/>
       <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Product" element={<Productpage/>}/>
          <Route path="*" element={<Notfound/>}/>
        
          </Routes>
      </BrowserRouter>
    </div>
  
  );
};

export default App;