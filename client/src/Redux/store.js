import {configureStore} from "@reduxjs/toolkit"
import summary from "./slics.js"
const Researchstore=configureStore({
    reducer:{
        main:summary
    }
})
export default Researchstore;