import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { Token, User } from "../../types";
import { setToken } from "../../axios";
// import { axiosInstance } from "../../axios";

export const login = createAsyncThunk<
  { user: User; token: Token },
  { email: string; password: string }
>("user/login", async ({ email, password }, thunkAPI) => {
  try {
    console.log(email, password);

    // login user with /token api route
    // const token = await axiosInstance.get("/token");
    // => token as { token: { access: boolean, refresh: boolean }, userId: string }
    const { token, userId } = await Promise.resolve({
      token: {
        access: nanoid(),
        refresh: nanoid(),
      },
      userId: nanoid(),
    });

    // set access token to axios environments
    setToken(token.access);

    // getting user with /users/{userId} api route
    const user = await getUserById(userId);

    return { user, token };
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const getUserById = async (id: string) => {
  //   const user = await axiosInstance.get(`/user/${id}`);
  const user = await Promise.resolve({
    id: id,
    name: `User${id}`,
    email: "useremail@gmail.com",
    avatar: null,
  });

  return user;
};
