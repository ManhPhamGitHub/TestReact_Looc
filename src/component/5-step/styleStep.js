import { makeStyles } from '@mui/styles';
import * as customize from '../customize'
import img1 from '../../img/2.jpg';
import img2 from '../../img/3.jpg';
import img3 from '../../img/1.jpg';
import img4 from '../../img/2.jpg';

const style = makeStyles((theme)=>({
    step:{
    },
    stepBackgroundWhite:{
        backgroundColor:customize.WHITE
    },
    stepBackgroundGrey:{
        backgroundColor:customize.WHITE_GREY
    },
    stepItem:{
        display:"flex",
        padding:"120px 0",
        position:"relative",
        maxWidth:customize.MAX_WIDTH,
        margin:"0 auto",
        justifyContent:"space-between",
        "@media(max-Width:768px)": {
            padding:"30px 0 50px 0",
        }
    },
    stepItemImg1:{
        background: `url(${img1}) no-repeat`,
        width:"50%",
        backgroundSize:"cover",
        boxShadow: "2px 5px 10px grey",
        objectFit:"contain",
        backgroundPosition:"center",
        "@media(max-Width:768px)": {
            position:"absolute",
            width:"100%",
            height:"85%",
            opacity:'0.7'
        },
    },
    stepItemImg2:{
        background: `url(${img2}) no-repeat`,
        width:"50%",
        backgroundSize:"cover",
        boxShadow: "2px 5px 10px grey",
        objectFit:"contain",
        backgroundPosition:"center",
        "@media(max-Width:768px)": {
            position:"absolute",
            width:"100%",
            height:"85%",
            opacity:'0.7'
        },
    },
    stepItemImg3:{
        background: `url(${img3}) no-repeat`,
        width:"50%",
        backgroundSize:"cover",
        boxShadow: "2px 5px 10px grey",
        objectFit:"contain",
        backgroundPosition:"center",
        "@media(max-Width:768px)": {
            position:"absolute",
            width:"100%",
            height:"85%",
            opacity:'0.7'
        },
    },
    stepItemImg4:{
        background: `url(${img4}) no-repeat`,
        width:"50%",
        backgroundSize:"cover",
        boxShadow: "2px 5px 10px grey",
        objectFit:"contain",
        backgroundPosition:"center",
        "@media(max-Width:768px)": {
            position:"absolute",
            width:"100%",
            height:"85%",
            opacity:'0.7'
        },
    },
    stepItemContentLeft:{
        "@media(max-Width:768px)": {
            position:"relative",
            width:"100%",
            color:customize.WHITE,
            zIndex:9,
            marginRight:0
        },
        marginRight:"7%",
        padding:"40px 0",
        width:"50%",
        textAlign:"right",
        "@media(max-Width:1048px)": {
            padding:0
           },  
        '& h5':{
            marginTop:30,
            color:customize.BLUE,
            fontSize:18,
            fontFamily:customize.TEXT_STYLE_2,
            "@media(max-Width:1048px)": {
                fontSize:14,
               },  
            "@media(max-Width:768px)": {
                color:customize.BLUE,
                textShadow: "white 0.1em 0.1em 0.2em",
                textAlign:"center"
            },
        },
        '& h4':{
            color:customize.BLACK,
            fontSize:40,
            fontFamily:customize.TEXT_STYLE_3,
            fontWeight: "normal",
            margin:"20px 0",
            lineHeight:"50px",
            "@media(max-Width:1048px)": {
                fontSize:28,
               },  
               "@media(max-Width:768px)": {
                color:customize.WHITE,
                textShadow: "black 0.1em 0.1em 0.2em",
                textAlign:"center"
            },
        },
        "& p":{
            color:customize.BLACK,
            fontSize:20,
            fontFamily:customize.TEXT_STYLE_3,
            fontWeight: "normal",
            "@media(max-Width:1048px)": {
                fontSize:12,
               },  
               "@media(max-Width:768px)": {
                color:customize.WHITE,
                textShadow: "black 0.1em 0.1em 0.2em",
                textAlign:"center"
            },
            "@media(max-Width:450px)": {
                fontSize:10
            },
        }
    },

    stepItemContentRight:{
        "@media(max-Width:768px)": {
            position:"relative",
            width:"100%",
            color:customize.WHITE,
            marginLeft:0
        },
        marginLeft:"7%",
        padding:"40px 0",
        width:"50%",
        textAlign:"left",
        "@media(max-Width:1048px)": {   
            padding:0
           },
        '& h5':{
            marginTop:30,
            color:customize.BLUE,
            fontSize:18,
            fontFamily:customize.TEXT_STYLE_2,
            "@media(max-Width:1048px)": {
                fontSize:14,
               }, 
               "@media(max-Width:768px)": {
                color:customize.BLUE,
                textShadow: "white 0.1em 0.1em 0.2em",
                textAlign:"center"
            },
        },
        '& h4':{
            color:customize.BLACK,
            fontSize:40,
            fontFamily:customize.TEXT_STYLE_3,
            fontWeight: "normal",
            margin:"20px 0",
            lineHeight:"50px",
            "@media(max-Width:1048px)": {
                fontSize:28,
               }, 
               "@media(max-Width:768px)": {
                color:customize.WHITE,
                textShadow: "black 0.1em 0.1em 0.2em",
                textAlign:"center"
            },
        },
        "& p":{
            color:customize.BLACK,
            fontSize:20,
            fontFamily:customize.TEXT_STYLE_3,
            fontWeight: "normal",
            "@media(max-Width:1048px)": {
                fontSize:12,
               }, 
               "@media(max-Width:768px)": {
                color:customize.WHITE,
                textShadow: "black 0.1em 0.1em 0.2em",
                textAlign:"center"
            },
            "@media(max-Width:450px)": {
                fontSize:10
            },
        }
    }

}))

export default style