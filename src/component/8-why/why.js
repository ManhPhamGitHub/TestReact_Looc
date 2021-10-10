import React from 'react'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import style from './styleWhy'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function contract() {
    const classes = style()
    return (
        <Box className={classes.why}>
            <Box className={classes.whyContent}>
                <Box className={classes.whyHeader}>
                    <h3>가드 시그니처를 선택하는 이유</h3>
                    <h5>많은 기업들이 가드 시그니처를 선택하는 이유,<br />
                        아래 버튼을 눌러 상세한 정보를 알아보세요.</h5>
                </Box>
                <Box className={classes.whyBody}>
                    <Box className={classes.whyBodyLeft}>
                        <Box className={classes.whyBodyLeftItem}>
                            <MenuBookIcon style={{ width: 30, height: 30, }} />
                            <h4>쉽고 편리하게</h4>
                            <h5>번거로운 절차 없이 누구나<br />
                                빠르게 계약을 체결할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.whyBodyLeftItem}>
                            <ConstructionIcon style={{ width: 30, height: 30, }}/>
                            <h4>안전한 보안</h4>
                            <h5>데이터는 암호화되어 전송되고<br />
                                안전한 곳에 저장됩니다.</h5>
                        </Box>
                        <Box  className={classes.whyBodyLeftItem}>
                            <AssignmentIcon style={{ width: 30, height: 30, }}/>
                            <h4>다양한 파일형식</h4>
                            <h5 style={{margin:0}} >한글, 오피스부터 PDF, JPG와<br />
                                같은 이미지 파일도 변환없이 지원</h5>
                        </Box>
                    </Box>
                    <Box className={classes.whyBodyImg}>

                    </Box>
                    <Box className={classes.whyBodyRight}>
                        <Box className={classes.whyBodyRightItem}>
                            <AccountCircleIcon style={{width:30, height:30}}/>
                            <h4>간단한 본인인증</h4>
                            <h5>공인인증서와 ActiveX없이도<br />
                                본인인증을 할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.whyBodyRightItem}>
                            <FolderOpenIcon style={{width:30, height:30}}/>
                            <h4>효율적인 작업</h4>
                            <h5>자주 사용하는 문서들을 저장하고<br />
                                불러와 작업할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.whyBodyRightItem}>
                            <ImportContactsIcon style={{width:30, height:30,}}/>
                            <h4>계약서 관리</h4>
                            <h5 style={{margin:0}}>관리가 필요한 문서를 한 눈에 보고<br />
                                체계적으로 관리할 수 있습니다.</h5>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.whyButton} >
                <Button variant="contained" style={{borderRadius:25,padding:"10px 30px",backgroundColor:"black"}}>
                <span className={classes.whyButtonText}>더 살펴보기 </span>
                <KeyboardArrowRightIcon className={classes.getStartButtonIcon}/>
                </Button>
                </Box>
            </Box>
        </Box>
    )
}
