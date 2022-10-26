import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useCustomContext } from '../store/CustomContext';
import { makeStyles } from '@material-ui/core/styles';

const IndexDiv = styled.div`
    height: 100%;
    width: 100%;
    border: solid 1px #808080;
    padding: 10px;
`;
const EmptyLbl = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    color: #9c9c9c;
`;

const useStyles = makeStyles((theme) => ({
    Title: {
        fontSize: '24px !important',
    },
    Source: {
        fontSize: '14px !important',
        padding: '0 10px'
    }
}));

const RecipeForm = () => {
    const {appState, appDispatch } = useCustomContext();
    const { selectedRecipe, categories } = appState;
    const classes = useStyles();

    if(!selectedRecipe) 
        return (<IndexDiv><EmptyLbl>Please select a recipe on the left.</EmptyLbl></IndexDiv>);

  return (
    <IndexDiv>
        <Typography className={classes.Title}>{selectedRecipe.title}</Typography>
        <Typography className={classes.Source}>{`from: ${selectedRecipe.source}`}</Typography>
    </IndexDiv>
  )
}

export default RecipeForm;