import React, { useState } from 'react';
import styled from "@emotion/styled";

function AttendeesInfor(props) {

    const [color, setColor] = useState("black");

    function getRandonColor() {
        const Color_List = ['deeppink', 'green', 'yellow', 'black', 'red'];
        const randomIndex = Math.trunc(Math.random() * 5);
        return Color_List[randomIndex];
    }

    function handleChangeColor() {
        const newColor = getRandonColor();
        setColor(newColor);
    }

    const { valueProp } = props

    return (
        <Attendees>
            <img src={valueProp.img}></img>
            <div className="Attendees__Infor">
                <p className="Attendees__Infor--name">{valueProp.name}</p>
                <p>{valueProp.Infor}</p>
            </div>
            <i class="fa fa-user fa-3x" aria-hidden="true" style={{ backgroundColor: color }} onClick={handleChangeColor}></i>        
        </Attendees>
    );
}

export default AttendeesInfor;

const Attendees = styled.div`
    background-color: gray;
    margin: 10px 10px;
    display: flex;
    align-items: center;
    padding: 7px 5px;
    border: 2px solid white;
    img {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        border: 5px solid white;
    }

    i {
        margin-right: 10px;
        padding: 3px 3px;
    }

    @media screen and (max-width: 900px) {
        display: inline-block;
        text-align: center;
        width: -webkit-fill-available;
    }
`;
