import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"

export type PageName = "home" | "about" | "philosophy" | "vision" | "services" | "process" | "contact" | "not-found"

type IconName = "camera" | "tools" | "laptop" | "wifi" | "phone" | "printer"

const services: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "camera",
    title: "Pemasangan CCTV",
    description:
      "Instalasi CCTV semua merek untuk rumah, kantor, toko, gudang, dan area lainnya.",
  },
  {
    icon: "tools",
    title: "Perbaikan CCTV",
    description:
      "Penanganan cepat dan profesional untuk berbagai kendala sistem keamanan Anda.",
  },
  {
    icon: "laptop",
    title: "Komputer & Laptop",
    description:
      "Perbaikan software dan hardware, instalasi ulang, serta penggantian sparepart.",
  },
  {
    icon: "wifi",
    title: "Pemasangan Wi-Fi",
    description:
      "Koneksi internet stabil dan cepat dari berbagai provider untuk rumah atau bisnis.",
  },
  {
    icon: "phone",
    title: "Perbaikan Handphone",
    description:
      "Servis berbagai merek dan penyediaan sparepart berkualitas, dari LCD hingga baterai.",
  },
  {
    icon: "printer",
    title: "Perbaikan Printer",
    description:
      "Servis printer Epson dan Canon, penanganan masalah cetak, serta penggantian sparepart.",
  },
]

const values = [
  ["Integrity", "Menjunjung tinggi kejujuran dan tanggung jawab."],
  ["Professionalism", "Mengutamakan standar kerja dan pelayanan profesional."],
  ["Trust", "Membangun hubungan berdasarkan kepercayaan dan konsistensi."],
  ["Innovation", "Terbuka terhadap perubahan, teknologi, dan gagasan baru."],
  ["Sustainable Growth", "Mengembangkan usaha dengan visi jangka panjang."],
]

const missions = [
  "Mengutamakan kualitas dan profesionalisme dalam setiap produk, layanan, dan aktivitas bisnis.",
  "Membangun kepercayaan jangka panjang melalui integritas, tanggung jawab, dan pelayanan yang konsisten.",
  "Mendorong inovasi dan pengembangan usaha untuk menjawab kebutuhan pasar yang terus berkembang.",
  "Memperluas peluang dan kemitraan strategis yang mendukung pertumbuhan bisnis secara berkelanjutan.",
  "Menciptakan nilai tambah melalui solusi yang relevan, efektif, dan berorientasi pada kebutuhan.",
]

const processes = [
  ["Konsultasi", "Memahami kebutuhan, tujuan, dan tantangan pelanggan."],
  ["Perencanaan", "Menyusun pendekatan dan solusi yang paling relevan."],
  [
    "Implementasi",
    "Menjalankan pekerjaan sesuai ruang lingkup yang disepakati.",
  ],
  ["Evaluasi", "Meninjau hasil dan mendukung kebutuhan lanjutan."],
]

const promoSlides: {
  icon: IconName
  label: string
  title: string
  description: string
  action: string
  to: string
  theme: string
}[] = [
  {
    icon: "camera",
    label: "Keamanan Rumah & Bisnis",
    title: "Pantau aset penting Anda dari mana saja.",
    description:
      "Instalasi CCTV rapi dan profesional dengan solusi yang disesuaikan untuk setiap lokasi.",
    action: "Konsultasi CCTV",
    to: "/kontak",
    theme: "ad-slide-blue",
  },
  {
    icon: "wifi",
    label: "Koneksi Lebih Stabil",
    title: "Wi-Fi lancar untuk setiap sudut ruangan.",
    description:
      "Perencanaan dan pemasangan jaringan untuk rumah, kantor, toko, dan kebutuhan operasional bisnis.",
    action: "Lihat layanan jaringan",
    to: "/layanan",
    theme: "ad-slide-cyan",
  },
  {
    icon: "laptop",
    label: "Perangkat Siap Digunakan",
    title: "Komputer bermasalah? Kami bantu bereskan.",
    description:
      "Perbaikan software dan hardware dengan pemeriksaan transparan serta penanganan yang tepat.",
    action: "Konsultasikan perangkat",
    to: "/kontak",
    theme: "ad-slide-indigo",
  },
]

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" to="/" aria-label="MIR Solution Beranda">
      <img
        className={compact ? "brand-logo brand-logo-compact" : "brand-logo"}
        src="/images/mir-logo-brand.webp"
        alt="MIR Solution"
      />
    </Link>
  )
}

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
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>
}

function App({ page = "home" }: { page?: PageName }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentAd, setCurrentAd] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const closeMenu = () => setMenuOpen(false)
  const navClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? "is-active" : undefined
  const showPreviousAd = () =>
    setCurrentAd((current) =>
      current === 0 ? promoSlides.length - 1 : current - 1,
    )
  const showNextAd = () =>
    setCurrentAd((current) => (current + 1) % promoSlides.length)
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
  }, [page])

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
              <NavLink
                to="/tentang"
                className={navClassName}
                onClick={closeMenu}
              >
                Tentang
              </NavLink>
              <NavLink
                to="/filosofi"
                className={navClassName}
                onClick={closeMenu}
              >
                Filosofi
              </NavLink>
              <NavLink
                to="/visi-misi"
                className={navClassName}
                onClick={closeMenu}
              >
                Visi & Misi
              </NavLink>
              <NavLink
                to="/layanan"
                className={navClassName}
                onClick={closeMenu}
              >
                Layanan
              </NavLink>
              <NavLink
                to="/proses"
                className={navClassName}
                onClick={closeMenu}
              >
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
                src="/images/mir-logo.jpeg"
                alt="Logo MIR Solution — Smart Security, Clear Vision, Total Protection"
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
          className={`ad-carousel-section${
            page === "home" ? "" : " route-hidden"
          }`}
          aria-label="Penawaran MIR Solution"
        >
          <div className="container">
            <div
              className="ad-carousel"
              onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
              onTouchEnd={(event) =>
                finishSwipe(event.changedTouches[0].clientX)
              }
            >
              <div
                className="ad-carousel-track"
                style={{ transform: `translateX(-${currentAd * 100}%)` }}
                aria-live="polite"
              >
                {promoSlides.map((slide, index) => (
                  <article
                    className={`ad-slide ${slide.theme}`}
                    aria-hidden={currentAd !== index}
                    key={slide.title}
                  >
                    <div className="ad-slide-pattern" aria-hidden="true" />
                    <div className="ad-slide-copy">
                      <span className="ad-slide-label">{slide.label}</span>
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                      <Link
                        className="button ad-slide-button"
                        to={slide.to}
                        tabIndex={currentAd === index ? 0 : -1}
                      >
                        {slide.action} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <div className="ad-slide-art" aria-hidden="true">
                      <span className="ad-slide-ring ad-slide-ring-large" />
                      <span className="ad-slide-ring ad-slide-ring-small" />
                      <div className="ad-slide-icon">
                        <Icon name={slide.icon} />
                      </div>
                      <span className="ad-slide-brand">MIR Solution</span>
                    </div>
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
                    className={currentAd === index ? "is-active" : ""}
                    type="button"
                    aria-label={`Tampilkan iklan ${index + 1}: ${slide.label}`}
                    aria-current={currentAd === index ? "true" : undefined}
                    onClick={() => setCurrentAd(index)}
                    key={slide.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={`home-promo${page === "home" ? "" : " route-hidden"}`}
          aria-labelledby="home-promo-title"
        >
          <div className="container">
            <div className="promo-card">
              <div className="promo-grid" aria-hidden="true" />
              <div className="promo-glow" aria-hidden="true" />
              <div className="promo-copy">
                <Eyebrow light>Solusi Teknologi Terpercaya</Eyebrow>
                <h2 id="home-promo-title">
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
          className={`section about${
            page === "home" || page === "about" ? "" : " route-hidden"
          }`}
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
              <h2>Membangun usaha dengan keahlian dan kepercayaan.</h2>
              <p>
                MIR merupakan identitas bisnis yang dibangun atas dasar
                keahlian, integritas, dan semangat untuk terus berkembang.
                Selama empat tahun, kami berkomitmen menghadirkan kualitas kerja
                serta hubungan jangka panjang yang berlandaskan kepercayaan.
              </p>
              <p>
                Kami percaya keberhasilan bukan hanya pencapaian hari ini,
                tetapi juga kemampuan untuk beradaptasi, berinovasi, dan
                menciptakan nilai tambah bagi pelanggan.
              </p>
              <Link className="text-link" to="/filosofi">
                Kenali prinsip kami <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section
          className={`section philosophy${
            page === "home" || page === "philosophy" ? "" : " route-hidden"
          }`}
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
                Nilai utama yang memandu cara kami bekerja, melayani, dan
                bertumbuh bersama pelanggan.
              </p>
            </div>
            <div className="philosophy-grid">
              {[
                [
                  "M",
                  "Mastery",
                  "Keahlian",
                  "Penguasaan bidang usaha, pengalaman, dan komitmen terhadap kualitas hasil kerja.",
                ],
                [
                  "I",
                  "Integrity",
                  "Integritas",
                  "Kejujuran, tanggung jawab, transparansi, dan konsistensi dalam setiap hubungan.",
                ],
                [
                  "R",
                  "Revolution",
                  "Transformasi",
                  "Semangat berinovasi, beradaptasi, dan menciptakan peluang pertumbuhan baru.",
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
          className={`section vision${
            page === "home" || page === "vision" ? "" : " route-hidden"
          }`}
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
          className={`section services${
            page === "home" || page === "services" ? "" : " route-hidden"
          }`}
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
          className={`section values${
            page === "home" || page === "philosophy" ? "" : " route-hidden"
          }`}
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
          className={`section process${
            page === "home" || page === "process" ? "" : " route-hidden"
          }`}
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
          className={`contact${
            page === "home" || page === "contact" ? "" : " route-hidden"
          }`}
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
            <a
              className="button button-light"
              href="https://wa.me/6281275298975"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mulai percakapan di WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section
          className={`section not-found${
            page === "not-found" ? "" : " route-hidden"
          }`}
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
          <div className="footer-brand">
            <Brand compact />
            <p>
              Mitra solusi teknologi profesional untuk rumah dan bisnis di
              Indonesia.
            </p>
          </div>
          <div>
            <h3>Navigasi</h3>
            <Link to="/tentang">Tentang</Link>
            <Link to="/filosofi">Filosofi MIR</Link>
            <Link to="/layanan">Layanan</Link>
            <Link to="/proses">Proses</Link>
          </div>
          <div>
            <h3>Kontak</h3>
            <a href="mailto:mirsolution8@gmail.com">mirsolution8@gmail.com</a>
            <a
              href="https://wa.me/6281275298975"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 812 7529 8975
            </a>
            <p>Indonesia</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 MIR Solution. All rights reserved.</p>
          <p>Mastery · Integrity · Revolution</p>
        </div>
      </footer>
    </div>
  )
}

export default App
