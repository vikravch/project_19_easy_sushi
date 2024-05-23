import {createAsyncThunk} from "@reduxjs/toolkit";
import {Order} from "../../../entity/cart_bar/Order";
import {OrdersRepository} from "../../../data/cart_bar/OrdersRepository";

export const fetchOrdersAsync = createAsyncThunk<Order[]>(
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
        })
        return ordersList;
    }
);


export const updateOrdersAsync = createAsyncThunk(
    'order/updateOrders',
    async (orders : Order[]) => {
        await OrdersRepository.updateOrders(orders);
        return true;

    }
);
