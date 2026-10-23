import type { JSX as ReactJSX } from 'react'

// React 19 types no longer declare a global `JSX` namespace, but
// react-markdown@8 ships `lib/complex-types.ts` (not covered by
// skipLibCheck) that still references it.
declare global {
  namespace JSX {
    type IntrinsicElements = ReactJSX.IntrinsicElements
  }
}
