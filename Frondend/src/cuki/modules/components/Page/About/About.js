import React from 'react'

import './About.css';

import chef from '../../../../assets/media/gmbr/image-removebg-preview 3.png';

export default function About() {
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
                    Misi kami di Cuki adalah untuk membuat masakan<br /> 
                    sehari-hari makin menyenangkan, karena kami<br /> 
                    percaya bahwa memasak adalah kunci menuju<br /> 
                    kehidupan yang lebih bahagia dan lebih sehat<br />
                    bagi manusia, komunitas dan planet ini.<br />  
                    Kami mendukung koki rumahan di seluruh dunia<br />
                    untuk membantu satu  sama lain dengan berbagi<br />
                    resep dan tips memasak.
                </h4>
            </div>

        </div>
      </div>
    )
  }

