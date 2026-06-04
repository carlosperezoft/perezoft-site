export default function SectionHeader({ label, title, highlight }) {
    return (
        <>
            <p className="section-label">{label}</p>
            <h2 className="section-title">
                {title} <span className="gradient-text">{highlight}</span>
            </h2>
            <div className="section-divider" />
        </>
    );
}
