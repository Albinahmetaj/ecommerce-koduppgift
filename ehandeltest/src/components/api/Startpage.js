import React, {useState, useEffect} from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import { Button, useTheme } from '@mui/material';
import { ContainerStyle, HeaderStyle, SearchBarStyle, AnchorTagStyle , ImgLogo} from './styles/index';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { createAPIEndpoint, ENDPOINTS } from './axiosIndex';
import clothLogo from './images/clothlogo.jpg'
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Startpage({}) {
    const theme = useTheme();
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        createAPIEndpoint(ENDPOINTS.CATEGORIES).fetchAll()
        .then(res => {
            setCategories(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
        },[]);
     




  return (
    <>
    
    <div>
       
        <ContainerStyle>
            
    <HeaderStyle>
    <i>Brandstore.com</i> 
    <Badge badgeContent={10} color="primary">
      <MailIcon style={{marginLeft:'20px', color:'#d2a679'}} color="action" />
    </Badge>
    <Button style={{color:'black'}} onClick={() => navigate("/cart")}><ShoppingCartIcon/></Button>
    </HeaderStyle>
    </ContainerStyle>

    <SearchBarStyle>
    <TextField
      id="search-bar"
      className="text"
      label="Search item"
      variant="outlined"
      placeholder="Search..."
      size="small"
      style={{width:'50em'}}
    />
     <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
    </SearchBarStyle>
    <AnchorTagStyle>
    <a onClick={() => navigate("/electronics")} style={{margin:'5px', cursor:'pointer'}}>{categories[0]}<hr/></a>
    <a onClick={() => navigate("/jewelery")} style={{margin:'5px', cursor:'pointer'}}>{categories[1]}<hr/></a>
    <a onClick={() => navigate("/men")} style={{margin:'5px', cursor:'pointer'}}>{categories[2]}<hr/></a>
    <a onClick={() => navigate("/women")} style={{margin:'5px', cursor:'pointer'}}>{categories[3]}<hr/></a>
    <a onClick={() => navigate("/all")} style={{margin:'5px', cursor:'pointer'}}>all products<hr/></a>
    </AnchorTagStyle>
    <hr/>
    <ImgLogo>
    <img style={{cursor:'pointer', width:'733px'}} src={clothLogo} alt="">
        
    </img>
    </ImgLogo>
    
    </div>
    
    </>
  )
}

export default Startpage