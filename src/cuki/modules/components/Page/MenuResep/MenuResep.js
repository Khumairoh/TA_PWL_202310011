import React, { Component } from "react";
import { Link } from "react-router-dom";

import tahu from "../../../../assets/media/gmbr/image-removebg-preview (1) 2.png";
import mie from "../../../../assets/media/gmbr/image-removebg-preview (1) 2 (1).png";

import "./MenuResep.css";

export default class MenuResep extends Component {
  render() {
    return (
      <div className="menu">
        <div className="box">

          <h2 className="membuat">Resep Membuat Tahu Krispi</h2> <br />
          <img src={tahu} className="thu" alt="tahukrispi" />
          <h4 className="bahan">
            Bahan : <br />
            10 buah tahu putih, potong dadu jadi 4 bagian <br />
            250 ml air <br />
            3 sdm tepung terigu <br />
            1 sdm tepung tapioka <br />
            1/2 sdt bawang putih bubuk Garam, kaldu bubuk dan merica sesuai
            selera <br />1 sdt baking powder.
           
            <a href="./tahukrispi" className="mr">
              More
            </a>
          </h4>

          <img src={mie} className="mie" alt="mienyemek" />
          <h2 className="membuatmie">
            Resep Membuat Indomie Goreng Nyemek <br />
            Mudah dan Praktis
          </h2>

          <br />
          <h4 className="bahanmie">
            Bahan : <br />
            2 bungkus indomie goreng⁣⁣ <br />
            2 siung bawang putih <br /> 
            4 siung bawang merah <br />
            6 cabai merah atau rawit⁣⁣ Minyak dan margarin secukupnya⁣⁣ <br />
            2 butir telur ayam⁣⁣ <br />
            Bakso secukupnya⁣⁣ <br />
            1 buah tomat
              
              <a href="./mienyemek" className="mr">
              More
              </a>
          </h4>

        </div>
      </div>
    );
  }
}
