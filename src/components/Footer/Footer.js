/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#inicio" className={classes.block}>
                Inicio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#dechini" className={classes.block}>
                Dechini
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portafolio" className={classes.block}>
                Portafolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#noticias" className={classes.block}>
                Noticias
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="http://www.dechini.com.pe"
              target="_blank"
              className={classes.a}
            >
              Dechini
            </a>
            , just do it
          </span>
        </p>
      </div>
    </footer>
  );
}
