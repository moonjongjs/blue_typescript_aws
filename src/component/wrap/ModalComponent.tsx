import { useCookies } from 'react-cookie';
import './scss/ModalComponent.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../index'; // 스토어 RootState 경로 맞게 조정
import { setModalAction } from '../../store/modal';
import { useEffect } from 'react';

export default function ModalComponent(){

    // useSelector 선언
    const modal = useSelector((state: RootState) => state.modal);    
    const dispatch = useDispatch();

    // 쿠키 가져오기 getCookie
    // 리액트 쿠키는 [쿠키, 셋쿠키 ]
    // 리액트 쿠키는 [쿠키,]  셋쿠키(setCookie) 사용 안할 때 쉼표(,)는 남겨둔다
    // 리액트 쿠키는 [, 셋쿠키 ]  쿠키(겟쿠키 getCookie) 사용 안할 때 쉼표(,)는 남겨둔다
    const [cookie, setCookie] = useCookies(); // 리액트 쿠키 훅 사용

    const onClickModalClose=(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        // 모달닫기 함수() 호출 실행
        dispatch(setModalAction(false))
    }

    // 오늘 하루 안 보기
    const onClickExpires=(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
       
        let date = new Date();
        date.setDate(date.getDate() + 1);  // 현재날짜 + 1 => 만료기한 1일 설정

        setCookie('MODAL_GREEN','20250118_1DAY_CLOSE',{path: '/', expires: date});
        dispatch(setModalAction(false));
    }

    // 쿠키 가져오기 => 로딩시
    useEffect(()=>{

        try{
            setTimeout(()=>{
                if(cookie['MODAL_GREEN']==='20250118_1DAY_CLOSE'){
                    dispatch(setModalAction(false));
                }
                else{
                    dispatch(setModalAction(true));
                }
            }, 50);

        }
        catch(err){
            return;
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    return(
        <div className={`layer-popup${modal.isOpen?' on':''}`}>
            <div className="container">
                <div className="title">
                    <h2>{modal.글제목}</h2>
                    <span>{modal.날짜}</span>
                </div>
                <div className="content">
                    <ul>
                        <li>{modal.글내용}</li>
                    </ul>
                </div>
                <div className="button-box">
                    <button 
                        className="close-btn"  
                        // 만료기한 expires  익스파이얼스
                        onClick={onClickExpires}                      
                    >오늘 하루 안 보기</button>
                    <button 
                        className="close-btn"
                        onClick={onClickModalClose}
                    >닫기</button>
                </div>
            </div>
        </div>
    )
}