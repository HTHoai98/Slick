import React, { useState } from 'react';
import styled from "@emotion/styled";
import SlickData from "./SlickData";
import Slider from "react-slick";

function Slick() {
    const settings = {
        dots: true,
        dotsClass: 'custom-dots',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        customPaging: i => (
            <div
                style={{
                    width: "50px",
                    height: "5px",
                    // color: "black", color of number
                    border: "1px gray ridge",
                }}
            >
                {/* {i + 1} display number */}
            </div>
        )
    };

    const [array, setArray] = useState([
        {
            name: "GATEWAY TO I4.0 INTERACTIVE EXPERIENCE",
            title: "Feature Event/Exhibitor Title",
            subtitle: "TUV SUD is a trusted partner of choice for safety, security and sustainability solutions for over 150 years. Today, we are represented by more than 24,500 employees located across over 1,000 locations.",
            button: "EXPLORE LEARNING JOURNEY"
        },
        {
            name: "GATEWAY TO I4.0 INTERACTIVE EXPERIENCE",
            title: "Feature Event/Exhibitor Title",
            subtitle: "TUV SUD is a trusted partner of choice for safety, security and sustainability solutions for over 150 years. Today, we are represented by more than 24,500 employees located across over 1,000 locations.",
            button: "EXPLORE LEARNING JOURNEY"
        },
        {
            name: "GATEWAY TO I4.0 INTERACTIVE EXPERIENCE",
            title: "Feature Event/Exhibitor Title",
            subtitle: "TUV SUD is a trusted partner of choice for safety, security and sustainability solutions for over 150 years. Today, we are represented by more than 24,500 employees located across over 1,000 locations.",
            button: "EXPLORE LEARNING JOURNEY"
        },
        {
            name: "GATEWAY TO I4.0 INTERACTIVE EXPERIENCE",
            title: "Feature Event/Exhibitor Title",
            subtitle: "TUV SUD is a trusted partner of choice for safety, security and sustainability solutions for over 150 years. Today, we are represented by more than 24,500 employees located across over 1,000 locations.",
            button: "EXPLORE LEARNING JOURNEY"
        }
    ])

    return (
        <>
            <SlickStyle>
                <Slider {...settings}>
                        {
                            array.map((value, index) => {
                                return(
                                    <div>
                                        <SlickData valueProp={value} key={index}/>
                                    </div>
                                )
                            })
                        }
                </Slider>
            </SlickStyle>
        </>
    );
}

export default Slick;

const SlickStyle = styled.div`
  margin-bottom: 30px;

`;