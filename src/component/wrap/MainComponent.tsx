import Section1Component from "./main/Section1Component";
import Section2Component from "./main/Section2Component";
import Section3Component from "./main/Section3Component";
import './scss/MainComponent.scss';

export default function MainComponent(){
    return (
        <div id="main">
            <Section1Component />
            <Section2Component />
            <Section3Component />          
        </div>
    )
}