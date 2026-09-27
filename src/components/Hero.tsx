"use client";

import { useEffect, useState } from "react";

const roles = [
    "Junior Front-End Web Developer",
    "Graphic Designer",
    "React Developer",
    "Next.js Developer",
    "Backend Developer",
];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Sophiram",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M12 2C6.477 2 2 6.58 2 12.217c0 4.512 2.865 8.34 6.839 9.697.5.094.682-.22.682-.49 0-.242-.009-.886-.014-1.736-2.782.607-3.369-1.34-3.369-1.34-.455-1.166-1.11-1.477-1.11-1.477-.908-.623.069-.61.069-.61 1.003.071 1.532 1.03 1.532 1.03.892 1.53 2.34 1.088 2.91.832.09-.647.35-1.089.635-1.338-2.22-.254-4.555-1.115-4.555-4.963 0-1.097.39-1.994 1.03-2.697-.103-.254-.447-1.277.098-2.66 0 0 .84-.27 2.75 1.026A9.49 9.49 0 0 1 12 6.844c.85.004 1.706.116 2.505.34 1.907-1.296 2.747-1.026 2.747-1.026.547 1.383.203 2.406.1 2.66.642.703 1.028 1.6 1.028 2.697 0 3.857-2.338 4.706-4.566 4.955.359.31.679.922.679 1.858 0 1.342-.012 2.423-.012 2.753 0 .272.179.59.688.49A10.028 10.028 0 0 0 22 12.217C22 6.58 17.523 2 12 2Z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.72h2.9V18H5.5V9.72Zm5.2 0h2.77v1.13h.04c.39-.73 1.33-1.5 2.73-1.5 2.92 0 3.46 1.92 3.46 4.42V18h-2.88v-16.8c0-1.1-.02-2.52-1.53-2.52-1.54 0-1.78 1.2-1.78 2.44V18h-2.9V9.72Z" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V7.3c0-.93.26-1.56 1.6-1.56H17V2.8c-.28-.04-1.24-.12-2.35-.12-2.32 0-3.9 1.42-3.9 4.02V10.8H8v3.2h2.75v8h2.75Z" />
            </svg>
        ),
    },
    {
        label: "Telegram",
        href: "https://t.me/Sophiram",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M21.6 4.8 18.8 19.6c-.2 1-.86 1.25-1.75.78l-4.82-3.55-2.32 2.23c-.26.26-.48.48-.98.48l.35-4.96L17.9 6.5c.39-.35-.09-.54-.61-.2L7.3 12.3l-4.77-1.48c-1.04-.32-1.05-1.04.22-1.54l18.5-7.14c.86-.32 1.62.2 1.34 1.46Z" />
            </svg>
        ),
    },
];

export function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        if (!isDeleting && typedText === currentRole) {
            const pause = window.setTimeout(() => setIsDeleting(true), 1400);
            return () => window.clearTimeout(pause);
        }

        const timer = window.setTimeout(() => {
            if (!isDeleting) {
                setTypedText(currentRole.slice(0, typedText.length + 1));
            } else {
                setTypedText(currentRole.slice(0, Math.max(0, typedText.length - 1)));
            }
        }, isDeleting ? 60 : 110);

        return () => window.clearTimeout(timer);
    }, [typedText, isDeleting, roleIndex]);

    useEffect(() => {
        if (isDeleting && typedText === "") {
            setIsDeleting(false);
            setRoleIndex((current) => (current + 1) % roles.length);
        }
    }, [typedText, isDeleting]);

    return (
        <section id="home" className="section-padding pt-14">
            <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-8">
                    <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                        Hello, It&apos;s me
                    </div>

                    <div className="space-y-4">
                        <h1
                            className="text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl"
                            style={{ color: "var(--foreground)" }}
                        >
                            SORN SOPHIRAM
                        </h1>

                        <div className="min-h-[2.5rem]">
                            <p
                                className="text-2xl font-medium md:text-3xl"
                                style={{ color: "var(--foreground-soft)" }}
                            >
                                I&apos;m a <span className="text-gradient">{typedText}</span>
                                <span className="typing-cursor" aria-hidden="true" />
                            </p>
                        </div>
                    </div>

                    <p
                        className="max-w-xl text-base leading-8 md:text-lg"
                        style={{ color: "var(--foreground-soft)" }}
                    >
                        I am a Computer Science student and Junior Full Stack Web Developer passionate
                        about building modern, responsive, and user-friendly web applications. I enjoy
                        learning new technologies and turning ideas into real-world applications.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a href="/Resume.pdf" download className="primary-button">
                            Download Resume
                        </a>
                        <a href="#projects" className="secondary-button">
                            View Projects
                        </a>
                    </div>

                    <div className="hero-socials" aria-label="Social links">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="hero-social-link"
                                aria-label={social.label}
                                title={social.label}
                            >
                                <span className="hero-social-icon">{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="profile-frame">
                        <div className="profile-glow" />
                        <img
                            src="my-photo1.jpg"
                            alt="Developer portrait"
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}