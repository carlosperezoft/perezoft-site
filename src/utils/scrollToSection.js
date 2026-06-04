export default function scrollToSection(id) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}
