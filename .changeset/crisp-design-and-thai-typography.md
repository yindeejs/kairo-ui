---
'@kairo-ui/theme': minor
---

Sharper, border-led visual language and correct Thai typography.

**Design**

- Corners are square. `--kairo-radius`, `--kairo-radius-sm`, `--kairo-radius-md` and `--kairo-radius-lg` are all `0px`, and the scale is now explicit instead of derived from a `calc()` chain. Shape is carried by borders and the focus ring rather than by rounding. Every tier is still its own token, so rounding can be reintroduced in one line: `:root { --kairo-radius: 8px; --kairo-radius-sm: 6px; --kairo-radius-lg: 10px }`. The new `--kairo-radius-full` is used by Avatar, Spinner and the Switch, which are round by function and unaffected.
- New structural tokens: `--kairo-border-width`, `--kairo-ring-width`, `--kairo-ring-offset`. Focus rings are now uniform — previously offsets varied between 1px, 2px and -2px.
- Elevation is border-led. Dialog, Tooltip and the Select popup previously had no border at all; all five floating surfaces now carry one. Shadows were retightened and split into `--kairo-shadow-color` + `--kairo-shadow-strength` so dark mode can retune them — a black shadow is invisible on a dark surface, so dark elevation now reads through brighter border contrast.
- The Tabs indicator is square; Switch, Avatar and Spinner stay round.

**Thai typography**

- `--kairo-font-sans` now includes Thai families (Noto Sans Thai, IBM Plex Sans Thai, Sarabun, Leelawadee UI, Thonburi). No webfont is downloaded — Leelawadee UI ships with Windows and Thonburi with macOS/iOS. This also fixes a latent bug where the generic `sans-serif` preceded the emoji families, making them unreachable.
- New leading tokens (`--kairo-leading-tight` 1.4 / `-normal` 1.5 / `-relaxed` 1.65). Thai stacks diacritics above and below the base character, so the previous `line-height: 1` on Button, Badge and the Avatar fallback clipped tone marks and below-vowels. No component uses a raw line-height number any more.
- Text-bearing controls (Button, Input, Select trigger, Badge, Toast action) size with `min-height` + vertical padding instead of a fixed `height`, so tall Thai glyph stacks can grow. Input previously had zero vertical padding, which clipped inside the input's own content box.
- Popups now declare `font-family` — Tooltip, Dialog, Popover, the Select popup and Toast text previously inherited the host page font, so Thai fell back inconsistently.
- `base.css` adds a `:lang(th)` block (more generous leading, `white-space: normal` on Button/Badge since Thai has no inter-word spaces, and a guard against negative letter-spacing) and `box-sizing: border-box` scoped to Kairo's own elements.

**Migration note**: `--kairo-radius` no longer derives the `sm` and `lg` tiers — it now maps to `md` only. If you overrode `--kairo-radius` to reshape the whole system, set `--kairo-radius-sm` and `--kairo-radius-lg` as well.
