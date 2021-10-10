import { makeStyles } from '@mui/styles';
import * as customize from '../customize'

const style = makeStyles((theme)=>({
    getStart:{
        background:customize.WHITE_GREY
    },
    getStartContent:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        maxWidth:customize.MAX_WIDTH,
        margin:"0 auto",
        padding:80,
        fontFamily:customize.TEXT_STYLE_3
    },
    getStartLink:{
        fontSize:18,
        "@media(max-Width:768px)": {
            fontSize:12,
        },
        '& a':{
            color:customize.BLUE
        },
        
    },
    getStartTitle:{
        fontSize:40,
        textAlign:"center",
        margin:"30px 0 50px 0",
        "@media(max-Width:768px)": {
            fontSize:28,
        },
        "@media(max-Width:450px)": {
            fontSize:16,
        },
    }   ,
    getStartButton:{
       fontSize:16,
        "@media(max-Width:350px)": {
            fontSize:12,
        },
    },
    getStartButtonIcon:{
        "@media(min-Width:350px)": {
            marginLeft:30
        },
    }

}))

export default style