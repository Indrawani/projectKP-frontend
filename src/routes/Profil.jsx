import { useState, useEffect } from "react";
import { FaEllipsisV, FaTrash, FaEdit, FaUserCircle} from "react-icons/fa";
import { message } from "antd";
import { Link } from "react-router-dom";

function ProfileHeader({ nama_umkm, profil_url, alamat_umkm, handleEdit }) {

  const [rating, setRating] = useState(0); // inisialisasi state rating dengan nilai 0

  // fungsi untuk mengubah rating
  const handleRating = (value) => {
    setRating(value);
  };
  
  return (
    <div className="flex items-center bg-white p-6">
      <img className="w-32 h-32 rounded-full mb-4 ml-6" src={profil_url} alt={nama_umkm} />
      <div className="flex flex-col ml-6">
        <h1 className="text-2xl font-bold mb-2">{nama_umkm}</h1>
        <p className="text-md opacity-50">{alamat_umkm}</p>
        <div className="flex mt-4">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${
                index < rating ? "text-yellow-400" : "text-gray-300"
              } text-2xl cursor-pointer`}
              onClick={() => handleRating(index + 1)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill={index < rating ? "yellow" : "none"}
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6">
                  <path  
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
                  />
              </svg>
            </span>
          ))}
        </div>
        <button className="bg-blue-500 w-28 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
          onClick={handleEdit}>Edit Profil</button>
      </div>
    </div>
  );
}

function UserPost({ nama_umkm, profil_url }) {
  const [showDetails, setShowDetails] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  const toggleFavorite = () => {
    const isFavorited = favoritesList.includes(nama_umkm);
    if (isFavorited) {
      setFavoritesList(favoritesList.filter(nama => nama !== nama_umkm));
    } else {
      setFavoritesList([...favoritesList, nama_umkm]);
    }
    setFavorite(!isFavorited);
  };

  const favoriteCount = favoritesList.length;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleDelete = () => {
    // fungsi untuk menghapus postingan
    console.log("Hapus postingan");
  };

  const handleEdit = () => {
    // fungsi untuk mengedit postingan
    console.log("Edit postingan");
  };

  return (
    <div className="bg-white shadow-lg shadow-slate-500 rounded-md p-2 mt-2 relative mb-20">
    <div className="flex justify-around items-center mb-8">
    <FaUserCircle className="text-4xl ml-4 text-gray-500" profil_url={profil_url}/>
      <h3 className="font-semibold text-lg ml-0">{nama_umkm}</h3>
      <div className="relative">
        <button
          className="focus:outline-none"
          onClick={toggleDetails}
        >
          <FaEllipsisV />
        </button>
        {showDetails && (
          <div className="absolute right-0 top-8 bg-white shadow-md rounded-md py-1 px-3">
            <Link to="/edit">
              <button
                className="flex items-center w-20 hover:bg-slate-300 space-x-2"
                onClick={handleEdit}
              >
                <FaEdit />
                <span>Edit</span>
            </button>
            </Link>

            <Link to="/delete">
            <button
              className="flex items-center w-20 hover:bg-slate-300 space-x-2"
              onClick={handleDelete}
            >
              <FaTrash />
              <span>Delete</span>
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>
    <div className="flex justify-end">
    <button className="flex items-center space-x-2 mr-6 mb-4"
          onClick={toggleFavorite}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6"
            color={favorite ? 'red' : 'gray'}>
              <path 
                fill={favorite ? 'red' : 'none'}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
              />
          </svg>
          <span>{`${favoriteCount}`}</span>
        </button>
    </div>
    <img className="w-48 h-48 rounded-lg mb-4 max-w-40 mx-auto" src={profil_url} alt={nama_umkm} />
    <div className="flex justify-center"> 
      <button
        className="mt-4 mb-8 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        onClick={toggleDetails}
      >
        {showDetails ? "Hide Details" : "Details"}
      </button>
    </div>
    {showDetails && (
      <div className="mt-4">
        <p>detail belum terhubung ke page selanjutanya.</p>
      </div>
    )}
  </div>
  );
}

const Profile = () => {
  // const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [access_token, setToken] = useState('');

  // fungsi untuk melakukan fetch data UMKM
  const fetchData = (id) => {
    setLoading(true)
    fetch(`http://34.101.113.12/api/umkmByUser/${id}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setData(data.data); //mengubah data menjadi data satu element
      setLoading(false);
      message.success('Berhasil Fetch');
      console.log(data)
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
      message.error('Gagal fetch data');
    })
  }

  useEffect(() => {
    const access_token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    setToken(access_token)
    fetchData(id) // mengambil data UMKM dengan id 1 saat halaman pertama kali dimuat
  },[access_token, localStorage.getItem('id')]);

  const handleLogin = (event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)

    fetch(`http://34.101.113.12/api/register`, {
      method: "POST",
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.access_token)
      setToken(data.access_token)
      setLoading(false);
      fetchData(localStorage.getItem('id')); // mengambil data UMKM setelah berhasil login
    })
  }

  return (
    <div id="root">
      <div className="container mx-auto p-10">
        <div className="flex flex-row items-center justify-center mt-4">
          {data.slice(0, 1).map((user) => (
            <div className="md:w-1/2" key={user.id}>
              <ProfileHeader nama_umkm={user.nama_umkm} profil_url={user.profil_url} alamat_umkm={user.alamat_umkm}/>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-xl mt-8">List Your Posts</h1>
        <div className="flex justify-end">
        <Link to="/create">
          <button className="bg-slate-400 w-14 hover:bg-blue-100 py-2 px-4 rounded mt-8 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
          </button>
        </Link>
        </div>
        <div className="flex flex-col mt-8 md:flex-row md:space-x-4">
          {data.map((user) => (
            <div className="md:w-1/2" key={user.id}>
              <UserPost nama_umkm={user.nama_umkm} profil_url={user.gambar_umkm} />
            </div>
          ))}
        </div>
      </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-10 mt-16">© 2023 <a href="https://www.ukmindonesia.id/" class="hover:underline">UMKM™</a>. Area.</span>
    </div>
  );
}
                     
export default Profile;
