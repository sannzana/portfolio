
"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Copy,
  Check,
  Mail,
  Menu,
  X,
  Code2,
  BrainCircuit,
  Eye,
  Database,
  Layers3,
  GraduationCap,
  Sparkles,
  Award,
  Trophy,
  Mountain,
  BookOpen,
  Link,
  MapPin,
} from "lucide-react";


/* =========================================
   NAVIGATION
========================================= */

const assetPath = (path: string) =>
  `${process.env.NODE_ENV === "production" ? "/portfolio" : ""}${path}`;

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Expertise", "#skills"],
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Beyond", "#beyond"],
  ["Contact", "#contact"],
];

/* =========================================
   TECHNICAL SKILLS
========================================= */

const skills = [
  {
    title: "Programming",
    icon: Code2,
    tags: ["Python", "C", "C++", "Java", "JavaScript", "PHP", "Verilog"],
  },
  {
    title: "AI & Deep Learning",
    icon: BrainCircuit,
    tags: ["PyTorch", "TensorFlow", "CUDA", "CNN", "ResNet", "U-Net", "MaxViT"],
  },
  {
    title: "Computer Vision",
    icon: Eye,
    tags: [
      "YOLO",
      "OpenCV",
      "ByteTrack",
      "Segmentation",
      "Optical Flow",
      "Pose Estimation",
    ],
  },
  {
    title: "LLMs & Multimodal",
    icon: Layers3,
    tags: [
      "Hugging Face",
      "RAG",
      "ChromaDB",
      "VLMs",
      "Embeddings",
      "Whisper",
      "Qwen",
    ],
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    tags: ["Diffusion Models", "FLUX", "Text-to-Image", "Image Editing"],
  },
  {
    title: "Software & Data",
    icon: Database,
    tags: ["React", "Laravel", "Android", "MySQL", "Firebase", "REST APIs"],
  },
];

/* =========================================
   ONGOING WORK
========================================= */

const ongoing = [
  {
    number: "01",
    title: "Diffusion Models",
    description:
      "Exploring diffusion-based image generation and colour representation.",
    tags: ["Diffusion Models", "FLUX"],
  },
  {
    number: "02",
    title: "Language & Dubbing Pipeline",
    description:
      "An ongoing pipeline combining English-to-Bangla translation, dubbing and RAG-based NLP.",
    tags: ["Translation", "Bangla Dubbing", "RAG", "NLP"],
  },
];

/* =========================================
   PROJECTS
========================================= */

const projects = [
  {
    number: "01",
    title: "AIMS",
    category: "LLM · RETRIEVAL",
    description:
      "An LLM-based project exploring retrieval and information access.",
    tags: ["Python", "LLMs", "RAG"],
    href: "https://github.com/sannzana/AIMS",
    icon: BrainCircuit,
    tone: "blue",
  },
  {
    number: "02",
    title: "Drone-based Object Detection",
    category: "COMPUTER VISION",
    description:
      "Detecting objects from drone imagery for visual identification.",
    tags: ["Python", "YOLO", "Computer Vision"],
    href: "https://github.com/sannzana/ANT_drone_new",
    icon: Eye,
    tone: "sage",
  },
  {
    number: "03",
    title: "Alternative GPS",
    category: "ANDROID · MAPPING",
    description:
      "An Android mapping project combining weather information and road visualisation.",
    tags: ["Android", "Maps", "Weather"],
    href: "https://github.com/sannzana/Alternative-GPS",
    icon: MapPin,
    tone: "lavender",
  },
  {
    number: "04",
    title: "Movie Project",
    category: "WEB DEVELOPMENT",
    description: "A Laravel-based application.",
    tags: ["Laravel", "PHP", "Database"],
    href: "https://github.com/sannzana/Movie_Project_Final",
    icon: Code2,
    tone: "sand",
  },
  {
    number: "05",
    title: "Parking Space Detection",
    category: "IMAGE PROCESSING",
    description:
      "A computer vision project focused on identifying parking spaces from images.",
    tags: ["Python", "OpenCV", "Image Processing"],
    href: "https://github.com/sannzana/image_for_parking-space",
    icon: Eye,
    tone: "mint",
  },
];

/* =========================================
   ACHIEVEMENTS & CERTIFICATES

   Put the actual images inside:
   public/images/

========================================= */

const achievements = [
  {
    number: "01",
    category: "ACTIVITIES",
    title: "KUET Adventure Club",
    description: "Club involvement",
    image: "/images/certificates/certificate-1.png",
    icon: Mountain,
  },
  
  {
    number: "02",
    category: "RECOGNITION",
    title: "bKash Limited",
    description: "Successfully passed vetting; Top 5% recognition",
    image: "/images/certificates/certificate-3.png",
    icon: Award,
  },
  {
    number: "03",
    category: "CERTIFICATION",
    title: "CARSiT Masterclass",
    description: "Research Paper Writing & Scholarly Presentation",
    image: "/images/certificates/certificate-4.png",
    icon: BookOpen,
  },
  {
    number: "04",
    category: "ACHIEVEMENT",
    title: "NGPC Finalist",
    description: "Competition finalist",
    image: "/images/certificates/img4.png",
    icon: Trophy,
  },



];

/* =========================================
   ANIMATION COMPONENT
========================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   SECTION HEADING
========================================= */

function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}

/* =========================================
   MAIN PAGE
========================================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const updatePagePosition = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

      setScrollProgress(progress);

      const sectionIds = navigation.map(([, href]) => href.slice(1));
      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = sectionId;
        }
      });

      setActiveSection(`#${currentSection}`);
    };

    updatePagePosition();
    window.addEventListener("scroll", updatePagePosition, { passive: true });
    window.addEventListener("resize", updatePagePosition);

    return () => {
      window.removeEventListener("scroll", updatePagePosition);
      window.removeEventListener("resize", updatePagePosition);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sanzanafariha536@gmail.com");
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      window.location.href = "mailto:sanzanafariha536@gmail.com";
    }
  };

  return (
    <main id="home">
      <div
        className="reading-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* NAVIGATION */}

      <header className="site-header">
        <nav className="nav-container">

          <a href="#home" className="brand">
            FS<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={activeSection === href ? "active" : ""}
                aria-current={activeSection === href ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a href="#contact" className="nav-contact">
              Let's talk <ArrowUpRight size={15} />
            </a>

            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

        </nav>
      </header>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="hero-section">

        <div className="hero-container">

          <Reveal className="hero-content">

            <div className="availability">
              <span className="availability-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <h1>
              Fariha <span>Sanzana</span>
            </h1>

            <p className="hero-role">
              Computer Science Graduate
              <br />
              AI Engineer <i>·</i> Software Developer
            </p>

            <p className="hero-description">
              AI is here to take our jobs? Well, I see it as another
              tool to work with. I enjoy combining it with my skills
              and way of thinking to turn ideas into useful solutions.
              And when I don't know something, I'm always up for learning it.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/sannzana"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={16} /> GitHub
              </a>

              <a href="#contact">
                <Mail size={16} /> Email
              </a>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="button-primary">
                Explore projects <ArrowDown size={15} />
              </a>

              <a href="#contact" className="button-secondary">
                Contact me
              </a>
            </div>

          </Reveal>

          <Reveal delay={0.2} className="hero-visual">

            <div className="profile-frame">

              <div className="profile-placeholder">
                <img
                  // src="/images/profile/prof.jpeg"
                  src={assetPath("/images/profile/prof.jpeg")}
                  alt="Fariha Sanzana"
                  className="profile-photo"
                />
              </div>

              <div className="profile-note">
                <span className="note-dot" />
                Curious by nature. Building by choice.
              </div>

            </div>

          </Reveal>

        </div>

        {/* FOUR CONNECTED AREAS */}

        <div className="hero-bottom">
          {[
            "AI / ML",
            "COMPUTER VISION",
            "LANGUAGE MODELS",
            "SOFTWARE",
          ].map((item) => (
            <span className="hero-pill" key={item}>
              {item}
            </span>
          ))}
        </div>

      </section>

      {/* =====================================
          ABOUT
      ===================================== */}

      <section id="about" className="about-section section-space">

        <div className="content-container about-layout">

          <Reveal className="about-label">
            <span className="eyebrow">01 / ABOUT ME</span>

            <h2>
              A little
              <br />
              about me.
            </h2>

            <span className="about-decoration">FS.</span>
          </Reveal>

          <Reveal delay={0.12} className="about-copy">

            <p className="about-lead">
              I enjoy building practical things, learning through
              experimentation, and turning ideas into usable work.
            </p>

            <p>
              My work so far has involved problem solving across
              software, computer vision, language technologies
              and applied development.
            </p>

            <p>
              I like understanding how things work, improving them
              step by step, and picking up new tools whenever a
              project demands it.
            </p>

            <a href="#skills" className="text-link">
              Explore my expertise <ArrowRight size={16} />
            </a>

          </Reveal>

        </div>

      </section>

      {/* =====================================
          EXPERTISE & TECHNICAL SKILLS
      ===================================== */}

      <section id="skills" className="skills-section section-space">

        <div className="content-container">

          <Heading
            eyebrow="02 / TECHNICAL EXPERTISE"
            title="What I work with."
            description="Different fields, shared curiosity, practical applications."
          />

          <div className="skills-grid">

            {skills.map((group, index) => {
              const Icon = group.icon;

              return (
                <Reveal key={group.title} delay={(index % 3) * 0.08}>

                  <article className="skill-card">

                    <div className="skill-card-top">
                      <span>0{index + 1}</span>
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <h3>{group.title}</h3>

                    <div className="skill-tags">
                      {group.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================
          ONGOING WORK
      ===================================== */}

      <section className="research-section section-space">

        <div className="content-container">

          <Heading
            eyebrow="03 / CURRENT EXPLORATIONS"
            title="Work in progress."
            description="A couple of directions I am currently exploring."
          />

          <div className="ongoing-grid">

            {ongoing.map((item, index) => (

              <Reveal key={item.number} delay={index * 0.08}>

                <article className="ongoing-card">

                  <div className="ongoing-top">
                    <span>{item.number} / IN PROGRESS</span>
                    <span className="live-dot" />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="skill-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="ongoing-status">
                    CURRENT EXPLORATION
                  </span>

                </article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          UNDERGRADUATE THESIS
      ===================================== */}

      <section className="thesis-section section-space">

        <div className="content-container thesis-layout">

          <Reveal>

            <span className="eyebrow">
              04 / UNDERGRADUATE THESIS
            </span>

            <h2>TriQ-VLM</h2>

            <h3>
              An Edge–VLM Framework for CCTV Event Understanding
              with Adaptive Frame Selection and Graph-Derived Context.
            </h3>

            <p>
              My thesis explores efficient video understanding through
              edge-based processing, adaptive frame selection and
              vision-language models for CCTV event interpretation.
            </p>

            <a href="#contact" className="text-link">
              Ask about the research <ArrowUpRight size={16} />
            </a>

          </Reveal>

          <Reveal delay={0.15} className="thesis-metrics">

            <span className="metric-label">
              FRAME SELECTION
            </span>

            <div className="metric-row">

              <div>
                <strong>184,358</strong>
                <small>Original frames</small>
              </div>

              <ArrowDown size={20} />

              <div>
                <strong>5,267</strong>
                <small>Selected frames</small>
              </div>

            </div>

            <p className="metric-highlight">
              97.1% reduction before VLM inference
            </p>

            <div className="thesis-tags">
              {["YOLO", "Optical Flow", "VLM", "Graph Context"].map(
                (tag) => (
                  <span key={tag}>{tag}</span>
                )
              )}
            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================
          PROJECTS
      ===================================== */}

      <section id="projects" className="projects-section section-space">

        <div className="content-container">

          <Heading
            eyebrow="05 / SELECTED PROJECTS"
            title="Selected work."
            description="Projects across AI, computer vision, mapping and software development."
          />

          <div className="projects-grid">

            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <Reveal key={project.number} delay={(index % 2) * 0.1}>

                  <article className="project-card">

                    <div className={`project-art project-${project.tone}`}>

                      <span className="project-number">
                        {project.number}
                      </span>

                      <Icon size={39} strokeWidth={1.35} />

                      <span className="project-category">
                        {project.category}
                      </span>

                    </div>

                    <div className="project-content">

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      <div className="skill-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View repository <ArrowUpRight size={15} />
                      </a>

                    </div>

                  </article>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================
          RESEARCH & PUBLICATIONS
      ===================================== */}

      <section id="research" className="publication-section section-space">

        <div className="content-container">

          <Heading
            eyebrow="06 / RESEARCH & PUBLICATIONS"
            title="Research & manuscripts."
            description="Selected research work and manuscript submissions."
          />

          <div className="publication-list">

            <Reveal>
              <article className="publication-item">

                <div className="publication-meta">
                  <span>IEEE ACCESS · JOURNAL MANUSCRIPT</span>
                  <span className="status">UNDER REVIEW</span>
                </div>

                <h3>
                  Real-Time Detection, Segmentation and Classification
                  of Bangladeshi Road Signs for Driver Alerts
                </h3>

                <p>Manuscript ID: Access-2026-44871</p>

              </article>
            </Reveal>

           <Reveal delay={0.12}>
  <article className="publication-item">

    <div className="publication-meta">
      <span>IEEE ICCIT 2026 · CONFERENCE PAPER</span>
      <span className="status">ACCEPTED</span>
    </div>

    <h3>
      TriQ-VLM: An Edge-VLM Framework for CCTV Event
      Understanding with Adaptive Frame Selection
      and Graph-Derived Context
    </h3>

    <p>Accepted for presentation at IEEE ICCIT 2026.</p>

  </article>
</Reveal>

          </div>

        </div>

      </section>

      {/* =====================================
          EDUCATION
      ===================================== */}

      <section id="education" className="education-section section-space">

        <div className="content-container">

          <Heading
            eyebrow="07 / EDUCATION"
            title="Academic journey."
          />

          <div className="education-list">

            {[
              {
                period: "2018",
                title: "Secondary School Certificate (SSC)",
                place: "Viqarunnisa Noon School & College",
              },
              {
                period: "2020",
                title: "Higher Secondary Certificate (HSC)",
                place: "Viqarunnisa Noon School & College",
              },
              {
                period: "2020 – 2026",
                title: "B.Sc. in Computer Science & Engineering",
                place:
                  "Khulna University of Engineering & Technology (KUET)",
              },
            ].map((item, index) => (

              <Reveal key={item.title} delay={index * 0.1}>

                <article className="education-item">

                  <div className="education-icon">
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <span>{item.period}</span>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                  </div>

                </article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          BEYOND ACADEMICS
      ===================================== */}

      <section id="beyond" className="beyond-section section-space">

        <div className="content-container">

          <Heading
            eyebrow="08 / BEYOND ACADEMICS"
            title="Beyond the classroom."
            description="Activities, achievements and professional recognition."
          />

          <div className="beyond-grid">

            {achievements.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.07}>
                <article className="beyond-card">
                  {item.image && (
                    <a
                      // href={item.image}
                      href={assetPath(item.image)}
                      target="_blank"
                      rel="noreferrer"
                      className="beyond-image-link"
                      aria-label={`Open ${item.title} certificate`}
                    >
                      <img
                        // src={item.image}
                        src={assetPath(item.image)}
                        alt={`${item.title} certificate`}
                        className="beyond-image"
                        loading="lazy"
                      />
                    </a>
                  )}

                  <div className="beyond-card-top">
                    <span>{item.number}</span>
                    {item.image && (
                      <a
                        // href={item.image}
                        href={assetPath(item.image)}
                        target="_blank"
                        rel="noreferrer"
                        className="certificate-link"
                        aria-label={`View ${item.title} certificate`}
                        title="View certificate"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>

                  <span className="beyond-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}

          </div>

        </div>

      </section>

     
      {/* =====================================
          CONTACT
      ===================================== */}

      <section id="contact" className="contact-section section-space">

        <div className="content-container">

          <div className="contact-panel">

            {/* LEFT COLUMN */}

            <Reveal className="contact-copy">

              <span className="eyebrow">
                09 / CONTACT
              </span>

              <h2>
                Have a query
                <br />
                or want to connect?
              </h2>

              <p>
                Open to opportunities, collaboration and interesting
                technical challenges.
              </p>

              <div className="contact-email-block">

                <span className="contact-email-label">
                  EMAIL ADDRESS
                </span>

                <a
                  href="mailto:sanzanafariha536@gmail.com"
                  className="contact-email-address"
                >
                  <Mail size={17} />
                  sanzanafariha536@gmail.com
                  <ArrowUpRight size={15} />
                </a>

                <button
                  type="button"
                  className="copy-email-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {emailCopied ? <Check size={15} /> : <Copy size={15} />}
                  {emailCopied ? "Copied" : "Copy email"}
                </button>

              </div>

            </Reveal>


            {/* RIGHT COLUMN */}

            <Reveal delay={0.15} className="contact-social">

              <span className="contact-social-heading">
                FIND ME
              </span>

              <div className="contact-social-grid">

                <a
                  href="https://github.com/sannzana"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={19} />
                  <span>GitHub</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://www.linkedin.com/in/fariha-sanzana-b330a02a5/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Link size={19} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://www.kaggle.com/farihasanzana"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BrainCircuit size={19} />
                  <span>Kaggle</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://leetcode.com/u/fariha_s/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={19} />
                  <span>LeetCode</span>
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="site-footer">

        <div className="content-container footer-content">

          <a href="#home" className="brand">
            FS<span>.</span>
          </a>

          <p>Computer Science · AI · Engineering</p>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

      <button
        type="button"
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={18} />
      </button>

    </main>
  );
}
