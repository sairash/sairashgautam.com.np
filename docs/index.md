---
title: Sairash's Portfolio
description: I am a full stack developer passionate about crafting elegant, efficient code and constantly expanding my skill set by mastering new technologies. With a strong foundation built on self-drive and insatiable curiosity, I thrive in collaborative environments where teamwork and empathy play a key role. I enjoy tackling complex challenges and transforming innovative ideas into impactful digital solutions that deliver real-world value.
head:
    - ['link', {rel: 'preload', as: 'image', href: '/sairashgautam.com.np.png'}]
    - ['meta', { name: 'keywords', content: 'I am a full stack developer passionate about crafting elegant, efficient code and constantly expanding my skill set by mastering new technologies. With a strong foundation built on self-drive and insatiable curiosity, I thrive in collaborative environments where teamwork and empathy play a key role. I enjoy tackling complex challenges and transforming innovative ideas into impactful digital solutions that deliver real-world value.' }]
    - ['meta', { property: 'og:description', content: 'I am a full stack developer passionate about crafting elegant, efficient code and constantly expanding my skill set by mastering new technologies. With a strong foundation built on self-drive and insatiable curiosity, I thrive in collaborative environments where teamwork and empathy play a key role. I enjoy tackling complex challenges and transforming innovative ideas into impactful digital solutions that deliver real-world value.' }]
    - ['meta', { property: 'og:image', content: '/sairashgautam.com.np.png' }]
    - ['meta', { name: 'twitter:description', content: 'I am a full stack developer passionate about crafting elegant, efficient code and constantly expanding my skill set by mastering new technologies. With a strong foundation built on self-drive and insatiable curiosity, I thrive in collaborative environments where teamwork and empathy play a key role. I enjoy tackling complex challenges and transforming innovative ideas into impactful digital solutions that deliver real-world value.' }]
    - ['meta', { name: 'twitter:image', content: '/sairashgautam.com.np.png' }]
---


<script setup>
  import {toNepali} from "./.vitepress/custom/nepali_number"
  var starting_year = "2021/05/28"
  var years = new Date(new Date() - new Date(starting_year)).getFullYear() - 1970;
  var nepali_years = toNepali(years)


  let list_of_langugage = [
    ["https://abrudz.github.io/logos/TypeScript.svg", "https://www.typescriptlang.org/"],
    ["https://abrudz.github.io/logos/Go.svg", "https://go.dev/"],
    ["https://abrudz.github.io/logos/PHP.svg", "https://www.php.net/"],
    ["https://abrudz.github.io/logos/Python.svg", "https://www.python.org/"],
    ["https://abrudz.github.io/logos/JS.svg", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
    ["https://abrudz.github.io/logos/V.svg", "https://vlang.io/"],
    ["https://utfs.io/f/Jk6mQ2VBlE6tJvy6SfVBlE6tumDzfiKX2RrbsTLOPYUd4IV8", "https://danfe.sairashgautam.com.np/"],
  ];
</script>

# Sairash Sharma Gautam
## सइरश शर्मा गौतम 


<div class="image-list">
  <div class="info"> Fullstack Developer: </div>

  <a v-for="item in list_of_langugage" target="_blank" :href="item[1]" > 
    <img  :src="item[0]" />
  </a>

</div>


_[नमस्ते - Namaste](./definations/namaste.md)_

| Sairash in Person | Sairash while Online |
| --------------- | ---------- |
| <img src="/sai/no-background.png" width="500"/> | <img src="/mascot/it-me.png" width="500"/> |



> **Note:** Throughout the website, I am going to be replaced by this [`mascot`](./definations/mascot.md).

## मेरो बारेमा (About me)


म साइरश शर्मा गौतम, एक उत्साही सफ्टवेयर विकासकर्ता, हाल `नेपालमा` कम्प्युटर साइन्समा स्नातक गर्दै छु।

नयाँ कुरा सिक्ने रुचि र चुनौतीहरू सामना गर्ने जोशका साथ मैले यो क्षेत्रमा करिब `+{{nepali_years}}` वर्ष अघि प्रवेश गरेँ।
<br/>
<br/>

म विभिन्न कम्पनीहरूसँग सहकार्य गर्दै तिनीहरूको अवधारणा र दृष्टिकोणलाई वास्तविकतामा `रूपान्तरण` गर्ने कार्य गर्छु।

<br><br>


---
## English Version

I'm Sairash Sharma Gautam, a `software enthusiast`, currently pursuing higher studies from [Nepal](https://en.wikipedia.org/wiki/Nepal). I enjoy learning new things and try to `overcome` new challenges while analyzing how I improved `through` them. 
<br><br>
I've spent the past +{{years}} years collaborating and building products with `companies` and `freelance gigs`. <br><br>
I join forces with `founders` and `companies` to help mold their ideas and vision to reality. Ones that make their products shine, `resonate` with users, and help people create `memories`.

<!-- Creator of [danfe programming language](https://danfe.sairashgautam.com.np) and [screeenpals](https://screeenpals.sairashgautam.com.np).  -->

---

## Relevent Links

- [Download My CV](https://drive.google.com/file/d/1Zz5EhxgF5lyRLBNNgMHhCr4hBp6QFA9i/view) 
- [Playable Portfolio](https://sairash.github.io/playable)


<!-- <style scoped>
.header-anchor {
  display: none;
}
</style> -->

<style scoped >
a {
  /* text-decoration:underline !important;  */
  border-bottom: 2px solid !important;
}

.info {
  font-weight: 600;
  margin-bottom: 20px;
}

.vp-doc p {
  margin: 0;
}

.image-list {
  padding: 10px 0px 20px 0px;
  display: flex;
  flex-wrap: wrap;
}

.image-list img {
  height: 20px;
  margin-left: 5px;
}

.image-list a {
  border-bottom: 0 !important;
}

.image-list a:hover {
  border-bottom: 2px solid !important;
}


#सइरश-शर्मा-गौतम {
  margin-top: 0 !important;
  padding: 0 !important;
}

#सइरश-शर्मा-गौतम a {
  display: none !important;
}
</style>