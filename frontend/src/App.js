import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./Component/Home";
import EditFlight from "./page/EditFlight";
import SearchFlight from "./page/SearchFlight";
import AllFlights from "./page/AllFlights";

const App = () => {
  return (
    <ThemeProvider>
      <div>
      <Navbar />
        <Router>
          <div className="App">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/update" element={<EditFlight />} />
                <Route path="/all_flights" element={<AllFlights />} />
                <Route path="/search" element={<SearchFlight />} /> 
              </Routes>
            </main>
          </div>
        </Router>
      <Footer />
        
      </div>
    </ThemeProvider>
  );
};

export default App;
