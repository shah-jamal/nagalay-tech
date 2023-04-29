import React from "react";
import heroHome from '../../assets/img/hero/hero-home.jpg';

const Hero = () => {
    return(
    <section id="scrollspyHero" class="wave-bg-blue py-5 py-xl-8 py-xxl-10">
    <div class="container overflow-hidden">
      <div class="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
        <div class="col-12 col-lg-6 order-1 order-lg-0">
          <h1 class="display-3 fw-bolder mb-3">We provide easy <br/><mark class="wave-highlight wave-highlight-blue"><span class="wave-font-hw display-2 text-accent fw-normal">solutions</span></mark> for startups at affordable rates.</h1>
          <p class="fs-4 mb-5">Our methods are straight, comfortable, and established to ensure evolution and acceleration.</p>
          <div class="d-grid gap-2 d-sm-flex">
            <button type="button" class="btn btn-primary btn-2xl rounded-pill px-4 gap-3">Free Consultation</button>
            <button type="button" class="btn btn-outline-primaryx btn-outline-accent btn-2xl rounded-pill px-4">Buy Credits</button>
          </div>
        </div>
        <div class="col-12 col-lg-5 text-center">
          <img class="img-fluid mask-position-center-center mask-repeat-no-repeat mask-size-auto" loading="lazy" src={heroHome} alt="" />
        </div>
      </div>
    </div>
  </section>
    )
}

export default Hero;
