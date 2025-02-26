# 2025
`Random` photos that I clicked.

<img src="/mascot/camera.png" style="width: 150px; position: absolute; right: 0;" />

<div v-for="(month, month_name) in photo">

<h2 :id="month_name" tabindex="-1"> {{month_name}}</h2>

<div style="display: flex; flex-wrap: wrap; gap: 20px;" >
<div style="width: 300px" v-for="key in month">
<img :src="key[0]" style="width: 100%"/>

`Date:` {{key[1]}}

</div>
</div>
</div>



<script setup>

    const photo = {
        "February": [
            ["/images/17.jpg", "2025-02-01"], 
            ["/images/19.jpg", "2025-02-02"], 
            ["/images/21.jpg", "2025-02-02"], 
            ["/images/22.jpg", "2025-02-02"], 
            ["/images/34.jpg", "2025-02-05"], 
            ["/images/20.jpg", "2025-02-10"], 
            ["/images/38.jpg", "2025-02-11"], 
            ["/images/25.jpg", "2025-02-12"], 
            ["/images/flower.jpg", "2025-02-14"], 
            ["/images/30.jpg", "2025-02-20"], 
            ["/images/32.jpg", "2025-02-23"], 
        ],
        "January": [
            ["/images/15.jpg", "2025-01-25"], 
            ["/images/16.jpg", "2025-01-25"], 
            ["/images/13.jpg", "2025-01-17"], 
            ["/images/11.jpg", "2025-01-24"], 
            ["/images/27.jpg", "2025-01-05"], 
            ["/images/10.jpg", "2025-01-20"], 
            ["/images/8.jpg", "2025-01-14"], 
            ["/images/7.jpg", "2025-01-13"], 
            ["/images/6.jpg", "2025-01-07"], 
            ["/images/5.jpg", "2025-01-01"], 
        ],
        
    }

</script>