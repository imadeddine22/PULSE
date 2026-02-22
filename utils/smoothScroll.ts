/**
 * Instant scroll to a section by ID (no animation).
 * @param id - The element ID (without #)
 * @param offset - Pixels to offset from top (for sticky nav, default: 80)
 */
export function smoothScrollTo(id: string, _duration = 0, offset = 80) {
    const el = document.getElementById(id)
    if (!el) return

    const target = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: target, behavior: 'instant' as ScrollBehavior })
}
