import React from 'react';
import image1 from './../images/banner2.jpg'
import image2 from './../images/banner.jpg'

function Banner() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="Wild Landscape" />
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="Camera" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Banner;
