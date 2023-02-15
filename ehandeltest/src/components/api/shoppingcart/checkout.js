import React from 'react'
import {useNavigate} from "react-router-dom"
import { Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import checkoutIMG from '../images/checkout.png'
import CreditCardIcon from '@mui/icons-material/CreditCard';


function Checkout() {
    const navigate = useNavigate();
    const {carts} = useSelector((item)=>item.user)   
  return (
    <div>
        <div align="center" className='main-div'>
            <h1 className="text-6xl">CHECKOUT<CreditCardIcon/></h1>
            
            <Button style={{color:'black'}} onClick={() => navigate("/cart")}>Return to cart<ShoppingCartIcon/></Button>
            <Typography className="text-4xl">Total Price: {carts.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}$</Typography>
            <Button onClick={() => navigate("/confirmorder")} variant="contained" color="success">BUY</Button>
        </div>
        <div className="grid p-6 justify-content-center">

        </div>

        <Table>
    <TableHead>
        <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Rating count</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Quantity</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {
            carts.map(item => (
                <TableRow key={item.id}>
                    
                    <TableCell>
                        {item.description}
                    </TableCell>
                    <TableCell>
                        {item.price}
                    </TableCell>
                    <TableCell>
                        <img style={{height:'100px'}} src={item.image}></img>
                    </TableCell>
                    <TableCell>
                        {item.rating.count}
                    </TableCell>
                    <TableCell>
                        {item.rating.rate}
                    </TableCell>
                    <TableCell>
                        {item.title}
                    </TableCell>
                    <TableCell>
                    {item.quantity}
                    </TableCell>
                </TableRow>
                
            ))
        }
        
    </TableBody>
</Table>
    </div>
  )
}

export default Checkout