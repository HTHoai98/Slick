import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

function SlickData(props) {

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

export default SlickData;

SlickData.propTypes = {
    valueProp: PropTypes.any,
}

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
        margin-top: 10px;
        margin-left: 18px;
    }

    span {
        font-family: sans-serif;
        font-size: 14px;
        margin-left: 18px;
        // margin-bottom: 30px;
    }
`;