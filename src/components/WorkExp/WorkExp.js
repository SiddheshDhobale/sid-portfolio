import React, { useRef } from "react";
import './WorkExp.css'
import ExpCard from "./ExpCard/ExpCard";
import { WORK_EXPERINCE } from '../../utils/data.js'

import Slider from "react-slick";

const WorkExp = () => {
    const SliderRef = useRef();

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive:[
            {
            breakpoint: 769,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
        ]
    };

    //console.log(SliderRef)
    const slideRight=()=>{
        SliderRef.current.slickNext();
    }

    const slideLeft=()=>{
        SliderRef.current.slickPrev();
    }


    return (
        <section className="workexp-container" id="experinces">
            <h5>Work experience</h5>

            <div className="exp-content">

                <div className="arrow-right" onClick={slideRight}>
                    {/* <span >&gt;</span> */}
                    <img src="./assets/images/right-arrow.png" alt=""/>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    {/* <span >&lt;</span> */}
                    <img src="./assets/images/left-arrow.png" alt=""/>
                </div>

                <Slider ref={SliderRef} {...settings}>
                    {
                        WORK_EXPERINCE.map((item) => (
                            <ExpCard key={item.title} item={item} />
                        ))
                    }
                </Slider>

            </div>
        </section>
    )
}

export default WorkExp;