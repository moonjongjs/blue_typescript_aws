import FooterComponent from "./wrap/FooterComponent";
import HeaderComponent from "./wrap/HeaderComponent";
import MainComponent from "./wrap/MainComponent";
import ModalComponent from "./wrap/ModalComponent";
import './scss/WrapComponent.scss';
import Sub1Component from "./wrap/sub/Sub1Component";
import Sub2Component from "./wrap/sub/Sub2Component";
import Sub3Component from "./wrap/sub/Sub3Component";
import Sub4Component from "./wrap/sub/Sub4Component";
import { Route, Routes } from "react-router-dom";

export default function WrapComponent(){
    return (
        <div id="wrap">
            <Routes>
                <Route path="/"  element={ <HeaderComponent /> }>
                    <Route index element={<MainComponent/>} />
                    <Route path="/main" element={<MainComponent />} />
                    <Route path="/sub1" element={<Sub1Component />} />
                    <Route path="/sub2" element={<Sub2Component />} />
                    <Route path="/sub3" element={<Sub3Component />} />
                    <Route path="/sub4" element={<Sub4Component />} />
                </Route>
            </Routes>
                              
            {/* 고정페이지 */}
            <ModalComponent />   {/* 부모가 자식에게 상속하는 변수 => 프롭스props */}
            
            <FooterComponent />

        </div>
    )
}