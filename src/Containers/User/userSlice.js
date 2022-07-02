import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'usuario',
    initialState:{
        token: ""
    },
    reducers:{
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logout: (state, action) => {
            return{
                ...state.initialState
            }
        }
    },
});

export const loginUsuario = (body) => async (dispatch) => {
    try{
        const user = await axios.post('https://videoclub-backend.herokuapp.com/usuarios/login',body);
        let decodificarToken = jwt(user.data.token);
        console.log(jwt)
        if(user.status === 200){
            dispatch(login({
                ...decodificarToken,
                token: user.data.token
            }))
        }

    }catch (error){
        console.log(error)
    }
};
export const logOut = () => (dispatch) => {
    dispatch(logout());
};

export const {login, logout} = userSlice.actions

export const selectDatosUsuario = (state) => state.usuario

export default userSlice.reducer;

