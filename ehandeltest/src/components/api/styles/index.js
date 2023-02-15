import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/nunito"
import { Typography } from "@mui/material";


export const ContainerStyle = styled(Box)(()=> ({
display: 'flex',
marginTop: 4,
justifyContent: 'center',
padding: '2px 8px',
alignItems:'center',
textAlign:'center'
}));

export const HeaderStyle = styled(Typography)(()=> ({
padding:'4px',
flexGrow:1,
fontSize:'3em',
fontFamily:'"Nunito"',
color:'#d2a679',

}));

export const SearchBarStyle = styled(Box)(()=> ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    padding: '2px 8px',
    alignItems:'center',
    }));

    export const AnchorTagStyle = styled(Box)(()=> ({
        display: 'flex',
        marginTop: 4,
        justifyContent: 'center',
        padding: '2px 8px',
        alignItems:'center',
        }));

        export const ImgLogo = styled(Box)(()=> ({
            display: 'flex',
            marginTop: 4,
            justifyContent: 'center',
            padding: '2px 8px',
            alignItems:'center'
            }));

            export const ImgOrder = styled(Box)(()=> ({
                display: 'flex',
                justifyContent: 'center',
                width:'auto',
                height:'30em',
                opacity:'0.8'
                }));

                export const Socials = styled(Box)(()=> ({
                    display: 'flex',
                    marginTop: 4,
                    justifyContent: 'center',
                    padding: '2px 8px',
                    alignItems:'center',
                    textAlign:'center',
                    
                    }));
            
        
    