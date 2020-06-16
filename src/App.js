import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatAsesor from "./components/ChatDetail/ChatAsesor";
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: "#314A5E", 
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: "white"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    position: "static !important"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    position: "static !important"
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    position: "static !important"
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paperChat:{
    overflow:"none" , 
    float:"left", 
    height: "410px" , 
    padding: "5%", 
    width: "100%" 
  },
  paperChatActive:{
    overflow:"scroll" , 
    float:"left", 
    height: "410px" , 
    padding: "5%", 
    width: "100%" 
  }
}));
function App() {
  const classes = useStyles();
  
  return (
    <div className="App">
      <ChatAsesor classes={classes}></ChatAsesor>
    </div>
  );
}

export default App;
