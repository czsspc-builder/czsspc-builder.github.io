export const prerender = true;
import { json } from '@sveltejs/kit';

export async function GET() {
    const images = [
        { src: '/gallery/image1.webp', alt: 'Project 1' },
        { src: '/gallery/image2.webp', alt: 'Project 2' },
        { src: '/gallery/image3.webp', alt: 'Project 3' },
        { src: '/gallery/image4.webp', alt: 'Project 4' },
        { src: '/gallery/image5.webp', alt: 'Project 5' },
        { src: '/gallery/image6.webp', alt: 'Project 6' },
        { src: '/gallery/image7.webp', alt: 'Project 7' },
        { src: '/gallery/image8.webp', alt: 'Project 8' },
        { src: '/gallery/image9.webp', alt: 'Project 9' },
        { src: '/gallery/image10.webp', alt: 'Project 10' }
    ];

    return json(images);
}