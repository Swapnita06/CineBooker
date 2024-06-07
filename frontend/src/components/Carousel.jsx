import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { green } from "@mui/material/colors";
import crewimage from '../images/crew.jpg'

const Carousel = () => {
  const imageList = [
    { src: crewimage, alt: "Image 1"},
    { src: "download2.jpeg", alt: "Image 2" },
    { src: "download1.jpeg", alt: "Image 3" },
    { src: "download4.jpeg", alt: "Image 3" },
    { src: "download3.jpeg", alt: "Image 3" },
    { src: "download6.jpg", alt: "Image 3" },
    { src: "download7.jpg", alt: "Image 3" },
    { src: "download8.jpg", alt: "Image 3" },
    { src: "download9.jpg", alt: "Image 3" },
    { src: "download10.jpg", alt: "Image 3" },
    { src: "download11.jpg", alt: "Image 3" },
    { src: "download4.jpeg", alt: "Image 3" },
    { src: "download7.jpg", alt: "Image 3" },
    { src: "download9.jpg", alt: "Image 3" },
    { src: "download3.jpeg", alt: "Image 3" },
    { src: "download4.jpeg", alt: "Image 3" },
    { src: "download2.jpeg", alt: "Image 3" },
    { src: "download11.jpg", alt: "Image 3" },


    /*{ src: "", alt: "Image 4" },*/
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div>
        <ul style={{  padding: "0", margin :"0" }}>{dots}</ul>
      </div>
    ),
  
  };
  
  return (
    <>
    <div className="Carousel" style={{margin:"0", padding:"0",backdropFilter: 'blur(50px)', backgroundColor:"black"}}>
    {/*<div style={{ backgroundColor:"rgb(36, 40, 40)"}}>
    <h1 style={{marginTop:"65px"}}>Hola Visitors!</h1>
    <h3>Shop your Heart Out</h3>
  </div>*/}
    <div style={{maxWidth: "600px", margin: "auto",objectFit:"cover",backgroundColor:"black"}}>
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <div key={index} style={{ margin: "0 0px" }}>
            <div
              className="box"
              style={{
                margin:0,
                padding:0,
                maxWidth: "700px",
                background: "white",
                overflow: "hidden",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "70%",
                  height: "70%",
                  maxWidth: "70%",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
};

export default Carousel;
