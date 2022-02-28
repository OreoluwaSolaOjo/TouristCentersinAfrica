import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import '../App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from 'react-router-dom';

// to reduce size of text or any style beyond that given in material ui use create theme
const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [{
                props: {
                    variant: "body2",
                },
                style: {
                    fontSize: 11,
                },
                props: {
                    variant: "body3",
                },
                style: {
                    fontSize: 9,
                },
                props: {
                    variant: "h4",
                },
                style: {
                    fontSize: 15,
                },
            }]
        }
    }
})


const TourCard = ({ tour, id }) => {

    return (

        // paper elevation is the feel of the card that surrounds the component xs is 3 meaning 3 x 4= 12 since 12 is the max for a grid system
        // note i couldnt pass key from the home as prop so i had to use id to take in index
        <Grid item xs={3}>

            <Link to={`/${id - 1}/`}>

                <ThemeProvider theme={theme}>

                    <Paper elevation={3}>
                        <img src={tour.image} alt="" className="img" />
                        {/* Wrap typography inside a box component to be able to give padding and other properties */}
                        {/* paddingX means X axis */}

                        <Box paddingX={1}>
                            <Typography variant="h4" component="h2">
                                {tour.name}
                            </Typography>
                            {/* you can adjust custom styles in a box which is just like a div by giving it a prop of sx */}
                            <Box
                                sx={{ display: "flex", alignItems: "center" }}>
                                <AccessTime sx={{ width: 12.5 }} />
                                <Typography variant="body2" component="p" marginLeft={0.5}>
                                    {tour.duration}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}> <Rating
                                        name="read-only"
                                        value={tour.rating}
                                        readOnly precision={0.5}
                                        size="small" />
                                    <Typography variant="body2" component="p" marginLeft={0.5}>
                                        {tour.rating}
                                    </Typography>
                                    <Typography variant="body3" component="p" marginLeft={0.5}>
                                        ({tour.numberOfReviews} reviews)
                                    </Typography>

                                </Box>

                            </Box>
                            <Box>
                                <Typography variant="h6" component="h3" marginTop={0}>
                                    From ${tour.price}
                                </Typography>
                            </Box>
                        </Box>


                    </Paper>

                </ThemeProvider>
            </Link>
        </Grid>

    );
}

export default TourCard;
