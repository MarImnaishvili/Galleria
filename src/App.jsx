import { useState } from "react";
import AppBar from "./components/AppBar";
import "./App.css";
import SimpleCard from "./components/SimpleCard";
// import { Container } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import pictures from "./data.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppBar />
      <Container sx={{ marginY: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pictures.map((picture) => (
            <SimpleCard picture={picture} key={picture.id} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
