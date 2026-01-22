import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/book")
            .then(res => setData(res.data));
    }, [])

    return data.map(d => (
        <p>{d.name} - {d.phone}</p>
    ));
}
