const stats = [
    { value: "3+", label: "Years Learning" },
    { value: "7+", label: "Projects" },
    { value: "10+", label: "Technologies" },
    { value: "500+", label: "Commits" },
];

export function Stats() {
    return (
        <section className="section-padding pt-0">
            <div className="section-shell">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.label} className="stat-card">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
