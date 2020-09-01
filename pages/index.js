
import styled from "@emotion/styled";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Slick from "../components/Slick"
import Infor from "../components/Infor"

// const Slick = dynamic (() =>
//   import("components/Slick"),
// );

export default function Home() {

  return (
    <>
      <Wrapper>
        <Slick />
        <Infor />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 63%;
  margin-top: 50px;
  background-color: black;
  color: white;


`;