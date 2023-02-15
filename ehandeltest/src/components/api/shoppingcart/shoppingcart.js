import React from 'react'
import {useNavigate} from "react-router-dom"
import { Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

function Shoppingcart() {

    const navigate = useNavigate();
     const {carts} = useSelector((item)=>item.user)   
    console.log(carts)
 
    return (
    <div>
        <div align="center" className='main-div'>
            <h1 className="text-6xl">All Cart Items</h1>
            <Button style={{color:'black'}} onClick={() => navigate("/")}>Homepage<HomeIcon/></Button>
            <Button style={{color:'black'}} onClick={() => navigate("/checkout")}>Checkout<PointOfSaleIcon/></Button>
            <Typography className="text-4xl">Total Items: {carts.length}</Typography>
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

export default Shoppingcart