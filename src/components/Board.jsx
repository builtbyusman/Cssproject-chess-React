import BoxesDark from "./BoxesDark";
import BoxesLight from "./BoxesLight";

import img1 from "../assets/23-Picsart-BackgroundRemover.png";
import img2 from "../assets/22-Picsart-BackgroundRemover.png";
import img3 from "../assets/21-Picsart-BackgroundRemover.png";
import img4 from "../assets/26-Picsart-BackgroundRemover.png";
import img5 from "../assets/24-Picsart-BackgroundRemover.png";
import img6 from "../assets/25-Picsart-BackgroundRemover.png";
import img7 from "../assets/16-Picsart-BackgroundRemover.png";
import img8 from "../assets/15-Picsart-BackgroundRemover.png";
import img9 from "../assets/14 (1).png";
import img10 from "../assets/13 (1).png";
import img11 from "../assets/12 (1).png";
import img12 from "../assets/11 (1).png";

export default function Board() {
  return (
    <>
    <div className="board">
        <div className="lgt">
          <BoxesLight img={img1} />
          <BoxesDark />
          <BoxesLight />
          <BoxesDark img={img2} />
          <BoxesLight />
          <BoxesDark img={img1} />
          <BoxesLight img={img3} />
          <BoxesDark />
          <BoxesDark img={img4} />
          <BoxesLight img={img5} />
          <BoxesDark img={img4} />
          <BoxesLight />
          <BoxesDark />
          <BoxesLight img={img4} />
          <BoxesDark img={img5} />
          <BoxesLight img={img4} />
          <BoxesLight />
          <BoxesDark img={img4} />
          <BoxesLight img={img6} />
          <BoxesDark />
          <BoxesLight img={img4} />
          <BoxesDark img={img6} />
          <BoxesLight img={img4} />
          <BoxesDark />
          <BoxesDark />
          <BoxesLight />
          <BoxesDark />
          <BoxesLight img={img4} />
          <BoxesDark />
          <BoxesLight />
          <BoxesDark />
          <BoxesLight />
          <BoxesLight />
          <BoxesDark />
          <BoxesLight />
          <BoxesDark />
          <BoxesLight img={img7} />
          <BoxesDark />
          <BoxesLight />
          <BoxesDark />
          <BoxesDark />
          <BoxesLight img={img7} />
          <BoxesDark img={img8} />
          <BoxesLight />
          <BoxesDark />
          <BoxesLight img={img8} />
          <BoxesDark img={img7} />
          <BoxesLight />
          <BoxesLight img={img7} />
          <BoxesDark img={img9} />
          <BoxesLight img={img7} />
          <BoxesDark />
          <BoxesLight />
          <BoxesDark img={img7} />
          <BoxesLight img={img9} />
          <BoxesDark img={img7} />
          <BoxesDark img={img10} />
          <BoxesLight />
          <BoxesDark />
          <BoxesLight img={img11} />
          <BoxesDark />
          <BoxesLight img={img10} />
          <BoxesDark img={img12} />
          <BoxesLight />
        </div>
    </div>
    </>
  );
}