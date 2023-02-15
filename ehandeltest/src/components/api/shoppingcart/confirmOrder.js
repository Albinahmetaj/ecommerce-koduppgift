import React from 'react'
import checkoutIMG from '../images/orderConfirm.png'
import  {ImgOrder,ContainerStyle,HeaderStyle, Socials} from '../styles/index'
import { Snackbar, Alert, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
function ConfirmOrder() {
const navigate = useNavigate();

const refreshPage = () => {
  navigate("/")
  navigate(0);
}


  return (
    
        <body style={{backgroundColor: 'lightblue'}}>
        <ImgOrder>
        <img src={checkoutIMG} alt=""/>
        </ImgOrder>
        <Snackbar  autoHideDuration={6000} >
  <Alert  severity="success" sx={{ width: '100%' }}>
    This is a success message!
  </Alert>
</Snackbar>
<Typography style={{fontFamily:'Ink Free', textAlign:'center', fontSize:'50px',marginTop:'20px'}}>THANK YOU</Typography>
<ContainerStyle>
<Button onClick={() => refreshPage("/")} style={{fontFamily:'Ink Free', fontSize:'20px', marginTop:'10px', marginRight:'20px'}}><HomeIcon />Back to home</Button>
<Alert severity="success">Order Confirmed!</Alert>
</ContainerStyle>
<Socials>
<FacebookIcon style={{fontSize:'40px', marginRight:'10px', cursor:'pointer'}}/>
<InstagramIcon style={{fontSize:'40px',marginRight:'10px',cursor:'pointer'}}/>
<TwitterIcon style={{fontSize:'40px',marginRight:'10px',cursor:'pointer'}}/>
<AlternateEmailIcon style={{fontSize:'40px',cursor:'pointer'}}/>
</Socials>
</body>
    
  )
}

export default ConfirmOrder