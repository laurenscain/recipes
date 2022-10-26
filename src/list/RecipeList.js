import React from 'react';
import styled from 'styled-components';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { useCustomContext } from '../store/CustomContext';
import { SELECT_RECIPE } from '../store/Actions';

const IndexDiv = styled.div`
    height: 100%;
    width: 420px;
    border: solid 1px #808080;
`;


const RecipeList = () => {

    const {appState, appDispatch } = useCustomContext();
    const { recipesSorted, categories } = appState;
    console.log('recipes',recipesSorted)
    
    const findCatName = catId => {
        let catName = categories.find(c => {return c.categoryId == catId});
        //console.log('catid',catId, catName)
        return catName ? catName.categoryName : 'Unlabeled';
    }

    const selectRecipe = recipe => {
        appDispatch({type:SELECT_RECIPE, value:recipe});
    }

  return (
    <IndexDiv>

        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: '95%', width: '100%', overflowY: 'auto', overflowX:'hidden', margin: '10px 0' }}
        >
            {Object.keys(recipesSorted).sort((a,b) => findCatName(a) > findCatName(b) ? 1 : -1).map(catId => <TreeItem nodeId={catId} label={findCatName(catId)}>
                {recipesSorted[catId].map(r => <TreeItem nodeId={`${r.title}`} label={`• ${r.title}`} onClick={() => selectRecipe(r)}
                sx={{overflowWrap: "break-word"}}></TreeItem>)}
            </TreeItem>)}
        
        </TreeView>
    </IndexDiv>
  )
}

export default RecipeList;