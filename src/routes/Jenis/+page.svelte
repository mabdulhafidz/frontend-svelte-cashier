<script>
    import { onMount } from 'svelte';
    import Modal from './modal.svelte';

    let jenismakanan = [];
    let showDetails = false;
    let JenisBaru = '';
    let id = '';
    let isOpen = false;

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:8000/api/jenismakanan');
            const data = await response.json();
            jenismakanan = data.data;
        } catch (error) {
            console.error(error);
        }
    });

    async function deleteJenis(id) {
        try {
            await fetch(`http://localhost:8000/api/jenismakanan/${id}`, {
                method: 'DELETE',
            });
            jenismakanan = jenismakanan.filter((item) => item.id !== id);
        } catch (error) {
            console.log(error);
        }
    };

    const createJenis = async () => {
        if (JenisBaru) {
            const response = await fetch('http://localhost:8000/api/jenismakanan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: JenisBaru }),
            });

            if (response.ok) {
                JenisBaru = '';   
                alert('Category created successfully');
            } else {
                alert('Failed to create category');
            }
        } else {
            alert('Please enter a category name');
        };
    };

    const updateJenis = async (event) => {
        event.preventDefault();

        if (JenisBaru) {
            const response = await fetch(`http://localhost:8000/api/jenismakanan/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: JenisBaru }),
            });

            if (response.ok) {
                JenisBaru = '';
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
    <h4 style="margin-bottom: 20px;">Create New Jenismakanan</h4>
    <input type="text" bind:value={JenisBaru} placeholder="Jenismakanan Name" style="margin-bottom: 10px; padding: 10px; width: 200px;" />
    <button on:click={createJenis} style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; cursor: pointer;">Create</button>
</div>

<h3>List Jenismakanans</h3>

<table class="w-full">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Id_Category</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each jenismakanan as item (item.id)}
        <tr>
            <td>{item.id}</td>
            <td>{item.nama_jenis}</td>
            <td>{item.category_id}</td>
            <td>
                <button class="" on:click={() => deleteJenis(item.id)}>Delete</button>
                <button on:click|preventDefault={() => {
                    id = item.id;
                    isOpen = true;
                }}>Update</button>
            </td>
        </tr>
        {#if showDetails}
        <tr>
            <td colspan="3">Additional details for {item.nama_jenis}</td>
        </tr>
        {/if}
        {/each}
    </tbody>
</table>

<Modal bind:isOpen={isOpen}>
    <form on:submit|preventDefault={updateJenis}>
        <input bind:value={JenisBaru} placeholder="New jenismakanan name" required>
        <button type="submit">Update</button>
    </form>
</Modal>

<style>
    .w-full {
        width: 100%;
    }
</style>
