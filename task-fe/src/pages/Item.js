import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from '@mui/material/Container';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export function Item(){
    const params = useParams();
    const item_id = params.id;
    const single_item_url = "https://localhost:7108/api/Item/"+item_id;
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get(single_item_url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Container fixed>
                <h1>Item Details</h1>
                <p>Id: {data.id}</p>
                <p>Title: {data.title}</p>
                <p>Description: {data.description}</p>
                <Link to="/">
                    <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
                        Go Back
                    </Button>
                </Link>
            </Container>


        </>
    )
}
