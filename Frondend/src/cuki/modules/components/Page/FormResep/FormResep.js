// import React, { useState } from 'react';
// import axios from 'axios';

// import "./FormResep.css"

// const Form = () => {
//   const [judul, setJudul] = useState('');
//   const [deskripsi, setDeskripsi] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('judul', judul);
//     formData.append('deskripsi', deskripsi);
//     formData.append('image', selectedImage);

//     try {
//       await axios.post('http://localhost:3001/api/formulirresep', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('Data berhasil dikirim!');
//       setJudul('');
//       setDeskripsi('');
//       setSelectedImage(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleBack = () => {
//     window.history.back();
//   };

//   const handleImageChange = (e) => {
//     setSelectedImage(e.target.files[0]);
//   };

//   return (
//     <form className='formresep' onSubmit={handleSubmit}>

//       <div>
//         <div className="resep">
//           <label htmlFor="judul" className="form-label" >
//             Judul:
//           </label>
//           <input
//             className="form-control" 
//             type="text" 
//             id="judul"
//             value={judul}
            // onChange={(e) => setJudul(e.target.value)}
//             required
//           />
//         </div>
//       </div>
//       <div className="resep">
//         <label htmlFor="deskripsi" className="form-label">
//           Deskripsi:
//         </label>
//         <textarea
//           className="form-control"
//           id="deskripsi"
//           value={deskripsi}
          // onChange={(e) => setDeskripsi(e.target.value)}
//           required
//         />
//       </div>
//       <div className="resep" >
//         <label htmlFor="image" className="form-label">
//           Image:
//         </label>
//         <input
//           className="form-control"
//           type="file"
//           id="image"
//           accept="image/*"
//           onChange={handleImageChange}
//           required
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

import React, { useState } from 'react'
import axios from 'axios'

  const Form = () => {
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('judul', judul);
      formData.append('deskripsi', deskripsi);
      formData.append('image', selectedImage);
  
      try {
        await axios.post('http://localhost:3001/api/formulirresep', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        alert('Data berhasil dikirim!');
        setJudul('');
        setDeskripsi('');
        setSelectedImage(null);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleBack = () => {
      window.history.back();
    };
  
    const handleImageChange = (e) => {
      setSelectedImage(e.target.files[0]);
    };

    return (
    <div className='akun'>
      <div className='akun-user'>

      <button className="btn btn-secondary" onClick={handleBack} style={{ marginLeft : '3%'}}>
        Back
      </button>

        <h1 className='signup'>
            Formulir Resep
        </h1>

    <br/>
        <form className='isi' onSubmitCapture={handleSubmit}>
            <div className="form-group">
                <label 
                for="exampleInputJudulResep1">
                Judul Resep
                </label>
                <input type="judul resep" 
                className="form-control ctrl" 
                id="exampleInputJudulResep1" 
                placeholder="Enter judul resep" 
                name='judul resep'
                onChange={(e) => setJudul(e.target.value)}
                />
            </div>
    
    <br/>
            <div className="form-group">
                <label 
                for="exampleInpuDeskripsi1">
                    Deskripsi Resep
                </label>  
                <input 
                type="deskripsi" 
                className="form-control ctrl" 
                id="exampleInputDeskripsi1" 
                placeholder="Enter deskripsi" 
                name='deskripsi'
                onChange={(e) => setDeskripsi(e.target.value)}
                />
            </div>
        
    <br/>    
          <div className="form-group">
          <label htmlFor="image" className="form-label">
                Image:
            </label>
            <input
            className="form-control"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            />
            </div>

        <br/>
            <button type="submit" 
            className="btn btn-primary sbmt">
                Submit
            </button>

        </form>
        </div>
    </div>
    )
  }

export default Form;