import React, { Component } from 'react'

import './About.css';

import chef from '../../../../assets/media/gmbr/image-removebg-preview 3.png';

export default class About extends Component {
  render() {
    return (
      <div className='abt'>
        <div className='us'>
            <h1 className='ab'>
                About      
            </h1>

            <img src={chef} 
            className="chf" 
            alt="chef" />  
        
            <div className='ktr'>
                <h4 className='keterangan'>
                    Misi kami di Cuki adalah untuk membuat masakan sehari-hari <br /> 
                    makin menyenangkan, karena kami percaya bahwa memasak 
                    adalah <br /> kunci menuju kehidupan yang lebih bahagia dan 
                    lebih sehat <br /> bagi manusia, komunitas dan planet ini. <br />
                    Kami mendukung koki rumahan di seluruh dunia untuk 
                    membantu <br /> satu sama lain dengan berbagi resep dan tips memasak.
                </h4>
            </div>

        </div>
      </div>
    )
  }
}
