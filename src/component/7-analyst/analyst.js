import React from 'react'
import { Box, Button } from '@mui/system'
import style from './styleAnalyst'
export default function contract() {
    const classes = style()
    return (
        <Box className={classes.analyst}>
            <Box className={classes.analystContent}>

                {/* ITEM 1 */}
                <Box className={classes.analystItem}>
                    <Box className={classes.analystItemDescription}>
                        <h3>모두 시그니처만의<br />
                            효과적인 기능</h3>
                        <Box className={classes.analystItemImgMobile1}>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>템플릿 저장 및 불러오기</h4>
                            <h5>자주 사용하는 문서를 저장하고 필요할 때 마다 템플릿을 <br />
                                불러와 빠르게 작업할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>폴더 설정</h4>
                            <h5>별도로 관리가 필요한 문서들은 폴더 설정을 통해<br />
                                보다 체계적으로 관리할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>텍스트 및 체크박스 입력</h4>
                            <h5>텍스트, 체크박스를 설정하여 문서에 텍스트를 자유롭게<br />
                                입력하고 상대방의 동의 여부를 확인할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>다양한 파일형식 지원</h4>
                            <h5>한글, 오피스 계열(Word, PPT, Excel), PDF부터 JPG, PNG,<br />
                                GIF, BMP와 같은 이미지 파일까지 변환없이 업로드하고<br />
                                사용할 수 있습니다.</h5>
                        </Box>
                    </Box>
                    <Box className={classes.analystItemImgPc1}>
                    </Box>
                </Box>

                {/* ITEM 2 */}

                <Box className={classes.analystItem}>
                    <Box className={classes.analystItemImgPc2}>
                    </Box>
                    <Box className={classes.analystItemDescription}>
                        <h3>계약을 쉽고 빠르게<br />
                            체결하는 방법!</h3>
                        <Box className={classes.analystItemImgMobile2}>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>공인인증서 없는 본인인증</h4>
                            <h5>공인인증서와 ActiveX가 필요 없습니다. 이메일 인증,<br />
                                휴대폰 인증, 암호인증 설정으로 간편하게 본인인증 해 보세요.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>카카오톡으로 서명 요청하기</h4>
                            <h5>카카오톡으로 상대방에게 서명을 요청해보세요. 상대방은<br />
                                PC, 모바일 언제 어디에서나 계약서에 서명할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>계약 체결과 보안</h4>
                            <h5>누구나 이용하기 쉬운 직관적인 흐름으로 빠르고 신속하게<br />
                                계약을 체결하고, 이후에도 지속적으로 관리할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>가입 없이 즉시 서명</h4>
                            <h5>계약 상대방은 번거로운 회원가입 절차 없이 간편인증 후<br />
                                즉시 서명할 수 있습니다.</h5>
                        </Box>
                    </Box>

                </Box>

                {/* ITEM 3 */}

                <Box className={classes.analystItem}>
                    <Box className={classes.analystItemDescription}>
                        <h3>수월하게 계약을<br />
                            완료하세요</h3>
                        <Box className={classes.analystItemImgMobile3}>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>감사추적인증서를 통한 증명</h4>
                            <h5>계약완료시 원본과 함께 발급되는 ‘감사추적인증서’로 계약<br />
                                당사자의 행위를 쉽게 증명할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>혼자 서명하기</h4>
                            <h5>동의서, 영수증 같이 본인만 서명하는 문서에도 빠르게<br />
                                서명할 수 있습니다.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>다양한 드라이브 업로드 지원</h4>
                            <h5>Google Drive, Dropbox, Box, One Drive에 저장되어 있<br />
                                문서를 변환 없이 바로 업로드하여 이용하세요.</h5>
                        </Box>
                        <Box className={classes.analystItemDescriptionDetails}>
                            <h4>계약 문서 관리</h4>
                            <h5>내문서함에서 계약 문서별로 내용 확인하기, 계약서 다운로드,<br />
                                공유하기, 삭제하기가 가능합니다.</h5>
                        </Box>
                    </Box>
                    <Box className={classes.analystItemImgPc3}>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
