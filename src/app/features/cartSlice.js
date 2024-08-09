
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
const data = localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : [];

const initialState = {
    cartItems : data,
}
const cart  = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state , action){
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].count += 1;
                toast('increased product quantity' ,{
                    position: "bottom-right", })
                } else{
                    
                    state.cartItems.push({...action.payload, count : 1});
                    toast.success('product added successfully' ,{
                        position: "bottom-right", })
            }


            localStorage.setItem('item', JSON.stringify(state.cartItems));
            
        },
        remove(state,action){
            state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload.id);
            localStorage.setItem('item', JSON.stringify(state.cartItems));
            toast.info('product removed successfully' ,{
                position: "bottom-right", });
        },
        clear(state, action){
            state.cartItems = [];
            localStorage.setItem('item', JSON.stringify(state.cartItems));
        },
        decrease(state, action){
            const itemIndex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
            if (action.payload.count === 1) {
                state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload.id);
                toast('product removed successfully' ,{
                    position: "bottom-right", })
                } else{
                    
                    state.cartItems[itemIndex].count -= 1;
                    toast('decreased product quantity' ,{
                        position: "bottom-right", })
            }
        },
        gettotal(state, action){
            state.cartItems.reduce(()=>{},{
                total : 0,
                quntity : 0
            })
        }

    }
})
export default cart.reducer;
export const {add, remove, clear, decrease, gettotal} = cart.actions;
