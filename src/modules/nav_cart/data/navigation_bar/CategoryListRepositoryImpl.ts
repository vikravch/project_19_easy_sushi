import { CategoryList } from "../../entity/navigation_bar/CategoryList";
import { CategoryListRepository } from "../../repository/navigation_bar/NavigationBarRepository";

const fakeJsonListRequest = "https://jsonplaceholder.typicode.com/posts";

// in every element <Pizzas/>, <Sets/> .. calling corresponding method with useCallback

export default class CategoryListRepositoryImpl<T> implements CategoryListRepository<T> {
  
    async getPizzasList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

    async getSetsList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

    async getWokList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

    async getSushiList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

    async getSaladsList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

    async getSoupsList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

    async getCornDogsList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

    async getDrinksList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

    async getDiscountsList(): Promise<CategoryList<T>> {
        const res = await fetch(fakeJsonListRequest);
        const data = await res.json();
        return new CategoryList(data.items);    
    }

}