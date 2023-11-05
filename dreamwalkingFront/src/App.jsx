import React from "react";
import{Routes, Route} from 'react-router-dom'
import CreateLocation from "./pages/CreateLocation";
import ShowLocation from "./pages/ShowLocation";
import DeleteLocation from "./pages/DeleteLocation";
import Home from "./pages/Home";
import EditLocation from "./pages/EditLocation";

const App = () => {

      return (
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/location/create' element={<CreateLocation/>} />
          <Route path='location/edit/:id' element={<EditLocation/>} />
          <Route path='location/show/:id' element={<ShowLocation/>} />
          <Route path='location/delete/:id' element={<DeleteLocation/>} />
        </Routes>
      )
}


export default App