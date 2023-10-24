<!-- <script>
    import { onMount } from 'svelte';
	import api from '../../service/Api'
    
    let category = [];
    
    onMount(async () => {
        try {
            const response = await api.get('/products');
            console.log(response.data); 
            category = response.data; 
        } catch (error) {
            console.error(error);
        }
    });
    </script>

<h1>hello world</h1> -->

<script>
    import { onMount } from 'svelte'
    import './product.css'
    import ''

    let products = []
    let showDetails = false;

    onMount(async () => {
        const response = await fetch('http://127.0.0.1:8000/api/products')
        const data = await response.json()
        products = data.data
    })
</script>

<div class="menu-grid">
<div class="product-grid">
    {#each products as product (product.id)}
    <div class="menu-item">
    <div class="card">
        <h2 class="card-title">{product.name}</h2>
        <p class="card-text">Price: {product.price}</p>
        <div class="details" class:show={showDetails}>
        <p class="card-text">Stock: {product.stock}</p>
        <p class="card-text">Tag: {product.tag}</p>
        </div>
        {#if !product.selected}
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" on:click={() => product.selected = true}>
            Buy
        </button>
        {:else}
        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full" on:click={() => product.selected = false}>
            Cancel
        </button>
        {/if}
    </div>
    </div>
    {/each}
</div>

<div class="cart">
    <h2 class="card-title">Order Information</h2>
    <p class="card-text">Your Order:</p>
    {#each products as product (product.id)}
    {#if product.selected}
        <div class="cart-item">
        <p class="cart-item-name">{product.name}</p>
        <p class="card-text">{product.price}</p>
        <span class="cart-item-remove" on:click={() => product.selected = false}>Remove</span>
        </div>
    {/if}
    {/each}
    <p class="card-text">Minimum Order: </p>
    <p class="card-text">Shipping Cost: </p>
    <input type="text" placeholder="Enter voucher" />
    <p class="card-text">Total: </p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
    Place Order
    </button>
</div>
</div>