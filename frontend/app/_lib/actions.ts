"use server";

import { revalidatePath } from "next/cache";
import {
  addCategory,
  deleteCategory,
  updateCategoryById,
  userLogin,
  userRegister,
} from "./apiService";

export async function userLoginAction(data: FormData) {
  const username = data.get("username");
  const password = data.get("password");
  const userToken = await userLogin({ username, password });

  return userToken;
}

export async function userRegisterAction(data) {
  const userInfo = await userRegister(data);
  return userInfo.token;
}

export async function categoryCreateAction(data) {
  const category = await addCategory(data);
}

export async function categoryDeleteAction(data) {
  const response = await deleteCategory(data);
}

export async function updateCategoryByIdAction(data) {
  const response = await updateCategoryById(data);
}
