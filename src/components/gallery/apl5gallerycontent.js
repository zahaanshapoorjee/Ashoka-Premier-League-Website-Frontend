import React from "react";
import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import { Text } from "@nextui-org/react";
import Image1 from '../../assets/images/APL5/APL5A2ZTeam.jpg';
import Image2 from '../../assets/images/APL5/APL5Cover.jpg';
import Image3 from '../../assets/images/APL5/Chakravyuh.jpeg';
import Image4 from '../../assets/images/APL5/GeneralBackgroundAPL1 2.jpg';
import Image5 from '../../assets/images/APL5/RamaBackgroundAPL.jpg';
import Image6 from '../../assets/images/APL5/SuiiicideSquad.jpg';
import Image7 from '../../assets/images/APL5/VeduBackgroundAPL1.jpg';
import Image8 from '../../assets/images/APL5/VeduBackgroundAPL2.jpg';
import Image9 from '../../assets/images/APL5/WaliBackgroundAPL.jpg';
import './apl5gallerycontent.css'

export default function APL5GalleryContent() {

    // vertical pic
    const width1=500
    const height1=500

    // hroizontal pic
    const width2=400
    const height2=300

    const images = [
        {
            src: Image1,
            width: width1,
            height: height1,
        },
        {
            src: Image2,
            width: width2,
            height: height2,
        },
        {
            src: Image3,
            width: width2,
            height: height2,
        },
        {
            src: Image4,
            width: width1,
            height: height1,
        },
        {
            src: Image5,
            width: width2,
            height: height2,
        },
        {
            src: Image6,
            width: width2,
            height: height2,
        },
        {
            src: Image7,
            width: width1,
            height: height1,
        },
        {
            src: Image8,
            width: width1,
            height: height1,
        },
        {
            src: Image9,
            width: width1,
            height: height1,
        }
    ]

    

    return(
        <div className="gallery-wrapper">
            <Gallery tagStyle={{alignItems:'center', justifyContent:'center'}} images={images} />
        </div>
    )
}