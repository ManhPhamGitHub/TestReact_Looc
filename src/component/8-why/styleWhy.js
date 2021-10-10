import { makeStyles } from '@mui/styles';
import * as customize from '../customize'
import img from '../../img/security.jpg'
const style = makeStyles((theme) => ({
    why: {
        backgroundColor: customize.WHITE_GREY
    },
    whyContent: {
        maxWidth: customize.MAX_WIDTH,
        margin: "0 auto",
        padding: "100px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@media(max-Width:1048px)": {
            padding: "50px 0",
        },
    },
    whyHeader: {
        fontFamily: customize.TEXT_STYLE_3,

        '& h3': {
            fontSize: 40,
            fontWeight: "normal",
            "@media(max-Width:1048px)": {
                fontSize: 28,
                textAlign:"center"
            },
            "@media(max-Width:450px)": {
                fontSize: 18,
            },
            
        },
        '& h5': {
            fontSize: 18,
            fontWeight: 300,
            margin: "20px 0",
            textAlign: "center",
            "@media(max-Width:1048px)": {
                fontSize: 18,
                margin: "20px 0 5px 0",
                textAlign:"center"
            },
            "@media(max-Width:450px)": {
                fontSize: 12,
            },
        }
    },
    whyBody: {

        "@media(min-Width:769px)": {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "40px 0",
        },
    },
    whyBodyLeft:{
        "@media(max-Width:768px)": {
        display:'flex',
        justifyContent:"space-between"
        }
    },
    whyBodyRight:{
        "@media(max-Width:768px)": {
        display:'flex',
        justifyContent:"space-between"
        }
    },
    whyBodyImg: {
        background: `url(${img}) no-repeat `,
        height: 'auto',
        width: "50%",
        backgroundSize: "cover",
        backgroundPosition:"center",
        "@media(max-Width:768px)": {
            height: 350,
            width:'auto'
        },
    },
    whyBodyLeftItem: {
        fontFamily: customize.TEXT_STYLE_3,
        "@media(max-Width:768px)": {
            display:"flex",
            flexDirection:"column",
            marginTop:20,
            alignItems:"center"            
        },
        '& h4': {
            fontSize: 24,
            margin: "10px 0",
            fontWeight: "normal",
            "@media(max-Width:1048px)": {
                fontSize: 16,
                margin: "5px 0"
            },
            "@media(max-Width:450px)": {
                fontSize: 12,
            },
            
        },
        '& h5': {
            fontSize: 18,
            fontWeight: 30,
            marginBottom: 40,
            "@media(max-Width:1048px)": {
                fontSize: 12,
                marginBottom: 20,
            },
            "@media(max-Width:768px)": {
                textAlign:"center"  ,
                fontSize: 10
            },
            
        }

    },
    whyBodyRightItem: {
        "@media(max-Width:768px)": {
            marginTop:20,
            alignItems:"center"            
        },
        fontFamily: customize.TEXT_STYLE_3,
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        '& h4': {
            fontSize: 24,
            margin: "10px 0",
            fontWeight: "normal",
            textAlign: "right",
            "@media(max-Width:1048px)": {
                fontSize: 16,
                margin: "5px 0"
            },
            "@media(max-Width:450px)": {
                fontSize: 12,
                textAlign:"center"
            },
        },
        '& h5': {
            fontSize: 18,
            fontWeight: 30,
            marginBottom: 40,
            textAlign: "right",
            "@media(max-Width:1048px)": {
                fontSize: 12,
                marginBottom: 20,
            },
            "@media(max-Width:768px)": {
                textAlign:"center"  ,
            },
            "@media(max-Width:450px)": {
                fontSize: 10,
            },
        }

    },
    whyButton: {
        paddingTop: 10
    },
    whyButtonText: {
        "@media(min-Width:350px)": {
            marginRight:30
        },
    },

}))

export default style