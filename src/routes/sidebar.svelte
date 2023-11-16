<!-- Sidebar.svelte -->

<script>
     import * as config from '$lib/config'
</script>

<nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-dark flex flex-wrap items-center justify-between relative md:w-10 z-10 py-4 px-6"
>
    <div
    class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
    <!-- Toggler -->
    <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
    >
        <i class="fas fa-bars"></i>
    </button>
    <!-- Brand -->
    <a href="/" class="title">
        <b>{config.title}</b>
    </a>
    <!-- Navigation -->
    <ul class="md:flex-col md:min-w-full flex flex-col list-none">
        <li class="items-center">
        <a
            href="/"
            class="text-xs uppercase py-3 font-bold block"
        >
            <i
            class="fas fa-home mr-2 text-sm"
            ></i>
            Home
        </a>
        </li>
        <li class="items-center">
        <a
            href="/about"
            class="text-xs uppercase py-3 font-bold block"
        >
            <i
            class="fas fa-info-circle mr-2 text-sm"
            ></i>
            About
        </a>
        </li>
        <li class="items-center">
        <a
            href="/category"
            class="text-xs uppercase py-3 font-bold block"
        >
            <i
            class="fas fa-list-alt mr-2 text-sm"
            ></i>
            Category
        </a>
        </li>
        <li class="items-center">
        <a
            href="/product"
            class="text-xs uppercase py-3 font-bold block"
        >
            <i
            class="fas fa-box mr-2 text-sm"
            ></i>
            Product
        </a>
        </li>
    </ul>
    </div>
</nav>

<style>
    li {
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        width: 50px;
        padding: 50px;
    }
</style>