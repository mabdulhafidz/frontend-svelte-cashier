<script>
    import { onMount } from "svelte";
    export let isOpen = false;
    let modal;

    onMount(() => {
        modal.style.display = isOpen ? 'block' : 'none';
    });
</script>

    <div bind:this={modal} class="modal">
    <div class="modal-content">
        <slot />
    </div>
</div>

<style>
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
</style>