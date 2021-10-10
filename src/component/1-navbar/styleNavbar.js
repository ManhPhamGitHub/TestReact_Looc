import { makeStyles } from '@mui/styles';
import * as customize from '../customize'
const style = makeStyles((theme)=>({
    
    navbar:{
        fontFamily:customize.TEXT_STYLE_2,
        position:"fixed",
        backgroundColor:customize.WHITE,
        width:"100%",
        zIndex:999,
        borderBottom:"1px solid grey"
    },
    navbarContent:{
        display:"flex",
        justifyContent: "space-between",
        padding:"10px 0",
        maxWidth:customize.MAX_WIDTH,
        margin:"0 auto",
        alignItems:"center"
    },
    navbarMenu:{
        margin:"30px",
        textAlign:"center",
        "@media(min-Width:769px)": {
            display:'flex',
            alignItems:"center"
           },
    },
    navbarLogo:{
        fontFamily:customize.TEXT_STYLE_3,
        color:customize.BLUE,
        marginRight:20,
        "@media(max-Width:1048px)": {
           fontSize:14,
          },
    },
    navbarMenuUl:{
        
        "@media(min-Width:769px)": {
            display:'flex',

           },
        
    },
    navbarMenuLi:{
        "@media(max-Width:769px)": {
            marginBottom:30,
            marginRight:0
           },
        
        marginRight:30,
        
        '& a': {
            color: customize.BLACK,  
            "@media(max-Width:1048px)": {
                fontSize:12,
               },  
        },
    },
    navbarButton1:{
        fontFamily:customize.TEXT_STYLE_2,
        fontSize:14,
        color: customize.BLACK, 
       
    },
    navbarButton2:{
        fontFamily:customize.TEXT_STYLE_2,
        fontSize:14,
        marginLeft:10,
        color: customize.BLACK, 
        "@media(max-Width:769px)": {
            marginLeft:0,
            marginTop:30
           },
        
    },
    navbarButton:{
        margin:"30px 0",
        textAlign:"center",
        "@media(min-Width:769px)": {
            display:'flex',
            alignItems:"center"
           },
    }
}))

export default style