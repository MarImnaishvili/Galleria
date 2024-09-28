import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const SimpleCard = ({ picture }) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={picture.image} alt="niagara falls" className="img" />
      </Paper>
    </Grid>
  );
};
export default SimpleCard;
