import { CategoryList } from "../../entity/navigation_bar/CategoryList";

// here instead of generics put the array of list item entities
export interface CategoryListRepository<T>{

    getPizzasList():Promise<CategoryList<T>>
    getSetsList():Promise<CategoryList<T>>
    getWokList():Promise<CategoryList<T>>
    getSushiList():Promise<CategoryList<T>>
    getSaladsList():Promise<CategoryList<T>>
    getSoupsList():Promise<CategoryList<T>>
    getCornDogsList():Promise<CategoryList<T>>
    getDrinksList():Promise<CategoryList<T>>
    getDiscountsList():Promise<CategoryList<T>>

}