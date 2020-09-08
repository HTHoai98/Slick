
import styled from "@emotion/styled";
import Slick from "../components/Slick/Slick"
import Infor from "../components/Content/Infor"
import Login from "../components/Login/Login"
import Content from "components/Content/Content"

export default function Home() {

  return (
    <>
      <Wrapper>
        <Login />
        <Slick />
        <Infor />
        <Content />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: gray;
  color: white;
  box-sizing: border-box;


`;