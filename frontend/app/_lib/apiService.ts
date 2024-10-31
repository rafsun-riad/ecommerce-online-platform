import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export async function userLogin(data) {
  try {
    const { username, password } = data;
    const response = await axios.post(
      `${BASE_URL}/account/login/`,
      {
        username: username,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function userRegister(data) {
  try {
    const response = await axios.post(`${BASE_URL}/account/register/`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addCategory(data) {
  const { name, userToken } = data;
  try {
    const response = await axios.post(
      `${BASE_URL}/api/category/create/`,
      { name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories(data) {
  const { userToken } = data;
  try {
    const response = await axios.get(`${BASE_URL}/api/category/`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryById(data) {
  const { id, userToken } = data;
  try {
    const response = await axios.get(`${BASE_URL}/api/category/${id}/`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateCategoryById(data) {
  const { id, userToken, name } = data;
  try {
    const response = await axios.put(
      `${BASE_URL}/api/category/edit/${id}/`,
      { name },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCategory(data) {
  const { id, userToken } = data;
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/category/delete/${id}/`,
      {
        headers: { Authorization: `Bearer ${userToken}` },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
