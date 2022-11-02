import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export function Add_item(){
    const [getTitle, setTitle] = useState(null);
    const [getDescription, setDescription] = useState(null);

    function getTitleFunction(value){
        setTitle(value.target.value)

    }
    function getDescriptionFunction(value){
        setDescription(value.target.value)
    }
    const handleClick = () => {
        const data = {
            title: getTitle,
            description: getDescription
        }
        axios.post('https://localhost:7108/api/Item', data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <Stack
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1}
            >
            <h1>Add Item</h1>
            <TextField sx={{ width: 300 }} id="outlined-basic" label="Item Title" variant="outlined" onChange={getTitleFunction}/>
            <TextField sx={{ width: 300 }} id="outlined-basic" label="Item Description" variant="outlined" onChange={getDescriptionFunction}/>
                <Link to="/">
                    <Button sx={{ width: 300 }} variant="contained" onClick={handleClick}>Add Item</Button>
                </Link>
                <Link to="/">
                    <Button sx={{ width: 300 }} variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
                        Go Back
                    </Button>
                </Link>
            </Stack>
        </>
    )
}
