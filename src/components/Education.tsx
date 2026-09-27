const educationItems = [
    {
        school: "Institute of Science and Technology Advanced Development",
        logo: "istad.png",
        period: "2026 – Present",
        program: "IT Expert Scholarship Program",
        status: "Scholarship Recipient",
        tag: "Scholarship",
        highlights: [
            "Completed the basic professional Full Stack Web Development track with hands-on projects in Next.js, Spring Boot, PostgreSQL, Docker, and deployment workflows.",
            "Focused on UI/UX design, API integration, CI/CD, SDLC, containerization, and software engineering practices for real-world products.",
        ],
    },
    {
        school: "Asia Euro University (AEU)",
        logo: "aeu.png",
        period: "2024 – Present",
        program: "Bachelor of Science in Computer Science",
        status: "Year 4 • Currently studying",
        tag: "Undergraduate",
        highlights: [
            "Building a strong foundation in software engineering, systems design, and modern application development.",
            "Continuing coursework and projects focused on programming, architecture, problem solving, and delivering impactful digital solutions.",
        ],
    },
];

export function Education() {
    return (
        <section id="education" className="section-padding education-section">
            <div className="section-shell">
                <div className="section-heading">
                    <span className="eyebrow">Education</span>
                    <h2>Education</h2>
                </div>

                <div className="education-showcase">
                    {educationItems.map((item, index) => (
                        <article key={item.school} className={`education-card ${index === 0 ? "featured" : ""}`}>
                            <div className="education-header">
                                <div className="education-logo-wrap">
                                    <img src={item.logo} alt={item.school} className="education-logo" />
                                </div>

                                <div className="education-meta">
                                    <span className="education-period">{item.period}</span>
                                    <h3 className="education-school">{item.school}</h3>
                                </div>

                                <span className="education-badge">{item.tag}</span>
                            </div>

                            <div className="education-body">
                                <p className="education-program">{item.program}</p>
                                <p className="education-status-line">{item.status}</p>

                                <ul className="education-details">
                                    {item.highlights.map((point) => (
                                        <li key={point} className="education-point">
                                            <span className="education-dot">●</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
