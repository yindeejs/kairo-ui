'use client';

import type { ReactNode } from 'react';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

export interface ComponentPreviewProps {
  /** The component/markup to render inside the preview panel. */
  children: ReactNode;
  /** Optional source snippet rendered below the preview. */
  code?: string;
}

/**
 * Reusable preview frame for component documentation pages.
 *
 * Renders `children` inside a bordered, token-themed panel (using
 * `--kairo-card`/`--kairo-border`/`--kairo-radius`) so previews automatically
 * follow the active mode + preset.
 *
 * The snippet goes through Fumadocs' `DynamicCodeBlock`, which runs Shiki in
 * the browser, so these previews get the same highlighting — and the same copy
 * button — as the fenced blocks authored in MDX. A plain `<pre>` here left
 * every example on a component page rendering as flat monochrome text while
 * the prose blocks right next to it were coloured.
 *
 * `'use client'` is required by that: the highlighter is a React hook, not a
 * build step.
 */
export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  return (
    <div
      className="not-prose my-4 overflow-hidden"
      style={{
        border: '1px solid var(--kairo-border)',
        borderRadius: 'var(--kairo-radius-lg)',
        backgroundColor: 'var(--kairo-card)',
        color: 'var(--kairo-card-foreground)',
      }}
    >
      <div className="flex min-h-32 items-center justify-center p-6">{children}</div>
      {code ? (
        <div style={{ borderTop: '1px solid var(--kairo-border)' }}>
          {/* The panel already draws the frame, so the code block drops its own
              border, radius and vertical margin rather than nesting a second
              one inside this one. */}
          <DynamicCodeBlock
            lang="tsx"
            code={code}
            codeblock={{ className: 'my-0 rounded-none border-0' }}
          />
        </div>
      ) : null}
    </div>
  );
}
