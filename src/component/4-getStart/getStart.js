import React from 'react'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import style from './styleGetStart'
export default function contract() {
    const classes = style()
    return (
        <Box className={classes.getStart}>
            <Box className={classes.getStartContent}>
                <Box className={classes.getStartLink}>
                    <a href="#">지금 바로 시작하세요!</a>
                </Box>
                <Box className={classes.getStartTitle}>
                설명이 필요 없는 간단한 계약 과정,<br/>
직접 경험해보세요!
                </Box>
                <Button variant="contained" style={{borderRadius:25,padding:"10px 30px"}}>
                <span className={classes.getStartButton}>더 살펴보기 </span>
                <KeyboardArrowRightIcon className={classes.getStartButtonIcon}/>
                </Button>
            </Box>
        </Box>
    )
}
