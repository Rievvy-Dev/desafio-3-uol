import { Box, Button, Container, IconButton, Typography } from "@mui/material";

const Footer = () => {
    return(
        <Container sx={{display:"flex", marginTop:"120px", marginBottom:"40px", gap:"100px"}}>
            <Box sx={{display:"flex", flexDirection:"column", gap:"16px", justifyContent:"flex-start"}}>
                <Box><img src="/src/assets/logo-outlined.svg" alt="logo" /></Box>
                <Typography sx={{color:"#B3B3B3", fontFamily:"Roboto", fontSize:"16px", fontWeight:"400", lineHeight:"24px"}}>
                    MyRide Inc., 2nd Floor, New York, NY 10016</Typography>
                <Box sx={{display:"flex", gap:"16px"}}>
                    <IconButton ><img src="/src/assets/facebook.svg" alt="facebook" /></IconButton>
                    <IconButton ><img src="/src/assets/instagram.svg" alt="instagram" /></IconButton>
                    <IconButton ><img src="/src/assets/twitter.svg" alt="twitter" /></IconButton>
                </Box>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center", gap:"40px"}}>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}}>
                <Typography sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"20px", fontWeight:"500", lineHeight:"27px", marginBottom:"10px"}}>
                        Company</Typography>
                    <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0"}}>
                        About Us</Button>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0", justifyContent:"start"}}>
                        News</Button>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0"}}>
                        Carrers</Button>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0"}}>
                        How we work</Button>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}}>
                <Typography sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"20px", fontWeight:"500", lineHeight:"27px", marginBottom:"10px"}}>
                        Suport</Typography>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0", justifyContent:"start"}}>
                        FAQ</Button>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0"}}>
                        Asia Office</Button>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0"}}>
                        Help Center</Button>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}}>
                    <Typography sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"20px", fontWeight:"500", lineHeight:"27px", marginBottom:"10px"}}>
                        More</Typography>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0"}}>
                        Become a partner</Button>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0"}}>
                        Partner Support</Button>
                        <Button variant="text" sx={{color:"#FFF", fontFamily:"Roboto", fontSize:"12px", fontWeight:"400", paddingLeft:"0"}}>
                        Mobile app links</Button>
                </Box> 
            </Box>
        </Container>
    );
}

export default Footer;