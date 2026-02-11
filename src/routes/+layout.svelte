<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="bg-linear-to-t from-sky-500 to-indigo-500 w-screen flex flex-col min-h-screen">
	<Navigation />
	{@render children()}
	<Footer />
</div>