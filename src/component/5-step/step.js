import React from 'react'
import { Box } from '@mui/system'
import style from './styleStep'
export default function contract() {
    const classes = style()
    return (
        <Box className={classes.step}>

            {/* Item 1 */}

            <Box className={classes.stepBackgroundWhite}>
                <Box className={classes.stepItem}>
                    <Box className={classes.stepItemImg1}>
                    </Box>
                    <Box className={classes.stepItemContentRight}>
                        <h5> FIRST</h5>
                        <h4>한 눈에 확인하는<br />
                            계약 상태</h4>
                        <p>계약이 진행되는 모든 과정을 실시간으로 추적해보세요.<br />
                            진행 상태에 따라 내 서명 필요, 서명 대기중, 서명 완료,<br />
                            취소, 거절 등이 조회됩니다. 상태 필터 기능을 통해 상태별로<br />
                            문서를 나열하고 관리할 수도 있습니다.</p>
                    </Box>
                </Box>
            </Box>

            {/* Item 2 */}

            <Box className={classes.stepBackgroundGrey}>
                <Box className={classes.stepItem}>
                    <Box className={classes.stepItemContentLeft}>
                        <h5> SECOND</h5>
                        <h4>사용하던 서명<br />
                            그대로
                        </h4>
                        <p>사용하던 사인과 도장을 PC와 모바일에서도 사용할 수 있습니다.<br />
                            사인을 직접 그리거나, 다양한 서체의 디지털 도장을 만들 수 있습니다.<br />
                            실제 도장을 카메라로 찍어서 업로드 하면 깔끔하게 보정되며,<br />
                            가드 시그니처에서 만든 사인과 도장을 계약서에 바로 사용할 수 있습니다</p>
                    </Box>
                    <Box className={classes.stepItemImg2}>
                    </Box>
                </Box>
            </Box>

            {/* item 3 */}

            <Box className={classes.stepBackgroundWhite}>
                <Box className={classes.stepItem}>
                    <Box className={classes.stepItemImg3}>
                    </Box>
                    <Box className={classes.stepItemContentRight}>
                        <h5> THIRD</h5>
                        <h4>간편한<br />
                            본인인증</h4>
                        <p>공인인증서와 OTP, Active X 등을 요구하지 않습니다.<br />
                            간단하고 빠른 휴대폰 인증과 접근 암호 설정으로 본인인증을<br />
                            요청할 수 있습니다. 본인인증 요청은 법적효력과 상관없이<br />
                            선택적으로 이용 가능합니다.</p>
                    </Box>
                </Box>
            </Box>

            {/* item 4 */}

            <Box className={classes.stepBackgroundGrey}>
                <Box className={classes.stepItem}>
                    <Box className={classes.stepItemContentLeft}>
                        <h5> FOURTH</h5>
                        <h4>텍스트 및<br />
                            체크박스 입력
                        </h4>
                        <p>문서에 텍스트 박스와 체크박스를 입력해 보세요.<br />
                            입력 위치, 크기, 글자체를 자유롭게 지정하고<br />
                            필수입력 여부를 설정할 수 있습니다.<br />
                            상대방에게 텍스트 입력을 요청할 수도 있습니다.</p>
                    </Box>
                    <Box className={classes.stepItemImg4}>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}
