## 2026-06-18 - [Fix Button Native Disabled Overriding]
**Learning:** Custom JS-based hover events (`onMouseOver`/`onMouseOut`) in `Button.tsx` were overriding the button's native disabled state, leading to confusing visual interactions during async form submissions.
**Action:** Always guard JS hover handlers with `if (props.disabled) return;`.
## 2024-06-21 - [Screen Reader Form Accessibility]
**Learning:** Decorative elements inside custom interactive areas (like the file upload drag zone) can create redundant or confusing screen reader output if not explicitly hidden.
**Action:** Always use `aria-hidden="true"` on non-semantic SVG icons and supplementary text when the parent element or a visually-hidden label already provides the necessary context.
