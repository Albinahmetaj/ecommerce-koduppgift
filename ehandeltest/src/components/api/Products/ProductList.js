import React, {useState, useEffect} from 'react';
import { createAPIEndpoint,ENDPOINTS } from '../axiosIndex';
import { Table, TableBody, TableCell, TableHead, TableRow,Button } from '@mui/material';
import { AddCart } from '../redux/cart';
import { useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

  useEffect(()=>{
    createAPIEndpoint(ENDPOINTS.PRODUCTS).fetchAll()
    .then(res => {
      setProducts(res.data)
        console.log(res.data)
    })
    .catch(err => console.log(err))
    },[]);
 
  return (
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>Category</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Rating count</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Title</TableCell>
            <TableCell style={{cursor:'pointer'}} onClick={() => navigate("/cart")}>To Cart<ShoppingCartIcon/></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {
            products.map(item => (
                <TableRow key={item.id}>
                    <TableCell>
                        {item.category}
                    </TableCell>
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
                    <Button onClick={()=>dispatch(AddCart(item))}>Add to Cart</Button>
                    </TableCell>
                </TableRow>
            ))
        }
    </TableBody>
</Table>
  )
}

export default ProductList