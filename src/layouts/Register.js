import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
// creates a beautiful scrollbar
// import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import routes from "routes.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import logoDechini from "assets/img/logo_dechini.jpg";

const useStyles = makeStyles(styles);

export default function Home(){
    // styles
    const classes = useStyles();

return (
    <div>
        <GridContainer home>
            <GridItem xs={12} sm={12} md={4}>
                <Card home>
                <CardAvatar home>
                    <img src={logoDechini} alt="..." />
                </CardAvatar>
                <CardBody home>
                    <h1 className={classes.cardCategory}>DECHINI</h1>
                    <h3 className={classes.cardTitle}>DES Ingeniería S.A.C</h3>
                    <p className={classes.description}>
                        Somos una empresa de Gestíon de Proyectos de Construcción
                    </p>
                    <TextField className={classes.inputPassword}
                        id="full-name"
                        label="Nombres y Apellidos"
                        type="text"
                        variant="outlined"
                    />
                    <TextField className={classes.inputEmail}
                        id="email-address"
                        label="Email"
                        type="email"
                        variant="outlined"
                    />
                    <TextField className={classes.inputPassword}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />
                    <Link to="/admin">
                        <Button color="success" block>
                            Registarte
                        </Button>
                    </Link>
                    <p>Ya tienes una cuenta <a href="/home" className={classes.registrate}> Inicia Sessión</a></p>
                </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
        
    </div>
);

}