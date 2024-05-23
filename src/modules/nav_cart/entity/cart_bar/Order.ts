export class Order {
    menuItemId: string;
    menuItemPicture: string;
    menuItemName: string;
    menuItemAmount: string;
    menuItemPrice: string;

    constructor(
        menuItemId: string,
        menuItemPicture: string,
        menuItemName: string,
        menuItemAmount: string,
        menuItemPrice: string
    ) {
        this.menuItemId = menuItemId;
        this.menuItemPicture = menuItemPicture;
        this.menuItemName = menuItemName;
        this.menuItemAmount = menuItemAmount;
        this.menuItemPrice = menuItemPrice;
    }
}
