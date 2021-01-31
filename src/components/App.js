import React from 'react';
import CategoriesList from './CategoriesList'
import {useDispatch, useSelector} from 'react-redux'
import {POPULATE_PRODUCTS} from '../actions/productAction'

function App() {
  const dispatch = useDispatch()
  const store = useSelector(store => store)


  const dispatchProductAction = () => {
    dispatch(POPULATE_PRODUCTS)
  }

  console.log(store);
  return (
    <>
      <button onClick={() => dispatchProductAction()}>Click here to dispatch!</button>
      <CategoriesList />
    </>
  );
}

export default App;
