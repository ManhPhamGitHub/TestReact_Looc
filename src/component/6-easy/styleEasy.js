import { makeStyles } from '@mui/styles';
import * as customize from '../customize'

const style = makeStyles((theme)=>({
    easy:{
        backgroundColor:customize.BLUE
    },
    easyContent:{
        maxWidth:customize.MAX_WIDTH,
        margin:"0 auto",
        display:"flex",
        padding:"100px 0",
        justifyContent:"space-between"
    },
    easyTitle:{
        color:customize.WHITE,
        fontSize:48,
        fontFamily:customize.TEXT_STYLE_2,
        marginRight:10,
        "@media(max-Width:1048px)": {
            fontSize:28,
           }, 
    },
    easyDescription:{
        color:customize.WHITE,
        fontSize:18,
        fontFamily:customize.TEXT_STYLE_3,
        "@media(max-Width:1048px)": {
            fontSize:12,
           }, 
    }
}))

export default style