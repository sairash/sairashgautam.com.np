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
        "May": [
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tzdWmOCxcaKvjeolUV81nmEQw7yN5zLhtIJpY", "2025-05-03"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tLl6Ty8guEC9coqerdXTUMpmgu6VvIWanSiKH", "2025-05-05"], 
        ],
        "April": [
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t4KbAzk5jTbkK6z3B7XWmuOinh8aUx2ZoSMds", "2025-04-01"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tygrm5JNtCFTLsGa3mY8iJX6eSRWAn2HkNd70", "2025-04-01"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t4GXCpf5jTbkK6z3B7XWmuOinh8aUx2ZoSMds", "2025-04-07"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tWaGY0tJSQpKV0dDlMFAxIHX7wcYCPs1eEauN", "2025-04-10"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6twNd7zKAENF2MqUHbJiQOD8fPktGxB5KmlY9s", "2025-04-15"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tY43WfaLr5NPLfyHCAXTI0wcDOVaRt3j1qU7e", "2025-04-20"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6trBiw6bdXJwOy7Z6pcIaS9AHD0PsuW1Yd3itl", "2025-04-23"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6teWGTqKXzhwWcEjZJRFKox5XbDlMVOrg9GImU", "2025-04-27"], 
        ],
        "March": [
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tOVMaXryW05YBzNVvtAxl312CwIfZoi6uSLHG", "2025-03-01"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6ty2BYgntCFTLsGa3mY8iJX6eSRWAn2HkNd70x", "2025-03-05"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tuKrIpfdJbivsZL80g4PBFhUyoHtepV35fDAc", "2025-03-11"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tLyzD3MuEC9coqerdXTUMpmgu6VvIWanSiKHh", "2025-03-11"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6taADJ7s6cYUjHit4uDzAMIfad0nW9SK7bTGs1", "2025-03-16"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tERqw4Z9CJBlGwtFz0fbUoaVK5EOIYLA3nv7k", "2025-03-17"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tUQtVkIJBGdO7BhTgK94jwyZAMtrQFH6z5SmN", "2025-03-20"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tgO91KH7vjFl4rXYBLVJWMauU5hodzKTCAfsO", "2025-03-21"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tdccS9oFAQVPnJErFyKIBfH6pxqk0bTiMYUaG", "2025-03-30"], 

        ],
        "February": [
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tJ1DkmRPVBlE6tumDzfiKX2RrbsTLOPYUd4IV", "2025-02-01"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6ta5Zh8W6cYUjHit4uDzAMIfad0nW9SK7bTGs1", "2025-02-02"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tE0eren9CJBlGwtFz0fbUoaVK5EOIYLA3nv7k", "2025-02-02"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6twsj6xkENF2MqUHbJiQOD8fPktGxB5KmlY9sz", "2025-02-02"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tt7wiVzQZovQfaq1eFImnSxTcu3z4KgYDhbtO", "2025-02-05"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6txunIjGuYYbLX9NaJM3cfTIQogd46w2rAWuK7", "2025-02-10"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6twc9QgENF2MqUHbJiQOD8fPktGxB5KmlY9szo", "2025-02-11"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tk8GnYGsJtwzFSDqExs53HfM7VZuCG8KhWNOl", "2025-02-12"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6trD2UzfdXJwOy7Z6pcIaS9AHD0PsuW1Yd3itl", "2025-02-20"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tgvhBQZ7vjFl4rXYBLVJWMauU5hodzKTCAfsO", "2025-02-23"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tIWbvLAT9cRd8AqSIukwmrYF7UopH2Kg13MD5", "2025-02-27"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6twTq82HENF2MqUHbJiQOD8fPktGxB5KmlY9sz", "2025-02-28"], 
        ],
        "January": [
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6teUSq6EXzhwWcEjZJRFKox5XbDlMVOrg9GImU", "2025-01-01"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tWyD1f1JSQpKV0dDlMFAxIHX7wcYCPs1eEauN", "2025-01-07"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tPXKDHyqE8ywRKfVHnQGOo1uaMUkvbc9iLmY6", "2025-01-13"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t37uvl0cWeZG5NxEn3Kpj76XcYqthzMLsDu1b", "2025-01-05"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tkKeCImsJtwzFSDqExs53HfM7VZuCG8KhWNOl", "2025-01-14"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6toF2MfjyciU06w7xkslLhGM2DZ3vBazQFypuT", "2025-01-17"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t7WmuVzhkjWeOpSoINiwd4928hJt5gXrfHL30", "2025-01-20"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6tGFvDhu1W4YuhfF5s20gVwkiQyxZK3o6IAt8m", "2025-01-24"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t7ZCil1hkjWeOpSoINiwd4928hJt5gXrfHL30", "2025-01-25"], 
            ["https://akocdw82ai.ufs.sh/f/Jk6mQ2VBlE6t4tq7t5jTbkK6z3B7XWmuOinh8aUx2ZoSMdsJ", "2025-01-25"], 
        ],
        
    }

</script>