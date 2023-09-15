// import React from "react";

// export default function Content() {
//   return <div><h1 class="text-center">PLAN</h1>
// <div class="row row-cols-1 row-cols-md-3 g-4">
//   <div  class="col">
//     <div class="card">
//       <img src="image/1472576638-54-horizons-offices.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card" >
//       <img src="image/Managed-Office_3-1536x1024-1-1024x683.jpg" class="card-img-top">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card">
//       <img src="image/1472576638-54-horizons-offices.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card">
//       <img src="image/Managed-Office_3-1536x1024-1-1024x683.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
// </div></div>;
// }

import React from "react";

export default function Content() {
  return (
    <div>
      <h1 className="text-center">PLAN</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src="image/1472576638-54-horizons-offices.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="image/Managed-Office_3-1536x1024-1-1024x683.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="image/1472576638-54-horizons-offices.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <div className="card">
            <img
              src="image/Managed-Office_3-1536x1024-1-1024x683.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
