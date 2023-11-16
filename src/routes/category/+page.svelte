<script>
	import { onMount } from 'svelte'
    import Modal from './modal.svelte';
    let category = [];
    let showDetails = false;
    let newCategoryName = '';
    let id = '';
    let isOpen = false;

    onMount(async () => {
    try {
    const response = await fetch('http://localhost:8000/api/category');
    const data = await response.json();
        category  = data.data;
    } catch (error) {
    console.error(error);
}
});

    async function deleteCategory(id) {
        try {
        await fetch(`http://localhost:8000/api/category/${id}`, {
            method: 'DELETE',
        });
        category = category.filter((item) => item.id !== id);
    } catch (error) {
        console.log(error);
    }
    };

    const createCategory = async () => {
        if (newCategoryName) {
            const response = await fetch('http://localhost:8000/api/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
        body: JSON.stringify({ name: newCategoryName })
    });

    if (response.ok) {
        newCategoryName = '';
        alert('Category created successfully');
    } else {
        alert('Failed to create category');
    }
    } else {
    alert('Please enter a category name');
    };
};

const updateCategory = async (event) => {
    event.preventDefault();

    if (newCategoryName) {
        const response = await fetch(`http://localhost:8000/api/category/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newCategoryName })
        });

        if (response.ok) {
            newCategoryName = '';
            alert('Category Updated successfully');
            isOpen = false;
        } else {
            alert('Failed to update category');
        }
    } else {
        alert('Please enter an update name');
    }
};

</script>


<div style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<h4 style="margin-bottom: 20px;">Create New Category</h4>
<input type="text" bind:value={newCategoryName} placeholder="Category Name" style="margin-bottom: 10px; padding: 10px; width: 200px;"/>
<button on:click={createCategory} style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; cursor: pointer;">Create</button>
</div>
    
<h3>List Categories</h3>

<table class="w-full">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each category as item (item.id)}
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
            <button 
                class=""
                on:click={() => deleteCategory(item.id)}>Delete</button>
                <button on:click|preventDefault={() => updateCategory(item.id)}>Update</button>
            </td>
        </tr>
        {#if showDetails}
        <tr>
            <td colspan="3">Additional details for {item.name}</td>
        </tr>
        {/if}
        {/each}
    </tbody>
</table>

    <Modal bind:isOpen={isOpen}>
        <form on:submit|preventDefault={updateCategory}>
                <input bind:value={newCategoryName} placeholder="New category name" required>
        <button type="submit">Update</button>
    </form>
    </Modal>

<style>
    .w-full{
        width: 100%;
    }
</style>
