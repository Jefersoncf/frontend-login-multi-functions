import React, { useEffect } from "react";
import Layout from "./Layout";
import ProductList from "../components/ProductList";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLog } from "../features/authSlice";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserLog());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default Product;
