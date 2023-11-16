<script>
    import { onMount } from 'svelte'
    import './product.css'
    import Sidebar from '../sidebar.svelte';

    let products = [];
    let showDetails = false;

    onMount(async () => {
    try {
    const response = await fetch('http://localhost:8000/api/products');
    const data = await response.json();
        products  = data.data;
    } catch (error) {
    console.error(error);
}
});

</script>


    <Sidebar />
<div class="container">
    <div class="product-grid">
        {#each products as product (product.id)}
        <div class="menu-item">
            <div class="card">
                <img src={product.images} alt="" />
                <h2 class="card-title">{product.name}</h2>
                <p class="card-text">Rp.{product.price}</p>
                <div class="details" class:show={showDetails}>
                </div>
                <div>
                    {#if !product.selected}
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" on:click={() => product.selected = true}>
                        Buy
                    </button>
                    {:else}
                    <button class="bg-gray-500 hover-bg-gray-700 text-white font-bold py-2 px-4 rounded-full" on:click={() => product.selected = false}>
                        Cancel
                    </button>
                    {/if}
                </div>
            </div>
        </div>
        {/each}
    </div>


    <div class="cart">
        <h2 class="card-title flex items-center justify-content-center text-lg font-bold">
            Order Information
        </h2>
        <p class="card-text">Your Order:</p>
        {#each products as product (product.id)}
        {#if product.selected}
        <div class="cart-item">
            <p class="cart-item-name">{product.name}</p>
            <p class="card-text">{product.price}</p>
            <span class="cart-item-remove cursor-pointer text-red-500" on:click={() => product.selected = false}>Remove</span>
        </div>
        {/if}
        {/each}
        <p class="card-text">Minimum Order: </p>
        <p class="card-text">Shipping Cost: </p>
        <input type="text" placeholder="Enter voucher" class="p-2 border rounded" />
        <p class="card-text">Total: </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Place Order
        </button>
    </div>
</div>

<style>
    .container {
        display: flex;
    }
</style>
