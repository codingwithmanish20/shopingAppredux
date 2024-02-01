import { Box, Button, Grid, Paper } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'


const Cart = () => {
    const products = useSelector((state) => state.cart.value)
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(remove({ id }))
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {products.map((item, index) => (
                        <Grid key={index} item xs={12} md={6} lg={12}>
                            <Paper>
                                <Box className="product_wraper" style={{
                                    padding: "12px", fontFamily: "sans-serif", maxHeight: "50vh",
                                    minHeight: "40vh", padding: "10px 20px"
                                }}>
                                    <img src={item.image} alt='image' style={{ width: "10%", display: "flex", alignItems: "center", justifyContent: "center" }} />
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                    <Button onClick={() => handleRemove(item.id)} variant="contained">Remove To Cart</Button>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Cart
