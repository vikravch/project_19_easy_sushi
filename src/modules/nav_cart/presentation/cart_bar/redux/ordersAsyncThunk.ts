import {createAsyncThunk} from "@reduxjs/toolkit";
import {Order} from "../../../entity/cart_bar/Order";
import {OrdersRepository} from "../../../data/cart_bar/OrdersRepository";

export type FetchOrdersType = {
    list: Order[],
    sum: number
}

export const fetchOrdersAsync = createAsyncThunk<FetchOrdersType>(
    'order/fetchOrders',
    async () => {
        const data = await OrdersRepository.fetchOrders();
        console.log(data);
        let ordersList: any[];
        ordersList = [];
        data.forEach((i: any) => {
            const order = new Order(
                i.menuItemId,
                i.menuItemPicture,
                i.menuItemName,
                i.menuItemAmount,
                i.menuItemPrice);
            ordersList.push(order);
        });
        const sum = ordersList.reduce((sum : number, item : any) => {
            return sum + (parseFloat(item.menuItemPrice) * parseFloat(item.menuItemAmount));
        }, 0);
        return {list: ordersList, sum: sum};
    }
);


export const updateOrdersAsync = createAsyncThunk(
    'order/updateOrders',
    async (orders : Order[]) => {
        await OrdersRepository.updateOrders(orders);
        return true;

    }
);
