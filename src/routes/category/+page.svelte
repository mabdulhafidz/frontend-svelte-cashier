<!-- <script>
    import { onMount } from 'svelte';
	import api from '../../service/Api';


    let category = [];
    
    onMount(async () => {
        try {
            const response = await api.get('/category');
            console.log(response.data); 
            category = response.data; 
        } catch (error) {
            console.error(error);
        }
    });
</script>

{#each category as item (item.id)}
    <h1>id: {item.id}</h1>
    <h1>name: {item.name}</h1>
{/each} -->

<script>
	import { onMount } from 'svelte'
	let data
	onMount(async () => {
		data = await fetch('http://127.0.0.1:8000/api/category').then(x => x.json())
	})
</script>

<pre>
	{JSON.stringify(data, null, 2)}
</pre>


<!-- <h2 class="card-title">{category.name}</h2> -->