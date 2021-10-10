import { makeStyles } from '@mui/styles';
import * as customize from '../customize'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'
import img6 from '../../img/6.jpg'

const style = makeStyles((theme)=>({
    analyst:{
        backgroundColor:customize.WHITE
    },
    analystContent:{
        maxWidth:customize.MAX_WIDTH,
        margin:"0 auto",
        padding:"40px 0"
    },
    analystItem:{
        
        padding:"50px 0",
        display:"flex",
        justifyContent:"space-between",
        fontFamily:customize.TEXT_STYLE_3,
        position:"relative",
        "@media(max-Width:1048px)": {
            padding:"20px 0",
           }, 
    },
    analystItemImgPc1:{
        height:400,
        width:480,
        background:`url(${img4}) no-repeat `,
        backgroundSize:"contain",
        objectFit:"contain",
        marginTop:200,
        "@media(max-Width:1048px)": {
            marginTop:50,
           },
        "@media(max-Width:450px)":{
            display:"none"
        }    
    },
    analystItemImgPc2:{
        height:400,
        width:480,
        background:`url(${img5}) no-repeat `,
        backgroundSize:"contain",
        objectFit:"contain",
        marginTop:200,
        "@media(max-Width:1048px)": {
            marginTop:50,
           },
        "@media(max-Width:450px)":{
            display:"none"
        }    
    },
    analystItemImgPc3:{
        height:400,
        width:480,
        background:`url(${img6}) no-repeat `,
        backgroundSize:"contain",
        objectFit:"contain",
        marginTop:200,
        "@media(max-Width:1048px)": {
            marginTop:50,
           },
        "@media(max-Width:450px)":{
            display:"none"
        }    
    },
    analystItemImgMobile1:{
        "@media(max-Width:450px)":{
            
        
        height:200,
        width:200,
        background:`url(${img4}) no-repeat `,
        backgroundSize:"contain",
        objectFit:"contain",
        margin:"0 auto",
        backgroundPosition:"center"
        }
    },
    analystItemImgMobile2:{
        "@media(max-Width:450px)":{
        height:200,
        width:200,
        background:`url(${img5}) no-repeat `,
        backgroundSize:"contain",
        objectFit:"contain",
        margin:"0 auto",
        backgroundPosition:"center" 
        }
       },
    analystItemImgMobile3:{
        "@media(max-Width:450px)":{
        height:200,
        width:200,
        background:`url(${img6}) no-repeat `,
        backgroundSize:"contain",
        objectFit:"contain",
        margin:"0 auto",
        backgroundPosition:"center"
        }
    },
    analystItemDescription:{
        fontWeight:"normal",
        "@media(max-Width:450px)": {
            width:"100%",
           
           }, 
        '& h3':{
            fontSize:40,
            fontWeight: "normal",
            "@media(max-Width:1048px)": {
                fontSize:30,
                
               }, 
            "@media(max-Width:450px)": {
                textAlign:"center"
               }, 
               
        },
    },
    analystItemDescriptionDetails:{
        margin:"30px 0",
        "@media(max-Width:1048px)": {
            margin:"15px 0"
           }, 
        '& h4':{
            fontSize:24,
            marginBottom:20,
            fontWeight:"normal",
            "@media(max-Width:1048px)": {
                fontSize:18,
               }, 
            "@media(max-Width:450px)": {
                textAlign:"center",
                fontSize:14,
               }, 

        },
        '& h5':{
            fontSize:18,
            fontWeight:300,
            "@media(max-Width:1048px)": {
                fontSize:14,
               }, 
            "@media(max-Width:450px)": {
                textAlign:"center",
                fontSize:10,
               },
        }
    }
}))

export default style