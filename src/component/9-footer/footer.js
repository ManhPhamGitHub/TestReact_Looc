import React from 'react'
import { Box } from '@mui/system'
import style from './styleFooter'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function contract() {
    const classes = style()
    return (
        <Box className={classes.footer}>
            <Box className={classes.footerContent}>
                <Box className={classes.footerContentLeft}>
                    <Box className={classes.footerContentLeftHeader}>
                            이용약관    <span style={{ margin: "0 20px" }}>   개인정보처리방침 </span>    고객센터
                    </Box>
                    <Box className={classes.footerContentLeftBody}>
                        (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000<br />
                        이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000<br />
                        서울특별시 강남구 도산대로 8길 17 3층 <br />
                        <br /> <br />
                        Copyright© GUARDSIGNATURE All rights reserved.
                    </Box>
                </Box>
                <Box className={classes.footerContentRight}>
                    <Box className={classes.footerContentRightIcon}>
                        <FacebookIcon />
                    </Box>
                    <Box className={classes.footerContentRightIcon}>
                        <InstagramIcon />
                    </Box>
                    <Box className={classes.footerContentRightIcon}>
                        <LinkedInIcon />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
