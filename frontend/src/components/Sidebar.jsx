import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImg from "assets/tom-cruise-net-worth.jpg";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  useTheme,
  Button,
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRight,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  ChevronRightOutlined,
  VerifiedUser,
  SupervisedUserCircleSharp,
  Login,
} from "@mui/icons-material";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  // {
  //   text: "Profile",
  //   icon: <SupervisedUserCircleSharp />,
  // },
  {
    text: "Visualization",
    icon: null,
  },

  {
    text: "Societies",
    icon: <Groups2Outlined />,
  },

  {
    text: "Charts",
    icon: <PublicOutlined />,
  },
  {
    text: "Forms",
    icon: <ReceiptLongOutlined />,
  },

];

const Sidebar = ({
  currentUser,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? "0px" : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              {" "}
              {/* top, right, bottom, left */}
              <FlexBetween color="black">
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    CRCS Portal
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={text}
                      sx={{
                        m: "2.25rem 0 1rem 3rem", // top, right, bottom, left
                      }}
                    >
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText ? "white" : "transparent",
                        color: active === lcText ? "black" : "black",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color: "black",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
              {/* // Profile Link */}

              {currentUser.email ? (<>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/profile");
                    setActive("profile");
                  }}
                  sx={{
                    backgroundColor:
                      active === "profile" ? "white" : "transparent",
                    color: active === "Profile" ? "black" : "black",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ml: "2rem",
                      color: "black",
                    }}
                  >
                    <SupervisedUserCircleSharp />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                  {active === "profile" && (
                    <ChevronRightOutlined sx={{ ml: "auto" }} />
                  )}
                </ListItemButton>
                </ListItem>

                {/* Grevience link */}

                <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/grevience");
                    setActive("grevience");
                  }}
                  sx={{
                    backgroundColor:
                      active === "grevience" ? "white" : "transparent",
                    color: active === "Grevience" ? "black" : "black",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ml: "2rem",
                      color: "black",
                    }}
                  >
                    <VerifiedUser />
                  </ListItemIcon>
                  <ListItemText primary="Grevience" />
                  {active === "grevience" && (
                    <ChevronRightOutlined sx={{ ml: "auto" }} />
                  )}
                </ListItemButton>
                </ListItem>
               
               
              </>)
              :
              <Button
                    component={Link}
                    to="/login"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      color: "black",
                      fontWeight: 600,
                      fontSize: "1rem",
                      textTransform: "capitalize",
                      borderRadius: "1rem",
                      border: "1px solid black",
                      margin: "0.5rem 2rem",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Login
                  </Button>


            }
            </List>
          </Box>
          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              {" "}
              {/* top, right, bottom, left */}
              <Box
                component="img"
                alt="profile"
                src={profileImg}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{
                  objectFit: "cover",
                }}
              />
              <Box textAlign="left">
                <Typography
                  fontSize="0.9rem"
                  fontWeight="bold"
                  sx={{ color: "black" }}
                >
                  {currentUser.email}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: "black",
                  fontSize: "25px",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
