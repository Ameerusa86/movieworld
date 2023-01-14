import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home";
import AboutContainer from "../Container/About";
import MoviesContainer from "../Container/Movies";
import TVSeriesContainer from "../Container/TVSeries";
import SearchContainer from "../Container/Search";
import DetailsContainer from "../Container/Detailes";
import ContactContainer from "../Container/Contact";
import HeaderComponent from "../Components/Header";
import FooterComponent from "../Components/Footer";

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/series" element={<TVSeriesContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route
            path="/details/:movieid/:mediatype"
            element={<DetailsContainer />}
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
};

export default RouterComponent;
