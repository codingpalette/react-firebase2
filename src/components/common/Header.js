import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import * as firebase from 'firebase/app';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import CreateIcon from '@material-ui/icons/Create';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  ml: {
    marginLeft: 'auto',
  },
}));

function Header() {
  const { site } = useSelector((state) => state.site);

  const classes = useStyles();

  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [dialopen, setDialopen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(state === false ? true : false);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const onClickDialogOpne = () => {
    setDialopen(true);
  };

  const onClickDialogClose = () => {
    setDialopen(false);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const titleSave = async () => {
    try {
      await firebase.database().ref().child('site').update({ title: title });
    } catch (e) {
      alert(e);
    } finally {
      setDialopen(false);
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          onClick={toggleDrawer()}
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={state} onClose={toggleDrawer()}>
          <div className={clsx(classes.list)} role="presentation">
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText>test</ListItemText>
              </ListItem>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText>test</ListItemText>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Typography variant="h6">{site.title}</Typography>
        <IconButton
          aria-label="수정"
          color="inherit"
          onClick={onClickDialogOpne}
        >
          <CreateIcon />
        </IconButton>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={dialopen}
          onClose={onClickDialogClose}
        >
          <DialogTitle id="form-dialog-title">타이틀 수정</DialogTitle>
          <DialogContent>
            <DialogContentText>
              수정할 타이틀을 입력해 주세요.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={onChangeTitle}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClickDialogClose} color="primary">
              취소
            </Button>
            <Button color="primary" onClick={titleSave}>
              수정
            </Button>
          </DialogActions>
        </Dialog>
        <Button color="inherit" className={classes.ml}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
