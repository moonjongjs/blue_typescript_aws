// 1. index.html => 돔컨테이너 #root + 연결 컴포넌트
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <WrapComponent />
)

// 2. 최상위 컴포넌트 만들기
//    함수형 컴포넌트
function WrapComponent(){
    return(
        <div id="wrap">            
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
            <ModalComponent />
        </div>
    )
}

    // 3. 헤더컴포넌트
    function HeaderComponent(){
        return(
            <header id="header">
                <div className="row1">
                    <h1><a href="./" title="푸른마을"><span>푸른</span><em>마을</em></a></h1>
                </div>
                <div className="row2">
                    <nav id="nav">
                        <ul>
                            <li>
                                <a href="#" className="main-btn" title="OnSale">OnSale</a>
                                <div className="sub sub1">
                                    <ul>
                                        <li>
                                            <span><a href="#">할인행사</a></span>
                                            <span><a href="#">덤증정</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">봄 먹거리</a></span>
                                            <span><a href="#">여름 먹거리</a></span>
                                            <span><a href="#">가을 먹거리</a></span>
                                            <span><a href="#">겨울 먹거리</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">메인요리</a></span>
                                            <span><a href="#">밑반찬</a></span>
                                            <span><a href="#">간식</a></span>
                                            <span><a href="#">브런치</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">신규매장</a></span>
                                            <span><a href="#">추천매장</a></span>
                                            <span><a href="#">공지사항</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="main-btn" title="기획전">기획전</a>
                                <div className="sub sub2">
                                    <ul>
                                        <li>
                                            <span><a href="#">할인행사</a></span>
                                            <span><a href="#">덤증정</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">봄 먹거리</a></span>
                                            <span><a href="#">여름 먹거리</a></span>
                                            <span><a href="#">가을 먹거리</a></span>
                                            <span><a href="#">겨울 먹거리</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">메인요리</a></span>
                                            <span><a href="#">밑반찬</a></span>
                                            <span><a href="#">간식</a></span>
                                            <span><a href="#">브런치</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">신규매장</a></span>
                                            <span><a href="#">추천매장</a></span>
                                            <span><a href="#">공지사항</a></span>
                                        </li>
                                    </ul>
                                </div>          
                            </li>
                            <li>
                                <a href="#" className="main-btn" title="푸른마을 레시피">푸른마을 레시피</a>
                                <div className="sub sub3">
                                    <ul>
                                        <li>
                                            <span><a href="#">할인행사</a></span>
                                            <span><a href="#">덤증정</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">봄 먹거리</a></span>
                                            <span><a href="#">여름 먹거리</a></span>
                                            <span><a href="#">가을 먹거리</a></span>
                                            <span><a href="#">겨울 먹거리</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">메인요리</a></span>
                                            <span><a href="#">밑반찬</a></span>
                                            <span><a href="#">간식</a></span>
                                            <span><a href="#">브런치</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">신규매장</a></span>
                                            <span><a href="#">추천매장</a></span>
                                            <span><a href="#">공지사항</a></span>
                                        </li>
                                    </ul>
                                </div>                                          
                            </li>
                            <li>
                                <a href="#" className="main-btn" title="매장안내">매장안내</a>
                                <div className="sub sub4">
                                    <ul>
                                        <li>
                                            <span><a href="#">할인행사</a></span>
                                            <span><a href="#">덤증정</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">봄 먹거리</a></span>
                                            <span><a href="#">여름 먹거리</a></span>
                                            <span><a href="#">가을 먹거리</a></span>
                                            <span><a href="#">겨울 먹거리</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">메인요리</a></span>
                                            <span><a href="#">밑반찬</a></span>
                                            <span><a href="#">간식</a></span>
                                            <span><a href="#">브런치</a></span>
                                        </li>
                                        <li>
                                            <span><a href="#">신규매장</a></span>
                                            <span><a href="#">추천매장</a></span>
                                            <span><a href="#">공지사항</a></span>
                                        </li>
                                    </ul>
                                </div>                                       
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }

    // 4. 메인컴포넌트
    function MainComponent(){
        return (
            <main id="main">               
                <Section1Component />
                <Section2Component />
                <Section3Component />
            </main>
        )
    }
        // 4-1 섹션1 컴포넌트
        function Section1Component(){
            return (
                <section id="section1">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide3 last"><a href="#" title="푸른마을 이미지 슬라이드3"><img src="./images/slide3.jpg" alt="푸른마을 이미지 슬라이드3"/><h2>푸른마을 이미지 슬라이드3</h2></a></li>
                                <li className="slide slide1"><a href="#" title="푸른마을 이미지 슬라이드1"><img src="./images/slide1.jpg" alt="푸른마을 이미지 슬라이드1"/><h2>푸른마을 이미지 슬라이드1</h2></a></li>
                                <li className="slide slide2"><a href="#" title="푸른마을 이미지 슬라이드2"><img src="./images/slide2.jpg" alt="푸른마을 이미지 슬라이드2"/><h2>푸른마을 이미지 슬라이드2</h2></a></li>
                                <li className="slide slide3"><a href="#" title="푸른마을 이미지 슬라이드3"><img src="./images/slide3.jpg" alt="푸른마을 이미지 슬라이드3"/><h2>푸른마을 이미지 슬라이드3</h2></a></li>
                                <li className="slide slide1 first"><a href="#" title="푸른마을 이미지 슬라이드1"><img src="./images/slide1.jpg" alt="푸른마을 이미지 슬라이드1"/><h2>푸른마을 이미지 슬라이드1</h2></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="link">
                        <ul>
                            <li><a href="#" title="link1"><img src="./images/link1.jpg" alt="link1"/></a></li>
                            <li><i></i></li>
                            <li><a href="#" title="link2"><img src="./images/link2.jpg" alt="link2"/></a></li>
                            <li><i></i></li>
                            <li><a href="#" title="link3"><img src="./images/link3.jpg" alt="link3"/></a></li>
                        </ul>
                    </div>
                </section>
            )
        }
        // 4-2 섹션2 컴포넌트
        function Section2Component(){
            return (
                <section id="section2">
                    <div className="container">
                        <a href="#">
                            <div className="content">                    
                                <div className="col1">
                                    <img src="./images/banner.jpg" alt="banner" />
                                </div>
                                <div className="col2">
                                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>                            
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur dolorum voluptas nesciunt, voluptatibus eveniet laboriosam, laborum, provident voluptates natus enim saepe perferendis. Tempora, veritatis deleniti? Adipisci asperiores sed dolor.</p>
                                </div>
                            </div>
        
                            <span className="arrow-btn btn1"></span>
                            <span className="arrow-btn btn2"></span>
                            
                        </a>
                    </div>
                </section>
            )
        }
        // 4-3 섹션3 컴포넌트
        function Section3Component(){
            return (
                <section id="section3">
                    <div className="container">
                        <button className="notice-btn">공지사항</button><button className="gallery-btn">갤러리</button>
                        <div className="notice-box">
                            <ul>
                                <li><a href="#" className="open-btn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                                <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                                <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                                <li><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                            </ul>
                        </div>
                        
                        <div className="gallery-box">
                            <ul>
                                <li><a href="#" title="gallery1"><img src="./images/gallery1.jpg" alt="gallery1"/></a></li>
                                <li><a href="#" title="gallery2"><img src="./images/gallery2.jpg" alt="gallery2"/></a></li>
                                <li><a href="#" title="gallery3"><img src="./images/gallery3.jpg" alt="gallery3"/></a></li>
                            </ul>
                        </div>
        
        
                    
                    </div>
                </section>
            )
        }

    // 5. 푸터컴포넌트
    function FooterComponent(){
        return (
            <footer id="footer">
                <div className="col1">
                    <h1><a href="./" title="푸른마을"><span>푸른</span><em>마을</em></a></h1>
                </div>
                <div className="col2">
                    <div className="row1">
                        <a href="#">저작권보호방침</a>
                        <i>|</i>
                        <a href="#">개인정보처리방침</a>
                        <i>|</i>
                        <a href="#">개인정보처리규약</a>
                        <i>|</i>
                        <a href="#">이메일주소 무단 수집거부</a>
                        <i>|</i>
                        <a href="#">홈페이지 이용안내</a>
                        <i>|</i>
                        <a href="#">관련사이트</a>
                    </div>
                    <div className="row2">
                        <div className="contents">
                            <address>04531 서울특별시 중구 남대문로 39 (남대문로3가) 대표전화 : 02-759-4114</address>
                            <p>Copyright(c) Bank of Korea. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

    // 6. 모달컴포넌트
    function ModalComponent(){
        return (
            <div className="layer-popup">
                <div className="container">
                    <div className="title">
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ab quibusdam fugit rem in. Officia, aut iusto! Animi harum, qui, esse recusandae voluptas aliquid dolores corporis voluptates maiores et mollitia?</li>
                            <li>Quasi sint atque magni, exercitationem iusto corrupti voluptatibus possimus odit laudantium voluptatum libero quod explicabo laborum, dolor nihil aliquid, aliquam ullam doloremque sit! Maxime inventore impedit, totam maiores dolorum dolores?</li>
                        </ul>
                    </div>
                    <div className="button-box">
                        <button className="close-btn">닫기</button>
                    </div>
                </div>
            </div>
        )
    }

