<template>
  <div class="min-h-screen">
    <!-- Header Section Start -->
    <header :class="['bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition-all duration-300', isNavbarFixed ? 'navbar-fixed' : '']">
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="px-4">
            <a href="#home" class="font-bold text-lg text-primary block py-6">Febrian</a>
          </div>
          <div class="flex items-center px-4">
            <button @click="toggleMenu" type="button" class="block absolute right-4 lg:hidden">
              <span class="hamburger-line origin-top-left" :class="{ 'rotate-45': isMenuOpen }"></span>
              <span class="hamburger-line" :class="{ 'opacity-0': isMenuOpen }"></span>
              <span class="hamburger-line origin-bottom-left" :class="{ '-rotate-45': isMenuOpen }"></span>
            </button>
            <nav :class="['hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none', { 'block': isMenuOpen }]">
              <ul class="block lg:flex">
                <li class="group">
                  <a href="#home" @click="closeMenu" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Beranda</a>
                </li>
                <li class="group">
                  <a href="#about" @click="closeMenu" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Tentang Saya</a>
                </li>
                <li class="group">
                  <a href="#portfolio" @click="closeMenu" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portfolio</a>
                </li>
                <li class="group">
                  <a href="#clients" @click="closeMenu" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Clients</a>
                </li>
                <li class="group">
                  <a href="#blog" @click="closeMenu" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Blog</a>
                </li>
                <li class="group">
                  <a href="#contact" @click="closeMenu" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- Header Section End -->

    <!-- Hero Section Start -->
    <section id="home" class="pt-36">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-end px-4 lg:w-1/2">
            <h1 class="text-base font-semibold text-primary md:text-xl">Hallo Semua 👋🏻, saya <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Febrian Aji Kusuma</span></h1>
            <h2 class="font-medium text-abu lg:text-2xl">Junior Web Developer</h2>
            <p class="font-medium text-abu mb-10 leading-relaxed">Bekerja dibidang IT terutama dalam bidang <span class="text-dark font-bold">PHP Programmer.</span></p>
            <a href="mailto:febrianajikusuma@gmail.com" target="_blank" class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
          </div>
          <div class="w-full self-end px-4 lg:w-1/2">
            <div class="relative mt-10 lg:mt-9 lg:right-0">
              <img src="/img/foto-febri.png" alt="Febrian Aji Kusuma" class="max-w-full mx-auto">
              <span class="absolute -bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#14b8a6" d="M45.9,-52.8C57.2,-45.2,62.6,-28.6,67.9,-10.2C73.2,8.1,78.4,28.2,69.5,36.7C60.5,45.2,37.4,42.1,20.6,41.8C3.9,41.4,-6.5,43.8,-15.6,41.2C-24.7,38.6,-32.6,31,-40.8,21.3C-49.1,11.7,-57.7,0,-58.6,-13.1C-59.6,-26.2,-53,-40.7,-41.9,-48.4C-30.9,-56,-15.5,-56.8,0.9,-57.9C17.3,-59,34.6,-60.4,45.9,-52.8Z" transform="translate(100 100) scale(1.1)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- About Section Start -->
    <section id="about" class="pt-36 pb-32">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-10 lg:w-1/2">
            <h4 class="font-bold uppercase text-primary text-lg mb-5">TENTANG SAYA</h4>
            <h2 class="font-bold text-dark text-3xl mb-4 max-w-md lg:text-4xl">Web Developer</h2>
            <p class="font-medium text-base text-abu max-w-xl lg:text-lg mb-5">Nama saya Febrian Aji Kusuma, web developer dari kota Yogyakarta. Saya berpengalaman di pembuatan website, aplikasi berbasis web dan kustomisasi, saya menggunakan framework CodeIgniter(HMVC), Bootstrap dan Javascript.</p>
            <a href="/img/CV.jpg" target="_blank" class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Lihat CV saya</a>
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <div class="font-medium text-base text-abu mb-6 lg:text-lg">
              <p class="mb-2">Nama : <span class="text-dark">Febrian Aji Kusuma</span></p>
              <p class="mb-0">Kelahiran : <span class="text-dark">15-Februari-1997</span></p>
            </div>
            <div class="font-medium text-base text-abu mb-6 lg:text-lg">
              <p class="mb-2">Alamat : <span class="text-dark">Sleman, Yogyakarta</span></p>
              <p class="mb-0">Email : <span class="text-dark">febrianajikusuma@gmail.com</span></p>
            </div>
            <div class="flex items-center">
              <a href="https://www.instagram.com/fekusuma/" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100081220074755" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border hover:border-primary hover:bg-primary hover:text-white">
                <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section End -->

    <!-- Portfolio Section Start -->
    <section id="portfolio" class="pt-36 pb-16 bg-slate-100">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Portfolio</h4>
            <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
            <p class="font-medium text-md text-abu md:text-lg">Merupakan project-project yang pernah saya buat dengan menggunakan bahasa pemrograman PHP.</p>
          </div>
        </div>
        <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div class="mb-12 p-4 md:w-1/2">
            <div class="rounded-md shadow-md overflow-hidden">
              <img src="/img/portfolio/2.png" alt="Klinik Wasir RSUII" class="w-full">
            </div>
            <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Landing Page Klinik Wasir RS UII</h3>
            <p class="font-medium text-base text-abu">Landing Page ini Berisi Informasi Tentang Penjelasan dan Promo Untuk Pelayanan Unggulan Pemeriksaan Penyakit Wasir Yang Ada di RS UII.</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="rounded-md shadow-md overflow-hidden">
              <img src="/img/portfolio/3.png" alt="Melahirkan RSUII" class="w-full">
            </div>
            <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Landing Page Melahirkan RS UII</h3>
            <p class="font-medium text-base text-abu">Landing Page ini Berisi Informasi Tentang Penjelasan dan Promo Layanan Unggulan Untuk Ibu Yang akan Melahirkan di RS UII.</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="rounded-md shadow-md overflow-hidden">
              <img src="/img/portfolio/4.png" alt="MCU RSUII" class="w-full">
            </div>
            <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Landing Page MCU RS UII</h3>
            <p class="font-medium text-base text-abu">Landing Page ini Berisi Informasi Tentang Penjelasan dan Promo Layanan Unggulan Untuk Medical Check UP di RS UII.</p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="rounded-md shadow-md overflow-hidden">
              <img src="/img/portfolio/1.png" alt="Skripsi Page" class="w-full">
            </div>
            <h3 class="font-semibold text-xl text-dark mt-5 mb-3">Website Skripsi</h3>
            <p class="font-medium text-base text-abu">Merupakan Website Yang dibuat Untuk Memenuhi Syarat Lulus Pendidikan S1, Website Ini Dapat Memberikan Rute Terdekat Penyedia Fasilitas Kesehatan Dengan Menggunakan Algoritma Dijkstra.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Portfolio Section End -->

    <!-- Clients Section Start -->
    <section id="clients" class="pt-36 pb-32 bg-slate-800">
      <div class="container">
        <div class="w-full p-4">
          <div class="mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 class="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Yang Pernah Bekerjasama</h2>
            <p class="font-medium text-md text-abu md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nesciunt suscipit reprehenderit, magnam voluptas quas dolorem optio tempore et voluptatum?</p>
          </div>
        </div>
        <div class="w-full px-4">
          <div class="flex flex-wrap items-center justify-center">
            <a href="#" class="max-w-[280px] mx-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-7 xl:mx-9">
              <img src="/img/clients/rsuii-logo.svg" alt="rsuiilogo">
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Clients Section End -->

    <!-- Blog Section Start -->
    <section id="blog" class="pt-36 pb-32 bg-slate-100">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Blog</h4>
            <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
            <p class="font-medium text-md text-abu md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab beatae animi sequi?</p>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img src="https://source.unsplash.com/360x200?programming" alt="programming" class="w-full">
              <div class="py-8 px-6">
                <h3><a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Tips Belajar Programming</a></h3>
                <p class="font-medium text-base text-abu mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, dolorum!</p>
                <a href="#" class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Mechanical Keyboard" class="w-full">
              <div class="py-8 px-6">
                <h3><a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Testing GMMK Keyboard</a></h3>
                <p class="font-medium text-base text-abu mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sequi atque nesciunt!</p>
                <a href="#" class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/3">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img src="https://source.unsplash.com/360x200?coffe" alt="coffe" class="w-full">
              <div class="py-8 px-6">
                <h3><a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Menikmati Secangkir Kopi</a></h3>
                <p class="font-medium text-base text-abu mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum debitis tempora illo delectus. Est, in.</p>
                <a href="#" class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog Section End -->

    <!-- Contact Section Start -->
    <section id="contact" class="pt-36 pb-32">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Contact</h4>
            <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
            <p class="font-medium text-md text-abu md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, voluptas!</p>
          </div>
        </div>
        <form>
          <div class="w-full lg:w-2/3 lg:mx-auto">
            <div class="w-full px-4 mb-8">
              <label for="name" class="text-base font-bold text-primary">Nama</label>
              <input type="text" id="name" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
            </div>
            <div class="w-full px-4 mb-8">
              <label for="email" class="text-base font-bold text-primary">E-mail</label>
              <input type="email" id="email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
            </div>
            <div class="w-full px-4 mb-8">
              <label for="message" class="text-base font-bold text-primary">Pesan</label>
              <textarea id="message" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
            </div>
            <div class="w-full px-4">
              <button class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500 mb-5">Kirim</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- Contact Section End -->

    <!-- Footer Section Start -->
    <footer class="bg-dark pt-24 pb-12">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 class="font-bold text-4xl text-white mb-5">Febrian Aji Kusuma</h2>
            <h3 class="font-bold text-2xl mb-2">Hubungi Kami</h3>
            <p>febrianajikusuma@gmail.com</p>
            <p>dusun Ngepas Lor Rt03/Rw15, Donoharjo, Ngaglik, Sleman, Yogyakarta.</p>
          </div>
          <div class="w-full mb-12 md:w-1/3">
            <h3 class="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
            <ul class="text-slate-300">
              <li>
                <a href="#" class="inline-block text-base hover:text-primary mb-3">Programming</a>
              </li>
              <li>
                <a href="#" class="inline-block text-base hover:text-primary mb-3">Teknologi</a>
              </li>
              <li>
                <a href="#" class="inline-block text-base hover:text-primary mb-3">Gaya Hidup</a>
              </li>
            </ul>
          </div>
          <div class="w-full mb-12 md:w-1/3">
            <h3 class="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul class="text-slate-300">
              <li>
                <a href="#home" class="inline-block text-base hover:text-primary mb-3">Beranda</a>
              </li>
              <li>
                <a href="#about" class="inline-block text-base hover:text-primary mb-3">Tentang Saya</a>
              </li>
              <li>
                <a href="#portfolio" class="inline-block text-base hover:text-primary mb-3">Portfolio</a>
              </li>
              <li>
                <a href="#blog" class="inline-block text-base hover:text-primary mb-3">Blog</a>
              </li>
              <li>
                <a href="#contact" class="inline-block text-base hover:text-primary mb-3">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- Copyright -->
        <div class="w-full pt-10 border-t border-slate-700">
          <div class="flex items-center justify-center mb-5">
            <a href="https://www.instagram.com/fekusuma/" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100081220074755" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" target="_blank" class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
              <svg role="img" class="fill-current" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
          <p class="font-medium text-xs text-slate-500 text-center">Dibuat dengan <span class="text-red-600">❤️</span> oleh <a href="https://instagram.com/fekusuma" target="_blank" class="font-bold text-primary">Febrian Aji Kusuma</a> menggunakan <a href="https://tailwindcss.com" target="_blank" class="font-bold text-sky-500">Tailwind CSS 3</a>.</p>
        </div>
        <!-- Copyright -->
      </div>
    </footer>
    <!-- Footer Section End -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Mobile menu state
const isMenuOpen = ref(false)

// Navbar fixed state
const isNavbarFixed = ref(false)

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Scroll handler for navbar
const handleScroll = () => {
  isNavbarFixed.value = window.scrollY > 0
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.hamburger-line {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #0f172a;
  margin: 6px 0;
}

.navbar-fixed {
  position: fixed;
  z-index: 9999;
  background-color: rgb(255 255 255 / 0.7);
  backdrop-filter: blur(5px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
