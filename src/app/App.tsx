
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"

export type PageName =
  | "home"
  | "about"
  | "philosophy"
  | "vision"
  | "services"
  | "products"
  | "process"
  | "contact"
  | "not-found"

type IconName = "camera" | "tools" | "laptop" | "wifi" | "phone" | "printer"

const services: {
  icon: IconName
  title: string
  description: string
}[] = [
  
{
  icon: "camera",
  title: "Pemasangan CCTV",
  description:
    "Layanan pemasangan CCTV berbagai merek untuk rumah, kantor, toko, gudang, dan area bisnis. Termasuk penyesuaian titik kamera serta kebutuhan sistem pemantauan.",
},
{
  icon: "tools",
  title: "Perbaikan CCTV",
  description:
    "Pemeriksaan dan perbaikan gangguan CCTV, seperti kamera tidak tampil, koneksi terputus, gangguan DVR/NVR, hingga kendala penyimpanan rekaman.",
},
{
  icon: "laptop",
  title: "Komputer & Laptop",
  description:
    "Perbaikan perangkat keras dan perangkat lunak, instalasi ulang sistem operasi, peningkatan RAM dan SSD, serta penggantian komponen sesuai kebutuhan.",
},
{
  icon: "wifi",
  title: "Wi-Fi & Jaringan",
  description:
    "Pemasangan Wi-Fi berbagai provider, pengaturan router, perluasan jangkauan sinyal, dan instalasi jaringan untuk rumah, kantor, maupun tempat usaha.",
},
{
  icon: "phone",
  title: "Handphone & Sparepart",
  description:
    "Perbaikan berbagai merek handphone serta penggantian komponen seperti LCD, baterai, konektor charger, speaker, kamera, dan komponen lainnya.",
},
{
  icon: "printer",
  title: "Perbaikan Printer",
  description:
    "Pemeriksaan dan perbaikan printer Epson dan Canon, penanganan masalah hasil cetak, gangguan mekanis, serta penggantian komponen sesuai kebutuhan.",
},
]

type ProductCategory =
  | "CCTV & Keamanan"
  | "Komputer & Laptop"
  | "Wi-Fi & Jaringan"
  | "Handphone & Sparepart"
  | "Printer & Perlengkapan"

type Product = {
  id: number
  name: string
  category: ProductCategory
  description: string
  price: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Paket CCTV 2 Kamera",
    category: "CCTV & Keamanan",
    description:
      "Paket pemasangan CCTV untuk rumah, toko, dan ruangan kecil. Solusi pemantauan keamanan yang dapat disesuaikan dengan kebutuhan lokasi.",
    price: "Hubungi Kami",
  },
  {
    id: 2,
    name: "Paket CCTV 4 Kamera",
    category: "CCTV & Keamanan",
    description:
      "Solusi sistem keamanan untuk rumah dan tempat usaha dengan empat titik pemantauan. Penempatan kamera disesuaikan dengan area yang ingin diawasi.",
    price: "Hubungi Kami",
  },
  {
    id: 3,
    name: "Paket CCTV 8 Kamera",
    category: "CCTV & Keamanan",
    description:
      "Paket pemantauan untuk kantor, gudang, dan area bisnis yang lebih luas dengan kebutuhan pengawasan beberapa titik sekaligus.",
    price: "Hubungi Kami",
  },
  {
    id: 4,
    name: "Upgrade RAM & SSD",
    category: "Komputer & Laptop",
    description:
      "Tingkatkan performa komputer dan laptop melalui penambahan kapasitas RAM atau penggunaan SSD agar perangkat lebih responsif.",
    price: "Hubungi Kami",
  },
  {
    id: 5,
    name: "Service Komputer & Laptop",
    category: "Komputer & Laptop",
    description:
      "Pemeriksaan dan perbaikan perangkat keras maupun perangkat lunak, instalasi ulang sistem operasi, serta penanganan berbagai kendala komputer dan laptop.",
    price: "Hubungi Kami",
  },
  {
    id: 6,
    name: "Paket Wi-Fi Rumah",
    category: "Wi-Fi & Jaringan",
    description:
      "Layanan pemasangan dan pengaturan jaringan Wi-Fi rumah, termasuk konfigurasi router serta penyesuaian jangkauan sinyal.",
    price: "Hubungi Kami",
  },
  {
    id: 7,
    name: "Paket Jaringan Kantor",
    category: "Wi-Fi & Jaringan",
    description:
      "Instalasi dan pengaturan jaringan kantor, router, serta access point untuk mendukung kebutuhan konektivitas dan aktivitas operasional.",
    price: "Hubungi Kami",
  },
  {
    id: 8,
    name: "Service Handphone",
    category: "Handphone & Sparepart",
    description:
      "Pemeriksaan dan perbaikan berbagai merek handphone, termasuk kendala LCD, baterai, konektor charger, speaker, kamera, dan komponen lainnya.",
    price: "Hubungi Kami",
  },
  {
    id: 9,
    name: "Sparepart Handphone",
    category: "Handphone & Sparepart",
    description:
      "Penyediaan berbagai komponen dan suku cadang handphone untuk kebutuhan penggantian maupun perbaikan perangkat.",
    price: "Hubungi Kami",
  },
  {
    id: 10,
    name: "Service Printer Epson & Canon",
    category: "Printer & Perlengkapan",
    description:
      "Pemeriksaan, perawatan, dan perbaikan printer Epson maupun Canon untuk menangani gangguan pencetakan dan masalah perangkat.",
    price: "Hubungi Kami",
  },
]

const values = [
  [
    "Integrity",
    "Menjunjung tinggi kejujuran, transparansi, dan tanggung jawab dalam setiap pekerjaan serta hubungan dengan pelanggan.",
  ],
  [
    "Professionalism",
    "Mengutamakan keahlian, ketelitian, kualitas hasil kerja, dan standar pelayanan profesional dalam setiap layanan.",
  ],
  [
    "Trust",
    "Membangun dan menjaga kepercayaan pelanggan melalui komitmen, komunikasi yang baik, serta pelayanan yang konsisten.",
  ],
  [
    "Innovation",
    "Terus mengikuti perkembangan teknologi dan menghadirkan solusi yang efektif sesuai kebutuhan pelanggan.",
  ],
  [
    "Sustainable Growth",
    "Mengembangkan perusahaan melalui peningkatan kualitas, kemitraan jangka panjang, dan pertumbuhan bisnis berkelanjutan.",
  ],
]

const missions = [
  "Memberikan layanan pemasangan, pemeliharaan, dan perbaikan teknologi secara profesional dengan mengutamakan kualitas dan ketepatan pekerjaan.",
  "Membangun kepercayaan pelanggan melalui kejujuran, tanggung jawab, transparansi, dan pelayanan yang konsisten.",
  "Mengembangkan keahlian serta mengikuti perkembangan teknologi untuk menghadirkan solusi yang tepat dan efektif.",
  "Menyediakan produk dan layanan teknologi yang relevan dengan kebutuhan rumah tangga, perusahaan, dan dunia usaha.",
  "Membangun hubungan jangka panjang dengan pelanggan dan mitra melalui inovasi, kualitas pelayanan, serta pertumbuhan berkelanjutan.",
]

const processes = [
  [
    "Konsultasi",
    "Pelanggan menyampaikan kebutuhan atau kendala perangkat. Tim MIR membantu memahami masalah, lokasi pekerjaan, dan solusi yang dibutuhkan.",
  ],
  [
    "Perencanaan",
    "Kami melakukan analisis kebutuhan, menentukan metode pengerjaan, menyiapkan perangkat atau komponen, serta menyampaikan estimasi biaya dan waktu pengerjaan.",
  ],
  [
    "Implementasi",
    "Pekerjaan pemasangan, perbaikan, atau konfigurasi dilakukan oleh tim MIR sesuai kesepakatan dengan mengutamakan ketelitian dan kualitas hasil.",
  ],
  [
    "Evaluasi",
    "Kami memeriksa hasil pekerjaan, memastikan fungsi layanan berjalan dengan baik, dan memberikan informasi serta dukungan apabila dibutuhkan.",
  ],
]

const promoSlides = [
  {
    image: "/images/banner-01.jpeg",
    alt: "Solusi teknologi untuk bisnis dan rumah Anda",
  },
  {
    image: "/images/banner-02.jpeg",
    alt: "Kami mendengarkan setiap keluhan Anda",
  },
  {
    image: "/images/banner-03.jpeg",
    alt: "Edukasi dan rekomendasi solusi yang tepat",
  },
  {
    image: "/images/banner-04.jpeg",
    alt: "Hasil berkualitas oleh tim profesional",
  },
  {
    image: "/images/banner-05.jpeg",
    alt: "Percayakan kebutuhan teknologi Anda kepada MIR Solution",
  },
]

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    camera: (
      <>
        <path d="M3 7.5h11v9H3z" />
        <path d="m14 10 7-3v10l-7-3M6 7.5l1-3h4l1 3" />
        <circle cx="8.5" cy="12" r="2" />
      </>
    ),
    tools: (
      <>
        <path d="m14.5 5.5 4-2-2 4-3 3-2-2 3-3Z" />
        <path d="m12 10-7.5 7.5a1.4 1.4 0 0 0 2 2L14 12" />
        <path d="m5 4 4 4M4 7l3-3" />
      </>
    ),
    laptop: (
      <>
        <rect x="4" y="4" width="16" height="12" rx="1.5" />
        <path d="M2 19h20M9 19l.8-3h4.4l.8 3" />
      </>
    ),
    wifi: (
      <>
        <path d="M3 9a14 14 0 0 1 18 0M6.5 12.5a9 9 0 0 1 11 0M10 16a4 4 0 0 1 4 0" />
        <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    phone: (
      <>
        <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
        <path d="M10 5h4M11 18.5h2" />
      </>
    ),
    printer: (
      <>
        <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <path d="M6 14h12v7H6z" />
        <circle cx="18" cy="12" r=".7" fill="currentColor" stroke="none" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      {children}
    </p>
  )
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" to="/" aria-label="MIR Solution Beranda">
      <img
        className={compact ? "brand-logo brand-logo-compact" : "brand-logo"}
        src="/images/mir-logo-baru.jpeg"
        alt="MIR Solution - The solution to all your problems"
      />
    </Link>
  )
}

function App({ page = "home" }: { page?: PageName }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentAd, setCurrentAd] = useState(0)
  const [isAdTransitioning, setIsAdTransitioning] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const [productSearch, setProductSearch] = useState("")
  const [productCategory, setProductCategory] = useState<ProductCategory | "Semua">("Semua")

  const closeMenu = () => setMenuOpen(false)

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "is-active" : undefined

  const showPreviousAd = () => {
    setIsAdTransitioning(true)
    setCurrentAd((current) =>
    current === 0 || current === promoSlides.length
      ? promoSlides.length - 1
      : current - 1,
  )
}

   const showNextAd = () => {
  setIsAdTransitioning(true)
  setCurrentAd((current) =>
    Math.min(current + 1, promoSlides.length),
      )
    }

      const handleAdTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
      if (
        event.target !== event.currentTarget ||
        event.propertyName !== "transform"
      ) {
        return
      }

      if (currentAd === promoSlides.length) {
        setIsAdTransitioning(false)
        setCurrentAd(0)
      }
    }
  const finishSwipe = (touchEnd: number) => {
    if (touchStart === null) return

    const distance = touchEnd - touchStart

    if (Math.abs(distance) > 50) {
      if (distance < 0) showNextAd()
      else showPreviousAd()
    }

    setTouchStart(null)
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
    closeMenu()
  }, [page])

 useEffect(() => {
  const timer = window.setInterval(() => {
    setCurrentAd((current) =>
      Math.min(current + 1, promoSlides.length),
    )
  }, 5000)

  return () => window.clearInterval(timer)
}, [])

    useEffect(() => {
      if (!isAdTransitioning) {
        const timer = window.setTimeout(() => {
          setIsAdTransitioning(true)
        }, 50)

        return () => window.clearTimeout(timer)
      }
    }, [isAdTransitioning])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand compact />

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Buka navigasi"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={menuOpen ? "nav-links is-open" : "nav-links"}
            aria-label="Navigasi utama"
          >
            <div className="nav-menu" aria-label="Menu utama">
              <NavLink to="/tentang" className={navClassName} onClick={closeMenu}>
                Tentang
              </NavLink>
              <NavLink to="/filosofi" className={navClassName} onClick={closeMenu}>
                Filosofi
              </NavLink>
              <NavLink to="/visi-misi" className={navClassName} onClick={closeMenu}>
                Visi & Misi
              </NavLink>
              <NavLink to="/layanan" className={navClassName} onClick={closeMenu}>
                Layanan
              </NavLink>
              <NavLink to="/produk" className={navClassName} onClick={closeMenu}>
               Produk & Paket
              </NavLink>
              <NavLink to="/proses" className={navClassName} onClick={closeMenu}>
                Proses
              </NavLink>
            </div>

            <div className="nav-action">
              <NavLink
                className={({ isActive }) =>
                  `nav-cta${isActive ? " is-active" : ""}`
                }
                to="/kontak"
                onClick={closeMenu}
              >
                Hubungi kami
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main className={`page-transition${page === "home" ? "" : " page-main"}`}>
        <section
          className={`hero${page === "home" ? "" : " route-hidden"}`}
          id="home"
        >
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <Eyebrow light>Mastery · Integrity · Revolution</Eyebrow>

              <h1>
                Solusi teknologi untuk <span>langkah yang lebih maju.</span>
              </h1>

              <p className="hero-lead">
                Kami membantu rumah dan bisnis bertumbuh melalui solusi
                teknologi yang andal, layanan profesional, dan kemitraan yang
                dibangun atas kepercayaan.
              </p>

              <div className="hero-actions">
                <Link className="button button-primary" to="/kontak">
                  Konsultasi sekarang <span aria-hidden="true">→</span>
                </Link>

                <Link className="button button-ghost" to="/layanan">
                  Jelajahi layanan
                </Link>
              </div>

              <div className="hero-proof">
                <div>
                  <strong>4+</strong>
                  <span>Tahun pengalaman</span>
                </div>
                <div>
                  <strong>6</strong>
                  <span>Layanan teknologi</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Komitmen layanan</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Identitas MIR Solution">
              <div className="visual-grid" />
              <div className="visual-ring ring-one" />
              <div className="visual-ring ring-two" />

              <img
                className="hero-logo-image"
                src="/images/mir-logo-baru.jpeg"
                alt="Logo MIR Solution"
              />

              <div className="visual-label label-top">
                <i />
                Built on trust
              </div>

              <div className="visual-label label-bottom">
                <i />
                Driven by growth
              </div>

              <p className="visual-caption">
                The solution to all your problems
              </p>
            </div>
          </div>

          <Link
            className="scroll-cue"
            to="/tentang"
            aria-label="Gulir ke bagian tentang"
          >
            <span />
          </Link>
        </section>

        <section
          className={`ad-carousel-section${page === "home" ? "" : " route-hidden"}`}
          aria-label="Penawaran MIR Solution"
        >
      <div className="container">
      <div
      className="ad-carousel"
      onTouchStart={(event) =>
        setTouchStart(event.touches[0].clientX)
      }
      onTouchEnd={(event) =>
        finishSwipe(event.changedTouches[0].clientX)
      }
      >
      <div
        className="ad-carousel-track"
       style={{
      transform: `translateX(-${currentAd * 100}%)`,
      transition: isAdTransitioning ? "transform 600ms ease-in-out" : "none",
    }}
        onTransitionEnd={handleAdTransitionEnd}
        aria-live="polite"
      >
       {[...promoSlides, promoSlides[0]].map((slide, index) => (
    <article
    className="ad-slide"
    aria-hidden={currentAd !== index}
    key={index === promoSlides.length ? "first-slide-clone" : slide.image}
   >
    <img
      className="ad-slide-image"
      src={slide.image}
      alt={slide.alt}
      draggable="false"
     />
     </article>
      ))} 
      </div>

      <button
        className="ad-carousel-arrow ad-carousel-prev"
        type="button"
        aria-label="Iklan sebelumnya"
        onClick={showPreviousAd}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        className="ad-carousel-arrow ad-carousel-next"
        type="button"
        aria-label="Iklan berikutnya"
        onClick={showNextAd}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>

      <div className="ad-carousel-dots" aria-label="Pilih iklan">
      {promoSlides.map((slide, index) => (
        <button
          className={
            (currentAd === promoSlides.length ? 0 : currentAd) === index
              ? "is-active"
              : ""
          }
          type="button"
          aria-label={`Tampilkan iklan ${index + 1}`}
          aria-current={
            (currentAd === promoSlides.length ? 0 : currentAd) === index
              ? "true"
              : undefined
          }
          onClick={() => {
            setIsAdTransitioning(true)
            setCurrentAd(index)
          }}
          key={slide.image}
        />
      ))}
      </div>
    </div>
  </div>
</section>

        <section
          className={`home-promo${page === "home" ? "" : " route-hidden"}`}
        >
          <div className="container">
            <div className="promo-card">
              <div className="promo-grid" />
              <div className="promo-glow" />

              <div className="promo-copy">
                <Eyebrow light>Solusi Teknologi Terpercaya</Eyebrow>

                <h2>
                  Satu mitra untuk semua kebutuhan teknologi Anda.
                </h2>

                <p>
                  Dari keamanan CCTV hingga perangkat kerja, MIR Solution siap
                  membantu rumah dan bisnis Anda dengan penanganan profesional.
                </p>

                <div className="promo-actions">
                  <Link className="button button-light" to="/layanan">
                    Lihat semua layanan <span aria-hidden="true">→</span>
                  </Link>

                  <Link className="promo-contact-link" to="/kontak">
                    Konsultasi gratis <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>

              <div className="promo-highlights">
                <div className="promo-logo">
                  <img src="/images/mir-logo-brand.webp" alt="MIR Solution" />
                </div>

                <div className="promo-points">
                  <div>
                    <strong>Respons cepat</strong>
                    <span>Konsultasi kebutuhan tanpa proses rumit</span>
                  </div>

                  <div>
                    <strong>Teknisi profesional</strong>
                    <span>Pengerjaan rapi, tepat, dan transparan</span>
                  </div>

                  <div>
                    <strong>Solusi menyeluruh</strong>
                    <span>Instalasi, perbaikan, dan dukungan lanjutan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
<section
  className={`section about${page === "home" || page === "about" ? "" : " route-hidden"}`}
  id="about"
>
  <div className="container about-grid">
    <div className="about-panel">
      <div className="about-number">04</div>

      <div>
        <p>Tahun membangun</p>
        <h3>keahlian & kepercayaan.</h3>
      </div>

      <span className="about-line" />

      <p className="about-quote">
        “Teknologi yang tepat seharusnya membuat hidup lebih mudah.”
      </p>
    </div>

    <div className="about-copy">
      <Eyebrow>01 · Tentang MIR</Eyebrow>

      <h2>Mitra solusi teknologi untuk kebutuhan Anda.</h2>

      <p>
        MIR SOLUTION adalah perusahaan yang bergerak di bidang
        layanan teknologi, perbaikan perangkat elektronik, serta
        penyediaan solusi teknologi untuk kebutuhan rumah tangga
        maupun bisnis.
      </p>

      <p>
        Dengan pengalaman selama empat tahun, kami berkomitmen
        memberikan pelayanan profesional melalui keahlian,
        integritas, dan tanggung jawab. Layanan kami mencakup
        pemasangan dan perbaikan CCTV, komputer dan laptop,
        jaringan Wi-Fi, handphone, serta printer.
      </p>

      <p>
        Kami percaya bahwa kepercayaan pelanggan dibangun melalui
        kualitas pekerjaan, pelayanan yang konsisten, dan solusi
        yang tepat. Karena itu, kami terus beradaptasi dan
        berkembang untuk memberikan nilai terbaik bagi setiap
        pelanggan.
      </p>

      <Link className="text-link" to="/filosofi">
        Kenali prinsip kami <span>↗</span>
      </Link>
    </div>
  </div>
</section>

<section
  className={`section philosophy${page === "home" || page === "philosophy" ? "" : " route-hidden"}`}
  id="philosophy"
>
  <div className="container">
    <div className="section-heading split-heading">
      <div>
        <Eyebrow>02 · Filosofi Kami</Eyebrow>
        <h2>
          Tiga prinsip.
          <br />
          Satu identitas.
        </h2>
      </div>

      <p>
        Mastery, Integrity, dan Revolution merupakan landasan
        yang membentuk karakter, kualitas pelayanan, serta arah
        perkembangan MIR SOLUTION.
      </p>
    </div>

    <div className="philosophy-grid">
      {[
        [
          "M",
          "Mastery",
          "Keahlian",
          "Kami mengutamakan penguasaan teknologi, keterampilan teknis, dan pengalaman kerja untuk memberikan hasil pemasangan, perbaikan, serta pelayanan yang profesional dan berkualitas.",
        ],
        [
          "I",
          "Integrity",
          "Integritas",
          "Kami menjunjung tinggi kejujuran, tanggung jawab, transparansi, dan komitmen dalam setiap pekerjaan. Kepercayaan pelanggan adalah aset yang selalu kami jaga.",
        ],
        [
          "R",
          "Revolution",
          "Transformasi",
          "Kami terus berinovasi, mengikuti perkembangan teknologi, dan beradaptasi terhadap kebutuhan pelanggan untuk menghadirkan solusi yang relevan dan pertumbuhan berkelanjutan.",
        ],
      ].map(([letter, title, subtitle, description], index) => (
        <article className="principle-card" key={letter}>
          <span className="card-index">0{index + 1}</span>
          <div className="principle-letter">{letter}</div>
          <p className="principle-subtitle">{subtitle}</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  </div>
</section>

        <section
          className={`section vision${page === "home" || page === "vision" ? "" : " route-hidden"}`}
          id="vision"
        >
          <div className="vision-glow" />

          <div className="container vision-grid">
            <div className="vision-copy">
              <Eyebrow light>03 · Visi & Misi</Eyebrow>

              <h2>Mitra terpercaya untuk pertumbuhan berkelanjutan.</h2>

              <p>
                Menjadi perusahaan profesional dan berdaya saing yang memberikan
                nilai nyata bagi pelanggan, mitra, dan lingkungan bisnis.
              </p>

              <div className="vision-statement">
                <span>Visi kami</span>
                <blockquote>
                  “Built on Trust.
                  <br />
                  Driven by Growth.”
                </blockquote>
              </div>
            </div>

            <div className="mission-list">
              {missions.map((mission, index) => (
                <div className="mission-item" key={mission}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`section services${page === "home" || page === "services" ? "" : " route-hidden"}`}
          id="services"
        >
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <Eyebrow>Layanan Kami</Eyebrow>
                <h2>
                  Solusi teknologi,
                  <br />
                  tanpa kerumitan.
                </h2>
              </div>

              <p>
                Layanan fleksibel yang disesuaikan dengan kebutuhan operasional
                rumah dan bisnis Anda.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="service-icon">
                    <Icon name={service.icon} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link
                    to="/kontak"
                    aria-label={`Konsultasi tentang ${service.title}`}
                  >
                    Konsultasikan <span>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        <section
          className={`section products${page === "products" ? "" : " route-hidden"}`}
          id="products"
        >
          <div className="container">
            <div className="section-heading">
              <Eyebrow>Produk & Paket</Eyebrow>
              <h2>
                Temukan solusi
                <br />
                sesuai kebutuhan Anda.
              </h2>
              <p>
                Pilihan produk, paket, dan layanan teknologi dari MIR SOLUTION.
              </p>
            </div>

            <div className="product-toolbar">
              <input
                className="product-search"
                type="search"
                placeholder="Cari produk atau layanan..."
                value={productSearch}
                onChange={(event) => setProductSearch(event.target.value)}
                aria-label="Cari produk"
              />

              <div className="product-filters">
                {(
                  [
                    "Semua",
                    "CCTV & Keamanan",
                    "Komputer & Laptop",
                    "Wi-Fi & Jaringan",
                    "Handphone & Sparepart",
                    "Printer & Perlengkapan",
                  ] as const
                ).map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={`product-filter${productCategory === category ? " active" : ""}`}
                    onClick={() => setProductCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-grid">
              {products
                .filter((product) => {
                  const keyword = productSearch.toLowerCase().trim()
                  const matchesSearch =
                    product.name.toLowerCase().includes(keyword) ||
                    product.description.toLowerCase().includes(keyword)

                  const matchesCategory =
                    productCategory === "Semua" ||
                    product.category === productCategory

                  return matchesSearch && matchesCategory
                })
                .map((product) => (
                  <article className="product-card" key={product.id}>
                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <div className="product-card-bottom">
                      <strong>{product.price}</strong>
                      <Link
                        to="/kontak"
                        aria-label={`Konsultasi tentang ${product.name}`}
                      >
                        Konsultasi <span>→</span>
                      </Link>
                    </div>
                  </article>
                ))}
            </div>

            {products.filter((product) => {
              const keyword = productSearch.toLowerCase().trim()
              const matchesSearch =
                product.name.toLowerCase().includes(keyword) ||
                product.description.toLowerCase().includes(keyword)
              const matchesCategory =
                productCategory === "Semua" ||
                product.category === productCategory

              return matchesSearch && matchesCategory
            }).length === 0 && (
              <p className="product-empty">
                Produk tidak ditemukan. Coba kata kunci atau kategori lain.
              </p>
            )}
          </div>
        </section>

        <section
          className={`section values${page === "home" || page === "philosophy" ? "" : " route-hidden"}`}
          id="values"
        >
          <div className="container values-wrap">
            <div className="values-title">
              <Eyebrow>04 · Nilai Perusahaan</Eyebrow>
              <h2>Standar yang selalu kami pegang.</h2>
            </div>
            <div className="values-list">
              {values.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`section process${page === "home" || page === "process" ? "" : " route-hidden"}`}
          id="process"
        >
          <div className="container">
            <div className="section-heading center-heading">
              <Eyebrow>Cara Kami Bekerja</Eyebrow>
              <h2>Jelas dari awal hingga selesai.</h2>
              <p>
                Proses terstruktur dan transparan agar setiap pekerjaan berjalan
                tepat sasaran.
              </p>
            </div>
            <div className="process-grid">
              {processes.map(([title, description], index) => (
                <article className="process-card" key={title}>
                  <div className="process-step">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="process-connector" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`contact${page === "home" || page === "contact" ? "" : " route-hidden"}`}
          id="contact"
        >
          <div className="contact-grid" />
          <div className="container contact-inner">
            <Eyebrow light>Mari Terhubung</Eyebrow>
            <h2>
              Punya masalah teknologi?
              <br />
              <span>Mari kita selesaikan.</span>
            </h2>
            <p>
              Ceritakan kebutuhan Anda. Tim MIR siap membantu menemukan solusi
              yang tepat, efektif, dan sesuai kebutuhan.
            </p>
<form
  className="consultation-form"
  onSubmit={(event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = String(formData.get("name") || "")
    const phone = String(formData.get("phone") || "")
    const address = String(formData.get("address") || "")
    const service = String(formData.get("service") || "")
    const message = String(formData.get("message") || "")

    const whatsappMessage = [
      "Halo MIR SOLUTION, saya ingin melakukan konsultasi.",
      "",
      `Nama: ${name}`,
      `Nomor WhatsApp: ${phone}`,
      `Alamat: ${address}`,
      `Layanan: ${service}`,
      `Pesan: ${message}`,
    ].join("\n")

    const whatsappURL = `https://wa.me/6281275298975?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappURL, "_blank", "noopener,noreferrer")
  }}
>
  <h3>Formulir Konsultasi</h3>

  <input
    type="text"
    name="name"
    placeholder="Nama lengkap Anda"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Nomor WhatsApp Anda"
    required
  />

  <textarea
  name="address"
  placeholder="Alamat lengkap Anda (jalan, nomor rumah, kelurahan, kecamatan, kota)"
  rows={2}
  required
  />

<select name="service" required defaultValue="">
  <option value="" disabled>
    Pilih layanan yang dibutuhkan
  </option>
  <option>Pemasangan CCTV</option>
  <option>Perbaikan CCTV</option>
  <option>Komputer & Laptop</option>
  <option>Upgrade RAM & SSD</option>
  <option>Pemasangan Wi-Fi</option>
  <option>Jaringan Kantor</option>
  <option>Perbaikan Handphone</option>
  <option>Sparepart Handphone</option>
  <option>Perbaikan Printer Epson & Canon</option>
  <option>Lainnya</option>
</select>

  <textarea
    name="message"
    placeholder="Ceritakan kebutuhan atau masalah Anda..."
    rows={4}
    required
  />

  <button type="submit" className="button button-primary">
    Kirim Konsultasi via WhatsApp ↗
  </button>
</form>
          </div>
        </section>

        <section
          className={`section not-found${page === "not-found" ? "" : " route-hidden"}`}
        >
          <div className="container not-found-inner">
            <Eyebrow>404 · Halaman tidak ditemukan</Eyebrow>
            <h1>Halaman yang Anda cari tidak tersedia.</h1>
            <p>
              Alamat mungkin berubah atau halaman telah dipindahkan. Kembali ke
              beranda untuk melanjutkan.
            </p>
            <Link className="button button-primary" to="/">
              Kembali ke beranda
            </Link>
          </div>
        </section>
      </main>

      <footer className="footer">
  <div className="container footer-grid">
    {/* IDENTITAS PERUSAHAAN */}
    <div className="footer-brand">
      <Brand compact />

      <p>
        MIR SOLUTION merupakan mitra solusi teknologi profesional
        yang membantu kebutuhan rumah tangga dan bisnis melalui
        layanan berkualitas, terpercaya, dan berorientasi pada solusi.
      </p>

      <p className="footer-tagline">
        Mastery · Integrity · Revolution
      </p>
    </div>

    {/* NAVIGASI */}
    <div className="footer-column">
      <h3>Navigasi</h3>
      <Link to="/">Beranda</Link>
      <Link to="/tentang">Tentang Kami</Link>
      <Link to="/filosofi">Filosofi MIR</Link>
      <Link to="/visi-misi">Visi & Misi</Link>
      <Link to="/layanan">Layanan</Link>
      <Link to="/produk">Produk</Link>
      <Link to="/proses">Proses</Link>
      <Link to="/kontak">Kontak</Link>
    </div>

    {/* LAYANAN */}
    <div className="footer-column">
      <h3>Layanan Kami</h3>
      <Link to="/layanan">Pemasangan & Perbaikan CCTV</Link>
      <Link to="/layanan">Komputer & Laptop</Link>
      <Link to="/layanan">Wi-Fi & Jaringan</Link>
      <Link to="/layanan">Handphone & Sparepart</Link>
      <Link to="/layanan">Printer Epson & Canon</Link>
    </div>

    {/* KONTAK */}
    <div className="footer-column">
  <h3>Hubungi Kami</h3>

  <h4 className="footer-social-title">Ikuti Media Sosial Kami</h4>

<a
  href="https://www.instagram.com/mirsolution_/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-social-link"
>
  Instagram — @mirsolution_ ↗
</a>

<a
  href="https://www.facebook.com/share/1FGaYPo1zv/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-social-link"
>
  Facebook MIR SOLUTION ↗
</a>

<a
  href="https://www.tiktok.com/@mirsolution_"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-social-link"
>
  TikTok — @mirsolution_ ↗
</a>

 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mirsolution8@gmail.com&su=Konsultasi%20MIR%20SOLUTION"
  target="_blank"
  rel="noopener noreferrer"
>
  mirsolution8@gmail.com
</a>

  <a
    href="https://wa.me/6281275298975"
    target="_blank"
    rel="noopener noreferrer"
  >
    +62 812 7529 8975
  </a>

  <p className="footer-address">
    Dekat Master Gold Generation,
    <br />
    Jl. Letjend Jamin Ginting No. 76,
    <br />
    Rambung Bar., Kec. Binjai Selatan,
    <br />
    Kota Binjai, Sumatera Utara 20723.
  </p>

  <div className="footer-hours">
  <h4>Jam Operasional</h4>

  <p>Senin – Sabtu</p>
  <strong>09.00 – 17.00 WIB</strong>

  <p>Minggu</p>
  <strong>Tutup</strong>
</div>

  <a
    href="https://www.google.com/maps/search/?api=1&query=Jl.+Letjend+Jamin+Ginting+No.+76+Binjai+Sumatera+Utara"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-contact-link"
  >
    Lihat Lokasi di Google Maps ↗
  </a>

  <a
    href="https://wa.me/6281275298975"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-contact-link"
  >
    Konsultasi via WhatsApp ↗
  </a>
</div>
</div>

  {/* COPYRIGHT */}
  <div className="container footer-bottom">
    <p>© {new Date().getFullYear()} MIR SOLUTION. All rights reserved.</p>
    <p>Built on Trust. Driven by Growth.</p>
  </div>

</footer>

{/* FLOATING SOCIAL MEDIA BUTTONS */}
<div className="floating-socials">
  <a
    href="https://www.instagram.com/mirsolution_/"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-social instagram"
    aria-label="Instagram MIR SOLUTION"
    title="Instagram"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
    </svg>
  </a>

  <a
    href="https://www.facebook.com/share/1FGaYPo1zv/"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-social facebook"
    aria-label="Facebook MIR SOLUTION"
    title="Facebook"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3H10v8h3.5Z"/>
    </svg>
  </a>

  <a
    href="https://www.tiktok.com/@mirsolution_"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-social tiktok"
    aria-label="TikTok MIR SOLUTION"
    title="TikTok"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M19.6 7.1a6.4 6.4 0 0 1-3.9-1.3v8.1a6 6 0 1 1-5.2-5.9v3.2a2.9 2.9 0 1 0 2 2.7V2.5h3.2c.2 2 1.8 3.7 3.9 3.9v.7Z"/>
    </svg>
  </a>
</div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/6281275298975?text=Halo%20MIR%20SOLUTION%2C%20saya%20ingin%20bertanya%20tentang%20layanan."
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi MIR SOLUTION melalui WhatsApp"
        title="Konsultasi via WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M16 3C8.83 3 3 8.83 3 16c0 2.3.61 4.56 1.77 6.54L3 29l6.63-1.74A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3Zm0 23.7c-2.04 0-4.04-.55-5.78-1.6l-.41-.24-3.94 1.03 1.05-3.84-.27-.42A10.64 10.64 0 1 1 16 26.7Zm5.85-7.98c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.7 0 1.59 1.16 3.13 1.32 3.34.16.22 2.29 3.5 5.55 4.9.78.34 1.38.55 1.85.7.78.25 1.49.21 2.05.13.63-.1 1.9-.78 2.16-1.54.27-.76.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z"
          />
        </svg>
      </a>

    </div>
  )
}

export default App
