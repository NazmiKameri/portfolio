import React, { useEffect, useMemo, useRef, useState } from "react";

const DATA = {
  name: "Nazmi Kameri",
  title: "Software Developer",
  location: "Prishtina, 10000",
  email: "nazmik1233@gmail.com",
  phone: "+38344728892",
  summary:
    "Dynamic, innovative, results-driven Software Developer with full-stack experience. Focused on stability, refactoring, and building scalable features, especially subscription analytics and dashboards for Stripe.",
  experience: [
    {
      role: "Software Developer",
      company: "Pabau Clinic Software",
      period: "07/2023 - Present",
      bullets: [
        "Enhanced system stability and performance by identifying and resolving critical bugs across core services.",
        "Refactored legacy components for improved maintainability, performance, and smoother user interactions.",
        "Designed and implemented Stripe subscription management features and dashboards (growth, churn, revenue metrics, lifecycle trends).",
        "Integrated third-party APIs to e`xpand platform capabilities and streamline workflows.",
        "Improved platform reliability through targeted stability improvements and architectural enhancements.",
        "Engineered modular frontend components to improve responsiveness and accelerate data input workflows.",
      ],
      highlights: ["System stability", "Refactoring", "Stripe subscriptions", "Dashboards", "Client Merge", "Lead Merge"],
    },
    {
      role: "Frontend Developer",
      company: "Bora Creative",
      period: "01/2021 - 04/2023",
      bullets: [
        "Built responsive landing pages using HTML, CSS, and JavaScript.",
        "Worked closely with design to implement clean UI layouts.",
        "Handled small frontend updates and fixes across existing pages.",
        "Improved forms, layouts, and user interactions within a bus application.",
      ],
      highlights: ["Landing pages", "UI implementation", "Frontend fixes"],
    },
  ],
  education: [{ degree: "Bachelor", school: "UBT Prishtina", period: "Present" }],
  skills: [
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "GraphQL", level: "Advanced" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "Prisma", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Jest testing", level: "Intermediate" },
    { name: "Hasura", level: "Intermediate" },
    { name: "MongoDB", level: "Beginner" },
  ],
  languages: [
    { name: "Albanian", level: "Native" },
    { name: "English", level: "C1 Advanced" },
  ],
  courses: [
    { provider: "Flearn", period: "11/2022 - 02/2023" },
    { provider: "Udemy", period: "08/2022 - 08/2022" },
    { provider: "Udemy", period: "06/2022 - 08/2022" },
  ],
  hobbies:
    "Gaming (strategy and competitive), football, billiards, travelling/exploring new cultures, and continuous learning in technology.",
  socials: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/nazmi-kameri/" }],
  projects: [
    {
      name: "RenuFleet",
      url: "https://renufleet.vercel.app/",
      role: "Lead Frontend / Full-stack",
      summary:
        "Fleet management dashboard with live telemetry, driver/vehicle lifecycle, scheduling, and analytics. Focus on responsive UI, data density, and reliability.",
      tech: "React, Next.js, TypeScript, REST/GraphQL APIs, Auth, Charts, Tailwind/CSS, PostgreSQL",
      highlight: true,
    },
  ],
};

const styles = {
  page: {
    minHeight: "100vh",
    color: "#e5e7eb",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
    position: "relative",
    overflow: "hidden",
  },
  container: { width: "min(980px, 92vw)", margin: "0 auto", padding: "28px 0 64px" },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(12px)",
    background: "rgba(7,10,20,.55)",
    borderBottom: "1px solid rgba(255,255,255,.08)",
  },
  navInner: {
    width: "min(980px, 92vw)",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 0",
    gap: 10,
  },
  brand: { display: "flex", alignItems: "center", gap: 10, fontWeight: 800 },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 12,
    background: "linear-gradient(135deg, rgba(168,85,247,1), rgba(99,102,241,1))",
    boxShadow: "0 14px 40px rgba(168,85,247,.25)",
  },
  navAvatar: {
    width: 34,
    height: 34,
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.2)",
    boxShadow: "0 10px 26px rgba(0,0,0,.35)",
  },
  navAvatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  navLinks: { display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", alignItems: "center" },
  navA: {
    color: "rgba(229,231,235,.9)",
    textDecoration: "none",
    fontSize: 13,
    padding: "9px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
  },
  hero: { display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 16, alignItems: "stretch" },
  card: {
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,.10)",
    background: "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))",
    boxShadow: "0 24px 60px rgba(0,0,0,.32)",
    padding: 20,
  },
  avatarWrap: {
    width: 96,
    height: 96,
    borderRadius: 24,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.15)",
    boxShadow: "0 18px 40px rgba(0,0,0,.35)",
  },
  avatar: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "9px 12px",
    borderRadius: 12,
    border: "1px solid rgba(168,85,247,.35)",
    background: "linear-gradient(135deg, rgba(168,85,247,1), rgba(99,102,241,1))",
    color: "#071018",
    fontWeight: 800,
    textDecoration: "none",
    boxShadow: "0 14px 40px rgba(168,85,247,.18)",
  },
  ghostBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "9px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.04)",
    color: "rgba(229,231,235,.92)",
    fontWeight: 700,
    textDecoration: "none",
  },
  h1: { fontSize: 40, lineHeight: 1.08, margin: "6px 0 8px", letterSpacing: -0.5 },
  subtitle: { color: "rgba(229,231,235,.78)", fontSize: 15, lineHeight: 1.55, margin: 0 },
  row: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 },
  chip: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(168,85,247,.18)",
    background: "rgba(168,85,247,.08)",
    fontSize: 13,
    color: "rgba(229,231,235,.92)",
  },
  sectionTitle: { fontSize: 17, margin: "0 0 10px", letterSpacing: 0.2 },
  muted: { color: "rgba(229,231,235,.78)" },
  small: { fontSize: 13, color: "rgba(229,231,235,.70)" },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },
  projectBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 12px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,.15)",
    background: "linear-gradient(135deg, rgba(168,85,247,.95), rgba(99,102,241,.9))",
    color: "#071018",
    fontWeight: 750,
    textDecoration: "none",
    boxShadow: "0 14px 32px rgba(168,85,247,.18)",
  },
  input: {
    width: "100%",
    borderRadius: 12,
    padding: "11px 11px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.04)",
    color: "#e5e7eb",
    outline: "none",
    fontSize: 14,
  },
  textarea: {
    width: "100%",
    borderRadius: 12,
    padding: "11px 11px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.04)",
    color: "#e5e7eb",
    outline: "none",
    minHeight: 120,
    resize: "vertical",
    fontSize: 14,
  },
  footer: { marginTop: 28, textAlign: "center", color: "rgba(229,231,235,.6)", fontSize: 13 },
  waterLayer: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(1200px 800px at 20% 10%, rgba(255,255,255,.04), transparent 55%)," +
      "linear-gradient(135deg, rgba(80,120,255,.06), rgba(20,60,120,.08))",
    backgroundSize: "160% 160%, 200% 200%",
    mixBlendMode: "screen",
    opacity: 0.4,
    animation: "waterFlow 18s ease-in-out infinite alternate",
    pointerEvents: "none",
    zIndex: 0,
  },
};

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ ...styles.card, marginTop: 14 }}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function SkillBar({ name, level }) {
  const pct = useMemo(() => {
    const map = { Beginner: 35, Intermediate: 65, Advanced: 90 };
    return map[level] ?? 60;
  }, [level]);

  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <div style={{ fontWeight: 750 }}>{name}</div>
        <div style={styles.small}>{level}</div>
      </div>
      <div
        style={{
          height: 9,
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,.10)",
          background: "rgba(255,255,255,.03)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "linear-gradient(90deg, rgba(168,85,247,1), rgba(99,102,241,1))",
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("");
  const [bgPos, setBgPos] = useState({ x: 15, y: 12 });
  const targetPos = useRef({ x: 15, y: 12 });
  const pageRef = useRef(null);

  useEffect(() => {
    let raf;
    const step = () => {
      setBgPos((prev) => {
        const nx = prev.x + (targetPos.current.x - prev.x) * 0.15;
        const ny = prev.y + (targetPos.current.y - prev.y) * 0.15;
        return { x: nx, y: ny };
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const filteredSkills = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return DATA.skills;
    return DATA.skills.filter(
      (s) => s.name.toLowerCase().includes(q) || s.level.toLowerCase().includes(q)
    );
  }, [filter]);

  const background = useMemo(() => {
    const clamp = (n) => Math.max(0, Math.min(100, n));
    const x = clamp(bgPos.x);
    const y = clamp(bgPos.y);
    return `
      radial-gradient(520px 340px at ${x}% ${y}%, rgba(168,85,247,.26), transparent 42%),
      radial-gradient(400px 280px at ${100 - x}% 22%, rgba(99,102,241,.18), transparent 46%),
      radial-gradient(680px 520px at 50% 110%, rgba(34,211,238,.10), transparent 52%),
      #070A14
    `;
  }, [bgPos]);

  const waterStyle = useMemo(() => {
    const clamp = (n) => Math.max(0, Math.min(100, n));
    const x = clamp(bgPos.x);
    const y = clamp(bgPos.y);
    const offsetX = (x - 50) / 30; // gentle parallax
    const offsetY = (y - 50) / 30;
    return {
      ...styles.waterLayer,
      backgroundPosition: `${x / 1.8}% ${y / 1.8}%, ${100 - x / 2.2}% ${100 - y / 2.2}%`,
      transform: `translate3d(${offsetX}%, ${offsetY}%, 0)`,
    };
  }, [bgPos]);

  const handlePointer = (e) => {
    const rect = pageRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      targetPos.current = { x, y };
    } else {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      targetPos.current = { x: (e.clientX / w) * 100, y: (e.clientY / h) * 100 };
    }
  };

  const navItems = [
    ["about", "About"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["skills", "Skills"],
    ["education", "Education"],
    ["courses", "Courses"],
    ["contact", "Contact"],
  ];

  const projects = useMemo(
    () => [...DATA.projects].sort((a, b) => Number(!!b.highlight) - Number(!!a.highlight)),
    []
  );

  return (
    <div ref={pageRef} style={{ ...styles.page, background }} onPointerMove={handlePointer}>
      <div style={waterStyle} />
      <div style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.brand}>
            
            <div>
              <div style={{ fontSize: 14, opacity: 0.92 }}>{DATA.name}</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>{DATA.title}</div>
            </div>
            
          </div>

          <div style={styles.navLinks} className="nav-links">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} style={styles.navA}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main style={styles.container} className="page-container">
        {/* HERO */}
        <div className="hero" style={styles.hero}>
          <div style={styles.card}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "center" }}>
              <div style={styles.avatarWrap}>
                <img src="/IMG_1073.jpeg" alt={`${DATA.name} portrait`} style={styles.avatar} />
              </div>
              <div>
                <div style={{ ...styles.small, textTransform: "uppercase", letterSpacing: 1 }}>
                  {DATA.location}
                </div>
                <h1 style={styles.h1}>
                  {DATA.name}
                  <span style={{ display: "block", fontSize: 18, marginTop: 8, opacity: 0.85 }}>
                    {DATA.title}
                  </span>
                </h1>
              </div>
            </div>

            <p style={styles.subtitle}>{DATA.summary}</p>

            <div style={styles.row} className="cta-row">
              <a style={styles.primaryBtn} href={`mailto:${DATA.email}`}>
                Email me
              </a>
              <a style={styles.ghostBtn} href={`tel:${DATA.phone.replace(/\s+/g, "")}`}>
                Call
              </a>
              <a style={styles.ghostBtn} href="#contact">
                Hire me
              </a>
              {DATA.socials.map((s) => (
                <a key={s.href} style={styles.ghostBtn} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>

            <div style={{ marginTop: 12, ...styles.small }}>
              <span style={{ opacity: 0.85 }}>{DATA.email}</span> |{" "}
              <span style={{ opacity: 0.85 }}>{DATA.phone}</span>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Core Focus</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                "React",
                "GraphQL",
                "Stripe subscriptions",
                "Analytics dashboards",
                "Refactoring",
                "System stability",
              ].map((t) => (
                <span key={t} style={styles.chip}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 16 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 14, opacity: 0.9 }}>Languages</h3>
              <div style={{ display: "grid", gap: 8 }}>
                {DATA.languages.map((l) => (
                  <div
                    key={l.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      border: "1px solid rgba(255,255,255,.10)",
                      background: "rgba(255,255,255,.03)",
                      padding: 11,
                      borderRadius: 14,
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>{l.name}</div>
                    <div style={styles.small}>{l.level}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 14, opacity: 0.9 }}>Hobbies</h3>
              <div style={styles.muted}>{DATA.hobbies}</div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <Section id="about" title="About">
          <p style={{ margin: 0, ...styles.muted, lineHeight: 1.6 }}>
            I build web applications with React, Node.js, and databases, and I enjoy improving systems by
            fixing bugs, refactoring, and shipping features that impact revenue and user experience.
          </p>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div style={{ display: "grid", gap: 12 }}>
            {DATA.experience.map((job) => (
              <div
                key={job.company + job.role}
                style={{
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(255,255,255,.03)",
                  borderRadius: 16,
                  padding: 14,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 900 }}>{job.role}</div>
                    <div style={styles.small}>
                      {job.company} | {job.period}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-start" }}>
                    {job.highlights.map((h) => (
                      <span key={h} style={styles.chip}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <ul style={{ margin: "8px 0 0", paddingLeft: 18, color: "rgba(229,231,235,.82)" }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ marginTop: 5 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div style={{ display: "grid", gap: 12 }}>
            {projects.map((p) => (
              <div
                key={p.url}
                style={{
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(255,255,255,.03)",
                  borderRadius: 16,
                  padding: 14,
                  display: "grid",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <a href={p.url} target="_blank" rel="noreferrer" style={{ fontWeight: 900, color: "#e5e7eb" }}>
                      {p.name}
                    </a>
                    {p.highlight ? (
                      <span style={{ ...styles.chip, background: "rgba(168,85,247,.14)", borderColor: "rgba(168,85,247,.35)" }}>
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <div style={styles.small}>{p.role}</div>
                </div>
                <div style={styles.muted}>{p.summary}</div>
                {p.tech ? (
                  <div style={{ ...styles.small, opacity: 0.8 }}>
                    Tech: {p.tech}
                  </div>
                ) : null}
                <div style={{ marginTop: 6 }}>
                  <a href={p.url} target="_blank" rel="noreferrer" style={styles.projectBtn}>
                    Open project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <input
            style={styles.input}
            placeholder="Search skills (React, GraphQL, Advanced...)"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <div style={{ marginTop: 10, ...styles.grid2 }}>
            {filteredSkills.map((s) => (
              <div
                key={s.name}
                style={{
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(255,255,255,.03)",
                  borderRadius: 16,
                  padding: 12,
                }}
              >
                <SkillBar name={s.name} level={s.level} />
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION + COURSES */}
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
          <section id="education" style={styles.card}>
            <h2 style={styles.sectionTitle}>Education</h2>
            {DATA.education.map((e) => (
              <div
                key={e.school}
                style={{
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(255,255,255,.03)",
                  borderRadius: 16,
                  padding: 12,
                }}
              >
                <div style={{ fontWeight: 900 }}>{e.degree}</div>
                <div style={styles.small}>
                  {e.school} | {e.period}
                </div>
              </div>
            ))}
          </section>

          <section id="courses" style={styles.card}>
            <h2 style={styles.sectionTitle}>Courses</h2>
            <div style={{ display: "grid", gap: 8 }}>
              {DATA.courses.map((c, idx) => (
                <div
                  key={idx}
                  style={{
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(255,255,255,.03)",
                    borderRadius: 16,
                    padding: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ fontWeight: 800 }}>{c.provider}</div>
                  <div style={styles.small}>{c.period}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div style={{ display: "grid", gap: 8 }}>
            <div style={styles.small}>Email</div>
            <div style={{ fontWeight: 900 }}>
              <a href={`mailto:${DATA.email}`} style={{ color: "#e5e7eb" }}>
                {DATA.email}
              </a>
            </div>
            <div style={styles.small}>Phone</div>
            <div style={{ fontWeight: 900 }}>{DATA.phone}</div>
            <div style={styles.small}>Instagram</div>
            <div style={{ fontWeight: 900 }}>nazmikameri</div>
            <div style={styles.small}>LinkedIn</div>
            <div style={{ fontWeight: 900 }}>https://www.linkedin.com/in/nazmi-kameri/</div>
          </div>
        </Section>

        <div style={styles.footer}>(c) {new Date().getFullYear()} {DATA.name} | Built with React</div>
      </main>

      <style>{`
        @keyframes waterFlow {
          0% { background-position: 0% 0%, 0% 0%; }
          50% { background-position: 40% 60%, 60% 40%; }
          100% { background-position: 80% 100%, 120% 80%; }
        }
        @media (max-width: 900px) {
          .page-container { padding: 24px 0 58px; width: 94vw; }
          .nav-links { display: none; }
          .hero { grid-template-columns: 1fr !important; gap: 12px; }
        }
        @media (max-width: 760px) {
          .page-container { padding: 22px 0 54px; width: 96vw; }
          .two-col { grid-template-columns: 1fr !important; }
          h1 { font-size: 34px !important; }
          .cta-row a { width: 100%; justify-content: center; text-align: center; }
          .cta-row { gap: 10px !important; }
        }
        @media (max-width: 540px) {
          body { font-size: 14px; }
          .page-container { padding: 18px 0 50px; width: 96vw; }
        }
      `}</style>
    </div>
  );
}
