## 2026-06-18 - [Fix Button Native Disabled Overriding]
**Learning:** Custom JS-based hover events (`onMouseOver`/`onMouseOut`) in `Button.tsx` were overriding the button's native disabled state, leading to confusing visual interactions during async form submissions.
**Action:** Always guard JS hover handlers with `if (props.disabled) return;`.

## 2025-02-18 - [Forms Without Explicit Labels Need ARIA Attributes]
**Learning:** The custom form components built with Next.js and Lucide-react icons in this app (`ScanForm.tsx`) rely heavily on visual layout (icons + placeholders) rather than explicit `<label>` tags for form inputs. This makes them inaccessible to screen readers out-of-the-box.
**Action:** Always verify that input fields and textareas without explicit semantic labels (`<label htmlFor="...">`) receive an `aria-label` attribute describing their purpose.