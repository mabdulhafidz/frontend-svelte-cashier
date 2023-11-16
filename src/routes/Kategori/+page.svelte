<script>
    import { onMount } from 'svelte';
    import Modal from './modal.svelte';

    let kategorimakanan = [];
    let showDetails = false;
    let NewKategoriMakanan = '';
    let id = '';
    let isOpen = false;

    onMount(async () => {
        try {
            const response = await fetch('http://localhost:8000/api/kategorimakanan');
            const data = await response.json();
            kategorimakanan = data.data;
        } catch (error) {
            console.error(error);
        }
    });

    async function deleteCategory(id) {
        try {
            await fetch(`http://localhost:8000/api/kategorimakanan/${id}`, {
                method: 'DELETE',
            });
            kategorimakanan = kategorimakanan.filter((item) => item.id !== id);
        } catch (error) {
            console.log(error);
        }
    };

    const createCategory = async () => {
        if (NewKategoriMakanan) {
            const response = await fetch('http://localhost:8000/api/kategorimakanan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: NewKategoriMakanan }),
            });

            if (response.ok) {
                NewKategoriMakanan = '';
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

        if (NewKategoriMakanan) {
            const response = await fetch(`http://localhost:8000/api/kategorimakanan/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: NewKategoriMakanan }),
            });

            if (response.ok) {
                NewKategoriMakanan = '';
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
    <h4 style="margin-bottom: 20px;">Create New Kategorimakanan</h4>
    <input type="text" bind:value={NewKategoriMakanan} placeholder="Kategorimakanan Name" style="margin-bottom: 10px; padding: 10px; width: 200px;" />
    <button on:click={createCategory} style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; cursor: pointer;">Create</button>
</div>

<h3>List Kategorimakanans</h3>

<table class="w-full">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each kategorimakanan as item (item.id)}
        <tr>
            <td>{item.id}</td>
            <td>{item.nama_kategori}</td>
            <td>
                <button class="" on:click={() => deleteCategory(item.id)}>Delete</button>
                <button on:click|preventDefault={() => {
                    id = item.id;
                    isOpen = true;
                }}>Update</button>
            </td>
        </tr>
        {#if showDetails}
        <tr>
            <td colspan="3">Additional details for {item.nama_kategori}</td>
        </tr>
        {/if}
        {/each}
    </tbody>
</table>

<Modal bind:isOpen={isOpen}>
    <form on:submit|preventDefault={updateCategory}>
        <input bind:value={NewKategoriMakanan} placeholder="New kategorimakanan name" required>
        <button type="submit">Update</button>
    </form>
</Modal>

<style>
    .w-full {
        width: 100%;
    }
</style>
