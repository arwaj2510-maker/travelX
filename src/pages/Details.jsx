import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import mix from "../assets/images/mix.png";

export default function Details() {
    const { id } = useParams();

    return (
        <>
            <div className="detail">
                <div className="d1">
                    <img src={mix} alt="" className="mix" />

                    <h2>Package {id}</h2>
                    <p>Hotel + Food + Travel</p>
                    <Button href={`/booking/${id}`} variant="contained" className="detailbtn">
                        Book Now
                    </Button>
                </div>
            </div>
        </>
    );
}
