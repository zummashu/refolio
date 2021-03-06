import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import ComboBox from "./Category";

const useStyles = makeStyles({
  Bgcolor: {
    backgroundColor: "#1565C0",
    color: "#ffffff",
  },
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function NewProjectButtonAPI() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        {"New Project"}
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <div className={classes.Bgcolor}>
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            {"Create a new project"}
          </DialogTitle>
        </div>
        <Divider />
        <DialogContent>
          <DialogContentText variant="subtitle2">
            {
              "Please, fill out a title and a category for your project. Also, you can set its public state preference."
            }
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="title"
            label="Title"
            type="title"
            multiline
            rows={2}
            variant="outlined"
            fullWidth
          />

          <Box display="flex" mt={2}>
            <Box flexGrow={1}>
              <ComboBox />
            </Box>
            <Box mt={1} pr={3}>
              <FormControl>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="Public"
                  labelPlacement="start"
                />
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="disabled">
            {"Cancel"}
          </Button>
          <Button onClick={handleClose} color="primary">
            {"Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
