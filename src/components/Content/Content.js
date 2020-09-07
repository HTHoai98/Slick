import React, { useState } from 'react';
import styled from "@emotion/styled";
import Link from "next/link";
import AttendeesInfor from "components/Content/AttendeesInfor";
import LiveInfor from "components/Content/LiveInfor";

function Content() {

    const [Attendess, setAttendees] = useState([
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREGifsaPHo2B0W8oaN7neAMYZfL2UXEza4dw&usqp=CAU",
            name: "Stephanie Steel",
            Infor: "Chief Executive Officer, TUV SUD South & South-East Asia, Middle East & Africa"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREGifsaPHo2B0W8oaN7neAMYZfL2UXEza4dw&usqp=CAU",
            name: "Stephanie Steel",
            Infor: "Chief Executive Officer, TUV SUD South & South-East Asia, Middle East & Africa"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREGifsaPHo2B0W8oaN7neAMYZfL2UXEza4dw&usqp=CAU",
            name: "Stephanie Steel",
            Infor: "Chief Executive Officer, TUV SUD South & South-East Asia, Middle East & Africa"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREGifsaPHo2B0W8oaN7neAMYZfL2UXEza4dw&usqp=CAU",
            name: "Stephanie Steel",
            Infor: "Chief Executive Officer, TUV SUD South & South-East Asia, Middle East & Africa"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREGifsaPHo2B0W8oaN7neAMYZfL2UXEza4dw&usqp=CAU",
            name: "Stephanie Steel",
            Infor: "Chief Executive Officer, TUV SUD South & South-East Asia, Middle East & Africa"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREGifsaPHo2B0W8oaN7neAMYZfL2UXEza4dw&usqp=CAU",
            name: "Stephanie Steel",
            Infor: "Chief Executive Officer, TUV SUD South & South-East Asia, Middle East & Africa"
        },
    ])

    const [LiveInformation, setLiveInfor] = useState([
        {
            title: "Live conference Title/Lable Dbl Line",
            name: "By: Speaker Name | Corporation Name",
        },
        {
            title: "Live conference Title/Lable Dbl Line",
            name: "By: Speaker Name | Corporation Name",
        },
        {
            title: "Live conference Title/Lable Dbl Line",
            name: "By: Speaker Name | Corporation Name",
        },
        {
            title: "Live conference Title/Lable Dbl Line",
            name: "By: Speaker Name | Corporation Name",
        },
        {
            title: "Live conference Title/Lable Dbl Line",
            name: "By: Speaker Name | Corporation Name",
        },
        {
            title: "Live conference Title/Lable Dbl Line",
            name: "By: Speaker Name | Corporation Name",
        },
    ])

    return (
        <Wrapper>
            <Infor>
                <TextInfor>
                    <Title>
                        <span>(GAMF) Global Additive Manufacturing Summit</span>
                        <br />
                    </Title>
                    <SubTitle>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vulputate pharetra, eu neque sagittis, turpis mauris.</span>
                    </SubTitle>
                </TextInfor>
                <Detail>
                    <div className="DetailCenter">
                        <ButtonDetail>
                            <button>RSVP</button>
                        </ButtonDetail>
                        <LinkDetail>
                            <Link href="/"><a target="_blank" className="LinkColor">MORE DETAILS</a></Link>
                        </LinkDetail>
                    </div>
                </Detail>
            </Infor>

            <List>
                <ListLive>
                    <ListLive__Title>
                        <p>Coming up on - DAY 2</p>
                        <i class="fa fa-exclamation-circle fa-2x" aria-hidden="true"></i>
                    </ListLive__Title>
                    <ListLive__Infor>
                        {
                            LiveInformation.map((value, index) => {
                                return (
                                    <div>
                                        <LiveInfor valueProp={value} key={index} />
                                    </div>
                                )
                            })
                        }
                    </ListLive__Infor>
                </ListLive>

                <ListAttendees>
                    <ListAttendees__Title>
                        <p>THESE ATTENDEES RSVPed</p>
                        <i class="fa fa-exclamation-circle fa-2x" aria-hidden="true"></i>
                    </ListAttendees__Title>
                    <ListAttendees__List>
                        {
                            Attendess.map((value, index) => {
                                return (
                                    <div>
                                        <AttendeesInfor valueProp={value} key={index} />
                                    </div>
                                )
                            })
                        }
                    </ListAttendees__List>
                </ListAttendees>
            </List>
        </Wrapper>
    );
}

export default Content;

const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;

    @media screen and (max-width: 1600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 900px) {

    }
`;

const Infor = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    background-image: url("https://photo2.tinhte.vn/data/attachment-files/2019/11/4839026_Cover_VR.jpg");
    background-size: cover;

    @media screen and (max-width: 1600px) {
        width: 890px;
        margin-right: 0px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 900px) {
        width: 700px;
        background-size: cover;
    }
`;

const TextInfor = styled.div`
    width: 60%;
    margin-left: 20px;
`;

const Title = styled.div`
    margin-top: 10px;
    span {
        font-size: 35px;
        font-weight: 700;
        line-height: 1;
    }
`;

const SubTitle = styled.div`
    margin-bottom: 20px;
`;

const Detail = styled.div`
    position: relative;
    height: 30rem;
`;

const ButtonDetail = styled.div`
    button {
        background-color: red;
        border-radius: 8px;
        padding: 8px 20px;

        &:hover {
            background-color: white;
            color: red;
            border-color: red;
        }
    }
    
`;

const LinkDetail = styled.div`
    margin-left: 20px;
`;

const ListLive__Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
    padding: 10px 10px;
    border-bottom: 2px solid black;
    margin-bottom: 15px;

    p {
        font-size: 17px;
        color: red;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 0;
        
    }
`;

const List = styled.div`
    width: 50%;
    display: flex;

    @media screen and (max-width: 1600px) {
        width: 890px;
    }

    @media screen and (max-width: 900px) {
        width: 700px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const ListLive = styled.div`
    width: 50%;
    border: 2px solid black;
    height: fit-content;
`;

const ListLive__Infor = styled.div`
    height: 35rem;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: black; 
    }

    // @media screen and (max-width: 900px) {
    //     overflow-x: scroll;
    //     overflow-y: hidden;
    //     white-space: nowrap;
    //     -webkit-overflow-scrolling: touch;
    //     height: 15rem;

    //     &::-webkit-scrollbar {
    //         display: none;
    //       }
    // }
    
`;

const ListAttendees = styled.div`
    width: 50%;
    border: 2px solid black;
    height: fit-content;
`;

const ListAttendees__Title = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: gray;
    padding: 10px 10px;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 2px solid black;
    
    p {
        text-transfrom: uppercase;
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 0px;
    }
`;

const ListAttendees__List = styled.div`
    height: 35rem;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: black; 
      }

    // @media screen and (max-width: 900px) {
    //     overflow-x: scroll;
    //     overflow-y: hidden;
    //     white-space: nowrap;
    //     -webkit-overflow-scrolling: touch;
    //     height: 15rem;

    //     &::-webkit-scrollbar {
    //         display: none;
    //     }
    // }
`;

