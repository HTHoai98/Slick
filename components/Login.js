import React, { Component } from 'react';
import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"

function Login() {
    const router = useRouter();
    const {query, pathname} = router;

    return (
        <Wrapper>
            <Link href={{
                pathname,
                query: {
                    ...query,
                    dialog: "signIn",
                }
            }}
                passHref
            >
                <BtnLogin>LOG IN</BtnLogin>
            </Link>
        </Wrapper>
    );
}

export default Login;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const BtnLogin = styled.div`
    border-radius: 4px;
    padding: 7px 15px;
    line-height: 1.18;
    margin-left: 16px;
    background-color: #de0000;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: transparent;
        border: 1px solid #de0000;
        color: #de0000;
    }
`;