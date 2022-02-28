import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuiltedImageList from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import axios from "axios";
import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import SearchAppBar from "../components/AppBar";



const Tour = () => {

    const [details, setDetails] = React.useState(null);

    const { id } = useParams();
    const URL = "http://127.0.0.1:8000/tourdetails/" + id + "/";
    React.useEffect(() => {
        axios.get(URL).then((response) => {
            setDetails(response.data);
            console.log(response.data)
        });
    }, []);
    if (!details) return null;
    return (
        <div>
            <SearchAppBar />
            <Container sx={{ width: 900 }}>

                <Typography variant="h3" component="h1" marginTop={3}>
                    Explore the world in Africa
                </Typography>
                <Box marginTop={3} sx={{ display: "flex" }}>
                    <img src={details.image} alt="" height={325} />
                    <QuiltedImageList />
                </Box>
                <Box>
                    <Typography variant="h6" component="h4" marginTop={3}>
                        {details.title}
                    </Typography>
                    <Typography variant="paragraph" component="p" marginTop={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, odio perspiciatis saepe error qui doloribus. Eligendi, esse maiores? Numquam quasi temporibus dolore, libero illo nisi impedit amet corrupti quo, ratione architecto maxime obcaecati neque quis unde officiis incidunt et fugit consequatur aspernatur. Voluptatem, vitae repudiandae? Fugiat consectetur dolorum minus. Unde.
                    </Typography>

                </Box>
                <Box>
                    <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                        Frequently Asked Questions
                    </Typography>

                    <CustomizedAccordions details={details} />
                </Box>


            </Container >
        </div>
    );
}

export default Tour;