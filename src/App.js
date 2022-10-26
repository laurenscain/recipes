import React, {useRef} from 'react';
import './App.css';
import RecipeForm from './form/RecipeForm';
import RecipeList from './list/RecipeList';
import { useEffect } from 'react';
import { appReducer } from './store/AppReducer';
import { initializeState } from './store/AppReducer';
import { LOAD_RECIPES } from './store/Actions';
import CustomContext from './store/CustomContext';

function App() {

  const dataLoaded = useRef(null);
  const [appState, appDispatch ] = React.useReducer(appReducer, {}, initializeState);

  const providerState = {
    appState,
    appDispatch
  }

  useEffect(() => {
    if(dataLoaded.current) return;
    console.log('load recipes')
    appDispatch({type:LOAD_RECIPES});
    dataLoaded.current = true;
  }, [])
  
  return (
    <CustomContext.Provider value={providerState} >
      <div className='container'>
        <RecipeList />
        <RecipeForm />
      </div>
    </CustomContext.Provider>
  );
}

export default App;
