import { Item } from "@radix-ui/react-radio-group";
import { title } from "process";

export default {
  index: {
    type: "page",
    display: "hidden",
    theme: {
      layout: "raw",
    },
  },
  tags: {
    display: "children",
    theme: {
      layout: "raw",
    },
  },
  // tools: {
  //   type: "menu",
  //   title: "Tools",
  //   items: {
  //     "random-pokemon-generator": {
  //       title: "Random Pokemon Generator",
  //       href: "/"
  //     },
  //     "random-pokemon-type-generator": {
  //       title: "Random Pokemon Type Generator",
  //       href: "/tools/random-pokemon-type-generator"
  //     },
  //     "random-shiny-pokemon-generator": {
  //       title: "Random Shiny Pokemon Generator",
  //       href: "/tools/random-shiny-pokemon-generator"
  //     },
  //     "random-mega-pokemon-generator": {
  //       title: "Random Mega Pokemon Generator",
  //       href: "/tools/random-mega-pokemon-generator"
  //     }
  //   }
  // }
  // spec: {
  //   display: "hidden",
  //   type: "page",
  //   title: <span className="after:content-['_↗'] after:font-sans">Spec</span>,
  //   href: "https://spec.graphql.org",
  //   newWindow: true,
  // },
  docs: {
    type: "page",
    title: "Documentation",
  },
  blog: {
    type: "page",
    title: "Blog",
    theme: {
      layout: "raw",
      typesetting: "article",
      timestamp: false,
    },
  }
}
