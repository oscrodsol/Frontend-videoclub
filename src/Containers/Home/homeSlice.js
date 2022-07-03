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

export const peliculasFiltradas = (argumento) => async (dispatch) => {

    try{

        let body = {
            titulo : argumento
          };
        const user = await axios.post('https://videoclub-backend.herokuapp.com/peliculas/letrapelicula',body);
        console.log(user.data[0])
        if(user.status === 200){
            dispatch(letraPelicula({
                titulo: user.data[0].titulo
            }))
        }
        
    }catch (error){
        console.log(error)
    }
};


export const {letraPelicula} = homeSlice.actions

export const selectLetraPelicula = (state) => state.peliculas.titulo

export default homeSlice.reducer;