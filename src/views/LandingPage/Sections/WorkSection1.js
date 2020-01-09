import React from "react";
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from "@material-ui/core/FormControl";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
    
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Commander un menu </h2>
          <h4 className={classes.description}>remplir le formulaire pour la commande  .
          </h4>
          <form>
            <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <CustomInput
            labelText="Name & prenom"
            id="name"
            formControlProps={{
              fullWidth: true
            }}
          />
            </GridItem>
              <GridItem xs={12} sm={12} md={6}>
              <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                  Liste des menus
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                >
                <MenuItem value="">
                    <em>menu</em>
                  </MenuItem>
                  <MenuItem value={10}>salade</MenuItem>
                  <MenuItem value={20}>routie</MenuItem>
                  <MenuItem value={30}>sbagetti</MenuItem>
                </Select>
                </GridItem>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary">Commander</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>

    </div>
  );
}
