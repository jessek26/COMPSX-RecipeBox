import { createContext, useState, useContext, useEffect } from 'react';

//create context
const CookListContext = createContext();

//make a hook for consuming the context
export function useCookList() {
    const context = useContext(CookListContext);
    //
    if(!context) { 
        throw new Error('useCookList must be used within CookListProvider');
    }
    return context;
}

//create provider component
export const CookListProvider = ({ children }) => {
    const [cookList, setCookList] = useState(() => {
        const saved = localStorage.getItem('cookList');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cookList', JSON.stringify(cookList));
    }, [cookList]);

    const addToCookList = (recipe) => {
        if (!cookList.some(r => r.id === recipe.id)) {
            setCookList(prev => [...prev, recipe]);
        }
    };

    //removes recipe based on ID
    const removeFromCookList = (recipeId) => {
        //makes new array featuring all recipes expcet the one w/ the ID passed
        setCookList(prev => prev.filter(recipe => recipe.id !== recipeId));
    };

    //checks to see if a recipe is saved
    const isInCookList = (recipeId) => {
        return cookList.some(recipe => recipe.id === recipeId);
    };

    const value = {
        cookList,
        addToCookList,
        removeFromCookList,
        isInCookList
    };

    return (
        <CookListContext.Provider value={value}>
            {children}
        </CookListContext.Provider>
    );
};