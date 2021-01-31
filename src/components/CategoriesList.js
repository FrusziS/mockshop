import React from 'react';
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CategoriesList() {
  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );
  const styles = useStyles();

  return (
    <div className={styles.container} display="flex">
      {productsByCategory != null ? (
        Object.keys(productsByCategory).map((category, index) =>{
          return (
            <Card className={styles.card} key={index}>
              <CardActionArea>
              <CardMedia
                className={styles.categoryImage}
                image={productsByCategory[category][0].image}
              />
              <CardContent>
              <Typography
              variant='h6'
              color='primary'
              className={styles.titleCase}
              >
                {category}
              </Typography>
              </CardContent>
              </CardActionArea>   
            </Card>
          );
        })
      ) : (
        <CircularProgress size={24} />
      )}
    </div>
  );
}