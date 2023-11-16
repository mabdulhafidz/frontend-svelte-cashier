<script lang="ts">

    import 'open-props/style'
    import 'open-props/normalize'
    import 'open-props/buttons'

    import '../app.css'
</script>   

<main>

    <div class="content">
        <slot />
    </div>

    <!-- <Footer /> -->
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .content {
        flex-grow: 1;
        padding: 1rem;
    }
</style>
