import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Containers/User/userSlice";
import homeSlice from "../Containers/Home/homeSlice";

export default configureStore({
    reducer: {
        usuario : userSlice,
        peliculas: homeSlice
    }
})