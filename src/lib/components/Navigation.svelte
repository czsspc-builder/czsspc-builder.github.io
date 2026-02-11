<script lang="ts">
    let mobileMenuOpen = false;
    import { base } from '$app/paths';
</script>

<div class="text-center font-bold p-4 mb-6 m-4">
    <div class="flex justify-between items-center text-white">
        <p>
            <img class="rounded inline h-10 w-10 mr-2" src="{base}/logo.svg" alt="CZSSPC Logo"/>
            CZSSPC
        </p>
        <nav class="hidden md:block">
            <ul class="flex space-x-4 ">
                <li class="hover:underline hover:text-blue-500"><a href="/">Home</a></li>
                <li class="hover:underline hover:text-blue-500"><a href="/committee">Committee</a></li>
                <li class="hover:underline hover:text-blue-500"><a href="/gallery">Gallery</a></li>
                <li class="hover:underline hover:text-blue-500"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <button 
            onclick={() => mobileMenuOpen = !mobileMenuOpen}
            class="md:hidden text-white text-2xl"
        >
            {mobileMenuOpen ? '✕' : '☰'}
        </button>
    </div>
    {#if mobileMenuOpen}
        <nav class="md:hidden mt-4">
            <ul class="flex flex-col space-y-2">
                <li class="hover:underline hover:text-blue-500"><a href="/">Home</a></li>
                <li class="hover:underline hover:text-blue-500"><a href="/committee">Committee</a></li>
                <li class="hover:underline hover:text-blue-500"><a href="/gallery">Gallery</a></li>
                <li class="hover:underline hover:text-blue-500"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    {/if}
</div>