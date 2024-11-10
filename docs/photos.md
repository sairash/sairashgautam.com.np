# Photos 
`Random` photos that I clicked.

<img src="/mascot/camera.png" style="width: 150px; position: absolute; right: 0;" />

## 2024

<div style="display: flex; flex-wrap: wrap; gap: 20px">
<div style="width: 300px" v-for="key in photos">
<img :src="key[0]" style="width: 100%"/>

`Date:` {{key[1]}}

</div>
</div>



<script setup>

    const photos = [
        ["/photos/1.jpg", "2024-07-27"], 
        ["/photos/2.jpg", "2002-08-03"], 
        ["/photos/3.jpg", "2024-02-24"],
        ["/photos/4.jpg", "2024-08-24"],
        ["/photos/5.jpg", "2024-11-01"],
        ["/photos/6.jpg", "2024-07-09"],
        ["/photos/7.jpg", "2024-11-03"],
        ["/photos/8.jpg", "2024-06-25"],
        ["/photos/9.jpg", "2024-10-09"],
        ["/photos/10.jpg", "2024-03-11"],
        ["/photos/11.jpg", "2024-01-04"],
        ["/photos/12.jpg", "2024-08-20"],
        ["/photos/13.jpg", "2024-09-10"],
        ["/photos/14.jpg", "2024-02-16"],
        ["/photos/15.jpg", "2024-02-25"],
        ["/photos/16.jpg", "2024-11-05"],
        ["/photos/17.jpg", "2024-04-10"],
        ["/photos/18.jpg", "2024-03-06"],
        ["/photos/19.jpg", "2024-09-08"],
        ["/photos/20.jpg", "2024-09-30"],
        ["/photos/21.jpg", "2024-08-24"],
        ["/photos/22.jpg", "2024-05-06"],
        ]

</script>