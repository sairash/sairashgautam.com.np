# Projects and Companies
These are the wide list of `projects` and `compinies` that I have worked on.

---
## Intrested At The Moment

<ul>

<div v-for="project in intrested_data">

<li v-if="project.type == 'interested'">

`{{ project.title }}` - {{ project.small }}

<img :src="project.image" style="height: 200px; border-radius: 15px;"/>


Link to: <a target="_blank" :href="project.link">{{project.title}}</a>

::: details Details -> {{project.title}}
__{{project.date}}__

<div v-html="project.description"></div>

<span v-for="work in project.work.split(' • ')">
<div><code>{{work}}</code></div>
</span>

:::

</li>

</div>

</ul>
<br/>

---

## Companies worked for

<ul>

<div v-for="project in work_data">

<li v-if="project.type == 'job'">

`{{ project.title }}` - {{ project.small }}

<img :src="project.image" style="height: 200px; border-radius: 15px;"/>


Link to: <a target="_blank" :href="project.link">{{project.title}}</a>

::: details Details -> {{project.title}}
__{{project.date}}__

<div v-html="project.description"></div>

<span v-for="work in project.work.split(' • ')">
<div><code>{{work}}</code></div>
</span>

:::

</li>

</div>

</ul>
<br/>

---

## Project Worked on


<ul>

<div v-for="project in project_data">

<li v-if="project.type == 'project'">

`{{ project.title }}` - {{ project.small }}

<img :src="project.image" style="height: 200px; border-radius: 15px;"/>

Link to: <a target="_blank" :href="project.link">{{project.title}}</a>

::: details Details -> {{project.title}}

__{{project.date}}__

<div v-html="project.description"></div>

<span v-for="work in project.work.split(' • ')">
<div><code>{{work}}</code></div>
</span>

:::

</li>

</div>

</ul>
<br/>

<div style="width: 100vw; height: 100vh; position: fixed; background-opacity: 0.5; top: 0; left: 0; display: flex; justify-content: center; align-items: center; z-index: 20" class="middle_text" ref="getting_data">

<div style="font-size: 40px; font-weight: bold; display: flex; gap: 10px; opacity: 1;">
<span style="margin-top: 5px;"> Getting Data  </span>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
</div>

</div>


<script setup>
    import {onMounted, ref} from "vue";

    var all_projects = []
    var intrested_data = ref([])
    var work_data = ref([])
    var project_data = ref([])
    var getting_data = ref()


    async function fetchProjectData() {
        try {
            const response = await fetch('https://sairash.github.io/playable/json/projects.json');

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            return await response.json();

        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    onMounted(async() => {
        all_projects = await fetchProjectData()
        project_data.value = all_projects.filter((ele)=>{return ele.type== "project"})
        work_data.value = all_projects.filter((ele)=>{return ele.type== "job"})
        intrested_data.value = all_projects.filter((ele)=>{return ele.type== "interested"}).reverse()
        

        getting_data.value.style.display = "none"
    })

</script>

<style>
.middle_text {
    background-color: var(--vp-c-bg);
    color: var(--vp-c-gray-1)
}
</style>