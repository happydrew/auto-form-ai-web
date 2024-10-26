import meta from "../../../src/pages/_meta.tsx";
import blog_meta from "../../../src/pages/blog/_meta.tsx";
import docs_meta from "../../../src/pages/docs/_meta.ts";
import tags_meta from "../../../src/pages/tags/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "blog",
  route: "/blog",
  children: [{
    data: blog_meta
  }, {
    name: "auto-form-ai",
    route: "/blog/auto-form-ai",
    frontMatter: {
      "title": "AutoFormAI - One-Click Web Form Autofill",
      "author": "Drew Grant",
      "description": "AutoFormAI is an efficient and intelligent Chrome extension designed to help you quickly and easily complete various web forms.",
      "date": new Date(1729900800000),
      "tags": ["AutoFormAI", "Chrome Extension", "AI", "Web Form Autofill"]
    }
  }]
}, {
  name: "blog",
  route: "/blog",
  frontMatter: {
    "sidebarTitle": "Blog"
  }
}, {
  name: "docs",
  route: "/docs",
  children: [{
    data: docs_meta
  }, {
    name: "contact-us",
    route: "/docs/contact-us",
    frontMatter: {
      "title": "Contact Us",
      "author": "Drew Grant",
      "description": "Contact us for more information about AutoFormAI.",
      "date": new Date(1729900800000)
    }
  }, {
    name: "introduction",
    route: "/docs/introduction",
    frontMatter: {
      "title": "AutoFormAI - One-Click Web Form Autofill",
      "author": "Drew Grant",
      "description": "AutoFormAI is an efficient and intelligent Chrome extension designed to help you quickly and easily complete various web forms.",
      "date": new Date(1729900800000)
    }
  }, {
    name: "privacy-policy",
    route: "/docs/privacy-policy",
    frontMatter: {
      "title": "Privacy Policy for AutoFormAI",
      "author": "Drew Grant",
      "description": "This Privacy Policy explains how we collect, use, and protect your personal information when you use our Chrome extension.",
      "date": new Date(1729900800000)
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "AutoFormAI - One-Click Web Form Autofill",
    "author": "Drew Grant",
    "description": "AutoFormAI is an efficient and intelligent Chrome extension designed to help you quickly and easily complete various web forms.",
    "date": new Date(1729900800000)
  }
}, {
  name: "tags",
  route: "/tags",
  children: []
}];
const dynamicMetaModules = {
  "/tags": tags_meta
};

import { resolvePageMap } from 'nextra/page-map-dynamic'

if (typeof window === 'undefined') {
  globalThis.__nextra_resolvePageMap ||= Object.create(null)
  globalThis.__nextra_resolvePageMap[''] = resolvePageMap('', dynamicMetaModules)
}