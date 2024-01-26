import { Button } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const CustomButton = ({...rest}) => {

    return(
        <Button 
        variant="contained"
        sx={
            {
                background:"var(--detail-color)",
                width:`${rest.width}`,
                padding:`${rest.padding}`,
                "&:hover": {
                    background:"var(--background-color)"
                }
            }
        }
        >   {rest.icon ? <SearchOutlinedIcon/> : null}
            {rest.label}
        </Button>
    )
}

export default CustomButton;