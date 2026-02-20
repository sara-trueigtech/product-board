'use client';

import { get } from "../api";

export const getAllUsers = () => get("/users");

export const getUserByEmail = (email) =>
  get(`/users?email=${email}`);

export const loginUser = (email, password) =>
  get(`/users?email=${email}&password=${password}`);

export const getAllProducts = () => get("/products");

export const getProductById = (id) =>
  get(`/products/${id}`);