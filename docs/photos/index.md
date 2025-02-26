# Photos 
`Random` photos that I clicked.

<img src="/mascot/camera.png" style="width: 150px; position: absolute; right: 0;" />

## 2025

Photos From Month:
<div style="display: flex; flex-wrap: wrap; gap: 20px">
<div style="width: 300px" v-for="(key, i) in photos_2025">
{{i + 1}}: <a :href="key[1]" > {{key[0]}}</a>

</div>
</div>

## 2024

<div style="display: flex; flex-wrap: wrap; gap: 20px">
<div style="width: 300px" v-for="key in photos">
<img :src="key[0]" style="width: 100%"/>

`Date:` {{key[1]}}

</div>
</div>



<script setup>

    const photos_2025 = [
        ["January", "/photos/2025#January"],
        ["February", "/photos/2025#February"],
    ]

    const photos = [
        
        ["https://utfs.io/f/Jk6mQ2VBlE6tEiTjoH9CJBlGwtFz0fbUoaVK5EOIYLA3nv7k", "2024-07-27"], 
        ["https://utfs.io/f/Jk6mQ2VBlE6t5wkQiDzXF7UBCiWynrLPft8gNJG1EsAh29aZ", "2002-08-03"], 
        ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6ttwXtyxZovQfaq1eFImnSxTcu3z4KgYDhbtOp", "2024-12-27"],
        ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tau9iuk6cYUjHit4uDzAMIfad0nW9SK7bTGs1", "2024-12-10"], 
        ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tcI6HM2KajqaumdHJr2VfGkQSE9FveoltNhAM", "2024-12-15"], 
        ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tvBEVGip0Ob9KIBLyQE4mkSdcFaioGnf7Vqex", "2024-12-10"], 
        ["https://utfs.io/f/Jk6mQ2VBlE6tjhui8zmkDAhdsL1rYizQwoxOcMaN5meRvb7I", "2024-02-24"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tWfzP5wJSQpKV0dDlMFAxIHX7wcYCPs1eEauN", "2024-08-24"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tsfy3DRbEQTcoxSCj0kiltyeMR9vVqnPZ7Fs1", "2024-11-01"],
        ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tecHRA4aXzhwWcEjZJRFKox5XbDlMVOrg9GIm", "2024-12-31"], 
        ["https://utfs.io/f/Jk6mQ2VBlE6tZHt2kSgjRlfiMK6r04kEQNc59egnYLduJA3w", "2024-07-09"],
        ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tGSmAGv1W4YuhfF5s20gVwkiQyxZK3o6IAt8m", "2024-12-20"],
        ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tnkaZ5SivUo43wWvxCfSydiBD706ag2YNkXV1", "2024-12-21"],
        ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tOGNN7QW05YBzNVvtAxl312CwIfZoi6uSLHGO", "2024-12-25"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tyoKQ47tCFTLsGa3mY8iJX6eSRWAn2HkNd70x", "2024-11-03"],
        ["https://utfs.io/f/Jk6mQ2VBlE6t9nVfCXN1g3dW4hYzBClEsHpSKvjfumNtoMq6", "2024-06-25"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tZZqXojgjRlfiMK6r04kEQNc59egnYLduJA3w", "2024-10-09"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tEMK4oI9CJBlGwtFz0fbUoaVK5EOIYLA3nv7k", "2024-03-11"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tz45lrRxcaKvjeolUV81nmEQw7yN5zLhtIJpY", "2024-01-04"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tZEJ29BgjRlfiMK6r04kEQNc59egnYLduJA3w", "2024-08-20"],
        ["https://utfs.io/f/Jk6mQ2VBlE6t9mjj601N1g3dW4hYzBClEsHpSKvjfumNtoMq", "2024-09-10"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tqISspxAxeDBVYvIitkQ1K7r0wXaAfmgz3pGC", "2024-02-16"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tt7Fm0sXZovQfaq1eFImnSxTcu3z4KgYDhbtO", "2024-02-25"],
        ["https://utfs.io/f/Jk6mQ2VBlE6twSZgVJENF2MqUHbJiQOD8fPktGxB5KmlY9sz", "2024-11-05"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tPDKnUNqE8ywRKfVHnQGOo1uaMUkvbc9iLmY6", "2024-04-10"],
        ["https://utfs.io/f/Jk6mQ2VBlE6t7uoTadhkjWeOpSoINiwd4928hJt5gXrfHL30", "2024-03-06"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tltSwgLnEzb01rkPICwlNKZtoGxX6A2ue3Hvh", "2024-09-08"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tzo3EQWxcaKvjeolUV81nmEQw7yN5zLhtIJpY", "2024-09-30"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tfDBoaGl4otpcD0BGVWHCx9wRn1u2EqmsdQvi", "2024-08-24"],
        ["https://utfs.io/f/Jk6mQ2VBlE6tpPX02jkmPQe2d0cfNvlGS1EC5rgLKqWpjowZ", "2024-05-06"],
        ]

</script>