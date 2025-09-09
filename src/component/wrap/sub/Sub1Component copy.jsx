import React, { useState } from 'react';
import './scss/SubComponent.scss';
import "./scss/Sub1Component.scss";

export default function Sub1Component(props) {

    const [state, setState] = useState({
        할일:''
    });

    // 할일 등록 목록
    const [할일목록, set할일목록] = useState([]);

    // 할일 체크 항목 만 저장
    const [chk, setChk] = useState([]);        // 체크항목을 저장하는 배열 안에 데이터 값이 있으면 체크된다.


    // 키(key) 입력 이벤트
    const onChangeInput=(e)=>{       
       setState({
          할일: e.target.value
       })       
    }

    // + 버튼 클릭 이벤트
    const onClickSaveBtn=(e)=>{
        e.preventDefault();
        if(state.할일===''){
            alert('할일을 입력하세요!');
        }
        else{
            set할일목록(
                [
                    {
                        할일: state.할일, 
                        날짜: new Date()
                    },
                        ...할일목록 
                ]
            )
        }
    }


    // 체크박스 클릭 이벤트
    // 체크 해제   => 할일
    // 체크된 할일 => 완료 가로 취소선 
    const onChangeCheckEvent=(e, idx)=>{
        // let imsi = [false,false,false,false];
        //  // 체크 상태를 모두 가져오기 메뉴방식에 적합
        let imsi = chk;
        if(e.target.checked){
            imsi = [...imsi, {할일: e.target.value}]  // 항목 추가
        }
        else{
            imsi = imsi.filter((item)=>!(item.할일===e.target.value)); // 저장항목중 현재 값 제외 재배열 => 결과 삭제
            // imsi = imsi.filter((item)=>item.할일!==e.target.value); // 저장항목중 현재 값 제외 재배열 => 결과 삭제
        }

        setChk(imsi);        
    }


    // 삭제
    const onClickDeleteBtn=(e, 할일)=>{
        e.preventDefault();
        let imsi = 할일목록;
        imsi = imsi.filter((item)=>item.할일!==할일);
        
        set할일목록(imsi);
    }




    return (
        <div id='sub1' className='main-sub'>
            <div className="container">
                <div className="title">
                    <h2>TO DO LIST</h2>
                </div>
                <div className="content">
                    {/* 입력 상자 */}
                    <div className="input-container">

                        {/* 입력 상자 */}
                        <input                         
                            type="text" 
                            name='todoInput'
                            id='todoInput'
                            placeholder='+ 할 일 추 가'

                            onChange={onChangeInput}  
                            value={state.할일}
                        />

                        {/* 저장 버튼 */}
                        <button 
                            type='button'
                            className='save-btn'
                            onClick={onClickSaveBtn}
                        >+</button>

                    </div>

                    {/* 출력 목록 */}
                    <div className='todo-list-box'>
                        <ul>
                        { 
                            할일목록.map((item, idx)=>
                                <li key={idx}>
                                    <div className="gap">
                                        {/* 체크박스 */}
                                        <input 
                                            type="checkbox" 
                                            id={`check${idx}`}
                                            name={`check${idx}`}
                                            
                                            value={item.할일}
                                            onChange={(e)=>onChangeCheckEvent(e, idx)}
                                            checked={chk.map((item2)=>item2.할일===item.할일 ? true : false).includes(true)}
                                        />

                                        {/* 할일 */}
                                        <p className={chk.map((item2)=>item2.할일===item.할일 ? true : false).includes(true)?'on':''}>{item.할일}</p> 
                                        
                                        {/* 삭제버튼 */}
                                        <button 
                                            onClick={(e)=>onClickDeleteBtn(e, item.할일)}
                                            className='delete-btn'
                                        >×</button>
                                    </div>
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}