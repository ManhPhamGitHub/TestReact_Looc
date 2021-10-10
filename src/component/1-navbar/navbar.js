import React, { useState, useEffect } from 'react'
import { Button, Box, Typography, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import style from './styleNavbar'
export default function Navbar() {
    const [width, setWidth] = useState(window.innerWidth)
    const [navMobi, setNavMobi] = useState(false)

    console.log(width)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const classes = style()
    return (
        <Box className={classes.navbar}>
            <Box className={classes.navbarContent}>
                <Box >
                    <Box className={classes.navbarLogo}>
                        GUARD <br />SIGNATURE
                    </Box>
                </Box>

                {/* Nav PC */}
                {
                    width > 768 ? (<>
                        <Box className={classes.navbarMenu}>
                            <ul className={classes.navbarMenuUl}>
                                <li className={classes.navbarMenuLi}>
                                    <a href="#" >서비스 소개</a>
                                </li>
                                <li className={classes.navbarMenuLi}>
                                    <a href="#">법적효력·보안</a>
                                </li>
                                <li className={classes.navbarMenuLi}>
                                    <a href="#">활용 분야</a>
                                </li>
                                <li className={classes.navbarMenuLi}>
                                    <a href="#">이용 혜택</a>
                                </li>
                                <li className={classes.navbarMenuLi}>
                                    <a href="#">요금 안내</a>
                                </li>
                                <li className={classes.navbarMenuLi}>
                                    <a href="#">고객센터</a>
                                </li>
                            </ul>
                        </Box>
                        <Box className={classes.navbarButton}>
                            <Box className={classes.navbarButton1}>
                                <a href="#">로그인</a>
                            </Box>
                            <Box style={{ marginLeft: 20 }} className={classes.navbarButton2}>
                                <a href="#"  >회원가입</a>
                            </Box>
                        </Box>
                    </>)
                        :
                        // NAV MOBI
                        (
                            <Box>
                                <Box>
                                    <Button style={{marginRight:-15}} onClick={() => setNavMobi(true)}><MenuIcon /></Button>
                                </Box>
                                <Drawer
                                    anchor="right"
                                    open={navMobi}
                                    onClose={() => setNavMobi(false)}
                                >
                                    <Box className={classes.navbarMenu}>
                                        <ul className={classes.navbarMenuUl}>
                                            <li className={classes.navbarMenuLi}>
                                                <a href="#" >서비스 소개</a>
                                            </li>
                                            <li className={classes.navbarMenuLi}>
                                                <a href="#">법적효력·보안</a>
                                            </li>
                                            <li className={classes.navbarMenuLi}>
                                                <a href="#">활용 분야</a>
                                            </li>
                                            <li className={classes.navbarMenuLi}>
                                                <a href="#">이용 혜택</a>
                                            </li>
                                            <li className={classes.navbarMenuLi}>
                                                <a href="#">요금 안내</a>
                                            </li>
                                            <li className={classes.navbarMenuLi}>
                                                <a href="#">고객센터</a>
                                            </li>
                                        </ul>
                                    </Box>
                                    <Box className={classes.navbarButton}>
                                        <Box className={classes.navbarButton1}>
                                            <a href="#">로그인</a>
                                        </Box>
                                        <Box className={classes.navbarButton2}>
                                            <a href="#"  >회원가입</a>
                                        </Box>
                                    </Box>
                                </Drawer>
                            </Box>
                        )
                }
            </Box>
        </Box>
    )
}
