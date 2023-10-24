<script>
    import { createProduct } from '../../service/Product';

    let name = '';
    let price = 0;
    let stock = 0;
    let tag = '';

    async function handleSubmit() {
        const newProduct = {
            name,
            price,
            stock,
            tag
        };

        await createProduct(newProduct);

        name = '';
        price = 0;
        stock = 0;
        tag = '';
    }
</script>

<h1>Create New Product</h1>

<form on:submit|preventDefault={handleSubmit}>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name} required>

    <label for="price">Price:</label>
    <input type="number" id="price" bind:value={price} required>

    <label for="stock">Stock:</label>
    <input type="number" id="stock" bind:value={stock} required>

    <label for="tag">Tag:</label>
    <input type="text" id="tag" bind:value={tag} required>

    <button type="submit">Create</button>
</form>