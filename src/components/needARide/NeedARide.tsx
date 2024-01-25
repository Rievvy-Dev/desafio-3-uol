import { Box, Container } from "@mui/material"
import { Form } from "@unform/web";
import VTextField from "../forms";

const NeedARide = () => {
    return(
        <Container sx={{backgroundColor:"var(--background-color)"}}>
            <Box sx={{display:"flex", flexDirection:"row"}}>
                <img src="src/assets/need-a-ride.png" alt="need a ride?" />
                <Box >
                    <Form 
                    placeholder= "Digite Algo" 
                    onSubmit={(data) => {console.log(data)}} 
                    style={{display:"flex", flexDirection:"column"}}
                    >
                        <VTextField name='yourPickup'/>
                        <VTextField name='yourDestination'/>

                        <button type="submit">Submit</button>
                    </Form>
                </Box>
            </Box>
        </Container>
    )
}

export default NeedARide;