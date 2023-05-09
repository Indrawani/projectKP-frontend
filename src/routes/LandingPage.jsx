import LogoUmkm from "./assets/logo.png";
import LogoUtama from "./assets/landingpage.png";
import Youtube from "./assets/YOUTUBE.png";
import Whatsapp from "./assets/WHATSAPP.png";
import Instagram from "./assets/INSTAGRAM.png";
import Facebook from "./assets/FACEBOOK.png";

function landingpage() {
    return (
      <section class="bg-blue-900 min-h-screen">
          <img alt="logo-umkm" src={LogoUmkm} className="w-32 container max-w-5xl flex flex-row pt-12 space-x-36 ml-12"/>
          <div class="container">
      <div class="flex flex-wrap">
          <div class="w-full self-center px-4 lg:w-1/2 pl-15">
              <h1 class="font-bold text-white md:text-6xl lg:text-6xl ml-12">Bersama UMKM</h1>
              <h1 class="font-bold text-white md:text-6xl lg:text-6xl ml-12">Membangun</h1>
              <h1 class="font-bold text-white md:text-6xl lg:text-6xl mb-6 ml-12">Negeri</h1>
              <p class="font-sm text-blue-400 text-lg lg:text-xl md:text-2xl ml-12">UMKM Juara, UMKM Goes to</p>
              <p class="font-sm text-blue-400 text-lg mb-20 lg:text-xl md:text-2xl ml-12">Digital Marketing</p>
            <button class="p-12 py-4 px-20 ml-12 bg-neutral-800 text-white font-semibold font-mono rounded-3xl drop-shadow-2xl shadow-xl text-lg">
              Get Start
            </button>
          </div>
          <div class="w-full self-end px-4 lg:w-1/2">
              <div class="mt-0 mb-20">
              <img class="" src={LogoUtama} alt="logo_utama"/>
              </div>
          </div>
  
          <div className="flex flex-col items-center pl-60">
            <h2 className="text-white text-center pb-6 pl-60">
              Tinjau Terlebih Dahulu
            </h2>
        <div class="flex justify-center grow h-14 mb-10 pl-60">
            <a href="https://www.instagram.com/sahabat_umkm/" target="_blank">
              <title>Instagram</title>
              <img alt="instagram" src={Instagram} className="w-12 container max-w-5xl flex flex-row pb-12 space-x-20 ml-12"/>
            </a>
  
            <a href="https://web.whatsapp.com/" target="_blank">
              <title>Whatsapp</title>
              <img alt="whatsapp" src={Whatsapp} className="w-12 container max-w-5xl flex flex-row pb-12 space-x-20 ml-12"/>
            </a>
  
            <a href="https://www.youtube.com/watch?v=8Ea4oq8qFtM&t=2845s" target="_blank">
              <title>YouTube</title>
              <img alt="youtube" src={Youtube} className="w-12 container max-w-5xl flex flex-row pb-12 space-x-20 ml-12"/>
            </a>
  
            <a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjc5NDc1MzA0LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D" target="_blank">
              <title>Facebook</title>
              <img alt="facebook" src={Facebook} className="w-12 container max-w-5xl flex flex-row pb-12 space-x-20 ml-12"/>
            </a>
        </div>
        </div>
  
      </div>
  </div>
        {/* <a>hasil</a> */}
        {/* <div>
          <Link to='/'>Home</Link>
        </div>
  
          <Routes>
            <Route path='/' element={<Register></Register>} ></Route>
          </Routes> */}
                      {/* <Link to='/'>Home</Link>
  
                    <Routes>
                      <Route path="/" element={<Login />} />
                    </Routes> */}
          
      </section>
    );
  }
  
  export default landingpage;