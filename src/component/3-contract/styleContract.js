import { makeStyles } from '@mui/styles';
import * as customize from '../customize'

const style = makeStyles((theme)=>({
    contract:{
        maxWidth:customize.MAX_WIDTH,
        margin:"0 auto",
        padding:"120px 30px",
        "@media(max-Width:768px)": {
            padding:"50px 30px",

        },
    },
    contractContent:{
        display:"flex;",
        flexDirection:"column",
        alignItems:"center"
    },
    contractTitle:{
        fontSize: 40,
        fontFamily:customize.TEXT_STYLE_3,
        marginBottom:40,
        color: customize.BLACK, 
        "@media(max-Width:768px)": {
            fontSize:24,
        },
    },
    contractDescription:{
        fontSize: 18,
        fontFamily:customize.TEXT_STYLE_3,
        fontSize:18,
        textAlign:"center",
        color: customize.BLACK, 
        "@media(max-Width:768px)": {
            fontSize:10,
        },
    },
    contractBody:{
        display:"flex",
        marginTop:60,
        width:"100%",
        justifyContent: 'space-between',

        "@media(max-Width:426px)": {
            display:"block",
            marginTop:30,
        },
    },
    contractItem:{
        display:"flex",
        justifyContent:"space-around",
        marginBottom:30,
        flexDirection:"column",
        alignItems:"center"
    },
    contractItemContent:{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        "@media(max-Width:768px)": {
            display:"block"
            
        },
        '& h4': {
            fontWeight:500,
            fontSize: 24,
            fontFamily:customize.TEXT_STYLE_3,
            margin:"0 0 10px 0",
            color: customize.BLACK, 
            "@media(max-Width:768px)": {
                fontSize:18,
                textAlign:"center"
            },
        },
        '& p': {
            fontSize: 18,
            fontFamily:customize.TEXT_STYLE_3,
            textAlign:"center",
            color: customize.BLACK, 
            "@media(max-Width:768px)": {
                fontSize:14,
            },
        },
    },
    
}))

export default style