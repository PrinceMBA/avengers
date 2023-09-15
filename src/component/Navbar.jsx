// import React from "react";

// export default function Navbar() {
//   return <div><div class="first-img">
//     <nav class="navbar navbar-expand-md">
//         <div class="container-xxl">
//             <a href="#intro" class="navbar-brand link-item">
//                  <span class="fw-bold text-secondary"><img src="image/1472576999-18-horizons-offices.png" width="105px" height="45px"></span>
//             </a>
//             <div class="flag">
//                 <img src="image/Flag-Ghana.jpg" width="15px" height="15px">
//                 <img src="image/Flag-Nigeria.jpg" width="15px" height="15px">
//             </div>

//                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                   </button>
//                   <div class="collapse navbar-collapse justify-content-end align-center" id="navbarNav">
//                     <ul class="navbar-nav">
//                       <li class="nav-item">
//                         <a class="nav-link link-item" href="#Home">Home</a>
//                       </li>
//                       <li class="nav-item">
//                         <a class="nav-link link-item" href="#topics">About us</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </nav>
//           </nav>
//           </div></div>;
// }

import React from "react";

export default function Navbar() {
  return (
    <div>
      <div class="first-img">
        <nav class="navbar navbar-expand-md">
          <div class="container-xxl">
            <a href="#intro" class="navbar-brand link-item">
              <span class="fw-bold text-secondary">
                <img
                  src="image/1472576999-18-horizons-offices.png"
                  width="105px"
                  height="45px"
                  alt="Logo"
                />
              </span>
            </a>
            <div class="flag">
              <img
                src="image/Flag-Ghana.jpg"
                width="15px"
                height="15px"
                alt="Ghana Flag"
              />
              <img
                src="image/Flag-Nigeria.jpg"
                width="15px"
                height="15px"
                alt="Nigeria Flag"
              />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end align-center"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link link-item" href="#Home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-item" href="#topics">
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
