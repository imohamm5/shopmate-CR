import { Routes ,Route } from 'react-router-dom';
import {Home , Card} from "../pages";
import React from 'react'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Card />} />
      </Routes>
    </>
  );
}
