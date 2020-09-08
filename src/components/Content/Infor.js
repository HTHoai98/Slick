import React from 'react';
import styled from "@emotion/styled";

function Infor() {
    return (
        <div>
            <Content>
                <User>
                    <div className="User">
                        <img src="https://znews-photo.zadn.vn/w480/Uploaded/mdf_nemddf/2020_08_31/VPB_the_tin_dung_1.jpg"></img>
                        <p>USER ROLE EG.SPEAKER</p>
                    </div>
                    <div className="User__Infor">
                        <span>Hello,</span>
                        <p>Attendee`&apos;`s Name.<br />
                Middle <br />
                Last
              </p>
                    </div>

                </User>
                <Info>
                    <p className="Title">Welcome to ITAP Connect 2020.</p>
                    <p className="subTitle">Let`&apos;`s Explore what I4.0 can do for you and your business.</p>
                    <div className="Note">
                        <i className="fa fa-exclamation-circle" aria-hidden="false"><span>Your Personal Quick Tolls To Help You Achieve Your Goals Efficiently</span></i>
                    </div>
                    <ContainIcon>
                        <Icon>
                            <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                            <span>BREIFCASE</span>
                        </Icon>
                        <Icon>
                            <i className="fa fa-calendar-minus-o fa-2x" aria-hidden="true"></i>
                            <span>AGENDA</span>
                        </Icon>
                        <Icon>
                            <i className="fa fa-question-circle fa-2x" aria-hidden="true"></i>
                            <span>HELP GUIDE</span>
                        </Icon>
                        <Icon>
                            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                            <span>MESSAGES</span>
                        </Icon>
                        <Icon>
                            <i className="fa fa-bell fa-2x" aria-hidden="true"></i>
                            <span>NOTIFICATIONS</span>
                        </Icon>
                    </ContainIcon>
                </Info>
            </Content>
        </div>
    );
}

export default Infor;

const Content = styled.div`
  display: flex;
`;

const User = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 20px;
  width: 40%;

  img {
    width: 50%;
  }
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