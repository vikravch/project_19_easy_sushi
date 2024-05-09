export class Order {
    menu_item_id: string;
    menu_item_picture: string;
    menu_item_name: string;
    menu_item_amount: string;
    menu_item_price: string;

    constructor(
        menu_item_id: string,
        menu_item_picture: string,
        menu_item_name: string,
        menu_item_amount: string,
        menu_item_price: string
    ) {
        this.menu_item_id = menu_item_id;
        this.menu_item_picture = menu_item_picture;
        this.menu_item_name = menu_item_name;
        this.menu_item_amount = menu_item_amount;
        this.menu_item_price = menu_item_price;
    }
}