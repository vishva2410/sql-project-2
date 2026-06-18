## 2026-06-18 - [Fix Button Native Disabled Overriding]
**Learning:** Custom JS-based hover events (`onMouseOver`/`onMouseOut`) in `Button.tsx` were overriding the button's native disabled state, leading to confusing visual interactions during async form submissions.
**Action:** Always guard JS hover handlers with `if (props.disabled) return;`.