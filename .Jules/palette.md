## 2026-06-18 - [Fix Button Native Disabled Overriding]
**Learning:** Custom JS-based hover events (`onMouseOver`/`onMouseOut`) in `Button.tsx` were overriding the button's native disabled state, leading to confusing visual interactions during async form submissions.
**Action:** Always guard JS hover handlers with `if (props.disabled) return;`.## 2026-06-19 - [Restore Visible Focus for Hidden File Inputs]
**Learning:** Custom dropzones that visually hide the native `<input type="file">` (using `opacity: 0`) inadvertently hide the keyboard focus outline. While the input remains focusable in the DOM, users navigating via keyboard lose their visual anchor.
**Action:** When hiding a native input within a custom wrapper, always attach `onFocus` and `onBlur` listeners to the input to explicitly toggle a visible `outline` or focus state on the parent wrapper.
