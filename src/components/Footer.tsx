const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/Sophiram" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "Telegram", href: "https://t.me/Sophiram" },
];

export function Footer() {
    return (
        <footer className="footer-shell">
            <div className="section-shell py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-xl font-semibold text-white">Sorn Sophiram</h3>
                        <p className="mt-3 text-slate-300">Junior Full Stack Web Developer</p>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Quick links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="footer-link">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Socials
                        </h4>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} target="_blank" rel="noreferrer" className="footer-link">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
                    © 2026 Sorn Sophiram. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
