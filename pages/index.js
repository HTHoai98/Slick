
import styled from "@emotion/styled";
import Slider from "react-slick";

export default function Home() {
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

  return (
    <>
      <Wrapper>
        <Slick>
          <Slider {...settings}>
            <div className="Slick">
              <span>GATEWAY TO I4.0 INTERACTIVE EXPERIENCE</span>
              <p className="Title">Feature Event/Exhibitor Title</p>
              <p>TUV SUD is a trusted partner of choice for safety, security and sustainability solutions for over 150 years. Today, we are represented by more than 24,500 employees located across over 1,000 locations.</p>
              <ButtonExplore>EXPLORE LEARNING JOURNEY</ButtonExplore>
            </div>
            <div className="Slick">
              <span>GATEWAY TO I4.0 INTERACTIVE EXPERIENCE</span>
              <p className="Title">Feature Event/Exhibitor Title</p>
              <p>TUV SUD is a trusted partner of choice for safety, security and sustainability solutions for over 150 years. Today, we are represented by more than 24,500 employees located across over 1,000 locations.</p>
              <ButtonExplore>EXPLORE LEARNING JOURNEY</ButtonExplore>
            </div>
            <div className="Slick">
              <span>GATEWAY TO I4.0 INTERACTIVE EXPERIENCE</span>
              <p className="Title">Feature Event/Exhibitor Title</p>
              <p>TUV SUD is a trusted partner of choice for safety, security and sustainability solutions for over 150 years. Today, we are represented by more than 24,500 employees located across over 1,000 locations.</p>
              <ButtonExplore>EXPLORE LEARNING JOURNEY</ButtonExplore>
            </div>
            <div className="Slick">
              <span>GATEWAY TO I4.0 INTERACTIVE EXPERIENCE</span>
              <p className="Title">Feature Event/Exhibitor Title</p>
              <p>TUV SUD is a trusted partner of choice for safety, security and sustainability solutions for over 150 years. Today, we are represented by more than 24,500 employees located across over 1,000 locations.</p>
              <ButtonExplore>EXPLORE LEARNING JOURNEY</ButtonExplore>
            </div>
          </Slider>
        </Slick>
        <Content>
          <User>
            <div className="User">
              <img src="https://znews-photo.zadn.vn/w480/Uploaded/mdf_nemddf/2020_08_31/VPB_the_tin_dung_1.jpg"></img>
              <p>USER ROLE EG.SPEAKER</p>
            </div>
            <div className="User__Infor">
              <span>Hello,</span>
              <p>Attendee's Name.<br />
                Middle <br />
                Last
              </p>
            </div>

          </User>
          <Info>
            <p className="Title">Welcome to ITAP Connect 2020.</p>
            <p className="subTitle">Let's Explore what I4.0 can do for you and your business.</p>
            <div class="Note">
              <i className="fa fa-exclamation-circle" aria-hidden="false"><span>Your Personal Quick Tolls To Help You Achieve Your Goals Efficiently</span></i>
            </div>
            <ContainIcon>
              <Icon>
                <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                <span>BREIFCASE</span>
              </Icon>
              <Icon>
                <i class="fa fa-calendar-minus-o fa-2x" aria-hidden="true"></i>
                <span>AGENDA</span>
              </Icon>
              <Icon>
                <i class="fa fa-question-circle fa-2x" aria-hidden="true"></i>
                <span>HELP GUIDE</span>
              </Icon>
              <Icon>
                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                <span>MESSAGES</span>
              </Icon>
              <Icon>
                <i class="fa fa-bell fa-2x" aria-hidden="true"></i>
                <span>NOTIFICATIONS</span>
              </Icon>
            </ContainIcon>
          </Info>
        </Content>
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

const Slick = styled.div`
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
`;

const User = styled.div`
  display: flex;
  align-items: flex-start;
  img {
    width: 50%;
  }
  margin-left: 20px;
  width: 40%;
`;

const Info = styled.div`
  width: 50%;
  margin-left: 5%;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.4;
  margin-left: 15px;
  span {
    font-size: 10px;
    margin-top: 5px;
  }
`;

const ContainIcon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 0;

`;

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