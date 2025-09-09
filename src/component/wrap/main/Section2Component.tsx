import useCustomHook from '../../custom/useCustom';
import './scss/Section2Component.scss';

export default function Section2Component(){

    const {onClickALink} = useCustomHook();

    return(
        <section id="section2">
            <div className="container">
                <a href="!#" onClick={(e)=>onClickALink(e, '/main')}>
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