"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useEffect, useMemo, useState } from "react";

export function BackgroundParticles() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const updateTheme = () => {
            const current = document.documentElement.getAttribute("data-theme");
            setTheme(current === "light" ? "light" : "dark");
        };

        updateTheme();

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === "data-theme") {
                    updateTheme();
                    break;
                }
            }
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        return () => observer.disconnect();
    }, []);

    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);

    const options = useMemo<ISourceOptions>(() => {
        const isLight = theme === "light";

        return {
            background: {
                color: "transparent",
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: isLight ? 0.35 : 0.65,
                        },
                    },
                    push: {
                        quantity: 2,
                    },
                },
            },
            particles: {
                color: {
                    value: isLight ? ["#2563eb", "#14b8a6", "#0ea5e9"] : ["#60a5fa", "#2dd4bf", "#38bdf8"],
                },
                links: {
                    color: isLight ? "#60a5fa" : "#7dd3fc",
                    distance: 120,
                    enable: true,
                    opacity: isLight ? 0.18 : 0.35,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: false,
                    speed: 1.1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1200,
                    },
                    value: isLight ? 48 : 64,
                },
                opacity: {
                    value: isLight ? 0.6 : 0.9,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        };
    }, [theme]);

    return (
        <ParticlesProvider init={particlesInit}>
            <div className="particles-bg" aria-hidden="true">
                <Particles id="portfolio-particles" options={options} />
            </div>
        </ParticlesProvider>
    );
}

