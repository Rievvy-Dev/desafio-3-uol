import { Box, Container, Typography } from "@mui/material"
import { Form } from "@unform/web";
import VTextField from "../forms";
import CustomButton from "../button/Button";

const NeedARide = () => {
    return(
        <Container sx={{backgroundColor:"var(--background-color)"}}>
            <Box 
            sx={
                {
                    display:"flex", 
                    flexDirection:"row", 
                    gap:"42px", marginTop:"5%", 
                    justifyContent:"center", 
                    alignItems:"center",
                    width:"max-content"
                }
            }
            >
                <img src="src/assets/need-a-ride.png" alt="need a ride?" />
                <Box sx={{gap:"30px", display:"flex", flexDirection:"column"}}>
                    <Box>
                        <Typography 
                        variant="h1" 
                        sx={
                            {
                                fontFamily:"roboto", 
                                fontSize:"26px",
                                color:"#FFFFFF",
                                fontStyle:"normal",
                                fontWeight: "400",
                                letterSpacing: "-0.25px"
                            }
                            }>NEED A RIDE?</Typography>
                        <Typography 
                        variant="h2"
                        sx={
                            {
                                fontFamily:"Roboto",
                                fontSize:"50px",
                                fontStyle:"normal",
                                fontWeight:"700",
                                lineHeight:"normal",
                                letterSpacing:"-0.25px"
                            }
                        }
                        >
                        Book with{" "}
                        <Typography
                        variant="h2"
                        component="span"
                        sx={{
                            color: "var(--detail-color)",
                            fontFamily: "Roboto",
                            fontSize: "50px",
                            fontStyle: "italic",
                            fontWeight: "700",
                            lineHeight: "normal",
                            letterSpacing: "-0.25px",
                        }}
                        >
                        my
                        </Typography>
                        <Typography 
                        variant="h2" 
                        component="span"
                        sx={
                            {
                                color:"var(--detail-color)",
                                fontFamily:"Roboto",
                                fontSize:"50px",
                                fontStyle:"normal",
                                fontWeight:"700",
                                lineHeight:"normal",
                                letterSpacing:"-0.25px"
                            }
                        }
                        >
                            RIDE{" "}
                        </Typography>
                            now
                        </Typography>
                    </Box>

                    <Box>
                        <Form 
                            placeholder= "Digite Algo" 
                            onSubmit={(data) => {console.log(data)}}  
                            style={
                                {
                                    display:"flex",
                                    flexDirection:"column",
                                    padding:"30px 33px",
                                    alignItems: "flex-start",
                                    gap:"16px",
                                    alignSelf:"stretch",
                                    maxWidth:"100%",
                                    background: "var(--find-form-color)",
                                    borderRadius:"4px"
                                }
                            }
                        >
                            <Typography 
                                sx={
                                    {
                                        color:"#FFFFFF",
                                        fontFamily:"Roboto",
                                        fontSize:"24px",
                                        fontWeight:"700",
                                        lineHeight:"32px",
                                        letterSpacing:"-0.25px"
                                    }
                                }
                            >Find a ride now</Typography>
                                <VTextField name='yourPickup' label="Your Pickup" value={"Current Location"}/>
                                <VTextField name='yourDestination' label="Your Destination"/>
                                <CustomButton label="FIND A DRIVER" icon={true} width="100%"/>
                        </Form>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default NeedARide;