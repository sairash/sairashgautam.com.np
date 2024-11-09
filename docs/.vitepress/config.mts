import { defineConfig, type UserConfig } from 'vitepress'
import implicitFigures from 'markdown-it-implicit-figures'

async function load(): Promise<UserConfig>{
  // console.log("Hello")
  // await getFolders("blog", true)
  return defineConfig({
    title: "Sairash's Lair",
    description: "The Tale of Sairash",
    outDir: 'dist',
    markdown: {
      config: (md) => {
        md.use(implicitFigures, {
          figcaption: true,
          copyAttrs: '^class$'
        })
      }
    },
    themeConfig: {
      logo:"/mascot/wink.png",
      
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog' },
        { text: 'Photos', link: '/photos' }
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/sairash' }
      ]
    },
    head: [
      ["link", {rel: "shortcut icon", href: "/mascot/wink.png"}]
    ]
  })
}


// https://vitepress.dev/reference/site-config
export default load()
