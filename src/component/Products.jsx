import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { add } from '../store/cartSlice';
import { UseDispatch, useDispatch } from 'react-redux';

const Products = () => {

    const [product, setProduct] = useState([])


    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const finalRes = await res.json()
        setProduct(finalRes)
    }

    useEffect(() => {
        getData()
    }, [])

    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(add(item))
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {product.map((item, index) => (
                    <Grid key={index} item xs={12} md={6} lg={4}>
                        <Paper>
                            <Box className="product_wraper" style={{
                                padding: "12px", fontFamily: "sans-serif", maxHeight: "40vh",
                                minHeight: "40vh", padding: "10px 20px"
                            }}>
                                <img src={item.image} alt='image' style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }} />
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <Button onClick={() => handleAdd(item)} variant="contained">Add To Cart</Button>

                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Products
