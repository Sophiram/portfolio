import Image from "next/image";
import { skillCategories } from "@/data/skills";

export function Skills() {
    return (
        <section id="skills" className="section-padding skill-section">
            <div className="section-shell skill-shell">
                <div className="skill-stack">
                    {skillCategories.map((category, index) => (
                        <div key={category.title} className="skill-row">
                            <div className="skill-header">
                                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skill-item-grid">
                                {category.items.map((item) => (
                                    <div key={item.name} className="skill-item">
                                        <div className="skill-icon-wrap">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={22}
                                                height={22}
                                                className="skill-icon"
                                            />
                                        </div>
                                        <span>{item.name}</span>
                                        <div className="skill-bar" aria-hidden="true" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
