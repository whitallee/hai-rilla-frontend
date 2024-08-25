"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
export default function SideBar() {
    const [sideBar, setSideBar] = useState(false);

    function handleChangeSideBar() {
        setSideBar((prevState) => !prevState);
    }
    return (
        <div className="p-4 h-screen bg-black">
            <h1 className="text-2xl text-yellow-300 font-bold mb-4">Rilla Transcripts</h1>
            <ul className="flex flex-col bg-gray-900 rounded text-sm p-2 gap-4">
                <li className="bg-gray-700 rounded">Dennis Johnson 8/23/2024 5:20PM</li>
                <li>Avery Baker 8/17/2024 4:23PM</li>
                <li>Tom Sandervahl 8/16/2024 11:16AM</li>
                <li>James Sanders 8/16/2024 5:02PM</li>
            </ul>
        </div>

        // <Box sx={{ display: "flex" }}>
        //   <CssBaseline />
        //   <AppBar
        //     position="fixed"

        //   ></AppBar>
        //   <Drawer
        //     sx={{

        //       flexShrink: 0,
        //       "& .MuiDrawer-paper": {
        //         width: '20%',
        //         boxSizing: "border-box",
        //       },
        //     }}
        //     variant="permanent"
        //     anchor="left"
        //   >
        //     <Toolbar />
        //     <List>
        //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        //         <ListItem key={text} disablePadding>
        //           <ListItemButton>
        //             <ListItemIcon>
        //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        //             </ListItemIcon>
        //             <ListItemText primary={text} />
        //           </ListItemButton>
        //         </ListItem>
        //       ))}
        //     </List>

        //   </Drawer>
        // </Box>
    );
}
