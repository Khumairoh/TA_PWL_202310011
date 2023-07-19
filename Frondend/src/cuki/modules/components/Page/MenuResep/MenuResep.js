import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Page/MenuResep/MenuResep.css';

const FormData = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/formulirresep');
      setFormData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="form-data-title">Form Data</h1>
      <ul className="list-group">
        {formData.map((data, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={`http://localhost:3001/uploads/${data.image}`}
                  className="form-data-image"
                  alt=".."
                />
              </div>
              <div className="col-md-8">
                <h4 className="form-data-judul">Judul: {data.judul}</h4>
                <p className="form-data-deskripsi">Deskripsi: {data.deskripsi}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );              
};

export default FormData;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormData = () => {
//   const [formData, setFormData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/api/formulirresep');
//       setFormData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Form Data</h1>
//       <ul className="list-group">
//         {formData.map((data, index) => (
//           <li key={index} className="list-group-item">
//             <div>
//               <img
//                 src={`http://localhost:3001/uploads/${data.image}`}
//                 className="card-img-top"
//                 alt=".."
//                 style={{ height: '50%', width: '50%' }}
//               />
//             </div>
//             <p className="mb-1">Judul: {data.judul}</p>
//             <p className="mb-1">Deskripsi: {data.deskripsi}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FormData;
