import store from '../store';
import React from 'react';
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CategoriesList() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const url = useSelector(store => store.product.url);

  useEffect(() => {
    fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let allProducts = [];
        let allImages = []
        for (let key in data){
          if (data.hasOwnProperty(key)){
              allProducts.push(data[key].category)
              allImages.push(data[key].image)
          }
        }
    const result = allProducts.reduce((a,b) => (a[b]='',a),{});
    setProducts(Object.keys(result))
    });
  }, [url])

  console.log(products)

  return (
    <Box display="flex">
      {products.map((product, index) => (
      <Card className={classes.root}>
        <CardActionArea>         
              <CardMedia
                className={`classes.media ${index}`}
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {product}
              </Typography>
              </CardContent>
         
        </CardActionArea>
      </Card>
       ))}
    </Box>
  );
}