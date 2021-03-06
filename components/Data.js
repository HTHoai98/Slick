import React from 'react';
import styled from "@emotion/styled";

function Data(props) {

    const { valueProp } = props

    return (
        <Slick>
            <span>{valueProp.name}</span>
            <p className="Title">{valueProp.title}</p>
            <p>{valueProp.subtitle}</p>
            <ButtonExplore>{valueProp.button}</ButtonExplore>
        </Slick>
    );
}

export default Data;

const ButtonExplore = styled.a`
  border-radius: 2px;
  padding: 7px 10px;
  line-height: 1.18;
  background-color: black;
  border: 2px solid white;
  color: #fff;
  margin-left: 18px;

  &:hover {
    background-color: red;
    border: 2px solid white;
    color: white;
  }
`;

const Slick = styled.div`
    margin-bottom: 20px;

    p {
        margin-left: 18px;
    }

    span {
        font-family: sans-serif;
        font-size: 14px;
        margin-left: 18px;
    }
`;