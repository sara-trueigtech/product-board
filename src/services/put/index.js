'use client';

import { put } from "../api";

export const updateUser = (id, data) =>
  put(`/users/${id}`, data);

export const updateProduct = (id, data) =>
  put(`/products/${id}`, data);