// import React from "react";

// export default function Carousel() {
//   return <div><div id="carouselExample" class="carousel slide">
//     <div class="carousel-inner">
//       <div class="carousel-item active">
//         <img src="image/blob-1.jpg" class="d-block w-100"  height="400vh">
//       </div>
//       <div class="carousel-item">
//         <img src="image/Managed-Office_3-1536x1024-1-1024x683.jpg" class="d-block w-100" height="400vh">
//       </div>
//       <div class="carousel-item">
//         <img src="image/1472576638-54-horizons-offices.jpg" class="d-block w-100" height="400vh">
//       </div>
//     </div>
//     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//   </div></div>;
// }

import React from "react";

export default function Carousel() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="image/blob-1.jpg"
              className="d-block w-100"
              style={{ height: "70vh" }}
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="image/Managed-Office_3-1536x1024-1-1024x683.jpg"
              className="d-block w-100"
              style={{ height: "70vh" }}
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="image/1472576638-54-horizons-offices.jpg"
              className="d-block w-100"
              style={{ height: "70vh" }}
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
