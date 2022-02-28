import Container from '@mui/material/Container';
import TourCard from '../components/TourCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import axios from "axios";
import React from "react";
import SearchAppBar from '../components/AppBar';


const baseURL = "http://127.0.0.1:8000/tourlocation/";


const Home = () => {
    const [post, setPost] = React.useState(null);
    const [search, setSearch] = React.useState('');
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(response.data)
        });
    }, []);

    if (!post) return null;
    const filteredpost = post.filter(
        posty => {
            return posty.name.toLowerCase().includes(search.toLowerCase())
        }
    )
    return (
        <div>
            <SearchAppBar search={search} setSearch={setSearch} />

            <Container sx={{ marginY: 5 }}>
                {/* spacing of the containers  */}

                {filteredpost.map((posty) => (<>

                    <Typography
                        variant="h4"
                        component="h2"
                        marginTop={5}
                        marginBottom={3}>
                        Top {posty.name}

                    </Typography>

                    <Grid container spacing={5} >
                        {posty.tourplaces.map((tour, index) => (


                            <TourCard tour={tour}
                                key={tour.id} id={tour.id} />
                        ))}
                    </Grid>
                </>
                ))}
            </Container>

        </div >
    );
}

export default Home;