import {Order} from "../../entity/cart_bar/Order";
import {useSelector} from "react-redux";
import {store} from "../../../../general/redux/store";

// const orders = store.getState().order.items;
// const ordersSum = store.getState().order.orderSum;

const filledMockJson = JSON.stringify([
    {
        "menuItemId": "1111",
        "menuItemPicture": "https://esushi.md/files/2022-11-11/images/medium/380_a1000-_-1668176636.png",
        "menuItemName": "Philadelphia and Salmon",
        "menuItemAmount": "2",
        "menuItemPrice": "120.99"
    },
    {
        "menuItemId": "2222",
        "menuItemPicture": "https://esushi.md/files/2023-01-06/images/medium/f_b_i14614-_-1673014147.png",
        "menuItemName": "Salmon Combination",
        "menuItemAmount": "2",
        "menuItemPrice": "150.99"
    },
    {
        "menuItemId": "3333",
        "menuItemPicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiD4o_5C-UEmiZUHFKqoNA-hzMHadRfB40-VxO5bjqHSyJKO-yRxDJjp9AAZfpw-3fm4&usqp=CAU",
        "menuItemName": "Biggest Philadelphia",
        "menuItemAmount": "1",
        "menuItemPrice": "180.99"
    }
]);



// const emptyMockJson: any[] = [];
const sum = 120.99+150.99+180.99;
const filledOrdersSum = sum.toString();


export class OrdersRepository  {
    //TODO replace with fetch from server
    static async fetchOrders() {
        try {
            const storageVal = localStorage.getItem("orders-list");
            const ordersJson = (storageVal) ? JSON.parse(storageVal) : JSON.parse(filledMockJson);
            return Promise.resolve(ordersJson);
        } catch (error) {
            console.error("Error fetching orders:", error);
            return JSON.parse(filledMockJson);
        }
    }


    static async  updateOrders(orders: Order[]){
        //TODO replace with fetch to server
        try {
            localStorage.setItem("orders-list", JSON.stringify(orders));
            return Promise.resolve(true);
        } catch (error) {
            console.error("Error updating orders sum:", error);
        }
    }

}