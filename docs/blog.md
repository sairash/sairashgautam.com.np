<script setup>
import {toNepali} from "./.vitepress/custom/nepali_number"
import details from '.vitepress/custom/details.json';

const posts = details['blog']
posts.sort((a, b) => new Date(b.frontmatter.rawDate) - new Date(a.frontmatter.rawDate));


const groupPosts = () => {
  const groups = {}
  posts.forEach((post) => {
    const date = post.frontmatter.rawDate
    const yearMonth = new Date(date).getFullYear().toString() + '/' + (new Date(date).getMonth() + 1).toString().padStart(2, '0') ;
    console.log(yearMonth)
    if (!groups[yearMonth]) {
        groups[yearMonth] = [];
    }

    groups[yearMonth].push(post)
  })
  return groups
}
const postGroups = groupPosts()

</script>


<div v-for="year in Object.keys(postGroups)" :key="year" class="postGroup">
    <div>
        <div class="background">
            {{ toNepali(year) }}
        </div>
        <div class="post-card" v-for="post in postGroups[year]" :key="post.path">
            <a class="title" :href="post.path">{{ post.frontmatter.title == undefined ? post.name: post.frontmatter.title }}</a>
            <small class="small_text">{{post.frontmatter.date}} • {{post.frontmatter.readTime}} min</small>
        </div>
    </div>
</div>


<img class="peeking_into_frame"  src="/mascot/peeking_into_frame.png" />


<style scoped>
    .small_text {
        margin-left: 15px;
        color: var(--vp-c-default-1);
    }
    .postGroup {
        position: relative;
        margin: 10rem 0;
    }

    .background {
        position: absolute;
        font-size: 11rem;
        z-index: -1;
        opacity: 0.5;
        color: transparent;
        left: -5rem;
        top: -3rem;
        -webkit-text-stroke: 2px var(--border);
    }

    @media screen and (max-width: 768px) {
        .background {
            left: -1.5rem;
            font-size: 8rem;
        }
    }

    .post-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1em 0;
    }

    .title {
        color: var(--deep-text);
        font-size: 1.8rem;
        line-height: 2rem;
        margin: 0 0 0.5em;
        border-bottom: unset;
        font-weight: 800;
    }

    .peeking_into_frame {
        height: 200px;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }
</style>
