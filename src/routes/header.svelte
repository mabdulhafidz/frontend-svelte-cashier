<script lang="ts">
    import * as config from '$lib/config'
</script>

<nav>
    <a href="/" class="title">
        <b>{config.title}</b>
    </a>

    <ul class="links">
        <li class="orange">
            <a href="/menu">Menu</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/category">Category</a>
        </li>
        <li>
            <a href="/product">Product</a>
        </li>
    </ul>

</nav>

<style>
    nav {
        padding-block: var(--size-7);
    }
    .links {
        margin-block: var(--size-7);
    }

    .orange {
        display: flex;
        justify-content: center;
        width: 90px;
        height: 30px;
        background-color: gray;
        border-radius: 3px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @media (min-width: 768px) {
        nav {
            display: flex;
            justify-content: space-between;
        }

        .links {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }
    }
</style>