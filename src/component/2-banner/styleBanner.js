import { makeStyles } from '@mui/styles';
import * as customize from '../customize'
import img1 from '../../img/banner.jpg'
const style = makeStyles((theme)=>({
    banner:{
        
        background:`url(${img1})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        objectFit:"contain",
        height:657,
        backgroundPosition:"center",
        "@media(max-Width:768px)": {
            height:450
        },
    },
    bannerTitle:{
        fontSize:50,
        fontWeight:"bold",
        fontFamily:customize.TEXT_STYLE_3,
        margin:"100px 0 40px 0",
        color: customize.WHITE, 
        "@media(max-Width:768px)": {
            fontSize:25,
            margin:"70px 0 20px 0"
        },
    },
    bannerContent:{
        maxWidth:customize.MAX_WIDTH,
        margin:"0 auto",
        color:customize.WHITE,
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },
    bannerButton:{
        display:"flex",
        alignItems:"center"
    },
    bannerDescription:{
        fontSize:14,
        lineHeight:1.7,
        fontFamily:customize.TEXT_STYLE_3,
        marginBottom:100,
        color: customize.WHITE, 
        "@media(max-Width:768px)": {
            fontSize:12,
            marginBottom:50,

        },
    },
    bannerButtonText:{
        fontWeight:500,
        fontSize:14,
        marginRight:20,
        "@media(max-Width:768px)": {
            fontSize:12,
        },
    },
    
}))

export default style