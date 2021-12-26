import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Country from "../views/Countries";
import CountryDetail from "../views/CountryDetail";
import NotFound from "../views/NotFound";
import Layout from "../components/Layout";

const Router = () => (
  <HashRouter>
    <Layout>
      <Routes>
        <Route path="/countries/" element={<Country />} />
        <Route path="/countries/:countryId" element={<CountryDetail />} />
        <Route component={NotFound} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default Router;
