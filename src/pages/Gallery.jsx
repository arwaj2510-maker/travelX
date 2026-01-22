import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g5 from "../assets/images/g5.jpg";
import g6 from "../assets/images/g6.jpg";


export default function Gallery() {
    return (
        <div className="slider-container">
            <div className="slider">
                <img src={g1} alt="" />
                <img src={g2} alt="" />
                <img src={g3} alt="" />
                <img src={g4} alt="" />
                <img src={g5} alt="" />
                <img src={g6} alt="" />


                <img src={g1} alt="" />
                <img src={g2} alt="" />
                <img src={g3} alt="" />
                <img src={g4} alt="" />
                <img src={g5} alt="" />
                <img src={g6} alt="" />
            </div>
        </div>
    );
}
