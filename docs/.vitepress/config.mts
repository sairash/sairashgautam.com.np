import { defineConfig, type UserConfig } from 'vitepress'
import {createHighlighter} from 'shiki'
import fs from 'fs'


const danfeLang = JSON.parse(fs.readFileSync('./docs/public/danfe.json', 'utf8'))

async function load(): Promise<UserConfig>{
  // console.log("Hello")
  // await getFolders("blog", true)
  return defineConfig({
    title: "Sairash's Lair",
    description: "The Tale of Sairash",
    outDir: 'dist',
    cleanUrls: true,
    markdown: {
      config: async (md) => {
        const highlighter = await createHighlighter({
          langs: [danfeLang, 'bash', 'md', 'js', 'sh', 'v'],
          
          themes: ['github-dark-high-contrast']
        })
  
        md.options.highlight = (code, lang) => {
          return highlighter.codeToHtml(code, {
            lang: lang,
            theme: 'github-dark-high-contrast'
          })
        }
      },
    },
    themeConfig: {
      logo:"/mascot/wink.png",
      
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About Me', link: '/blog/2024-09-28' },
        { text: 'Blog', link: '/blog' },
        { text: 'Projects', link: '/projects' },
        { text: 'Photos', link: '/photos' },
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/sairash' },
        { icon:{svg: `<svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="1em" viewBox="0 0 384 512"><path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41z"/></svg>`}, link: 'https://sairash.github.io/playable' }
      ]
    },
    head: [
      ["link", {rel: "shortcut icon", href: "/mascot/wink.png"}]
    ]
  })
}


// https://vitepress.dev/reference/site-config
export default load()
