/**
 * Framework-agnostic theme API for Kairo.
 *
 * Zero dependencies, SSR-safe (every DOM-touching function guards against
 * `document` being unavailable). Pairs with the CSS design tokens shipped in
 * `css/tokens.css`:
 *
 *   - `setPreset(id)` toggles the `data-kairo-theme` attribute on
 *     `<html>` (the `"default"` preset removes the attribute entirely).
 *   - `setMode(mode)` toggles the `.dark` class on `<html>`.
 *   - `setTheme({ preset, mode })` is a convenience wrapper over both.
 */

export type {
  KairoColorToken,
  KairoMotionToken,
  KairoRadiusToken,
  KairoShadowToken,
  KairoStructuralToken,
  KairoToken,
  KairoTypographyToken,
} from './tokens.generated';
export { KAIRO_TOKENS, token } from './tokens.generated';

const THEME_ATTRIBUTE = 'data-kairo-theme';
const DARK_CLASS = 'dark';
const DEFAULT_PRESET = 'default';

export interface KairoThemePreset {
  /** Stable identifier, used as the `data-kairo-theme` attribute value. */
  id: string;
  /** Human-readable label for UI theme pickers. */
  label: string;
  /** A representative color (any valid CSS color) for UI pickers. */
  swatch: string;
}

// `as const satisfies` (rather than an explicit `: readonly KairoThemePreset[]`
// annotation) keeps each `id` a string *literal* so `KairoPresetId` below can
// derive the real union instead of widening to `string`, while still
// checking every entry against `KairoThemePreset`.
export const themes = [
  { id: 'default', label: 'Black', swatch: 'oklch(0.205 0 0)' },
  { id: 'blue', label: 'Blue', swatch: 'oklch(0.58 0.196 259)' },
  { id: 'pink', label: 'Pink', swatch: 'oklch(0.58 0.2 355)' },
] as const satisfies readonly KairoThemePreset[];

/** Every built-in preset id, derived from `themes` so it can't drift from it. */
export type KairoPresetId = (typeof themes)[number]['id'];

export type ThemeMode = 'light' | 'dark';

/**
 * Sets the active theme preset by toggling `data-kairo-theme` on
 * `document.documentElement`. Passing `"default"` (or any falsy id) removes
 * the attribute, since the default preset is expressed as bare `:root`/
 * `.dark` selectors in `css/tokens.css`.
 *
 * Accepts `KairoPresetId | (string & {})` rather than closing the type to
 * the built-ins: custom presets declared by a consumer's own CSS still work
 * at the type level, but `setPreset('bleu')` is caught as a typo against the
 * built-in ids via autocomplete.
 */
export function setPreset(id: KairoPresetId | (string & {})): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  if (!id || id === DEFAULT_PRESET) {
    root.removeAttribute(THEME_ATTRIBUTE);
  } else {
    root.setAttribute(THEME_ATTRIBUTE, id);
  }
}

/**
 * Sets the active color scheme by toggling the `.dark` class on
 * `document.documentElement`.
 */
export function setMode(mode: ThemeMode): void {
  if (typeof document === 'undefined') return;

  document.documentElement.classList.toggle(DARK_CLASS, mode === 'dark');
}

/**
 * Convenience wrapper that applies a preset and/or mode in one call.
 */
export function setTheme(opts: { preset?: KairoPresetId | (string & {}); mode?: ThemeMode }): void {
  if (typeof document === 'undefined') return;

  if (opts.preset !== undefined) setPreset(opts.preset);
  if (opts.mode !== undefined) setMode(opts.mode);
}

export const version = '0.0.0';
