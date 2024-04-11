import {createSlice} from "@reduxjs/toolkit";
import {setLangInStorage} from "../../modules/category_page/presentation/utils/common";
import {getLangFromStorage} from "../common";
const lang = getLangFromStorage();
type Language = "En" | "He"
interface IState {
    language: string;
}
export const initialState: IState = {
    language: lang || 'En',
}
const sliceName = 'language';
const languageSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        changeCurrentLanguage: (state, action) => {
            state.language = action.payload;
            setLangInStorage(action.payload);
        }
    }
})
export default languageSlice.reducer;
export const {changeCurrentLanguage} = languageSlice.actions;