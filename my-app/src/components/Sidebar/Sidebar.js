import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SidebarOption from "../SidebarOption/SidebarOption";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption active Icon={HomeIcon} text="Página Inicial" />
      <SidebarOption Icon={SearchIcon} text="Explorar" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notificações" />
      <SidebarOption Icon={MailOutlineIcon} text="Mensagens" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Itens Salvos" />
      <SidebarOption Icon={ListAltIcon} text="Listas" />
      <SidebarOption Icon={PermIdentityIcon} text="Perfil" />
      <SidebarOption Icon={MoreHorizIcon} text="Mais" />
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweetar
      </Button>
    </div>
  );
}

export default Sidebar;
