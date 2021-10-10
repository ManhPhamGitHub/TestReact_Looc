import React from 'react'
import { Box,  } from '@mui/system'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material'

import style from './styleBanner'
export default function banner() {
    const classes = style()
    return (
        <Box className={classes.banner}>
            <Box className={classes.bannerContent}>
                <Box className={classes.bannerTitle}>
                    모든 계약을 쉽고 
                    <br/>
                    간단하게, 빠르게 처리하세요.
                </Box>
                <Box className={classes.bannerDescription}>
                    가드 시그니처를 이용하면 어떤 계약이든<br/>
                    복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,<br/>
                    문서 처리 및 관리까지 편리하게 이용할 수 있습니다.
                </Box>
                <Box className={classes.bannerButton}>
                    <Box className={classes.bannerButtonText}>
                        지금 확인하기
                    </Box>
                    <button style={{width:35,height:35,borderRadius:25,backgroundColor:'white',position:"relative",border:"none",cursor:"pointer"}}>
                        <KeyboardArrowRightIcon style={{color:"#157eff",position:"absolute",top:5,left:5}}/>
                    </button>

                </Box>
            </Box>
        </Box>
    )
}
