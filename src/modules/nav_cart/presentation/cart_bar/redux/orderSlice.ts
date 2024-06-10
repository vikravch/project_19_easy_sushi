import {Order} from "../../../entity/cart_bar/Order";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchOrdersAsync, FetchOrdersType, updateOrdersAsync} from "./ordersAsyncThunk";

const initialState = {
    items: [] as Order[],
    orderSum: 0,
    status: 'idle',
}

const calculateOrderSum = (items : any) => {
    return items.reduce((sum : number, item : any) => {
        return sum + (parseFloat(item.menuItemPrice) * parseFloat(item.menuItemAmount));
    }, 0);
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrderItem: (state, action: PayloadAction<Order>) => {
            const currentItem = state.items.find(item => item.menuItemId === action.payload.menuItemId);

            if (currentItem) {
                currentItem.menuItemAmount = (parseInt(currentItem.menuItemAmount) + 1).toString();
            } else {
                state.items.push(action.payload);
            }
            state.orderSum += +action.payload.menuItemPrice;
        },
        removeOrderItem: (state, action: PayloadAction<String>) => {
            const currentItem = state.items.find(item =>
                item.menuItemId == action.payload
            )
            if (currentItem) {
                state.items = state.items.filter(item =>
                    item.menuItemId == action.payload
                );
                state.orderSum -= +currentItem.menuItemPrice || 0;
            }
        },
        incrementOrderItemAmount: (state, action: PayloadAction<string>) => {
            const currentItem = state.items.find(item => item.menuItemId === action.payload);
            const isLegalOrderChange = (state: any) => {
                if (currentItem)
                    return +currentItem.menuItemAmount >= 0 &&
                        +currentItem.menuItemAmount < 10;
            };
            if (currentItem && isLegalOrderChange(state)) {
                currentItem.menuItemAmount = (parseInt(currentItem.menuItemAmount) + 1).toString();
                state.orderSum = calculateOrderSum(state.items);
            }
        },
        decrementOrderItemAmount: (state, action: PayloadAction<string>) => {
            const currentItem = state.items.find(item => item.menuItemId === action.payload);
            if (currentItem) {
                const amount = +currentItem.menuItemAmount;
                if (amount > 1) {
                    currentItem.menuItemAmount = (amount - 1).toString();
                } else {
                    state.items = state.items.filter(item => item.menuItemId !== action.payload);
                }
                state.orderSum -= +currentItem.menuItemPrice;
            }
        },
        computeOrderSum: (state) => {
            state.orderSum = calculateOrderSum(state.items);
        }


    },
    extraReducers: builder => {
        builder
            .addCase(fetchOrdersAsync.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchOrdersAsync.fulfilled, (state, action: PayloadAction<FetchOrdersType>) => {
                state.status = 'succeeded';
                state.items = action.payload.list;
                state.orderSum = action.payload.sum;
            })
            .addCase(fetchOrdersAsync.rejected, state => {
                state.status = 'failed'
            })
            .addCase(updateOrdersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateOrdersAsync.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(updateOrdersAsync.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
})

export const {
    addOrderItem,
    removeOrderItem,
    incrementOrderItemAmount,
    decrementOrderItemAmount,
    computeOrderSum
} = orderSlice.actions;

export default orderSlice.reducer;