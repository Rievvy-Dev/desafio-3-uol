import {AppBar, Toolbar, Container, Typography, IconButton, Box, Button, Badge, Avatar} from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import React from "react"

const pages = ['Home', 'Getting a Taxi', 'Mobile App', 'Contact Us']

const Header = () => {
    const [selectedPage, setSelectedPage] = React.useState<string>('Home');

    const handlePageClick = (page: string) => {
        setSelectedPage(page);
    };

    return(
        <AppBar sx={{backgroundColor:"var(--background-color)", position:'relative'}}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <img src="src/assets/logo.svg" alt="logo" />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"center", gap:"30px"}}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => handlePageClick(page)}
                            sx={{ my: 2, color: page === selectedPage ? 'var(--detail-color)' : '#FFFFFF', display: 'block', textTransform: 'none', fontSize:"16px"}}
                        >
                            <Typography fontFamily={"roboto"}>{page}</Typography>
                        </Button>
                        ))}
                    </Box>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        sx={{marginRight:2, '& .MuiBadge-dot': {
                            backgroundColor: "yellow", 
                            position: "absolute",
                            top: 7,
                            right: 6
                        }}}
                        >
                        <Badge variant="dot" color="error">
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Profile" src="src/assets/user-avatar.svg" />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;