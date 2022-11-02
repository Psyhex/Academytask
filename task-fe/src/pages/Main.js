import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

export function Main(){
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('https://localhost:7108/api/Item')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return(
        <>
        <div>
            <Container fixed>
            <h1>Main</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((data) => (

                            <TableRow key={data.id}>
                                <TableCell component="th" scope="row"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"Item/" + data.id}>{data.id}</Link></TableCell>
                                <TableCell align="left"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"Item/" + data.id}>{data.title}</Link></TableCell>
                                <TableCell align="left"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"Item/" + data.id}>{String(data.description).length > 30 ? String(data.description).substring(0, 27) + "..." : String(data.description)}</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box align="right" sx={{ '& > :not(style)': { m: 1 } }}>
                <Link to="Add_item">
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Link>
            </Box>
            </Container>
        </div>
        </>
    )
}
