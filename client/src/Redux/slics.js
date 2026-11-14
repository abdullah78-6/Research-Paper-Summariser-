import {createSlice} from "@reduxjs/toolkit"
const Researchslice=createSlice({
    name:"Research",
    initialState:{
        navclass:"",
        file:null,
        result:"",
        loading:false
    },
    reducers:{
        setnavclass(state,action){
            state.navclass=action.payload;
        },
        setloading(state,action){
            state.loading=action.payload
        },
        setfile(state,action){
            state.file=action.payload;
        },
        setresult(state,action){
            state.result=action.payload;

        }
    }
})
export const control=Researchslice.actions;
export default Researchslice.reducer;