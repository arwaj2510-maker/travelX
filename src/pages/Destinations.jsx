import { Card, CardContent, Button, Grid } from "@mui/material";
import img from "../assets/images/img.jpg"

const places = [
    { id: 1, name: "Goa", price: 12000 },
    { id: 2, name: "Manali", price: 15000 }
];

export default function Destinations() {
    return (
        <Grid container spacing={8}>
            {places.map(p => (
                <Grid item md={4} key={p.id}>
                    <Card className="des">
                        <CardContent className="card">
                            <img src={img} alt="" className="imgg" />
                            <h3>{p.name}</h3>
                            <p>Price - ₹{p.price}</p>
                            <Button className="Dbtn" href={`/details/${p.id}`}>
                                View
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
