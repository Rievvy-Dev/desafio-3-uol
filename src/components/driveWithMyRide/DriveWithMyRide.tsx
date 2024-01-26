import { Box, Container, Typography } from "@mui/material"
import Formulary from "../formulary/Formulary";

const DriveWithMyRide = () => {
    return(
        <Container 
        sx={{
            background:"var(--background-color)"
        }}
        >
            <Box 
            sx={{
                background:"var(--formulary-color)",
                margin:"1%",
                padding:"30px"
            }}
            >   
                <Box sx={{
                    display:"flex",
                    alignItems:"center"
                }}>
                    <img src="/src/assets/popup-image.svg" alt="popup image" />
                    <Box>
                        <Typography
                        sx={{
                            color:"var(--detail-color)",
                            fontFamily:"Roboto",
                            fontSize:"27px",
                            fontWeight:"700",
                            lineHeight:"36px",
                            letterSpacing:"-0.25px",
                            alignSelf:"stretch"
                        }}
                        >
                            Drive with MyRide
                        </Typography>
                        <Typography
                        sx={{
                            color:"#FFFFFF",
                            fontFamily:"Roboto",
                            fontSize:"16px",
                            fontWeight:"400",
                            lineHeight:"26px",
                        }}
                        >
                            Register as a driver using the form below. Our team will assess and get back to you within 48 hours.
                        </Typography>
                    </Box>
                    
                </Box>
                <Box>
                    <Formulary/>
                </Box>
            </Box>
        </Container>
    )
}

export default DriveWithMyRide;