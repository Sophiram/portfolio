const services = [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Database Development",
    "UI Implementation",
];

export function About() {
    return (
        <section id="about" className="section-padding">
            <div className="section-shell">
                <div className="section-heading">
                    <span className="eyebrow">About Me</span>
                    <h2>About Me</h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                    <div className="space-y-6">
                        <p className="text-base leading-8 text-slate-500 dark:text-slate-300 md:text-lg">
                            I am a Computer Science student and Junior Full Stack Web Developer with a
                            strong interest in building modern, responsive, and practical web applications.
                            My work focuses on both frontend and backend development, with a passion for
                            creating meaningful digital experiences that solve real-world problems.
                        </p>
                        <p className="text-base leading-8 text-slate-500 dark:text-slate-300 md:text-lg">
                            I enjoy learning modern web technologies and continuously improving my
                            programming skills through hands-on development. I am especially interested in
                            building clean interfaces, efficient APIs, and scalable application logic that
                            helps turn ideas into reliable products.
                        </p>
                    </div>

                    <div className="about-panel">
                        <h3>What I Do</h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {services.map((service) => (
                                <div key={service} className="service-item">
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
