import React from 'react'
import { Box, Button } from '@mui/system'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DescriptionIcon from '@mui/icons-material/Description';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import style from './styleContract'
export default function contract() {
    const classes = style()
    return (
        <Box className={classes.contract}>
            <Box className={classes.contractContent}>
                <Box className={classes.contractTitle}>
                    간단하게 끝내는 계약과정
                </Box>
                <Box className={classes.contractDescription}>
                    계약서 파일을 업로드하여 서명을 요청해 보세요.<br />

                    상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.<br/>
                    언제 어디서든 5분만에 계약을 체결해 보세요.
                </Box>
                <Box className={classes.contractBody}>
                    <Box className={classes.contractItem}>
                        <MoveToInboxIcon style={{ width: 90, height: 90 ,color:"157eff"}} />
                        <Box className={classes.contractItemContent}>
                            <h4>업로드하기</h4>
                            <p>필요한 계약서 파일을<br />
                                업로드합니다.</p>
                        </Box>
                    </Box>
                    <Box className={classes.contractItem}>
                        <AllInboxIcon style={{ width: 90, height: 90,color:"157eff" }} />
                        <Box className={classes.contractItemContent}>
                        <h4>서명 요청하기</h4>
                        <p>업로드한 계약서 파일에 <br />
                            서명 요청을 하세요.</p>
                        </Box>
                    </Box>
                    <Box className={classes.contractItem}>
                        <DescriptionIcon style={{ width: 90, height: 90 ,color:"157eff"}} />
                        <Box className={classes.contractItemContent}>
                        <h4>서명 입력하기</h4>
                        <p>상대방이 간단한 절차를 통해<br />
                            서명할 수 있습니다.</p>
                        </Box>
                    </Box>
                    <Box className={classes.contractItem}>
                        <ImportantDevicesIcon style={{ width: 90, height: 90,color:"157eff" }} />
                        <Box className={classes.contractItemContent}>
                        <h4>계약 완료</h4>
                        <p>언제 어디서든<br />
                            5분 만에 계약 완료!</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
