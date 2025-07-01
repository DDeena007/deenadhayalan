import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const lightTheme = {
  mainBg: { minHeight: "100vh", background: "#fff", fontFamily: "-apple-system, Roboto, sans-serif, serif" },
  bottomNavStyle: { position: "fixed", left: "50%", bottom: 32, transform: "translateX(-50%)", background: "#fff", borderRadius: 32, boxShadow: "0 4px 24px rgba(60,60,120,0.10)", display: "flex", gap: 36, padding: "12px 36px", zIndex: 100, alignItems: "center", border: "1px solid #e5e7eb" },
  navLink: { color: "#232129", fontWeight: 600, fontSize: 18, textDecoration: "none", cursor: "pointer", transition: "color 0.2s", border: "none", background: "none", outline: "none" },
  navLinkActive: { color: "#18181b", borderBottom: "2px solid #232129" },
  heroImg: { width: 160, height: 160, borderRadius: "50%", objectFit: "cover", border: "4px solid #232129", marginBottom: 24, boxShadow: "0 4px 24px rgba(60,60,120,0.10)" },
  heroName: { fontSize: 48, fontWeight: 800, color: "#18181b", margin: "0 0 8px 0", textShadow: "none" },
  heroSubtitle: { fontSize: 22, color: "#232129", marginBottom: 12, textShadow: "none" },
  animatedText: { fontSize: 18, color: "#64748b", minHeight: 28, marginBottom: 24, fontFamily: "monospace", textShadow: "none" },
  iconLink: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", background: "#f3f4f6", color: "#232129", fontSize: 22, transition: "background 0.2s, color 0.2s", textDecoration: "none", boxShadow: "0 2px 8px rgba(60,60,120,0.08)" },
  sectionTitle: { fontSize: 32, fontWeight: 700, color: "#232129", margin: "40px 0 16px 0", textAlign: "left" as const, textShadow: "none" },
  sectionText: { fontSize: 17, color: "#374151", textAlign: "left" as const, margin: "0 0 18px 0", textShadow: "none" },
  skillBox: { background: "#f3f4f6", borderRadius: 12, boxShadow: "0 2px 8px rgba(60,60,120,0.07)", padding: "16px 24px", fontWeight: 600, color: "#232129", fontSize: 16, minWidth: 160, textAlign: "center", border: "1px solid #e5e7eb", letterSpacing: 1 },
  projectCard: { background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(60,60,120,0.10)", padding: 24, cursor: "pointer", transition: "transform 0.15s, box-shadow 0.15s", border: "1px solid #e5e7eb", textAlign: "left" as const, position: "relative" as const, color: "#18181b" },
  projectCardHover: { background: "#fff", borderRadius: 16, boxShadow: "0 6px 24px rgba(60,60,120,0.16)", padding: 24, cursor: "pointer", border: "1px solid #e5e7eb", textAlign: "left" as const, position: "relative" as const, color: "#18181b", transform: "translateY(-4px) scale(1.03)" },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(60,60,120,0.10)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" },
  modalContent: { background: "#fff", borderRadius: 18, boxShadow: "0 8px 32px rgba(60,60,120,0.18)", padding: 36, maxWidth: 420, width: "90vw", textAlign: "left", position: "relative" },
  closeBtn: { position: "absolute", top: 16, right: 16, background: "#f3f4f6", border: "none", borderRadius: "50%", width: 32, height: 32, fontSize: 20, color: "#232129", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(60,60,120,0.08)" },
};
const darkTheme = {
  mainBg: { minHeight: "100vh", background: "#18181b", fontFamily: "-apple-system, Roboto, sans-serif, serif" },
  bottomNavStyle: { position: "fixed", left: "50%", bottom: 32, transform: "translateX(-50%)", background: "#232129", borderRadius: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.18)", display: "flex", gap: 36, padding: "12px 36px", zIndex: 100, alignItems: "center", border: "1px solid #232129" },
  navLink: { color: "#f3f4f6", fontWeight: 600, fontSize: 18, textDecoration: "none", cursor: "pointer", transition: "color 0.2s", border: "none", background: "none", outline: "none" },
  navLinkActive: { color: "#fff", borderBottom: "2px solid #fff" },
  heroImg: { width: 160, height: 160, borderRadius: "50%", objectFit: "cover", border: "4px solid #fff", marginBottom: 24, boxShadow: "0 4px 24px rgba(0,0,0,0.18)" },
  heroName: { fontSize: 48, fontWeight: 800, color: "#fff", margin: "0 0 8px 0", textShadow: "none" },
  heroSubtitle: { fontSize: 22, color: "#f3f4f6", marginBottom: 12, textShadow: "none" },
  animatedText: { fontSize: 18, color: "#a1a1aa", minHeight: 28, marginBottom: 24, fontFamily: "monospace", textShadow: "none" },
  iconLink: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", background: "#232129", color: "#fff", fontSize: 22, transition: "background 0.2s, color 0.2s", textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.10)" },
  sectionTitle: { fontSize: 32, fontWeight: 700, color: "#fff", margin: "40px 0 16px 0", textAlign: "left" as const, textShadow: "none" },
  sectionText: { fontSize: 17, color: "#fff", textAlign: "left" as const, margin: "0 0 18px 0", textShadow: "none" },
  skillBox: { background: "#232129", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", padding: "16px 24px", fontWeight: 600, color: "#fff", fontSize: 16, minWidth: 160, textAlign: "center", border: "1px solid #232129", letterSpacing: 1 },
  projectCard: { background: "#232129", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.10)", padding: 24, cursor: "pointer", transition: "transform 0.15s, box-shadow 0.15s", border: "1px solid #232129", textAlign: "left" as const, position: "relative" as const, color: "#fff" },
  projectCardHover: { background: "#232129", borderRadius: 16, boxShadow: "0 6px 24px rgba(0,0,0,0.16)", padding: 24, cursor: "pointer", border: "1px solid #232129", textAlign: "left" as const, position: "relative" as const, color: "#fff", transform: "translateY(-4px) scale(1.03)" },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.40)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" },
  modalContent: { background: "#232129", borderRadius: 18, boxShadow: "0 8px 32px rgba(0,0,0,0.18)", padding: 36, maxWidth: 420, width: "90vw", textAlign: "left", position: "relative" },
  closeBtn: { position: "absolute", top: 16, right: 16, background: "#18181b", border: "none", borderRadius: "50%", width: 32, height: 32, fontSize: 20, color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" },
};

const mainBg: React.CSSProperties = {
  minHeight: "100vh",
  minWidth: "100vw",
  width: "100vw",
  background: "#fff", // pure white background
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  overflowX: "hidden",
}
const bottomNavStyle: React.CSSProperties = {
  position: "fixed",
  left: "50%",
  bottom: 32,
  transform: "translateX(-50%)",
  background: "#fff",
  borderRadius: 32,
  boxShadow: "0 4px 24px rgba(60,60,120,0.10)",
  display: "flex",
  gap: 36,
  padding: "12px 36px",
  zIndex: 100,
  alignItems: "center",
  border: "1px solid #e5e7eb",
}
const navLink: React.CSSProperties = {
  color: "#232129",
  fontWeight: 600,
  fontSize: 18,
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.2s",
  border: "none",
  background: "none",
  outline: "none",
}
const navLinkActive: React.CSSProperties = {
  ...navLink,
  color: "#18181b",
  borderBottom: "2px solid #232129",
}
const heroSection: React.CSSProperties = {
  minHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "60px 0 40px 0",
}
const skillsGrid: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  margin: "16px 0 0 0",
  justifyContent: "center",
}
const iconRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: 20,
  margin: "16px 0 0 0",
}
const iconLink: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  background: "#f3f4f6",
  color: "#232129",
  fontSize: 22,
  transition: "background 0.2s, color 0.2s",
  textDecoration: "none",
  boxShadow: "0 2px 8px rgba(60,60,120,0.08)",
}
const section: React.CSSProperties = {
  maxWidth: 900,
  margin: "0 auto 60px auto",
  padding: "0 24px",
}
const sectionTitle: React.CSSProperties = {
  fontSize: 32,
  fontWeight: 700,
  color: "#232129",
  margin: "40px 0 16px 0",
  textAlign: "left",
  textShadow: "none",
}
const sectionText: React.CSSProperties = {
  fontSize: 17,
  color: "#374151",
  textAlign: "left",
  margin: "0 0 18px 0",
  textShadow: "none",
}
const skillBox: React.CSSProperties = {
  background: "#f3f4f6",
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(60,60,120,0.07)",
  padding: "16px 24px",
  fontWeight: 600,
  color: "#232129",
  fontSize: 16,
  minWidth: 160,
  textAlign: "center",
  border: "1px solid #e5e7eb",
  letterSpacing: 1,
}
const projectsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 24,
  margin: "24px 0 0 0",
}
const projectCard: React.CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 12px rgba(60,60,120,0.10)",
  padding: 24,
  cursor: "pointer",
  transition: "transform 0.15s, box-shadow 0.15s",
  border: "1px solid #e5e7eb",
  textAlign: "left",
  position: "relative",
  color: "#18181b",
}
const projectCardHover: React.CSSProperties = {
  ...projectCard,
  transform: "translateY(-4px) scale(1.03)",
  boxShadow: "0 6px 24px rgba(60,60,120,0.16)",
}
const modalOverlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(60,60,120,0.10)",
  zIndex: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
const modalContent: React.CSSProperties = {
  background: "#fff",
  borderRadius: 18,
  boxShadow: "0 8px 32px rgba(60,60,120,0.18)",
  padding: 36,
  maxWidth: 420,
  width: "90vw",
  textAlign: "left",
  position: "relative",
}
const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: 16,
  right: 16,
  background: "#f3f4f6",
  border: "none",
  borderRadius: "50%",
  width: 32,
  height: 32,
  fontSize: 20,
  color: "#232129",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(60,60,120,0.08)",
}
const contactCard: React.CSSProperties = {
  maxWidth: 420,
  margin: "0 auto",
  background: "rgba(243,244,246,0.7)",
  borderRadius: 18,
  boxShadow: "0 4px 24px rgba(60,60,120,0.10)",
  padding: 32,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 18,
  border: "1px solid #e5e7eb",
}
const contactIcon: React.CSSProperties = {
  width: 32,
  height: 32,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: "#fff",
  color: "#232129",
  boxShadow: "0 1px 4px rgba(60,60,120,0.08)",
  marginRight: 12,
  fontSize: 18,
}

const animatedStrings = [
  "Backend Developer",
  "Data Engineering Enthusiast",
  "OLAP & Big Data Specialist",
  "Clean Code Advocate",
]

function useTypewriter(strings: string[], speed = 80, pause = 1200) {
  const [index, setIndex] = React.useState(0)
  const [sub, setSub] = React.useState("")
  const [dir, setDir] = React.useState<"fwd" | "bwd">("fwd")
  React.useEffect(() => {
    let timeout: NodeJS.Timeout
    if (dir === "fwd") {
      if (sub.length < strings[index].length) {
        timeout = setTimeout(() => setSub(strings[index].slice(0, sub.length + 1)), speed)
      } else {
        timeout = setTimeout(() => setDir("bwd"), pause)
      }
    } else {
      if (sub.length > 0) {
        timeout = setTimeout(() => setSub(strings[index].slice(0, sub.length - 1)), speed / 2)
      } else {
        setDir("fwd")
        setIndex((i) => (i + 1) % strings.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [sub, dir, index, strings, speed, pause])
  return sub
}

const skills = [
  "Java",
  "Python",
  "Data Modeling",
  "ETL/ELT",
  "Data Warehousing",
  "SQL Optimization",
  "Kafka",
  "Hive",
  "Pinot",
  "Monolithic",
  "Microservices",
  "Serverless",
  "Event-driven Systems",
  "Hadoop",
  "Trino",
  "ClickHouse",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "RocksDB",
  "AWS S3",
  "GitHub Actions",
  "Docker",
  "HTML",
  "CSS",
  "JavaScript",
]

const projects = [
  {
    title: "BDaaSFeeder",
    short: "Big Data as a Service, a cloud-based model for scalable, flexible, and cost-effective big data processing and analytics.",
    details: "BDaaSFeeder is a high-performance ingestion service automating data flow from MySQL to big data systems using Kafka and ORC. It ensures scalability, reliability, and extensibility in production workloads.",
  },
  {
    title: "BDaaSAdmin",
    short: "Admin tool to manage all components to work with BDaaSFeeder and other products.",
    details: "BDaaSAdmin is an admin tool to manage all components and workflows related to BDaaSFeeder and other big data products, providing a unified interface for operations.",
  },
  {
    title: "BDaaSStreams",
    short: "Zoho’s unstructured append-only data framework for standalone services, supporting multiple data push/query methods.",
    details: "BDaaSStreams is Zoho’s unstructured append-only data framework, handling millions of data points for standalone services. Data can be pushed in multiple ways and queried through SDKs and APIs.",
  },
  {
    title: "WebAnalytics",
    short: "Website traffic and user behavior tracking platform.",
    details: "WebAnalytics is a platform for tracking website traffic and user behavior, providing actionable insights for business growth.",
  },
  {
    title: "Agriculture Based Recommendation System",
    short: "Recommends suitable crops and predicts diseases/pesticides using weather, soil, and image data.",
    details: "A model that recommends the most suitable crop by considering parameters like weather and soil based on live location. Also predicts diseases and suggests pesticides using image processing.",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  // Always default to light theme
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const t = theme === 'dark' ? darkTheme : lightTheme;
  const animated = useTypewriter(animatedStrings)
  const [activeNav, setActiveNav] = React.useState<string>("")
  const [hoveredProject, setHoveredProject] = React.useState<number | null>(null)
  const [modal, setModal] = React.useState<{title: string, details: string} | null>(null)

  React.useEffect(() => {
    const onScroll = () => {
      const sections = ["about", "skills", "projects", "contact"]
      let found = ""
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top < 120) found = id
        }
      }
      setActiveNav(found)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div style={t.mainBg}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{position:'fixed',top:24,right:24,zIndex:200,background:t.iconLink.background,color:t.iconLink.color,border:'none',borderRadius:20,width:40,height:40,boxShadow:t.iconLink.boxShadow,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}} aria-label="Toggle dark/light mode">
        {theme === 'dark' ? (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
        ) : (
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
        )}
      </button>
      <section style={heroSection}>
        <div style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: t.iconLink.background,
          color: t.iconLink.color,
          fontSize: 64,
          fontWeight: 700,
          userSelect: 'none',
          border: t.heroImg.border,
          marginBottom: t.heroImg.marginBottom,
          boxShadow: t.heroImg.boxShadow,
        }}>
          DD
        </div>
        <div style={t.heroName}>Deena Dhayalan</div>
        <div style={t.heroSubtitle}>Backend Developer | Data Engineering | OLAP Systems</div>
        <div style={t.animatedText}>{animated}&nbsp;</div>
        <div style={iconRow}>
          <a href="mailto:deenadhayalan.dd7@gmail.com" style={iconLink} title="Email" target="_blank" rel="noopener noreferrer">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M22 5l-10 7L2 5"/></svg>
          </a>
          <a href="https://github.com/DDeena007" style={iconLink} title="GitHub" target="_blank" rel="noopener noreferrer">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg>
          </a>
          <a href="https://linkedin.com/in/deena-dhayalan-624139231" style={iconLink} title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
          <a href="https://google.com" style={iconLink} title="Portfolio" target="_blank" rel="noopener noreferrer">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
          </a>
        </div>
      </section>
      <section id="about" style={section}>
        <div style={t.sectionTitle}>About</div>
        <div style={t.sectionText}>
          Innovative Member Technical Staff with 3 years of experience in software engineering at Zoho Corporation, specializing in OLAP-optimized query engines and Apache Pinot. Boosted internal query performance and system responsiveness. Seeking a Backend Developer role to leverage big data integration. Advocate for clean code, design-first development, and enabling teams through automation and collaboration.
        </div>
      </section>
      <section id="skills" style={section}>
        <div style={t.sectionTitle}>Skills</div>
        <div style={skillsGrid}>
          {skills.map((skill, i) => (
            <div key={i} style={{...t.skillBox, flex: '1 1 180px', maxWidth: 220, minWidth: 120, textAlign: "center" as const}}>{skill}</div>
          ))}
        </div>
      </section>
      <section id="projects" style={section}>
        <div style={t.sectionTitle}>Projects</div>
        <div style={projectsGrid}>
          {projects.map((proj, i) => (
            <div
              key={i}
              style={hoveredProject === i ? t.projectCardHover : t.projectCard}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setModal({title: proj.title, details: proj.details})}
              tabIndex={0}
              role="button"
              aria-label={`Open details for ${proj.title}`}
            >
              <div style={{fontWeight:700, fontSize:20, color:t.sectionTitle.color, marginBottom:8}}>{proj.title}</div>
              <div style={{color:t.sectionText.color, fontSize:15}}>{proj.short}</div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" style={{...section, marginBottom: 0, paddingBottom: 160}}>
        <div style={t.sectionTitle}>Contact</div>
        <div style={contactCard}>
          <div style={t.sectionText}><span style={contactIcon}>✉️</span><b>Email:</b> <a href="mailto:deenadhayalan.dd7@gmail.com" style={{color:t.sectionTitle.color, textDecoration:'none'}}>deenadhayalan.dd7@gmail.com</a></div>
          <div style={t.sectionText}><span style={contactIcon}>📱</span><b>Mobile:</b> <a href="tel:+917358895982" style={{color:t.sectionTitle.color, textDecoration:'none'}}>+91-7358895982</a></div>
          <div style={t.sectionText}><span style={contactIcon}>💼</span><b>LinkedIn:</b> <a href="https://linkedin.com/in/deena-dhayalan-624139231" style={{color:t.sectionTitle.color, textDecoration:'none'}}>deena-dhayalan-624139231</a></div>
          <div style={t.sectionText}><span style={contactIcon}>🐙</span><b>GitHub:</b> <a href="https://github.com/DDeena007" style={{color:t.sectionTitle.color, textDecoration:'none'}}>DDeena007</a></div>
        </div>
      </section>
      {/* Bottom Navigation */}
      <nav style={bottomNavStyle}>
        <button style={activeNav==="about"?navLinkActive:navLink} onClick={()=>scrollTo("about")}>About</button>
        <button style={activeNav==="skills"?navLinkActive:navLink} onClick={()=>scrollTo("skills")}>Skills</button>
        <button style={activeNav==="projects"?navLinkActive:navLink} onClick={()=>scrollTo("projects")}>Projects</button>
        <button style={activeNav==="contact"?navLinkActive:navLink} onClick={()=>scrollTo("contact")}>Contact</button>
      </nav>
      {/* Modal Dialog for Project Details */}
      {modal && (
        <div style={modalOverlay} onClick={()=>setModal(null)}>
          <div style={modalContent} onClick={e=>e.stopPropagation()}>
            <button style={closeBtn} onClick={()=>setModal(null)} aria-label="Close">×</button>
            <div style={{fontWeight:700, fontSize:24, color:'#6366f1', marginBottom:12}}>{modal.title}</div>
            <div style={{color:'#374151', fontSize:16}}>{modal.details}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Deena Dhayalan | Portfolio</title>
