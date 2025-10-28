const quizData = [
    {
        question: "1. ABSURD (Sinonim/Persamaan Kata)",
        options: ["a. Masuk akal", "b. Konyol", "c. Logis", "d. Rasional"],
        answer: "b. Konyol",
        subject: "Verbal Reasoning",
        explanation: "Absurd = konyol, tidak masuk akal."
    },
    {
        question: "2. EKSPLISIT (Sinonim/Persamaan Kata)",
        options: ["a. Tersirat", "b. Tersurat", "c. Sementara", "d. Rahasia"],
        answer: "b. Tersurat",
        subject: "Verbal Reasoning",
        explanation: "Eksplisit = tersurat, jelas."
    },
    {
        question: "3. VALID (Sinonim/Persamaan Kata)",
        options: ["a. Sah", "b. Lama", "c. Batal", "d. Usang"],
        answer: "a. Sah",
        subject: "Verbal Reasoning",
        explanation: "Valid = sah, benar menurut aturan."
    },
    {
        question: "4. INOVATIF (Sinonim/Persamaan Kata)",
        options: ["a. Kreatif", "b. Tradisional", "c. Umum", "d. Konvensional"],
        answer: "a. Kreatif",
        subject: "Verbal Reasoning",
        explanation: "Inovatif = kreatif, penuh ide baru."
    },
    {
        question: "5. INTEGRITAS (Sinonim/Persamaan Kata)",
        options: ["a. Ketulusan", "b. Kepura-puraan", "c. Kecurangan", "d. Kemalasan"],
        answer: "a. Ketulusan",
        subject: "Verbal Reasoning",
        explanation: "Integritas = ketulusan, kejujuran, dan konsistensi moral."
    },
    {
        question: "6. STABIL (Antonim/Lawan Kata)",
        options: ["a. Teguh", "b. Kacau", "c. Kuat", "d. Mantap"],
        answer: "b. Kacau",
        subject: "Verbal Reasoning",
        explanation: "Antonim stabil = kacau (tidak stabil)."
    },
    {
        question: "7. OPTIMIS (Antonim/Lawan Kata)",
        options: ["a. Yakin", "b. Pesimis", "c. Antusias", "d. Berani"],
        answer: "b. Pesimis",
        subject: "Verbal Reasoning",
        explanation: "Optimis ↔ pesimis."
    },
    {
        question: "8. MAKSIMAL (Antonim/Lawan Kata)",
        options: ["a. Optimal", "b. Minimum", "c. Besar", "d. Sempurna"],
        answer: "b. Minimum",
        subject: "Verbal Reasoning",
        explanation: "Maksimal ↔ minimal."
    },
    {
        question: "9. PROGRESIF (Antonim/Lawan Kata)",
        options: ["a. Maju", "b. Dinamis", "c. Reaksioner", "d. Adaptif"],
        answer: "c. Reaksioner",
        subject: "Verbal Reasoning",
        explanation: "Progresif (maju) ↔ reaksioner (menolak perubahan)."
    },
    {
        question: "10. KOMPLEKS (Antonim/Lawan Kata)",
        options: ["a. Rumit", "b. Sederhana", "c. Sulit", "d. Abstrak"],
        answer: "b. Sederhana",
        subject: "Verbal Reasoning",
        explanation: "Kompleks ↔ sederhana."
    },
    {
        question: "11. MENTARI : TERANG = MALAM : … (Analogi Kata)",
        options: ["a. Hujan", "b. Gelap", "c. Bintang", "d. Awan"],
        answer: "b. Gelap",
        subject: "Verbal Reasoning",
        explanation: "Mentari menciptakan terang, malam menciptakan gelap."
    },
    {
        question: "12. PENA : MENULIS = KUAS : … (Analogi Kata)",
        options: ["a. Menggambar", "b. Mengecat", "c. Melukis", "d. Menghapus"],
        answer: "c. Melukis",
        subject: "Verbal Reasoning",
        explanation: "Pena adalah alat untuk menulis, kuas adalah alat untuk melukis."
    },
    {
        question: "13. GURU : SEKOLAH = DOKTER : … (Analogi Kata)",
        options: ["a. Kantor", "b. Rumah sakit", "c. Klinik kecantikan", "d. Apotek"],
        answer: "b. Rumah sakit",
        subject: "Verbal Reasoning",
        explanation: "Guru bekerja di sekolah, Dokter bekerja di rumah sakit (atau klinik)."
    },
    {
        question: "14. AIR : HAUS = MAKANAN : … (Analogi Kata)",
        options: ["a. Lapar", "b. Kenyang", "c. Diet", "d. Berat badan"],
        answer: "a. Lapar",
        subject: "Verbal Reasoning",
        explanation: "Air menghilangkan haus, makanan menghilangkan lapar."
    },
    {
        question: "15. TNI : PERTAHANAN = POLRI : … (Analogi Kata)",
        options: ["a. Negara", "b. Keamanan", "c. Hukum", "d. Pemerintah"],
        answer: "b. Keamanan",
        subject: "Verbal Reasoning",
        explanation: "TNI bertanggung jawab atas pertahanan, POLRI bertanggung jawab atas keamanan."
    },
    {
        question: "16. Jika semua karyawan rajin, dan beberapa orang rajin adalah produktif, maka... (Pemahaman Kalimat)",
        options: ["a. Semua karyawan produktif", "b. Sebagian karyawan mungkin produktif", "c. Tidak ada karyawan produktif", "d. Semua karyawan malas"],
        answer: "b. Sebagian karyawan mungkin produktif",
        subject: "Verbal Reasoning",
        explanation: "Hanya sebagian dari kelompok 'rajin' yang 'produktif', dan 'karyawan' termasuk di kelompok 'rajin'. Jadi, sebagian karyawan mungkin produktif."
    },
    {
        question: "17. Semua burung bisa terbang. Kelelawar bisa terbang. Maka... (Logika Bahasa)",
        options: ["a. Kelelawar adalah burung", "b. Kelelawar bukan burung", "c. Semua yang bisa terbang adalah burung", "d. Semua burung adalah kelelawar"],
        answer: "b. Kelelawar bukan burung",
        subject: "Verbal Reasoning",
        explanation: "Kemampuan terbang tidak secara otomatis menjadikan kelelawar bagian dari kelompok burung. Kelelawar adalah mamalia."
    },
    {
        question: "18. Jika setiap teknisi di PLN wajib memakai helm, maka... (Logika Bahasa)",
        options: ["a. Beberapa teknisi tidak memakai helm", "b. Semua teknisi memakai helm", "c. Tidak ada teknisi memakai helm", "d. Hanya sebagian teknisi memakai helm"],
        answer: "b. Semua teknisi memakai helm",
        subject: "Verbal Reasoning",
        explanation: "Kata 'wajib' dan 'setiap' berarti 'semua' teknisi harus mematuhi aturan tersebut."
    },
    {
        question: "19. PLN menyediakan listrik. Listrik diperlukan untuk kegiatan ekonomi. Maka... (Logika Bahasa)",
        options: ["a. PLN berperan dalam ekonomi", "b. Listrik tidak penting", "c. Ekonomi tidak tergantung listrik", "d. PLN bukan penyedia listrik"],
        answer: "a. PLN berperan dalam ekonomi",
        subject: "Verbal Reasoning",
        explanation: "Karena PLN menyediakan listrik, dan listrik diperlukan untuk ekonomi, maka PLN berperan dalam kegiatan ekonomi."
    },
    {
        question: "20. Jika harga BBM naik, maka biaya transportasi juga naik. Biaya transportasi naik menyebabkan harga barang naik. Maka: (Logika Bahasa)",
        options: ["a. Harga barang tidak terpengaruh", "b. Harga barang turun", "c. Harga barang naik", "d. Harga BBM tidak berpengaruh"],
        answer: "c. Harga barang naik",
        subject: "Verbal Reasoning",
        explanation: "Ini adalah rantai sebab-akibat: BBM naik → Transportasi naik → Harga barang naik."
    },
    {
        question: "21. “Kedisiplinan adalah kunci keberhasilan.” Makna yang sepadan: (Padanan Kalimat)",
        options: ["a. Tanpa disiplin, sulit berhasil", "b. Disiplin tidak menjamin keberhasilan", "c. Orang sukses tidak perlu disiplin", "d. Disiplin dan berhasil tidak berhubungan"],
        answer: "a. Tanpa disiplin, sulit berhasil",
        subject: "Verbal Reasoning",
        explanation: "Menyatakan kedisiplinan sebagai 'kunci' sama dengan mengatakan bahwa sulit atau tidak mungkin berhasil tanpanya (makna sepadan)."
    },
    {
        question: "22. “Pegawai yang bekerja keras pantas mendapat penghargaan.” Makna yang sepadan: (Padanan Kalimat)",
        options: ["a. Semua pegawai bekerja keras", "b. Hanya pegawai rajin yang boleh dihukum", "c. Kerja keras patut diapresiasi", "d. Penghargaan diberikan acak"],
        answer: "c. Kerja keras patut diapresiasi",
        subject: "Verbal Reasoning",
        explanation: "'Pantas mendapat penghargaan' memiliki makna yang sepadan dengan 'patut diapresiasi'."
    },
    {
        question: "23. “Mereka yang datang tepat waktu akan dilayani terlebih dahulu.” Makna yang sepadan: (Padanan Kalimat)",
        options: ["a. Keterlambatan tidak masalah", "b. Ketepatan waktu tidak penting", "c. Ketepatan waktu memberi prioritas", "d. Semua dilayani bersamaan"],
        answer: "c. Ketepatan waktu memberi prioritas",
        subject: "Verbal Reasoning",
        explanation: "Dilayani 'terlebih dahulu' menunjukkan adanya 'prioritas' bagi yang tepat waktu."
    },
    {
        question: "24. “Tanpa komunikasi yang baik, kerja sama tim akan gagal.” Makna yang sepadan: (Padanan Kalimat)",
        options: ["a. Komunikasi tidak penting", "b. Komunikasi yang baik membuat kerja tim berhasil", "c. Kerja tim tidak tergantung komunikasi", "d. Komunikasi buruk memperkuat tim"],
        answer: "b. Komunikasi yang baik membuat kerja tim berhasil",
        subject: "Verbal Reasoning",
        explanation: "Ini adalah bentuk kontrapositif: Jika (bukan K) maka Gagal. Artinya, jika Tidak Gagal (Berhasil) maka K (Komunikasi Baik)."
    },
    {
        question: "25. “Energi listrik harus digunakan secara efisien.” Makna yang sepadan: (Padanan Kalimat)",
        options: ["a. Penggunaan boros diperbolehkan", "b. Efisiensi tidak diperlukan", "c. Pemborosan energi diutamakan", "d. Listrik harus digunakan hemat"],
        answer: "d. Listrik harus digunakan hemat",
        subject: "Verbal Reasoning",
        explanation: "Efisien dalam konteks penggunaan energi sama dengan hemat dan bijak."
    },
    {
        question: "26. Peran utama PLN menurut teks adalah... (Pemahaman Bacaan)",
        options: ["a. Mengatur harga BBM", "b. Menyediakan energi listrik", "c. Meningkatkan produksi bahan bakar", "d. Mengatur ekspor listrik"],
        answer: "b. Menyediakan energi listrik",
        subject: "Verbal Reasoning",
        explanation: "Kalimat pertama teks menyebutkan: 'PT PLN berperan penting dalam penyediaan energi listrik nasional.'"
    },
    {
        question: "27. Salah satu upaya PLN dalam teks adalah... (Pemahaman Bacaan)",
        options: ["a. Mengurangi tenaga kerja", "b. Meningkatkan pelayanan", "c. Menurunkan konsumsi listrik", "d. Menutup jaringan"],
        answer: "b. Meningkatkan pelayanan",
        subject: "Verbal Reasoning",
        explanation: "Teks menyebutkan: 'PLN terus berupaya meningkatkan pelayanan, memperluas jaringan, dan mendorong efisiensi energi.'"
    },
    {
        question: "28. Listrik disebut sebagai kebutuhan dasar karena... (Pemahaman Bacaan)",
        options: ["a. Tidak dibutuhkan industri", "b. Hanya untuk hiburan", "c. Mendukung kegiatan sosial dan ekonomi", "d. Tidak penting bagi masyarakat"],
        answer: "c. Mendukung kegiatan sosial dan ekonomi",
        subject: "Verbal Reasoning",
        explanation: "Teks menyebutkan: 'Listrik merupakan kebutuhan dasar masyarakat yang mendukung kegiatan ekonomi, sosial, dan industri.'"
    },
    {
        question: "29. Upaya efisiensi energi dilakukan untuk... (Pemahaman Bacaan)",
        options: ["a. Memboroskan sumber daya", "b. Menghemat dan memaksimalkan manfaat", "c. Mengurangi pelayanan", "d. Menambah beban biaya"],
        answer: "b. Menghemat dan memaksimalkan manfaat",
        subject: "Verbal Reasoning",
        explanation: "Efisiensi berarti penggunaan yang hemat dan optimal (memaksimalkan manfaat)."
    },
    {
        question: "30. Kesimpulan teks tersebut adalah... (Pemahaman Bacaan)",
        options: ["a. PLN tidak berperan penting dalam ekonomi", "b. Listrik tidak mendukung kegiatan sosial", "c. PLN berkomitmen menyediakan listrik dan efisiensi", "d. PLN menolak perluasan jaringan"],
        answer: "c. PLN berkomitmen menyediakan listrik dan efisiensi",
        subject: "Verbal Reasoning",
        explanation: "Teks menyimpulkan peran penting PLN dalam penyediaan listrik dan upaya mereka untuk meningkatkan pelayanan, termasuk efisiensi."
    },
// Lanjutkan dengan KODE BAGIAN 2 di bawah ini
{
        question: "31. 2, 4, 8, 16, 32, … (Deret Angka)",
        options: ["a. 48", "b. 54", "c. 64", "d. 72"],
        answer: "c. 64",
        subject: "Numerical Reasoning",
        explanation: "Pola: Dikali 2 setiap langkah. $32 \times 2 = 64$."
    },
    {
        question: "32. 3, 6, 12, 24, 48, … (Deret Angka)",
        options: ["a. 60", "b. 72", "c. 84", "d. 96"],
        answer: "d. 96",
        subject: "Numerical Reasoning",
        explanation: "Pola: Dikali 2 setiap langkah. $48 \times 2 = 96$."
    },
    {
        question: "33. 5, 10, 20, 40, 80, … (Deret Angka)",
        options: ["a. 120", "b. 160", "c. 200", "d. 240"],
        answer: "b. 160",
        subject: "Numerical Reasoning",
        explanation: "Pola: Dikali 2 setiap langkah. $80 \times 2 = 160$."
    },
    {
        question: "34. 2, 5, 10, 17, 26, 37, … (Deret Angka)",
        options: ["a. 48", "b. 49", "c. 50", "d. 51"],
        answer: "c. 50",
        subject: "Numerical Reasoning",
        explanation: "Pola: Selisih naik ganjil (+3, +5, +7, +9, +11). Selanjutnya $+13$. $37 + 13 = 50$."
    },
    {
        question: "35. 11, 14, 19, 26, 35, 46, … (Deret Angka)",
        options: ["a. 59", "b. 60", "c. 61", "d. 62"],
        answer: "a. 59",
        subject: "Numerical Reasoning",
        explanation: "Pola: Selisih naik ganjil (+3, +5, +7, +9, +11). Selanjutnya $+13$. $46 + 13 = 59$."
    },
    {
        question: "36. Jika 20% dari suatu bilangan adalah 50, maka bilangan itu adalah... (Aritmetika Dasar)",
        options: ["a. 200", "b. 250", "c. 300", "d. 350"],
        answer: "b. 250",
        subject: "Numerical Reasoning",
        explanation: "$0.20 \times X = 50 \rightarrow X = 50 / 0.20 = 250$."
    },
    {
        question: "37. 3/4 dari 120 adalah... (Aritmetika Dasar)",
        options: ["a. 80", "b. 85", "c. 90", "d. 95"],
        answer: "c. 90",
        subject: "Numerical Reasoning",
        explanation: "$3/4 \times 120 = 3 \times 30 = 90$."
    },
    {
        question: "38. Sebuah barang seharga Rp120.000 dijual dengan rugi 10%. Harga jualnya adalah... (Aritmetika Dasar)",
        options: ["a. Rp100.000", "b. Rp108.000", "c. Rp110.000", "d. Rp112.000"],
        answer: "b. Rp108.000",
        subject: "Numerical Reasoning",
        explanation: "Harga jual = $120.000 \times (1 - 0.10) = 120.000 \times 0.9 = 108.000$."
    },
    {
        question: "39. Hasil dari $12 \times (15 - 9) \div 3$ adalah... (Aritmetika Dasar)",
        options: ["a. 18", "b. 20", "c. 22", "d. 24"],
        answer: "d. 24",
        subject: "Numerical Reasoning",
        explanation: "Ikuti aturan operasi: $12 \times (6) \div 3 = 72 \div 3 = 24$."
    },
    {
        question: "40. Jika 15 pekerja menyelesaikan pekerjaan dalam 10 hari, maka 30 pekerja (dengan kecepatan sama) akan menyelesaikannya dalam... (Aritmetika Dasar)",
        options: ["a. 3 hari", "b. 4 hari", "c. 5 hari", "d. 6 hari"],
        answer: "c. 5 hari",
        subject: "Numerical Reasoning",
        explanation: "Perbandingan berbalik nilai: $P_1 \times H_1 = P_2 \times H_2 \rightarrow 15 \times 10 = 30 \times X \rightarrow 150 = 30X \rightarrow X = 5$ hari."
    },
    {
        question: "41. Perbandingan gaji A dan B adalah 3 : 4. Jika gaji A Rp3.000.000, maka gaji B adalah... (Perbandingan dan Proporsi)",
        options: ["a. Rp3.500.000", "b. Rp4.000.000", "c. Rp4.500.000", "d. Rp5.000.000"],
        answer: "b. Rp4.000.000",
        subject: "Numerical Reasoning",
        explanation: "$3 / 4 = 3.000.000 / X \rightarrow X = 4/3 \times 3.000.000 = 4.000.000$."
    },
    {
        question: "42. Jika 8 pekerja dapat menyelesaikan pekerjaan dalam 12 hari, maka 6 pekerja (dengan kecepatan sama) akan menyelesaikannya dalam... (Perbandingan dan Proporsi)",
        options: ["a. 14 hari", "b. 15 hari", "c. 16 hari", "d. 18 hari"],
        answer: "c. 16 hari",
        subject: "Numerical Reasoning",
        explanation: "Perbandingan berbalik nilai: $8 \times 12 = 6 \times X \rightarrow 96 = 6X \rightarrow X = 16$ hari."
    },
    {
        question: "43. Suatu mesin menghasilkan 240 unit dalam 8 jam. Berapa unit yang dihasilkan dalam 10 jam dengan kecepatan sama? (Perbandingan dan Proporsi)",
        options: ["a. 260", "b. 280", "c. 300", "d. 320"],
        answer: "c. 300",
        subject: "Numerical Reasoning",
        explanation: "Kecepatan = $240 / 8 = 30$ unit/jam. Dalam 10 jam: $30 \times 10 = 300$ unit."
    },
    {
        question: "44. Perbandingan umur Budi dan Rudi adalah 4 : 5. Jika umur Budi 20 tahun, maka umur Rudi adalah... (Perbandingan dan Proporsi)",
        options: ["a. 24 tahun", "b. 25 tahun", "c. 26 tahun", "d. 27 tahun"],
        answer: "b. 25 tahun",
        subject: "Numerical Reasoning",
        explanation: "$4 / 5 = 20 / X \rightarrow X = 5/4 \times 20 = 25$ tahun."
    },
    {
        question: "45. Dalam satu kelas terdapat 12 laki-laki dan 18 perempuan. Perbandingan laki-laki terhadap seluruh siswa adalah... (Perbandingan dan Proporsi)",
        options: ["a. 2 : 3", "b. 1 : 2", "c. 2 : 5", "d. 3 : 5"],
        answer: "c. 2 : 5",
        subject: "Numerical Reasoning",
        explanation: "Total siswa = $12 + 18 = 30$. Perbandingan = $12 : 30$. Disederhanakan (dibagi 6) menjadi $2 : 5$."
    },
    {
        question: "46. Harga barang naik dari Rp200.000 menjadi Rp240.000. Persentase kenaikan harga adalah... (Persentase)",
        options: ["a. 15%", "b. 20%", "c. 25%", "d. 30%"],
        answer: "b. 20%",
        subject: "Numerical Reasoning",
        explanation: "Kenaikan = $40.000$. Persentase = $(40.000 / 200.000) \times 100\% = 20\%$."
    },
    {
        question: "47. Jika gaji Dina Rp4.000.000 dan ia mendapat bonus 15%, maka total gaji yang diterima adalah... (Persentase)",
        options: ["a. Rp4.300.000", "b. Rp4.400.000", "c. Rp4.500.000", "d. Rp4.600.000"],
        answer: "d. Rp4.600.000",
        subject: "Numerical Reasoning",
        explanation: "Bonus = $15\% \times 4.000.000 = 600.000$. Total = $4.000.000 + 600.000 = 4.600.000$."
    },
    {
        question: "48. Jumlah karyawan laki-laki 60 dan perempuan 40. Persentase perempuan adalah... (Persentase)",
        options: ["a. 30%", "b. 35%", "c. 40%", "d. 45%"],
        answer: "c. 40%",
        subject: "Numerical Reasoning",
        explanation: "Total karyawan = $100$. Persentase perempuan = $(40 / 100) \times 100\% = 40\%$."
    },
    {
        question: "49. Sebuah perusahaan menghemat 25% dari 800 kWh listrik per bulan. Berapa listrik yang dihemat? (Persentase)",
        options: ["a. 100 kWh", "b. 150 kWh", "c. 200 kWh", "d. 250 kWh"],
        answer: "c. 200 kWh",
        subject: "Numerical Reasoning",
        explanation: "Dihemat = $25\% \times 800 = 0.25 \times 800 = 200$ kWh."
    },
    {
        question: "50. Sebuah barang didiskon 20% dari harga Rp250.000. Harga setelah diskon adalah... (Persentase)",
        options: ["a. Rp190.000", "b. Rp195.000", "c. Rp200.000", "d. Rp210.000"],
        answer: "c. Rp200.000",
        subject: "Numerical Reasoning",
        explanation: "Harga setelah diskon = $250.000 \times (1 - 0.20) = 250.000 \times 0.8 = 200.000$."
    },
    {
        question: "51. 7, 14, 28, 56, 112, … (Logika Numerik)",
        options: ["a. 124", "b. 224", "c. 242", "d. 252"],
        answer: "b. 224",
        subject: "Numerical Reasoning",
        explanation: "Pola: Dikali 2 setiap langkah. $112 \times 2 = 224$."
    },
    {
        question: "52. 4, 9, 19, 39, 79, … (Logika Numerik)",
        options: ["a. 159", "b. 158", "c. 169", "d. 178"],
        answer: "a. 159",
        subject: "Numerical Reasoning",
        explanation: "Pola: Selisih dikali 2 (+5, +10, +20, +40). Selanjutnya $79 + 80 = 159$."
    },
    {
        question: "53. 1, 4, 9, 16, 25, 36, … (Logika Numerik)",
        options: ["a. 42", "b. 45", "c. 48", "d. 49"],
        answer: "d. 49",
        subject: "Numerical Reasoning",
        explanation: "Pola: Kuadrat bilangan asli $(1^2, 2^2, 3^2, 4^2, 5^2, 6^2)$. Selanjutnya $7^2 = 49$."
    },
    {
        question: "54. 10, 20, 40, 70, 110, … (Logika Numerik)",
        options: ["a. 160", "b. 170", "c. 180", "d. 190"],
        answer: "a. 160",
        subject: "Numerical Reasoning",
        explanation: "Pola: Selisih naik 10 (+10, +20, +30, +40). Selanjutnya $+50$. $110 + 50 = 160$."
    },
    {
        question: "55. 100, 90, 81, 73, 66, … (Logika Numerik)",
        options: ["a. 59", "b. 60", "c. 61", "d. 62"],
        answer: "a. 59",
        subject: "Numerical Reasoning",
        explanation: "Pola: Selisih turun 1 (-10, -9, -8, -7). Selanjutnya $-7$. $66 - 7 = 59$."
    },
    {
        question: "56. Sebuah generator menghasilkan 600 kWh per jam. Berapa energi yang dihasilkan dalam 8 jam? (Soal Cerita)",
        options: ["a. 3600 kWh", "b. 4200 kWh", "c. 4800 kWh", "d. 5200 kWh"],
        answer: "c. 4800 kWh",
        subject: "Numerical Reasoning",
        explanation: "Total energi = $600 \text{ kWh/jam} \times 8 \text{ jam} = 4800 \text{ kWh}$."
    },
    {
        question: "57. Sebuah mobil menempuh jarak 180 km dalam 3 jam. Kecepatan mobil tersebut adalah... (Soal Cerita)",
        options: ["a. 50 km/jam", "b. 55 km/jam", "c. 60 km/jam", "d. 65 km/jam"],
        answer: "c. 60 km/jam",
        subject: "Numerical Reasoning",
        explanation: "Kecepatan = $180 \text{ km} / 3 \text{ jam} = 60 \text{ km/jam}$."
    },
    {
        question: "58. PLN menggunakan 5 truk untuk mengirim 250 tiang listrik. Jika tiap truk mengangkut sama banyak, maka tiap truk membawa... (Soal Cerita)",
        options: ["a. 40 tiang", "b. 45 tiang", "c. 50 tiang", "d. 55 tiang"],
        answer: "c. 50 tiang",
        subject: "Numerical Reasoning",
        explanation: "Jumlah tiang per truk = $250 / 5 = 50$ tiang."
    },
    {
        question: "59. Dalam satu proyek terdapat 80 pekerja. Jika 25% dari mereka cuti, berapa pekerja yang tetap bekerja? (Soal Cerita)",
        options: ["a. 50", "b. 55", "c. 60", "d. 65"],
        answer: "c. 60",
        subject: "Numerical Reasoning",
        explanation: "Pekerja yang bekerja = $100\% - 25\% = 75\%$. $0.75 \times 80 = 60$ pekerja."
    },
    {
        question: "60. Dalam sebuah kantor terdapat 48 komputer. Jika $1/3$-nya rusak, maka jumlah komputer yang masih berfungsi adalah... (Soal Cerita)",
        options: ["a. 28", "b. 30", "c. 32", "d. 34"],
        answer: "c. 32",
        subject: "Numerical Reasoning",
        explanation: "Bagian yang berfungsi = $1 - 1/3 = 2/3$. $2/3 \times 48 = 32$ komputer."
    },
// Lanjutkan dengan KODE BAGIAN 3 di bawah ini
{
        question: "61. Semua karyawan PLN disiplin. Beberapa karyawan PLN bekerja lembur. Kesimpulan yang benar: (Silogisme)",
        options: ["a. Semua yang lembur adalah karyawan PLN", "b. Sebagian karyawan PLN mungkin lembur", "c. Semua karyawan PLN lembur", "d. Tidak ada yang lembur"],
        answer: "b. Sebagian karyawan PLN mungkin lembur",
        subject: "Logical Reasoning",
        explanation: "Premis 1: Semua P adalah Q. Premis 2: Sebagian P adalah R. Kesimpulan: Sebagian Q adalah R (atau Sebagian R adalah Q). Sebagian karyawan PLN adalah orang lembur."
    },
    {
        question: "62. Semua teknisi berpengalaman. Beberapa berpengalaman adalah trainer. Kesimpulan yang benar: (Silogisme)",
        options: ["a. Semua teknisi adalah trainer", "b. Beberapa teknisi mungkin trainer", "c. Tidak ada teknisi yang trainer", "d. Semua trainer adalah teknisi"],
        answer: "b. Beberapa teknisi mungkin trainer",
        subject: "Logical Reasoning",
        explanation: "Dari Semua T (Teknisi) adalah B (Berpengalaman) dan Beberapa B adalah R (Trainer), maka ada kemungkinan irisannya, yaitu Beberapa T adalah R."
    },
    {
        question: "63. Tidak semua insinyur menyukai proyek lapangan. Semua yang menyukai proyek lapangan bekerja di PLN. Kesimpulan: (Silogisme)",
        options: ["a. Semua insinyur bekerja di PLN", "b. Beberapa insinyur mungkin bekerja di PLN", "c. Tidak ada insinyur di PLN", "d. Semua insinyur tidak menyukai proyek"],
        answer: "b. Beberapa insinyur mungkin bekerja di PLN",
        subject: "Logical Reasoning",
        explanation: "Jika ada insinyur yang menyukai proyek lapangan, dan semua penyuka proyek lapangan bekerja di PLN, maka insinyur tersebut bekerja di PLN. Karena hanya 'Tidak semua', maka 'Beberapa' insinyur mungkin bekerja di PLN."
    },
    {
        question: "64. Jika seorang karyawan rajin, ia akan dipromosikan. Budi rajin. Kesimpulan: (Silogisme)",
        options: ["a. Budi pasti dipromosikan", "b. Budi mungkin dipromosikan", "c. Budi tidak dipromosikan", "d. Tidak ada kesimpulan"],
        answer: "a. Budi pasti dipromosikan",
        subject: "Logical Reasoning",
        explanation: "Ini adalah pola *Modus Ponens* (P → Q, P, maka Q). Rajin (P) → Promosi (Q). Budi Rajin (P). Maka, Budi Promosi (Q)."
    },
    {
        question: "65. Semua generator berfungsi dengan listrik. Beberapa mesin berfungsi dengan listrik. Kesimpulan: (Silogisme)",
        options: ["a. Semua generator adalah mesin", "b. Semua mesin adalah generator", "c. Sebagian mesin bisa jadi generator", "d. Tidak ada hubungan"],
        answer: "c. Sebagian mesin bisa jadi generator",
        subject: "Logical Reasoning",
        explanation: "Kedua kelompok (Generator dan Mesin) memiliki irisan dengan 'Berfungsi dengan listrik'. Ada kemungkinan irisan antara Generator dan Mesin."
    },
    {
        question: "66. Jika jaringan listrik terganggu, maka pemadaman terjadi. Pemadaman terjadi. Kesimpulan: (Sebab-Akibat)",
        options: ["a. Jaringan listrik terganggu pasti", "b. Pemadaman bisa karena lain", "c. Tidak ada pemadaman", "d. Semua jaringan baik"],
        answer: "b. Pemadaman bisa karena lain",
        subject: "Logical Reasoning",
        explanation: "Ini adalah *Affirming the Consequent* (P → Q, Q, maka ?). Pemadaman (Q) terjadi, tetapi penyebabnya (P) belum tentu gangguan jaringan. Bisa karena perawatan, dll."
    },
    {
        question: "67. Karena hujan deras, beberapa gardu PLN terkena banjir. Kesimpulan: (Sebab-Akibat)",
        options: ["a. Hujan selalu menyebabkan gardu banjir", "b. Banjir gardu kemungkinan karena hujan", "c. Hujan tidak berhubungan dengan gardu", "d. Semua gardu terendam"],
        answer: "b. Banjir gardu kemungkinan karena hujan",
        subject: "Logical Reasoning",
        explanation: "Kalimat tersebut sudah menyatakan hubungan sebab-akibat: hujan deras (sebab) menyebabkan gardu banjir (akibat)."
    },
    {
        question: "68. Jika alat ukur rusak, maka pengukuran tidak akurat. Pengukuran tidak akurat. Kesimpulan: (Sebab-Akibat)",
        options: ["a. Alat pasti rusak", "b. Alat mungkin rusak", "c. Alat tidak rusak", "d. Tidak ada kesimpulan"],
        answer: "b. Alat mungkin rusak",
        subject: "Logical Reasoning",
        explanation: "Pengukuran tidak akurat bisa disebabkan oleh alat rusak (sebab yang disebutkan), atau faktor lain (human error, kalibrasi, dll). Mirip dengan soal 66."
    },
    {
        question: "69. Keterlambatan pengiriman kabel menyebabkan proyek tertunda. Kabel terlambat dikirim. Kesimpulan: (Sebab-Akibat)",
        options: ["a. Proyek pasti tertunda", "b. Proyek kemungkinan tertunda", "c. Proyek tidak tertunda", "d. Proyek dipercepat"],
        answer: "a. Proyek pasti tertunda",
        subject: "Logical Reasoning",
        explanation: "Ini adalah *Modus Ponens* (P → Q, P, maka Q). Keterlambatan (P) menyebabkan Proyek Tertunda (Q). Jika P terjadi, maka Q pasti terjadi."
    },
    {
        question: "70. Pekerjaan tidak selesai tepat waktu karena kurang pekerja. Kesimpulan: (Sebab-Akibat)",
        options: ["a. Semua pekerja kurang", "b. Kekurangan pekerja menyebabkan keterlambatan", "c. Pekerjaan selesai cepat", "d. Keterlambatan tidak ada hubungannya"],
        answer: "b. Kekurangan pekerja menyebabkan keterlambatan",
        subject: "Logical Reasoning",
        explanation: "Kalimat menyatakan hubungan langsung: Kekurangan pekerja (sebab) menghasilkan pekerjaan tidak selesai tepat waktu (keterlambatan/akibat)."
    },
    {
        question: "71. A > B, B > C, C > D. Hubungan yang benar: (Pola dan Hubungan)",
        options: ["a. A > D", "b. D > A", "c. B > A", "d. C > A"],
        answer: "a. A > D",
        subject: "Logical Reasoning",
        explanation: "Berdasarkan rantai transitif: Jika A lebih besar dari B, dan B lebih besar dari D, maka A pasti lebih besar dari D."
    },
    {
        question: "72. Jika P = Q dan Q ≠ R, maka... (Pola dan Hubungan)",
        options: ["a. P ≠ R", "b. P = R", "c. Q = R", "d. Tidak ada hubungan"],
        answer: "a. P ≠ R",
        subject: "Logical Reasoning",
        explanation: "Karena P sama dengan Q, maka P memiliki sifat yang sama dengan Q. Jika Q tidak sama dengan R, maka P juga tidak sama dengan R."
    },
    {
        question: "73. Semua X adalah Y. Beberapa Y adalah Z. Kesimpulan: (Pola dan Hubungan)",
        options: ["a. Semua X adalah Z", "b. Sebagian X mungkin Z", "c. Semua Z adalah X", "d. Tidak ada hubungan"],
        answer: "d. Tidak ada hubungan",
        subject: "Logical Reasoning",
        explanation: "Hubungan 'Beberapa Y adalah Z' tidak memberikan kepastian apakah irisan tersebut mencakup X atau tidak. Tidak ada kesimpulan pasti mengenai X dan Z."
    },
    {
        question: "74. Dalam sebuah tim: jika A hadir, B harus hadir. A hadir → … (Pola dan Hubungan)",
        options: ["a. B hadir", "b. B tidak hadir", "c. Tidak ada hubungan", "d. Semua tim hadir"],
        answer: "a. B hadir",
        subject: "Logical Reasoning",
        explanation: "Ini adalah *Modus Ponens*. Kehadiran A (P) memaksa kehadiran B (Q)."
    },
    {
        question: "75. Jika hujan turun, jalan licin. Jalan licin → … (Pola dan Hubungan)",
        options: ["a. Hujan pasti turun", "b. Jalan kering", "c. Hujan mungkin turun", "d. Jalan tidak licin"],
        answer: "c. Hujan mungkin turun",
        subject: "Logical Reasoning",
        explanation: "Jalan licin (Q) bisa disebabkan hujan (P), tetapi juga bisa disebabkan tumpahan oli, atau sebab lain. Hujan adalah 'mungkin' penyebabnya."
    },
    {
        question: "76. ⚪ → ⚫ → ⚪⚫ → ⚫⚪⚫ → ? (Seri Gambar/Simbol)",
        options: ["a. ⚪⚫⚪⚫", "b. ⚫⚪⚫⚪", "c. ⚪⚫⚫⚪", "d. ⚫⚫⚪⚫"],
        answer: "a. ⚪⚫⚪⚫",
        subject: "Logical Reasoning",
        explanation: "Pola: Simbol bertambah satu setiap langkah dengan urutan selang-seling (⚪, ⚫, ⚪⚫, ⚫⚪⚫). Setelah ⚫⚪⚫, berikutnya adalah ⚪⚫⚪⚫ (opsi 'b' adalah ⚫⚪⚫⚪, opsi 'a' yang paling mendekati pola penambahan simbol secara umum)."
    },
    {
        question: "77. △, □, △△, □□, △△△, ? (Seri Gambar/Simbol)",
        options: ["a. □□□", "b. △△△△", "c. △□△□", "d. □△□△"],
        answer: "a. □□□",
        subject: "Logical Reasoning",
        explanation: "Pola: Bergantian antara Segitiga dan Kotak, dan jumlahnya bertambah 1 per jenis. (△, □), (△△, □□), (△△△, □□□)."
    },
    {
        question: "78. 🔺, 🔺🔺, 🔺🔺🔺, … (Seri Gambar/Simbol)",
        options: ["a. 🔺🔺🔺🔺", "b. 🔺🔺🔺", "c. 🔺🔺", "d. 🔺"],
        answer: "a. 🔺🔺🔺🔺",
        subject: "Logical Reasoning",
        explanation: "Pola: Jumlah simbol bertambah 1 setiap langkah. $3 + 1 = 4$."
    },
    {
        question: "79. ●▲, ▲●, ●▲●, ? (Seri Gambar/Simbol)",
        options: ["a. ▲●▲●", "b. ●▲●▲", "c. ●▲●●", "d. ▲●▲"],
        answer: "a. ▲●▲●",
        subject: "Logical Reasoning",
        explanation: "Pola: Jumlah simbol bertambah, dan simbol awal/akhir bergantian. (●▲, ▲●, ●▲●, ▲●▲●)."
    },
    {
        question: "80. ○□○, □○□, ○□○□, ? (Seri Gambar/Simbol)",
        options: ["a. □○□○", "b. ○□○○", "c. □○○□", "d. ○□○□"],
        answer: "a. □○□○",
        subject: "Logical Reasoning",
        explanation: "Pola: Simbol bertambah 1, dan pola '○□' dibalik setiap langkah: (○□○), (□○□), (○□○□), (□○□○)."
    },
    {
        question: "81. Urutan tercepat teknisi: A > B, B > C, C > D, D > E. Urutan tercepat → lambat: (Soal Cerita Logika)",
        options: ["a. A, B, C, D, E", "b. E, D, C, B, A", "c. B, A, C, D, E", "d. A, C, B, D, E"],
        answer: "a. A, B, C, D, E",
        subject: "Logical Reasoning",
        explanation: "Hubungan yang diberikan sudah merupakan urutan dari tercepat ke terlambat: A > B > C > D > E."
    },
    {
        question: "82. Semua pegawai shift malam menerima tunjangan. Lina bekerja shift malam. Kesimpulan: (Soal Cerita Logika)",
        options: ["a. Lina menerima tunjangan", "b. Lina tidak menerima tunjangan", "c. Tidak ada kesimpulan", "d. Hanya sebagian menerima"],
        answer: "a. Lina menerima tunjangan",
        subject: "Logical Reasoning",
        explanation: "Pola *Modus Ponens*: Jika (Shift Malam) → Tunjangan. Lina (Shift Malam). Maka, Lina (Tunjangan)."
    },
    {
        question: "83. Jika mesin A mati, produksi turun. Mesin A mati. Kesimpulan: (Soal Cerita Logika)",
        options: ["a. Produksi pasti turun", "b. Produksi mungkin turun", "c. Produksi meningkat", "d. Mesin A tidak berpengaruh"],
        answer: "a. Produksi pasti turun",
        subject: "Logical Reasoning",
        explanation: "Pola *Modus Ponens*: Jika (Mesin A mati) → (Produksi turun). Mesin A mati terjadi. Maka, Produksi pasti turun."
    },
    {
        question: "84. Dalam tim PLN, hanya pekerja bersertifikat yang boleh mengoperasikan generator. Andi bersertifikat. Kesimpulan: (Soal Cerita Logika)",
        options: ["a. Andi boleh mengoperasikan generator", "b. Andi tidak boleh", "c. Semua pekerja boleh", "d. Tidak ada hubungan"],
        answer: "a. Andi boleh mengoperasikan generator",
        subject: "Logical Reasoning",
        explanation: "Kepemilikan sertifikat adalah syarat wajib dan cukup untuk operasi generator."
    },
    {
        question: "85. Jika listrik padam, lift tidak berfungsi. Lift berfungsi. Kesimpulan: (Soal Cerita Logika)",
        options: ["a. Listrik padam", "b. Listrik menyala", "c. Lift rusak", "d. Semua lift mati"],
        answer: "b. Listrik menyala",
        subject: "Logical Reasoning",
        explanation: "Pola *Modus Tollens*: Jika P → Q, dan ~Q, maka ~P. (Listrik Padam) → (Lift Tidak Berfungsi). Lift Berfungsi (~Q). Maka, Listrik Tidak Padam (Menyala, ~P)."
    },
    {
        question: "86. Tiga gardu A, B, C. Gardu A lebih dekat ke pusat dibanding B. B lebih dekat dari C. Gardu terjauh dari pusat adalah… (Pemecahan Masalah Logis)",
        options: ["a. A", "b. B", "c. C", "d. Tidak dapat ditentukan"],
        answer: "c. C",
        subject: "Logical Reasoning",
        explanation: "Urutan jarak dari pusat: A < B < C. Jadi, C adalah yang paling jauh."
    },
    {
        question: "87. 4 karyawan (1,2,3,4) menempati meja: 1 di samping 2, 3 di samping 4. Urutan yang memungkinkan: (Pemecahan Masalah Logis)",
        options: ["a. 1,2,3,4", "b. 2,1,4,3", "c. 3,4,1,2", "d. Semua benar"],
        answer: "d. Semua benar",
        subject: "Logical Reasoning",
        explanation: "Semua opsi memenuhi syarat: (1,2) harus bersebelahan, (3,4) harus bersebelahan. Semua opsi menampilkan pasangan bersebelahan."
    },
    {
        question: "88. Semua trafo berfungsi. Beberapa trafo di perbaiki. Kesimpulan: (Pemecahan Masalah Logis)",
        options: ["a. Semua yang diperbaiki berfungsi", "b. Beberapa yang diperbaiki berfungsi", "c. Tidak ada yang berfungsi", "d. Semua yang diperbaiki rusak"],
        answer: "b. Beberapa yang diperbaiki berfungsi",
        subject: "Logical Reasoning",
        explanation: "Jika 'Semua trafo berfungsi', maka 'Beberapa yang diperbaiki' (yang merupakan bagian dari trafo) juga pasti berfungsi. Namun opsi 'a' terlalu kuat (hanya sebagian yang diperbaiki), jadi 'b' lebih tepat."
    },
    {
        question: "89. Setiap karyawan harus absen harian. Budi absen. Kesimpulan: (Pemecahan Masalah Logis)",
        options: ["a. Budi melanggar aturan", "b. Budi patuh", "c. Budi izin", "d. Tidak ada kesimpulan"],
        answer: "b. Budi patuh",
        subject: "Logical Reasoning",
        explanation: "Jika aturan mewajibkan absen, dan Budi absen, maka Budi patuh terhadap aturan."
    },
    {
        question: "90. Dalam satu shift, jika A hadir, B harus hadir. A tidak hadir → … (Pemecahan Masalah Logis)",
        options: ["a. B boleh hadir atau tidak", "b. B harus hadir", "c. B tidak boleh hadir", "d. Semua tim hadir"],
        answer: "a. B boleh hadir atau tidak",
        subject: "Logical Reasoning",
        explanation: "Jika P → Q, dan ~P, maka tidak ada kesimpulan tentang Q (*Fallacy of Denying the Antecedent*). Kehadiran B tidak terikat jika A tidak hadir."
    },
// Lanjutkan dengan KODE BAGIAN 4 di bawah ini
{
        question: "91. Sebuah gardu PLN memproduksi 500 kWh per hari. Jika produksi naik 10% per hari, berapa produksi hari kedua? (Soal Cerita Numerik)",
        options: ["a. 510 kWh", "b. 525 kWh", "c. 550 kWh", "d. 600 kWh"],
        answer: "c. 550 kWh",
        subject: "Analytical Reasoning",
        explanation: "Kenaikan = $10\% \times 500 \text{ kWh} = 50 \text{ kWh}$. Produksi Hari 2 = $500 + 50 = 550 \text{ kWh}$."
    },
    {
        question: "92. Sebuah kabel sepanjang 120 m dipotong menjadi 4 bagian sama panjang. Panjang tiap bagian: (Soal Cerita Numerik)",
        options: ["a. 20 m", "b. 25 m", "c. 30 m", "d. 35 m"],
        answer: "c. 30 m",
        subject: "Analytical Reasoning",
        explanation: "Panjang tiap bagian = $120 \text{ m} / 4 = 30 \text{ m}$."
    },
    {
        question: "93. Seorang teknisi memperbaiki 6 gardu dalam 3 hari dengan jumlah yang sama tiap hari. Berapa gardu per hari? (Soal Cerita Numerik)",
        options: ["a. 1", "b. 2", "c. 3", "d. 4"],
        answer: "b. 2",
        subject: "Analytical Reasoning",
        explanation: "Rata-rata = $6 \text{ gardu} / 3 \text{ hari} = 2 \text{ gardu/hari}$."
    },
    {
        question: "94. PLN mengirim 180 tiang listrik menggunakan truk, tiap truk maksimal 20 tiang. Minimal truk yang digunakan: (Soal Cerita Numerik)",
        options: ["a. 8", "b. 9", "c. 10", "d. 11"],
        answer: "b. 9",
        subject: "Analytical Reasoning",
        explanation: "Minimal truk = $180 \text{ tiang} / 20 \text{ tiang/truk} = 9 \text{ truk}$."
    },
    {
        question: "95. Jumlah kWh konsumsi rumah meningkat 5% dari 200 kWh → konsumsi baru: (Soal Cerita Numerik)",
        options: ["a. 205 kWh", "b. 210 kWh", "c. 215 kWh", "d. 220 kWh"],
        answer: "b. 210 kWh",
        subject: "Analytical Reasoning",
        explanation: "Peningkatan = $5\% \times 200 \text{ kWh} = 10 \text{ kWh}$. Konsumsi baru = $200 + 10 = 210 \text{ kWh}$."
    },
    {
        question: "96. Tiga teknisi A, B, C bekerja bergantian: A libur Senin, B bekerja Selasa, C bekerja Rabu. Siapa yang bekerja Selasa? (Soal Urutan & Jadwal)",
        options: ["a. A", "b. B", "c. C", "d. A dan C"],
        answer: "b. B",
        subject: "Analytical Reasoning",
        explanation: "Menurut aturan, B selalu bekerja pada hari Selasa."
    },
    {
        question: "97. Shift PLN 3 hari: Jika A bekerja Senin, B libur. Jika B bekerja Selasa, C libur. Jika B bekerja Selasa, siapa libur? (Soal Urutan & Jadwal)",
        options: ["a. A", "b. B", "c. C", "d. Semua hadir"],
        answer: "c. C",
        subject: "Analytical Reasoning",
        explanation: "Gunakan aturan kedua: 'Jika B bekerja Selasa, C libur'. Karena B bekerja Selasa, maka C libur."
    },
    {
        question: "98. Empat karyawan (D, E, F, G) duduk berbaris: D di kiri E. F di kanan G. E bukan ujung. Urutan duduk kiri ke kanan: (Soal Urutan & Jadwal)",
        options: ["a. D E F G", "b. F G D E", "c. G F D E", "d. D E G F"],
        answer: "d. D E G F",
        subject: "Analytical Reasoning",
        explanation: "D di kiri E (D E). F di kanan G (G F). E bukan ujung (D E X). Menggabungkan: G F D E atau D E G F. Opsi 'd' adalah D E G F."
    },
    {
        question: "99. PLN memiliki 3 gardu X, Y, Z yang diperiksa: X tidak diperiksa Selasa. Z diperiksa hari sebelum Y. Hari X diperiksa adalah… (Soal Urutan & Jadwal)",
        options: ["a. Senin", "b. Selasa", "c. Rabu", "d. Tidak dapat ditentukan"],
        answer: "a. Senin",
        subject: "Analytical Reasoning",
        explanation: "Urutan hari: Senin, Selasa, Rabu. Z sebelum Y (Z Y). X bukan Selasa. Jika X Senin, maka Z Selasa, Y Rabu (X Z Y) (X Selasa salah). Jika X Rabu, maka Z Senin, Y Selasa (Z Y X). Jika X Rabu, tidak mungkin Z sebelum Y. Maka, X harus Senin. Urutan: X, Z, Y (Senin, Selasa, Rabu)."
    },
    {
        question: "100. Shift operator: P, Q, R, S. P tidak shift pertama. Q selalu setelah R. S tidak shift terakhir. Shift pertama diisi oleh… (Soal Urutan & Jadwal)",
        options: ["a. P", "b. Q", "c. R", "d. S"],
        answer: "c. R",
        subject: "Analytical Reasoning",
        explanation: "P bukan 1. S bukan 4. Q setelah R (R sebelum Q). Jika R bukan 1, maka harus S (karena P bukan 1), tapi R harus sebelum Q. Jika R = 2, Q = 3 atau 4. Ini memaksa R harus shift pertama agar semua aturan terpenuhi: R, Q, P/S, S/P."
    },
    {
        question: "101. Pola listrik bulanan: 100, 120, 140, 160, … Prediksi bulan berikutnya: (Soal Pola & Logika)",
        options: ["a. 170", "b. 180", "c. 190", "d. 200"],
        answer: "b. 180",
        subject: "Analytical Reasoning",
        explanation: "Pola: Linear naik 20 setiap langkah. $160 + 20 = 180$."
    },
    {
        question: "102. Urutan tercepat teknisi: A > B, B > C, C > D, D > E. Urutan tercepat → lambat: (Soal Pola & Logika)",
        options: ["a. A, B, C, D, E", "b. E, D, C, B, A", "c. B, A, C, D, E", "d. A, C, B, D, E"],
        answer: "a. A, B, C, D, E",
        subject: "Analytical Reasoning",
        explanation: "Hubungan yang diberikan sudah merupakan urutan dari tercepat ke terlambat: A > B > C > D > E."
    },
    {
        question: "103. Jika sebuah generator butuh 3 teknisi untuk diperbaiki, berapa total teknisi jika ada 6 generator yang diperbaiki bersamaan? (Soal Pola & Logika)",
        options: ["a. 12", "b. 15", "c. 18", "d. 20"],
        answer: "c. 18",
        subject: "Analytical Reasoning",
        explanation: "Total teknisi = $6 \text{ generator} \times 3 \text{ teknisi/generator} = 18 \text{ teknisi}$."
    },
    {
        question: "104. Produksi listrik: 500, 550, 600, 650. Tren linear. Prediksi bulan berikutnya: (Soal Pola & Logika)",
        options: ["a. 670", "b. 700", "c. 710", "d. 750"],
        answer: "b. 700",
        subject: "Analytical Reasoning",
        explanation: "Pola: Linear naik 50 setiap langkah. $650 + 50 = 700$."
    },
    {
        question: "105. Sebuah gardu rusak 20% dari total 50 gardu. Berapa gardu yang rusak? (Soal Pola & Logika)",
        options: ["a. 8", "b. 10", "c. 12", "d. 15"],
        answer: "b. 10",
        subject: "Analytical Reasoning",
        explanation: "Gardu rusak = $20\% \times 50 \text{ gardu} = 0.20 \times 50 = 10 \text{ gardu}$."
    },
    {
        question: "106. PLN memiliki 10 truk, masing-masing mengangkut 15 tiang. Jika ada 120 tiang, truk yang digunakan minimal: (Analisis Data Teks)",
        options: ["a. 7", "b. 8", "c. 9", "d. 10"],
        answer: "b. 8",
        subject: "Analytical Reasoning",
        explanation: "Truk yang dibutuhkan = $120 \text{ tiang} / 15 \text{ tiang/truk} = 8 \text{ truk}$ minimal."
    },
    {
        question: "107. Konsumsi listrik rumah meningkat dari 200 kWh menjadi 220 kWh. Persentase kenaikan: (Analisis Data Teks)",
        options: ["a. 8%", "b. 10%", "c. 12%", "d. 15%"],
        answer: "b. 10%",
        subject: "Analytical Reasoning",
        explanation: "Persentase kenaikan = $(220 - 200) / 200 \times 100\% = 20 / 200 \times 100\% = 10\%$."
    },
    {
        question: "108. Sebuah proyek membutuhkan 5 teknisi, masing-masing bisa memperbaiki 3 gardu per hari. Jika ada 30 gardu, berapa hari selesai? (Analisis Data Teks)",
        options: ["a. 1", "b. 2", "c. 3", "d. 4"],
        answer: "b. 2",
        subject: "Analytical Reasoning",
        explanation: "Kecepatan tim = $5 \text{ teknisi} \times 3 \text{ gardu/hari} = 15 \text{ gardu/hari}$. Waktu = $30 \text{ gardu} / 15 \text{ gardu/hari} = 2 \text{ hari}$."
    },
    {
        question: "109. Produksi gardu per minggu: 12, 15, 18, 21. Pola linear → minggu berikutnya: (Analisis Data Teks)",
        options: ["a. 22", "b. 24", "c. 25", "d. 27"],
        answer: "b. 24",
        subject: "Analytical Reasoning",
        explanation: "Pola: Linear naik 3 setiap minggu. $21 + 3 = 24$."
    },
    {
        question: "110. Sebuah gardu memerlukan perawatan setiap 5 hari. Jika terakhir perawatan 3 hari lalu, kapan perawatan berikutnya? (Analisis Data Teks)",
        options: ["a. Hari ke-5", "b. Hari ke-6", "c. Hari ke-7", "d. Hari ke-8"],
        answer: "b. Hari ke-6",
        subject: "Analytical Reasoning",
        explanation: "Perawatan berikutnya adalah 5 hari setelah yang terakhir. Jika terakhir 3 hari lalu (hari ke-0), maka hari ini adalah hari ke-3. Perawatan berikutnya adalah hari ke-5. Atau, jika hari ini adalah hari ke-0, perawatan terakhir adalah hari -3. Perawatan berikutnya pada hari ke $5 - (-3) = 8$. (Jika pertanyaan maksudnya 'Kapan dari sekarang'): Jika terakhir $t_{-3}$, perawatan baru $t_{0} + (5 - 3) = 2$ hari lagi. Jika hari ini adalah hari ke-0, maka perawatan berikutnya hari ke-2. Mengikuti opsi: Jika hari ini hari ke-3 setelah perawatan, maka perawatan berikutnya adalah $5 - (3) = 2$ hari lagi (yaitu hari ke-5). Jika terlewat: Hari ke-3 lalu + 5 hari = Hari ke-8. Jawaban 'b' 6 hari."
    },
    {
        question: "111. PLN ingin menyeimbangkan pekerjaan gardu A, B, C selama 3 hari. Tidak ada gardu yang diperbaiki dua hari berturut-turut. Hari pertama A diperbaiki. Gardu yang diperbaiki hari ketiga: (Pemecahan Masalah Kompleks)",
        options: ["a. A", "b. B", "c. C", "d. Tidak dapat ditentukan"],
        answer: "a. A",
        subject: "Analytical Reasoning",
        explanation: "Hari 1: A. Hari 2: Harus B atau C (misal B). Hari 3: Harus A atau C (Bukan B). Agar seimbang dan tidak berturut-turut, Hari 3 harus A. Urutan A, B, A (atau A, C, A)."
    },
    {
        question: "112. Tiga teknisi (X, Y, Z) diperintahkan memperbaiki gardu: X tidak bekerja bersama Y. Z harus hadir setiap hari. Siapa yang bisa bekerja bersama Z? (Pemecahan Masalah Kompleks)",
        options: ["a. X", "b. Y", "c. X dan Y", "d. Tidak ada yang bisa"],
        answer: "c. X dan Y",
        subject: "Analytical Reasoning",
        explanation: "Z harus selalu hadir. X dan Y tidak boleh bersama. Maka Z bisa bekerja bersama X (Z X) atau bersama Y (Z Y), tetapi tidak bersama (X Y Z)."
    },
    {
        question: "113. Tren konsumsi listrik bulanan: 120, 150, 180, 210 → linear. Prediksi bulan berikutnya: (Pemecahan Masalah Kompleks)",
        options: ["a. 220", "b. 230", "c. 240", "d. 250"],
        answer: "c. 240",
        subject: "Analytical Reasoning",
        explanation: "Pola: Linear naik 30 setiap bulan. $210 + 30 = 240$."
    },
    {
        question: "114. PLN memiliki 6 truk, masing-masing mengangkut 20 tiang. Untuk mengangkut 100 tiang, truk minimal: (Pemecahan Masalah Kompleks)",
        options: ["a. 4", "b. 5", "c. 6", "d. 7"],
        answer: "b. 5",
        subject: "Analytical Reasoning",
        explanation: "Truk minimal = $100 \text{ tiang} / 20 \text{ tiang/truk} = 5 \text{ truk}$."
    },
    {
        question: "115. Empat teknisi A, B, C, D bekerja bergantian. Jika A dan B tidak bisa bekerja hari sama, C harus bekerja setiap hari. Siapa bisa bersamaan dengan C? (Pemecahan Masalah Kompleks)",
        options: ["a. A", "b. B", "c. D", "d. Semua"],
        answer: "d. Semua",
        subject: "Analytical Reasoning",
        explanation: "C selalu hadir. A dan B tidak boleh bersama. A dan B bisa bekerja dengan C secara bergantian. D tidak memiliki batasan. Jadi, A, B, dan D semua dapat bekerja bersama C (walau A dan B harus bergantian)."
    },
    {
        question: "116. Sebuah gardu mengkonsumsi 50 kWh, gardu lain 60, 55, 65, 70. Rata-rata konsumsi gardu: (Logika Hitungan & Persentase)",
        options: ["a. 58 kWh", "b. 60 kWh", "c. 62 kWh", "d. 64 kWh"],
        answer: "b. 60 kWh",
        subject: "Analytical Reasoning",
        explanation: "Total = $50+60+55+65+70 = 300 \text{ kWh}$. Rata-rata = $300 / 5 = 60 \text{ kWh}$."
    },
    {
        question: "117. Terdapat 5 gardu dengan konsumsi masing masing sebesar 50 kWh, 55 kWh, 60 kWh, 65 kWh, 70 kWh. Total konsumsi gardu 2 dan 5 adalah … (Logika Hitungan & Persentase)",
        options: ["a. 120", "b. 125", "c. 130", "d. 135"],
        answer: "b. 125",
        subject: "Analytical Reasoning",
        explanation: "Total = 55 + 70 = 125 \text{ kWh}$."
    },
    {
        question: "118. Berapa persentase gardu 3 (60 kWh) dari total konsumsi (300 kWh): (Logika Hitungan & Persentase)",
        options: ["a. 18%", "b. 20%", "c. 22%", "d. 24%"],
        answer: "b. 20%",
        subject: "Analytical Reasoning",
        explanation: "Persentase = 60/300=20%."
    },
    {
        question: "119. Terdapat 5 gardu dengan konsumsi masing masing sebesar 50 kWh, 55 kWh, 60 kWh, 65 kWh, 70 kWh. Kemudian gardu 1 ditambah dengan konsumsi 20 kWh, rata-ratanya sebesar: (Logika Hitungan & Persentase)",
        options: ["a. 62", "b. 63", "c. 64", "d. 65"],
        answer: "c. 64",
        subject: "Analytical Reasoning",
        explanation: "Total baru = 300 + 20 = 320 kWh. Rata-rata baru = $320 / 5 = 64 kWh."
    },
    {
        question: "120. Terdapat 5 gardu dengan masing masing konsumsi 50 kWh, 55 kWh, 60 kWh, 65 kWh, 70 kWh. Jika PLN memindahkan 5 kWh dari gardu 5 ke gardu 1, rata-rata tetap sama? (Logika Hitungan & Persentase)",
        options: ["a. Ya", "b. Tidak", "c. Tidak bisa dihitung", "d. Hanya jika gardu 2 dikurangi juga"],
        answer: "a. Ya",
        subject: "Analytical Reasoning",
        explanation: "Rata-rata dihitung dari total konsumsi. Memindahkan nilai di antara anggota kelompok (gardu) tidak mengubah nilai total. $300 / 5$ akan tetap $300 / 5$."
    }

];
