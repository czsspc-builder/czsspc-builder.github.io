<script lang="ts">
    import { onMount } from 'svelte';

    interface Image {
        src: string;
        alt: string;
    }

    let images: Image[] = [];
    let selectedImage: Image | null = null;

    onMount(async () => {
        try {
            const response = await fetch('/api/gallery');
            images = await response.json();
        } catch (error) {
            console.error('Failed to load gallery:', error);
            // Fallback: manually add images if API fails
            images = [
                { src: '/gallery/image1.jpg', alt: 'Gallery Image 1' },
                { src: '/gallery/image2.jpg', alt: 'Gallery Image 2' },
                { src: '/gallery/image3.jpg', alt: 'Gallery Image 3' },
                { src: '/gallery/image4.jpg', alt: 'Gallery Image 4' },
                { src: '/gallery/image5.jpg', alt: 'Gallery Image 5' },
                { src: '/gallery/image6.jpg', alt: 'Gallery Image 6' }
            ];
        }
    });

    function openModal(image: Image) {
        selectedImage = image;
    }

    function closeModal() {
        selectedImage = null;
    }
</script>

<svelte:head>
    <title>Gallery - CZSSPC</title>
    <meta name="description" content="Gallery of Comilla Zilla School Science Project Club">
</svelte:head>

<!-- Header Section -->
<div class="grow text-center text-white text-3xl font-semibold mt-20 px-4">
    <p class="text-4xl md:text-5xl font-bold mb-4">
        Gallery
    </p>
    <p class="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-blue-200">
        Explore our projects, events, and memorable moments
    </p>
</div>

<!-- Gallery Grid -->
<div class="grow text-white px-4 pb-12">
    <div class="max-w-6xl mx-auto">
        {#if images.length > 0}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each images as image (image.src)}
                    <div 
                        class="group relative overflow-hidden rounded-lg cursor-pointer h-64 md:h-72"
                        on:click={() => openModal(image)}
                        on:keydown={(e) => e.key === 'Enter' && openModal(image)}
                        role="button"
                        tabindex="0"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                            decoding="async"
                        />
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <p class="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                🔍
                            </p>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="text-center py-20">
                <p class="text-xl text-gray-300">No images in gallery yet</p>
            </div>
        {/if}
    </div>
</div>

<!-- Image Modal -->
{#if selectedImage}
    <div
        class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        on:click={closeModal}
        on:keydown={(e) => e.key === 'Escape' && closeModal()}
        role="dialog"
        tabindex="-1"
    >
        <div 
            class="relative max-w-4xl w-full" 
            on:click={(e) => e.stopPropagation()}
            on:keydown={(e) => e.key === 'Escape' && closeModal()}
            role="dialog"
            tabindex="0"
        >
            <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                class="w-full h-auto rounded-lg max-h-[90vh]"
                loading="eager"
            />
            <button
                on:click={closeModal}
                class="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-300"
                aria-label="Close modal"
            >
                ✕
            </button>
        </div>
    </div>
{/if}