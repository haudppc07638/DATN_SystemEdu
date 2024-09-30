import React from 'react'
import Primary from './Layouts/primary'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    const page = pages[`./Pages/${name}.jsx`]
    if (!page) {
      throw new Error(`Page not found: ${name}`)
    }
    page.default.layout = page.default.layout || (page => <Primary>{page}</Primary>)
    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<React.StrictMode><App {...props} /></React.StrictMode>)
  },
})