import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Home from "layouts/Home";
import styles from "assets/jss/material-dashboard-react/components/gridContainerStyle.js";

// const styles = {
//   grid: {
//     margin: "0 -15px !important",
//     width: "unset"
//   }
// };

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className, home, ...rest } = props;

  const gridContainerClasess = classNames({
    [classes.grid] : true,
    [classes.gridContainerHome] : home,
    [className]: className !== undefined
  });

  return (
    <Grid container {...rest} className={gridContainerClasess}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  home: PropTypes.bool
};
