## 2026-06-18 - [Fix Button Native Disabled Overriding]
**Learning:** Custom JS-based hover events (`onMouseOver`/`onMouseOut`) in `Button.tsx` were overriding the button's native disabled state, leading to confusing visual interactions during async form submissions.
**Action:** Always guard JS hover handlers with `if (props.disabled) return;`.
## 2024-06-21 - [Screen Reader Form Accessibility]
**Learning:** Decorative elements inside custom interactive areas (like the file upload drag zone) can create redundant or confusing screen reader output if not explicitly hidden.
**Action:** Always use `aria-hidden="true"` on non-semantic SVG icons and supplementary text when the parent element or a visually-hidden label already provides the necessary context.
## 2024-06-23 - [Form Accessibility Loading State]
**Learning:** During async operations, users need clear visual feedback to prevent multiple submissions and confusion. While we disabled the button, adding an explicit loading spinner alongside the text ("PROCESSING MODELS...") provides immediate, unambiguous feedback that the system is actively working.
**Action:** Always include a visual loading indicator (e.g., a spinner icon) inside critical action buttons during async state transitions.
