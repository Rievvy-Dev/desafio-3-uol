import { Box, Card, Container, Typography } from "@mui/material"
import CustomCard from "../cards/CustomCard"

const cars = [
    {
        id:1,
        image: "/src/assets/car-1.png",
        name: "Basic",
        descriprion: "The best balance of price and comfort. You will not go wrong with our basic rides."
    }, 
    {
        id:2,
        image: "/src/assets/car-2.png",
        name: "Comfort",
        descriprion: "If comfort is your priority, this is the ride for you. It's spacious and packed with features."
    },
    {
        id:3,
        image: "/src/assets/car-3.png",
        name: "Business",
        descriprion: "Do you want to travel around the city in style? Make sure to select our business class rides."
    },
    {
        id:4,
        image: "/src/assets/car-4.png",
        name: "Deluxe",
        descriprion: "The best ride for luxury and comfort. No compromises here. You'll surely get what you pay for"
    }
]

const BestInClass = () => {
    return(
        <Container>
            <Box 
            sx={
                {
                    display:"flex",
                    justifyContent:"center",
                    marginTop:"5%",
                    marginBottom:"5%",
                    flexDirection:"column",
                    gap: "60px"
                }    
            }
            >
                <Box>
                    <Typography
                    sx={{
                        color:"var(--detail-color)",
                        textAlign:"center",
                        fontFamily:"Roboto",
                        fontSize:"26px",
                        fontWeight:"400",
                        letterSpacing:"-0.25px",
                    }}
                    >
                        WHY SHOULD YOU RIDE WITH US?
                    </Typography>
                    <Typography
                    sx={{
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontFamily:"Roboto",
                        fontSize:"50px",
                        fontWeight:"700",
                        lineHeight:"52px",
                        letterSpacing:"-0.25px",
                    }}
                    >
                        Best in class rides
                    </Typography>
                </Box>
                <Box 
                sx={{
                    display:"flex",
                    gap:"10px"
                }}>
                    {cars.map((car) => (
                        <CustomCard key={car.id} model={car}/>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

export default BestInClass;