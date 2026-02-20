'use client';

import { post } from "../api";

export const createUser = (data) =>
  post("/users", data);

export const createProduct = (data) =>
  post("/products", data);