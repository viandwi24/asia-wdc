/*          _                                           _ _ 
          (_)               ___                       | (_)
    __   ___  __ _ _ __    ( _ )    _ __ ___ _ __   __| |_ 
    \ \ / / |/ _` | '_ \   / _ \/\ | '__/ _ \ '_ \ / _` | |
     \ V /| | (_| | | | | | (_>  < | | |  __/ | | | (_| | |
      \_/ |_|\__,_|_| |_|  \___/\/ |_|  \___|_| |_|\__,_|_|

   [+] Murni ditulis oleh Alfian Dwi Nugraha & Rendi Dwi [+]
16a085
            // audio
            playBGAudio();
            naratorPlayAudio(1);
 */

var scenes = [
    // SCENE : PAGE 1
    { 
        name: 'home',
        title: 'Revolusi Industri 4.0',
        bgColor: '#16a085',
        beforeIn: (data, promise) => {
            // content
           
            let title = $('<h1>Revolusi Industri 4.0</h1>');
            let text = $('<p>Revolusi Industri 4.0 merupakan fenomena yang mengkolaborasikan teknologi cyber dan teknologi otomatisasi.</p>');
            let detailBtn = $('<button onclick="page.nextScene()" class="btn btn-sm btn-primary">Selanjutnya <i class="fa fa-chevron-right"></i></button>');
            let illustration = $(illustrationImg.home);
            
            // audio
            playBGAudio();
            
            // styling
            illustration.css({ 'max-height': '50vh', 'max-width': '100%' });

            // dom
            let content = {
                left: [illustration],
                right: [title, text, detailBtn],
                rightBoxTitle: '',
                rightBox: []
            };

            // bikin kontentnya
            let sectionContainer = bikinKonten(data.section, content);

            // finaly
            data.section.append(sectionContainer);
            promise.resolv();
        },
        afterIn: (data) => {
            // animate
            animateKontenIn(data.section);
            naratorPlayAudio(1);
            
            // remove indicator
            setTimeout(() => $(data.page.options.el + ' .nav-btn').remove(), 100)
        },
        beforeOut: (data, promise) => {
            animateKontenOut(data.section, promise);
        },
        afterOut: (data) => {
            data.section.html('');
        }
    },


    // SCENE : PAGE 2
    {
        name: 'about',
        title: 'Internet of Things',
        bgColor: '#27ae60', 
        beforeIn: (data, promise) => {
            // content
           
            let title = $('<h1>Internet of Things (IoT)</h1>');
            let text = $('<p> internet of things adalah konsep dimana suatu objek yang memiliki kemampuan untuk mentransfer data melalui jaringan tanpa memerlukan interaksi manusia.</p>');
            let detailBtn = $('<button onclick="bukaRightBox()" class="btn btn-sm btn-primary">Detail</button>');
            let illustration = $(illustrationImg.scene1);
            let tes = $('<p style="text-align: left;">&nbsp; &nbsp; &nbsp;Mendefinisakan Internet of Things, sebagai sebuah infrastruktur jaringan global, yang menghubungkan benda-benda fisik dan virtual melalui eksploitasi data capture dan kemampuan komunikasi. Infrastruktur terdiri dari jaringan yang telah ada dan internet berikut pengembangan jaringannya.</p><ul><li><p>SAP (Systeme, Anwendungen und Produkte)</p></li></ul><p>&nbsp; &nbsp; &nbsp;Mendefinisikannya bahwa Dunia di mana benda-benda fisik diintegrasikan ke dalam jaringan informasi secara berkesinambungan, dan di mana benda-benda fisik tersebut berperan aktif dalam proses bisnis. Layanan yang tersedia berinteraksi dengan &lsquo;objek pintar&rsquo; melalui Internet, mencari dan mengubah status mereka sesuai dengan setiap informasi yang dikaitkan, disamping memperhatikan masalah privasi dan keamanan.</p><ul><li><p>CORDIS</p></li></ul><p>&nbsp; &nbsp; &nbsp;Rencana aksi untuk Uni Eropa untuk memperkenalkan pemerintahan berdasarkan Internet of Things.</p><ul><li><p>ETP EPOSS</p></li></ul><p>&nbsp; &nbsp; &nbsp;Jaringan yang dibentuk oleh hal-hal atau benda yang memiliki identitas, pada dunia maya yang beroperasi di ruang itu dengan menggunakan kecerdasan antarmuka untuk terhubung dan berkomunikasi dengan pengguna, konteks sosial dan lingkungan.</p>')
            
            // styling
            illustration.css({ 'max-height': '50vh', 'max-width': '100%' });

            // dom
            let content = {
                left: [illustration],
                right: [title, text, detailBtn],
                rightBoxTitle: 'Internet of Things (IoT)',
                rightBox: [ tes ]
            };

            // bikin kontentnya
            let sectionContainer = bikinKonten(data.section, content);

            // finaly
            data.section.append(sectionContainer);
            promise.resolv();
        },
        afterIn: (data) => { 
            animateKontenIn(data.section);
            naratorPlayAudio(2);
        },
        beforeOut: (data, promise) => { animateKontenOut(data.section, promise); },
        afterOut: (data) => { data.section.html(''); }
    },
    
    
    //scene 3
    {
        name: 'bigdata',
        title: 'Big Data',
        bgColor: '#2980b9', 
        beforeIn: (data, promise) => {
            // content
           
            let title = $('<h1>Big Data</h1>');
            let text = $('<p>Big Data adalah istilah yang menggambarkan volume data yang besar, baik data yang terstruktur maupun data yang tidak terstruktur</p>');
            let detailBtn = $('<button onclick="bukaRightBox()" class="btn btn-sm btn-primary">Detail</button>');
            let illustration = $(illustrationImg.scene2);
            let tes = $('<p><p><strong>&nbsp; &nbsp; &nbsp;Big data</strong> adalah bidang yang menangani cara untuk menganalisis, mengekstrak informasi secara sistematis, atau berurusan dengan set data yang terlalu besar atau kompleks untuk ditangani oleh software pemrosesandata tradisional.</p><p>&nbsp; &nbsp; Data dengan banyak kasus (baris) menawarkan kekuatan statistik lebih besar, sementara data dengan kompleksitas yang lebih tinggi (lebih banyak atribut atau kolom) dapat menyebabkan tingkat penemuan yang lebih tinggi .</p><p>&nbsp; &nbsp; Tantangan big data meliputi pengambilan data , penyimpanan data , analisis data , pencarian, berbagi , transfer , visualisasi , query<u><a href="https://translate.googleusercontent.com/translate_c?client=srp&depth=1&hl=id&rurl=translate.google.com&sl=en&sp=nmt4&tl=id&u=https://en.m.wikipedia.org/wiki/Query_language&xid=17259,15700023,15700043,15700186,15700190,15700256,15700259,15700262,15700265,15700271&usg=ALkJrhhoz1WztEuKTYJXY7ulZuLrAmAz1w">,</a></u> pembaruan, privasi informasi , dan sumber data. Data besar pada awalnya dikaitkan dengan tiga konsep utama: <em>volume</em> , <em>variasi</em> , dan <em>kecepatan</em> . Ketika kita menangani data besar, kita mungkin tidak mengambil sampel tetapi hanya mengamati dan melacak apa yang terjadi. Oleh karena itu, data besar seringkali mencakup data dengan ukuran yang melebihi kapasitas perangkat lunak tradisional untuk diproses dalam waktu dan <em>nilai yang</em> dapat diterima <em>.</em></p><p>Data besar dapat dijelaskan dengan karakteristik berikut:</p><dl><dt>Volume</dt><dd>&nbsp; &nbsp; &nbsp;Jumlah data yang dihasilkan dan disimpan. Ukuran data menentukan nilai dan wawasan potensial, dan apakah itu dapat dianggap sebagai data besar atau tidak.</dd><dt>Variasi</dt><dd>&nbsp; &nbsp; &nbsp;Jenis dan sifat data. Ini membantu orang yang menganalisanya untuk secara efektif menggunakan wawasan yang dihasilkan. Data besar diambil dari teks, gambar, audio, video; ditambah lagi melengkapi bagian yang hilang melalui penggabungan data.</dd><dt>Kecepatan</dt><dd>&nbsp; &nbsp; Kecepatan di mana data dihasilkan dan diproses untuk memenuhi tuntutan dan tantangan yang ada di jalur pertumbuhan dan pembangunan. Data besar seringkali tersedia secara waktu nyata. Dibandingkan dengan data kecil , data besar diproduksi lebih berkelanjutan. Dua jenis kecepatan yang terkait dengan data besar adalah frekuensi generasi dan frekuensi penanganan, perekaman, dan penerbitan.</dd><dt>Kebenaran</dt><dd>&nbsp; &nbsp; &nbsp;Ini adalah definisi yang diperluas untuk data besar, yang mengacu pada kualitas data dan nilai data. Kualitas data dari data yang diambil dapat sangat bervariasi, sehingga memengaruhi analisis yang akurat.</dd></dl></p>')
            
            // styling
            illustration.css({ 'max-height': '50vh', 'max-width': '100%' });

            // dom
            let content = {
                left: [illustration],
                right: [title, text, detailBtn],
                rightBoxTitle: 'Big Data',
                rightBox: [ tes ]
            };

            // bikin kontentnya
            let sectionContainer = bikinKonten(data.section, content);

            // finaly
            data.section.append(sectionContainer);
            promise.resolv();
        },
        afterIn: (data) => { 
            animateKontenIn(data.section);
            naratorPlayAudio(3);
        },
        beforeOut: (data, promise) => { animateKontenOut(data.section, promise); },
        afterOut: (data) => { data.section.html(''); }
    },
    // SCENE : PAGE 4
    {
        name: 'argumentedreality',
        title: 'Argumented Reality',
        bgColor: '#8e44ad', 
        beforeIn: (data, promise) => {
            // content
           
            let title = $('<h1>Argumented Reality</h1>');
            let text = $('<p>     Argumented Reality (AR), adalah teknologi yang menggabungkan benda maya dua dimensi dan ataupun tiga dimensi ke dalam sebuah lingkungan nyata tiga dimensi lalu memproyeksikan benda-benda maya tersebut dalam waktu nyata.</p>');
            let detailBtn = $('<button onclick="bukaRightBox()" class="btn btn-sm btn-primary">Detail</button>');
            let illustration = $(illustrationImg.scene3);
            let tes = $('<p><strong>&nbsp; &nbsp; &nbsp;Augmented reality</strong>(<strong>AR</strong>) adalah pengalaman interaktif dari lingkungan dunia nyata di mana objek yang berada di dunia nyata ditingkatkan oleh informasi persepsi yang dihasilkan komputer, kadang-kadang melintasi berbagai modalitas sensorik, termasuk visual , auditori,haptic,somatosensori, dan penciuman</p><p>&nbsp; &nbsp; &nbsp;Augmented Reality (AR) berbeda dari Virtual Reality (VR) dalam arti bahwa di AR bagian lingkungan sekitarnya sebenarnya &#39;nyata&#39; dan hanya menambahkan lapisan objek virtual ke lingkungan nyata.Di sisi lain, di VR lingkungan sekitarnya benar-benar virtual.Sebuah demonstrasi tentang bagaimana AR melapisi objek ke dunia nyata dapat dilihat dengan game augmented reality. WallaMe adalah aplikasi game augmented reality yang memungkinkan pengguna menyembunyikan pesan di lingkungan nyata, memanfaatkan teknologi geolokasi untuk memungkinkan pengguna menyembunyikan pesan di mana pun mereka inginkan di dunia. Aplikasi semacam itu memiliki banyak kegunaan di dunia, termasuk dalam aktivisme dan ekspresi artistik.</p><p>&nbsp; &nbsp; &nbsp;Augmented reality telah dieksplorasi untuk banyak aplikasi, dari game dan hiburan hingga kedokteran, pendidikan dan bisnis. Contoh area aplikasi yang dijelaskan di bawah ini termasuk arkeologi, arsitektur, perdagangan, dan pendidikan. Beberapa contoh yang paling awal dikutip termasuk augmented reality yang digunakan untuk mendukung operasi dengan menyediakan hamparan virtual untuk memandu praktisi medis, untuk konten AR untuk astronomi dan pengelasan.</p>')
            
            
            // styling
            illustration.css({ 'max-height': '50vh', 'max-width': '100%' });

            // dom
            let content = {
                left: [illustration],
                right: [title, text, detailBtn],
                rightBoxTitle: 'Argumented Reality',
                rightBox: [ tes ]
            };

            // bikin kontentnya
            let sectionContainer = bikinKonten(data.section, content);

            // finaly
            data.section.append(sectionContainer);
            promise.resolv();
        },
        afterIn: (data) => { 
            animateKontenIn(data.section);
            naratorPlayAudio(4);
        },
        beforeOut: (data, promise) => { animateKontenOut(data.section, promise); },
        afterOut: (data) => { data.section.html(''); }
    },
    // SCENE : PAGE 5
    {
        name: 'cybersecurity',
        title: 'Cyber Security',
        bgColor: '#8e44ad', 
        beforeIn: (data, promise) => {
            // content
           
            let title = $('<h1>Cyber Security</h1>');
            let text = $('<p>cyber security adalah upaya melindungi informasi dari adanya serangan jaringan. cyber attack dalam operasi informasi yang sengaja dilakukan untuk menggangu kerahasiaan (confidentiality), integritas (integrity), dan ketersedian (availability) informasi.</p>');
            let detailBtn = $('<button onclick="bukaRightBox()" class="btn btn-sm btn-primary">Detail</button>');
            let illustration = $(illustrationImg.scene4);
            let tes = $('<p><p><em>&nbsp; &nbsp; &nbsp; Cyber security</em> adalah teknologi, proses dan praktik yang dirancang untuk melindungi jaringan, komputer, program dan data dari serangan, kerusakan atau akses yang tidak sah.&nbsp;<em>Cyber security</em> juga disebut sebagai upaya untuk melindungi informasi dari adanya&nbsp;<em>cyber attack</em>.&nbsp;<em>Cyber attack</em> dalam operasi informasi adalah semua jenis tindakan yang sengaja dilakukan untuk mengganggu kerahasiaan (<em>confidentiality</em>), integritas (<em>integrity</em>), dan ketersedian (<em>availability</em>) informasi.</p><p>&nbsp; &nbsp; &nbsp; Semua Perusahaan yang bertransformasi dari data berbasis digital sangat dianjurkan untuk memperhatikan dan menggunakan&nbsp;<em>cyber security</em> dalam menyimpan, mengakses dan mengambil informasi penting. Melindungi informasi dan data merupakan kebutuhan sebagian besar perusahaan dan instansi pemerintah di seluruh dunia karena data merupakan aset berharga dari suatu perusahaan dan bisa menjadi masalah di kemudian hari apabila data tersebut jatuh ke tangan orang yang tidak berhak.</p><p>Elemen elemen pada cyber security</p><p>Dokumen&nbsp;<em>security policy</em></p><p>&nbsp; &nbsp; &nbsp;Merupakan dokumen standar yang dijadikan acuan dalam menjalankan semua proses terkait keamanan informasi.</p><ul><li><p><em>Information infrastructure</em></p></li></ul><p>&nbsp; &nbsp; &nbsp;Merupakan media yang berperan dalam kelangsungan operasi informasi meliputi hardware dan software. Contohnya adalah router, switch, server, sistem operasi, database, dan website.</p><ul><li><p><em>Perimeter Defense</em></p></li></ul><p>&nbsp; &nbsp; &nbsp; Merupakan media yang berperan sebagai komponen pertahanan pada infrastruktur informasi misalnya IDS, IPS, dan firewall.</p><ul><li><p><em>Network Monitoring System</em></p></li></ul><p>&nbsp; &nbsp; &nbsp;Merupakan media yang berperan untuk memonitor kelayakan, utilisasi, dan performance infrastruktur informasi.</p><ul><li><p><em>System Information and Event Management</em></p></li></ul><p>&nbsp; &nbsp; &nbsp; Merupakan media yang berperan dalam memonitor berbagai kejadian di jaringan termasuk kejadian terkait pada insiden keamanan.</p><ul><li><p><em>Network Security Assessment</em></p></li></ul><p>&nbsp; &nbsp; &nbsp; Merupakan elemen&nbsp;<em>cyber security</em> yang berperan sebagai mekanisme kontrol dan memberikan&nbsp;<em>measurement level</em> keamanan informasi.</p><ul><li><p><em>Human resource dan security awareness</em></p></li></ul><p>&nbsp; &nbsp; &nbsp; Berkaitan dengan sumber daya manusia dan <em>awareness-</em>nya pada keamanan informasi.</p></p>')
            
            
            // styling
            illustration.css({ 'max-height': '50vh', 'max-width': '100%' });

            // dom
            let content = {
                left: [illustration],
                right: [title, text, detailBtn],
                rightBoxTitle: 'Cyber Security',
                rightBox: [ tes ]
            };

            // bikin kontentnya
            let sectionContainer = bikinKonten(data.section, content);

            // finaly
            data.section.append(sectionContainer);
            promise.resolv();
        },
        afterIn: (data) => { 
            animateKontenIn(data.section);
            naratorPlayAudio(5);
        },
        beforeOut: (data, promise) => { animateKontenOut(data.section, promise); },
        afterOut: (data) => { data.section.html(''); }
    },

  // SCENE : PAGE 6
  {
    name: 'artificalintelegence',
    title: 'Artifical Intelegence',
    bgColor: '#27ae60', 
    beforeIn: (data, promise) => {
        // content
       
        let title = $('<h1>Artifical Intelegence(AI)</h1>');
        let text = $('<p>Merupakan sebuah teknologi komputer atau mesin yang memiliki kecerdasan layaknya manusia.Fungsi utama dari AI adalah kemampuannya untuk mempelajari data yang diterima secara berkesinambungan. Semakin banyak data yang diterima dan dianalisis, semakin baik pula AI dalam membuat prediksi.</p>');
        let detailBtn = $('<button onclick="bukaRightBox()" class="btn btn-sm btn-primary">Detail</button>');
        let illustration = $(illustrationImg.scene5);
        let tes = $('<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; font-family: Raleway, sans-serif; color: rgb(0, 0, 0); font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(253, 248, 228); text-decoration-style: initial; text-decoration-color: initial;">&nbsp; &nbsp; &nbsp;AI atau Artificial Intelligence adalah sebuah bidang ilmu yang digunakan untuk membuat hidup manusia lebih baik dari masa ke masa. Upaya ini dilakukan dengan memberikan kecerdasan pada mesin supaya dapat berpikir seolah-olah seperti manusia.</p><p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; font-family: Raleway, sans-serif; color: rgb(0, 0, 0); font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(253, 248, 228); text-decoration-style: initial; text-decoration-color: initial;">&nbsp; &nbsp; &nbsp;Komputer dapa dibuat menjadi sebuah entitas yang cerdas dengan pemberian data-data dalam sebuah database. Selain diberi data, komputer akan diberikan kemampuan untuk mempelajari data. Data dipelajari dan di training. Training dan pembelajaran data ini akan membuat sistem mampu menentukan keputusan dan melakukan tugas untuk memudahkan manusia di masa depan.</p>')
        
        
        // styling
        illustration.css({ 'max-height': '50vh', 'max-width': '100%' });

        // dom
        let content = {
            left: [illustration],
            right: [title, text, detailBtn],
            rightBoxTitle: 'Artifical Intelegence(AI)',
            rightBox: [ tes ]
        };

        // bikin kontentnya
        let sectionContainer = bikinKonten(data.section, content);

        // finaly
        data.section.append(sectionContainer);
        promise.resolv();
    },
    afterIn: (data) => { 
        animateKontenIn(data.section);
        naratorPlayAudio(6);
    },
    beforeOut: (data, promise) => { animateKontenOut(data.section, promise); },
    afterOut: (data) => { data.section.html(''); }
},

    //scene 7
    {
        name: 'cloudcomputing',
        title: 'Cloud Computing',
        bgColor: '#2980b9', 
        beforeIn: (data, promise) => {
            // content
           
            let title = $('<h1>Cloud Computing</h1>');
            let text = $('<p>Komputasi awan (cloud computing) adalah teknologi yang menjadikan internet sebagai pusat pengelolaan data dan aplikasi, di mana pengguna komputer diberikan hak akses (login) mengakses server virtual untuk bisa konfigurasi server melalui internet</p>');
            let detailBtn = $('<button onclick="bukaRightBox()" class="btn btn-sm btn-primary">Detail</button>');
            let illustration = $(illustrationImg.scene6);
            let tes = $('<p>&nbsp; &nbsp; &nbsp;Cloud Computing merupakan istilah dari Cloud diartikan sebagai internet dan Computing diartikan sebagai komputer. Definisi dari Cloud Computing adalah sebuah proses pengolahan daya komputasi &nbsp;melalui jaringan internet &nbsp;yang memiliki fungsi agar dapat menjalankan program melalui komputer yang telah terkoneksi satu sama lain pada waktu yang sama.</p><p>&nbsp; &nbsp; &nbsp; Cloud Computing merupakan sebuah teknologi yang menjadikan internet sebagai pusat server untuk mengelola data dan juga aplikasi pengguna. Cloud Computing memudahkan penggunanya untuk menjalankan program tanpa harus menginstall aplikasi terlebih dahulu dan memudahkan pengguna untuk mengakses data dan informasi melalui internet.</p><p><br></p><p><strong>Cara Kerja Cloud Computing</strong></p><p>&nbsp; &nbsp; &nbsp;Teknologi Cloud Computing ini menjadikan internet sebagai pusat server dalam mengelelola data. Sistem ini memudahkan pengguna untuk login ke internet agar mendapatkan akses untuk menjalankan program atau aplikasi tanpa harus menginstall aplikasi tersebut.</p><p>&nbsp; &nbsp; &nbsp;Karena tidak perlu melakukan installasi pada aplikasi, maka untuk media penyimpanan data dari pengguna juga disimpan secara virtual sehingga tidak akan terbebani dengan penggunaan memori yang ada di komputer. Peritah &ndash; perintah yang digunakan oleh pengguna tadi &nbsp;selanjutnya akan dilanjutkan ke server aplikasi.</p><p>&nbsp; &nbsp; &nbsp;Setelah perintah diterima oleh sever aplikasi, maka data akan diproses yang akhirnya pengguna akan menerima halaman yang telah diperbaharui sesuai dengan perintah yang telah diberikan sebelumnya. Contoh dari Cloud Computing adalah Yahoo, PDF Gmail, Google Drive.</p><p>&nbsp; &nbsp; &nbsp;Perintah yang diberikan dalam penggunaan aplikasi tersebut akan langsung terintegrasi secara langsung dengan sistem Cloud Computing yang ada di komputer. Pengguna hanya memerlukan jaringan internet agar dapat menjalankan aplikasi tersebut tanpa perlu melakukan instalasi.</p><p><br></p>')
            
            
            // styling
            illustration.css({ 'max-height': '50vh', 'max-width': '100%' });

            // dom
            let content = {
                left: [illustration],
                right: [title, text, detailBtn],
                rightBoxTitle: 'Cloud Computing',
                rightBox: [ tes ]
            };

            // bikin kontentnya
            let sectionContainer = bikinKonten(data.section, content);

            // finaly
            data.section.append(sectionContainer);
            promise.resolv();
        },
        afterIn: (data) => { 
            animateKontenIn(data.section);
            naratorPlayAudio(7);
        },
        beforeOut: (data, promise) => { animateKontenOut(data.section, promise); },
        afterOut: (data) => { data.section.html(''); }
    },
]


















function bikinKonten (section, isi) {
    // dom
    let sectionContainer = $('<div class="section-container" />');
    let content = $('<div class="content" />');
    let container = $('<div class="container" />');
    let row = $('<div class="row" />');
    let colLeft = $('<div class="col-lg-6 col-md-6" />');
    let colRight = $('<div class="col-lg-6 col-md-6" />');
    let rightBox = $('<div class="right-box" />');
    let rightBoxContent = $('<div class="rightBoxContent" style="padding: 1rem;padding-top:0; height: 91vh; overflow-x: hidden; overflow-y: auto;" />');

    // styling
    colLeft.css('transform', 'translateX(-100vw)');
    colRight.css('transform', 'translateX(100vw)');
    rightBox.css({ display: 'none', position: 'absolute', top: '0', height: '100vh', width: '35vw', background: '#fdf8e4', display: 'none', padding: 0, overflow: 'hidden' });

    // append
    isi.left.forEach(el => {
        colLeft.append(el);
    });
    isi.right.forEach(el => {
        colRight.append(el);
    });
    isi.rightBox.forEach(el => {
        rightBoxContent.append(el);
    });
    rightBox.append('<h3 class="text-center" style="margin: .5rem;">' + isi.rightBoxTitle + '</h3>');
    rightBox.append( $('<button style="position: absolute;top:0;right:0;margin-right: 1rem; font-size: 3rem; margin-top: 1rem; line-height: 1rem;" class="close" value="tes" onclick="tutupRightBox()">&times;</button>') );
    rightBox.append(rightBoxContent);
    row.append(colLeft);
    row.append(colRight);
    container.append(row);
    content.append(container);
    sectionContainer.append(content);
    sectionContainer.append(rightBox);

    return sectionContainer;
}


function animateKontenIn(section) {
    // dom
    let colLeft = section.find('.col-lg-6').eq(0);
    let colRight = section.find('.col-lg-6').eq(1);
    let rightBox = section.find('.right-box');
    
    rightBox.css({ right: - rightBox.width(), display: 'none',  'border-radius': '100% 0 0 100%', opacity: 0 });

    // animate in
    colLeft.animate({ 'width': '100vw' }, {
        duration: 800,
        step: val => {
            let t = val-100;
            colLeft.css('transform', `translateX(${t}vw)`);
            colRight.css('transform', `translateX(${t*-1}vw)`);
        }
    });
    
    
}

function bukaRightBox(rightBox = null) {
    if (rightBox == null) {
        rightBox = $('.section.active .right-box');
    }
    
    rightBox.css( 'display', 'block' );
    rightBox.animate({ opacity: 1 });
    rightBox.animate({ right: [0, 'linear'] }, { 
        duration: 'fast',
        easing: "swing",
        step: (val) => {
            let t = (val * -1);
            if (t <= 50) rightBox.css('border-radius', `${t}% 0 0 ${t}%`);
        },
        done: () => rightBox.addClass("active")
    });
    $('.section-container .content').animate({ 'padding-right': '35vw' });
    $('.custom-nav-toggle').animate({ right: '35vw' });
    $('.page .nav-btn').animate({ left: '32.5%' });
    $('.config-btn').animate({ right: '35vw' });
}

function tutupRightBox(rightBox) {
    if (rightBox == null) {
        rightBox = $('.section.active .right-box');
    }
    
    rightBox.animate({ right: [ - rightBox.width() , 'linear'] }, { 
        duration: 'fast',
        easing: "swing",
        done: () => {},
        step: (val) => {
            let t = (val * -1);
            if (t <= 50) rightBox.css('border-radius', `${t}% 0 0 ${t}%`);
            if (t >=  rightBox.width())  rightBox.css( 'display', 'none' );
        },
        done: () => rightBox.removeClass("active")
    });
    rightBox.animate({ opacity: 0 });
    $('.section-container .content').animate({ 'padding-right': '0' });
    $('.custom-nav-toggle').animate({ right: '0' });
    $('.page .nav-btn').animate({ left: '50%' });
    $('.config-btn').animate({ right: '0' });
}

function animateKontenOut(section, promise) {
    // dom
    let colLeft = section.find('.col-lg-6').eq(0);
    let colRight = section.find('.col-lg-6').eq(1);

    // animate out
    colLeft.animate({ 'transform': '100vw' }, {
        duration: 1200,
        step: val => {
            colLeft.css('transform', `translateX(-${val}vw)`);
            colRight.css('transform', `translateX(${val}vw)`);
        },
        done: () => promise.resolv()
    });
    tutupRightBox();
}

let naratorMuteScene = false;
let activeNarator = null;
function naratorPlayAudio(scene) {
    if (activeNarator != null) {
        myaudio.get(activeNarator).pause();
        myaudio.get(activeNarator).currentTime = 0;
    }
    scene = 'narator_scene_' + scene;
    activeNarator = scene;
    myaudio.get(activeNarator).muted = naratorMuteScene;
    myaudio.get(activeNarator).play();
}

function mutedAudioNarator(el) {
    naratorMuteScene = !naratorMuteScene;
    if (activeNarator != null) myaudio.get(activeNarator).muted = naratorMuteScene;
    $(el).html('Narator Audio : ' + (naratorMuteScene ? 'Off' : 'On'))
    console.log("Mute Narator Audio : " + naratorMuteScene);
}