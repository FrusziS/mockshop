import React from 'react';
import {getProducts} from '../actions/productActions'
import CategoriesList from './CategoriesList'
import {useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {useEffect} from 'react'

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  },
});

function App() {
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => dispatch(getProducts()), [dispatch]);
  
  return (
    <div className={styles.app}>
      <CategoriesList />
    </div>
  );
}

export default App;
