import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const CustomCard = ({...rest}) => {
    const handleLearnMore = () => {
        const searchQuery = encodeURIComponent(`${rest.model.name} car`);
        const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
        window.open(searchUrl, "_blank");
    };
    
    return(
        <Box>
            <Card sx={{ 
                maxWidth: 331, 
                display:"flex",
                alignItems:"flex-start",
                alignSelf:"stretch",
                flexDirection:"column",
                background:"var(--card-color)"
            }}>
                <CardMedia
                    sx={{ 
                        height: 214,
                        flex: "1, 0, 0",
                        alignSelf: "stretch"
                    }}
                    image={`${rest.model.image}`}
                    title={`${rest.model.name}`}
                />
                <CardContent>
                    <Typography 
                    sx={{
                        color:"#FFFFFF",
                        fontFamily:"Roboto",
                        fontSize:"16px",
                        fontWeight:"500",
                        lineHeight:"24px",
                        alignSelf: "stretch"
                    }}
                    >
                    {`${rest.model.name}`}
                    </Typography>
                    <Typography 
                    sx={{
                        color:"#B3B3B3",
                        fontFamily:"Roboto",
                        fontSize:"16px",
                        fontWeight:"400",
                        lineHeight:"25px",
                        alignSelf: "stretch"
                    }}
                    >
                    {`${rest.model.descriprion}`}
                    </Typography>
                </CardContent>
                
                <Box sx={{display:"flex", width:"100%", justifyContent:"flex-end"}}>
                    <CardActions >
                        <Button 
                        size="small"
                        sx={{
                            display:"flex", 
                            color:"var(--detail-color)"
                        }}
                        onClick={handleLearnMore}
                        >
                        Learn More
                        </Button> 
                    </CardActions>
                </Box>
            </Card>
        </Box>
    );
}

export default CustomCard;