import { LOAD_RECIPES, RESET, SELECT_RECIPE } from '../store/Actions';
import CATEGORIES from '../data/categories';
import RECIPE_CATEGORIES from '../data/recipeCategories';
import INGREDIENTS from '../data/ingredients';
import RECIPES from '../data/recipes';

const initialState = {
    categories: CATEGORIES,
    ingredients: INGREDIENTS,
    recipes: RECIPES,
    recipesSorted: [],
    recipeCategories: RECIPE_CATEGORIES,
    selectedRecipe: null,
    errors: {},
    validating: false,
    valid: false,
    confirmed: false,
    dataConsolidated: false
  };

export function initializeState() {
    return Object.assign({}, initialState);
}

export const  appReducer=(state = [], action)=> {
    switch (action.type) {
        case LOAD_RECIPES:
            if(state.dataConsolidated) return state;
            state.dataConsolidated = true;

            let grouped = state.recipeCategories.reduce(((all, r) => {if(!all[r.categoryId]) all[r.categoryId] = []; all[r.categoryId].push(r); return all; }), []);
            let matched = grouped.map(g => {let g2 = g.map(i => state.recipes.find(r => r.id === i.recipeId)); return g2;});
            
            state.recipesSorted = matched;
            return {
                ...state,
                recipesSorted :  matched
            };
        case SELECT_RECIPE:
            state.selectedRecipe = action.value;
            
            return {
                ...state,
                selectedRecipe :  action.value
            };
        case RESET:
            return initialState;
        default:
            return state;
    }
}

