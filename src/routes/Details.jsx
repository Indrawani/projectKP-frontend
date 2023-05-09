import { useState, useEffect } from "react";
import { FaEllipsisV, FaTrash, FaEdit, FaUserCircle } from "react-icons/fa";
import { message } from "antd";

function UserDetail({ nama_umkm, profil_url, id, access_token }) {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState({});

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

  useEffect(() => {
    // ambil data dari server dan simpan di umkmData
    const fetchData = async () => {
      try {
        const response = await fetch(`http://34.101.113.12/api/umkmByUser/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (data.success) {
          setData(data.data);
        } else {
          message.error("Gagal mengambil data");
        }
      } catch (error) {
        message.error("Gagal mengambil data");
      }
    };

    fetchData();
  }, [id, access_token]);

  return (
    <div className="bg-white shadow-lg shadow-slate-500 rounded-md p-2 mt-2 relative mb-20">
      <div className="flex justify-around items-center mb-8">
        <FaUserCircle className="text-4xl ml-4 text-gray-500" profil_url={profil_url} />
        <h3 className="font-semibold text-lg ml-0">{nama_umkm}</h3>
      </div>
      {/* <img className="w-48 h-48 rounded-lg mb-4 max-w-40 mx-auto" src={profil_url} alt={nama_umkm} /> */}
      <div className="flex flex-row items-center justify-center mt-4">
          {data.map((user) => (
            <div className="md:w-1/2" key={user.id}>
              <UserDetail nama_umkm={user.nama_umkm} profil_url={user.profil_url} alamat_umkm={user.alamat_umkm}/>
            </div>
          ))}

        </div>

    </div>
  );
}

export default UserDetail;
