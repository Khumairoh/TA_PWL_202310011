import React from 'react'

import tahu from "../../../../../assets/media/gmbr/tahu.png";

export default function TahuKrispi() {
  return (
    <div className='box'>
      <h2 className="membuat">Resep Membuat Tahu Krispi</h2> <br />
          <img src={tahu} className="thu" alt="tahukrispi"  />
          <h4 className="bahan">
            Bahan : <br />
            10 buah tahu putih, potong dadu jadi 4 bagian <br />
            250 ml air <br />
            3 sdm tepung terigu <br />  
            1 sdm tepung tapioka <br />
            1/2 sdt bawang putih bubuk Garam, kaldu bubuk dan merica <br/>sesuai
            selera <br />
            1 sdt baking powder <br /> <br />

            Cara Membuat: <br />
            Campur air bersama seluruh bahan kecuali tahu. <br />
            Aduk rata, saring jika perlu. <br />
            Masukkan tahu, rendam selama 5 menit. <br />
            Goreng tahu sampai berkulit di dalam minyak panas. <br />
            Siram dengan larutan tepung. <br />
            Goreng sampai agak kering. <br />
            Ulangi hingga 2-3 kali, lalu goreng sampai kecoklatan. <br />
            Angkat dan tiriskan. <br />
            Sajikan tahu goreng crispy <br />
            dengan cabai rawit hijau atau saus sambal. <br />
        </h4>
    </div>
  )
}
