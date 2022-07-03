import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const homeSlice = createSlice({
    name: 'peliculas',
    initialState:{
        titulo:""
    },
    reducers:{
        letraPelicula: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
    },
});

export const peliculasFiltradas = (body) => async (dispatch) => {
    try{
        const user = await axios.post('https://videoclub-backend.herokuapp.com/peliculas/letrapelicula',body);
        console.log(user.data)
        if(user.status === 200){
            dispatch(letraPelicula({
                titulo: user.data
            }))
        }
        
    }catch (error){
        console.log(error)
    }
};


export const {letraPelicula} = homeSlice.actions

export const selectLetraPelicula = (state) => state.peliculas.input

export default homeSlice.reducer;