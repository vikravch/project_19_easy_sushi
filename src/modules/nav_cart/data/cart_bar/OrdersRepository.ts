
const filledMockJson = [
    {
        "menu_item_id": "1111",
        "menu_item_picture": "https://esushi.md/files/2022-11-11/images/medium/380_a1000-_-1668176636.png",
        "menu_item_name": "Philadelphia and Salmon",
        "menu_item_amount": "2",
        "menu_item_price": "120.99"
    },
    {
        "menu_item_id": "2222",
        "menu_item_picture": "https://esushi.md/files/2023-01-06/images/medium/f_b_i14614-_-1673014147.png",
        "menu_item_name": "Salmon Combination",
        "menu_item_amount": "2",
        "menu_item_price": "150.99"
    },
    {
        "menu_item_id": "3333",
        "menu_item_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiD4o_5C-UEmiZUHFKqoNA-hzMHadRfB40-VxO5bjqHSyJKO-yRxDJjp9AAZfpw-3fm4&usqp=CAU",
        "menu_item_name": "Biggest Philadelphia",
        "menu_item_amount": "1",
        "menu_item_price": "180.99"
    }
];

const emptyMockJson: any[] = [];

export class OrdersRepository  {
    static async  fetchOrders() {
        //TODO replace with fetch from server
        return Promise.resolve(filledMockJson);
    }

    static async getOrdersList() {
        try {
            const data = await OrdersRepository.fetchOrders();
            return data || [];
        } catch (error) {
            console.error("Error fetching orders:", error);
            return [];
        }
    }
}