import React from 'react';
import styled from "@emotion/styled";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";

function LiveInfor(props) {
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 150,
        },
    }));
    
    const classes = useStyles();
    const { valueProp } = props;

    return (

        <div className="Live_Detail">
            <div className="Live_Infor">
                <LiveInforTitle>
                    <p>{valueProp.title}</p>
                </LiveInforTitle>
                <ListLive__Name>
                    <p>{valueProp.name}</p>
                </ListLive__Name>
            </div>
            <form className={classes.container} noValidate>
                <TextField
                    id="time"
                    label="GMT +8"
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
            </form>
        </div>
    );



}

export default LiveInfor;

LiveInfor.propTypes = {
    valueProp: PropTypes.any,
}

const ListLive__Name = styled.div`
`;

const LiveInforTitle = styled.div`
    font-size: 18px;
    font-weight: bold;

`;