import {configureStore, createSlice} from '@reduxjs/toolkit'

const HomeSlice= createSlice({
    name:'Home',
    initialState:{
        header_nav:'inliine_block',
        data:[],
        Total_value: 0,
        right:'-70vw'
    },
    reducers:{
        add(state,action){
            return{
                ...state,
                data:[...state.data,action.payload]
            }
        },
        remove(state,action){
            console.log(action.payload)
            return{
                ...state,
                data:[...state.data.slice(0,action.payload),...state.data.slice(action.payload+1)]
            }
        },
        changeQuantity(state,action){
           return{
            ...state,
            data: state.data.map(
                (content, i) => i === action.payload ? {...content, quantity:content.quantity+1}
                                        : content
            )
           }
        },
        adjustQuantity(state,action){
            return{
             ...state,
             data: state.data.map(
                 (content, i) => i === action.payload.object.index ? {...content, quantity:action.payload.object.value}
                                         : content
             )
            }
         },
         changeTotal(state,action){
            console.log(action.payload)
            return{
                ...state,
                Total_value:state.Total_value + action.payload
            }
         },
         resetTotal(state){
            return{
                ...state,
                Total_value:0
            }
         },
        changeNav(state,action){
            if(action.payload==='none'){
                return{
                    ...state,
                    header_nav:'none'
                }
            }
            else{
                return{
                    ...state,
                    header_nav:'flex'
                }
            }
        },
        changeRight(state,action){
            return{
                ...state,
                right:action.payload
            }
        }
    }
})

export const home_action =HomeSlice.actions
const store=configureStore({reducer:{
    Home:HomeSlice.reducer,
}})

export default store;