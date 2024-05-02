const LANGUAGE = 'language';
export const getLangFromStorage = () => localStorage.getItem(LANGUAGE);

export const setLangInStorage = (lang: string) => localStorage.setItem(LANGUAGE, lang);

export const languages = ['En', 'He']