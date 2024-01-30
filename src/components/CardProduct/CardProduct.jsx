import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./CardProduct.css";

const CardProducto = ({ char }) => {
  const { image, title, price, description} = char;
  return (
    <Card sx={{ maxWidth: 345, marginTop: "20px"}} className="Card">
      <CardActionArea className="CardArea" sx={{display: "flex", flexDirection:"column", justifyContent: "end"}}>
        <CardMedia component="img" image={image} alt="green iguana" sx={{objectFit:"contain", padding: "15px" }} className="CardProductImg"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong className="Price">USD${price}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProducto;
