import { Suspense } from 'react';
import type { Root } from 'fumadocs-core/page-tree';
// IMPORTANT: the layout and the page primitives MUST come from the same
// module. Every `fumadocs-ui/layouts/*` variant exports an identically-named
// `DocsLayout` + `DocsPage` pair, but they are not interchangeable — `DocsPage`
// reads a layout context via `useDocsLayout()`, so mixing (e.g. notebook's
// layout with `layouts/docs/page`) throws "Please use <DocsPage /> under
// <DocsLayout />" and blanks every docs page at runtime. That failure does NOT
// fail the build: prerender logs the error per page and still exits 0.
import { DocsLayout as NotebookLayout } from 'fumadocs-ui/layouts/notebook';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/notebook/page';
import browserCollections from 'collections/browser';
import { getMDXComponents } from '@/components/mdx';
import { baseOptions } from '@/lib/layout.shared';

// MDX bodies are lazily code-split per page via `collections/browser` — this
// is kept out of each route's server-loader closure the same way the
// original single-locale route did, and is shared across locales since the
// browser glob covers both `*.mdx` and `*.th.mdx` files alike.
//
// NOTE: the server loader itself (`createServerFn(...).handler(...)`) is
// intentionally *not* factored out into a shared helper like this one —
// TanStack Start's compiler needs to statically find that call directly in
// the route file that uses it to split it into a server-only chunk; wrapping
// it in a cross-file factory function silently breaks that (the loader
// resolves to `undefined` at runtime instead of the handler's return value).
// See `routes/docs.$.tsx` / `routes/th.docs.$.tsx`.
export const docsClientLoader = browserCollections.docs.createClientLoader({
  component({ toc, frontmatter, default: MDX }) {
    return (
      <DocsPage toc={toc}>
        <DocsTitle>{frontmatter.title}</DocsTitle>
        <DocsDescription>{frontmatter.description}</DocsDescription>
        <DocsBody>
          <MDX components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    );
  },
});

/**
 * Renders the deserialized `{ path, pageTree }` pair produced by
 * `useFumadocsLoader(Route.useLoaderData())` in each locale's route file —
 * called there directly (not inside this shared helper) so its generic
 * return type is resolved against each route's own concrete loader data,
 * rather than a loosely-typed generic here.
 */
export function DocsPageBody({ path, pageTree }: { path: string; pageTree: Root }) {
  return (
    // Notebook (rather than the plain docs layout): its full-width header
    // carrying brand + tabs + search, with the sidebar starting beneath it and
    // flush to the viewport edge, is the shell this site's design targets.
    // `tabMode="navbar"` puts the section tabs in that header instead of
    // collapsing them into a dropdown at the top of the sidebar.
    <NotebookLayout {...baseOptions()} tree={pageTree} tabMode="navbar" sidebar={{ collapsible: true }}>
      <Suspense>{docsClientLoader.useContent(path)}</Suspense>
    </NotebookLayout>
  );
}
