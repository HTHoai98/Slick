
import styled from "@emotion/styled";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import Slick from "../components/Slick"
import Infor from "../components/Infor"
import Login from "../components/Login"

// const Slick = dynamic (() =>
//   import("components/Slick"),
// );

export default function Home() {

  return (
    <>
      <Wrapper>
        <Login />
        <Slick />
        <Infor />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 100%;
  margin-top: 50px;
  background-color: black;
  color: white;


`;