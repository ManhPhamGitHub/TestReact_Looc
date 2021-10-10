import { makeStyles } from '@mui/styles';
import * as customize from '../customize'

const style = makeStyles((theme)=>({
    footer:{
        backgroundColor:customize.WHITE,
    },
    footerContent:{
        maxWidth:customize.MAX_WIDTH,
        margin:"0 auto",
        display:"flex",
        justifyContent:"space-between",
        padding:"60px 0",
        fontFamily:customize.TEXT_STYLE_3
    },
    footerContentLeftHeader:{ 
            fontSize:14,
            fontWeight: 500,
            "@media(max-Width:426px)": {
                fontSize:10,
            },
    },
    footerContentLeftBody:{
        fontSize:14,
        fontWeight: 300,
        margin:"30px 0",
        "@media(max-Width:426px)": {
            fontSize:10,
        },
    },
    footerContentRight:{
        display:"flex",
        "@media(max-Width:426px)": {
            flexDirection:"column"
        },
    },
    footerContentRightIcon:{
        marginLeft:20
    }
}))

export default style