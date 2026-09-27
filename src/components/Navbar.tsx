"use client";

import { useEffect, useState } from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
        const browserTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
        const nextTheme = savedTheme ?? browserTheme;

        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    return (
        <header className="site-header">
            <div className="section-shell py-3">
                <nav className="flex items-center justify-between gap-6">
                    <a href="#home" className="brand-mark" style={{ color: "var(--foreground)" }}>
                        <span className="brand-icon">&lt;/&gt;</span>
                        <span>SORN SOPHIRAM</span>
                    </a>

                    <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="nav-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <button
                            type="button"
                            className="theme-toggle"
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                        >
                            <span>{theme === "dark" ? "☀" : "☾"}</span>
                        </button>

                        <button
                            type="button"
                            className="nav-toggle"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
