import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Countries from "../views/Countries";
import CountryDetail from "../views/CountryDetail";
import NotFound from "../views/NotFound";
import Layout from "../components/Layout";

const Router = () => (
  <HashRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:countryCode" element={<CountryDetail />} />
        <Route component={NotFound} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default Router;
