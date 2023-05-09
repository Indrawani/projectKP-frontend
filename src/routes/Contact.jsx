import React from "react";
import backgroundkontak from '../../src/assets/backgroundkontak.jpg';

function ContactUs() {
  const phone = "+62-888888888";
  const email = "umkmarea@gmail.com";
  const address = "Jl. Tambak Bayan No.2, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281";

  return (
    
    <div className="container h-screen">
      <div className="box-border flex flex-wrap">
        <div className="h-screen w-full md:w-2/3 p-4" style={{ backgroundImage: `url(${backgroundkontak})`, backgroundSize: 'cover' }}>
        <h2 className="ml-20 mr-20 mt-40 text-white text-2xl text-center font-bold mb-6">Tentang Kami</h2>
        <p className="text-center text-white ml-20 mr-20">
          UMKM Area merupakan web penyedia daftar mitra usaha mikro kecil dan menengah yang ada di Daerah Istimewah Yogyakarta dengan tujuan agar UMKM semakin di kenal oleh masyarakat luas. 
        </p>
        <p className="text-center font-bold text-3xl text-white ml-20 mr-20 mt-20">
         Bersama UMKM Membangun Negeri 
        </p>
        <p className="text-center text-xl text-white ml-20 mr-20 mt-6">
         UMKM Juara, UMKM Goes to Digtal Marketing
        </p>
        </div>
          <div className="w-full md:w-1/3 bg-white p-10">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="flex mb-6">
            <a href="https://web.whatsapp.com/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>
              </a>
              <div className="ml-6">
                <h3 className="font-bold">Call Us</h3>
                <p className="mb-6">{phone}</p>
              </div>
            </div>

            <div className="flex mb-6">
              <a href="https://www.google.com/intl/id/gmail/about/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
               </svg>
               </a>
              <div className="ml-6">
                <h3 className="font-bold">Email Us</h3>
                <p className="mb-6">{email}</p>
              </div>
            </div>

            <div className="flex mb-6 border-b border-gray-300 pb-4">
              <a href="https://www.google.com/maps/place/Jl.+Tambak+Bayan+No.2,+Janti,+Caturtunggal,+Kec.+Depok,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55281/@-7.7825977,110.4136126,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a59f071fa37c7:0xf62b511a803fffa!8m2!3d-7.782603!4d110.4161875!16s%2Fg%2F11j3tdkxgj">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              </a>
              <div className="ml-6">
                <h3 className="font-bold">Our Address</h3>
                <p className="mb-6">{address}</p>
              </div>
            </div>

            <div>
            <h2 className="text-black text-center pb-10 ">
                 social media contacts :
              </h2>
            <div className="grid grid-cols-4 gap-x-10">

              {/* instagram */}
              <a href="https://www.instagram.com/sahabat_umkm/">
              <svg
                xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="#C13584" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              </a>

              {/* whatshapp */}
              <a href="https://web.whatsapp.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="#25D366" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              </a>

              {/* youtube */}
              <a href="https://www.youtube.com/watch?v=8Ea4oq8qFtM&t=2845s">
              <svg
                xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill=" #FF0000" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              </a>

              {/* facebook */}
              <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjc5NDc1MzA0LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
              <svg
                xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="#3B5998" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              </a>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ContactUs;
