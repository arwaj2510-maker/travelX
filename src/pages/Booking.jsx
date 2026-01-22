import { TextField, Button } from "@mui/material";
import axios from "axios";

export default function Booking() {
    const submit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            phone: e.target.phone.value
        };
        await axios.post("http://localhost:5000/book", data);
        alert("Booking Successful");
    };

    return (
        <ul className="animate">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <form onSubmit={submit} className="form">
                <TextField name="name" label="Name" className="phone" />
                <TextField name="phone" label="Phone" className="phone" />
                <TextField name="Addres" label="Address" className="phone" />
                <Button type="submit" className="formbtn">Submit</Button>
            </form>
        </ul>
    );
}
