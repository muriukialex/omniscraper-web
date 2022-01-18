import React from "react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import makeStyles from "@mui/styles/makeStyles";
import { HideOnScroll } from "./HideOnScroll";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const styles = makeStyles((theme) => ({
  tags: {
    overflowX: "auto",
    display: "flex",
    alignItems: "center",
    "&::-webkit-scrollbar": { width: 0 },
    [theme.breakpoints.down("sm")]: {
      paddinTop: 16,
    },
  },
  toolBarRoot: {
    paddingRight: 0,
    padingLeft: 0,
  },
}));

function Tags(props) {
  const {
    videoTags,
    clickedTag,
    handleEditTagDialogOpen,
    mouseX,
    mouseY,
    handleRightClick,
    handleClose,
    loggedIn,
    loading,
    handleScrollPosition,
    window,
  } = props;
  const classes = styles(props);

  const tagEditor = (
    <Menu
      disableScrollLock
      keepMounted
      open={mouseY !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        mouseY !== null && mouseX !== null
          ? { top: mouseY, left: mouseX }
          : undefined
      }
    >
      <MenuItem onClick={() => handleEditTagDialogOpen()}>Edit</MenuItem>
    </Menu>
  );

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <AppBar
      style={{
        background: "#fff",
        position: "fixed",
        top: trigger ? 0 : 64,
        opacity: 0.95,
        transition: "all 0.5s ease",
      }}
    >
      <Toolbar classes={{ root: classes.toolBarRoot }}>
        <div className={classes.tags}>
          {loggedIn && tagEditor}
          <div style={{ paddingRight: 16 }} />
          {videoTags.map((tag) => (
            <Chip
              onContextMenu={(e) => handleRightClick(e, tag)}
              component={Link}
              to={`/tags/${tag.slug}`}
              onClick={() => handleScrollPosition()}
              key={tag.tag_name}
              label={tag.tag_name}
              disabled={loading}
              clickable
              color="primary"
              variant={clickedTag === tag.slug ? "default" : "outlined"}
              style={{ marginLeft: 4, marginRight: 4, fontWeight: 500 }}
            />
          ))}
          <div style={{ paddingRight: 16 }} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Tags;
