<svelte:head>
    <title>CZSSPC - Comilla Zilla School Science Project Club</title>
    <meta name="description" content="Comilla Zilla School Science Project Club - One of the most successful clubs of CZS">
</svelte:head>

<script>
	import { base } from '$app/paths';
</script>

<div class="grow text-center text-white text-3xl font-semibold mt-25">
    <img src="{base}/logo.svg" alt="CZSSPC Logo" class="rounded-4xl mx-auto w-32 h-32 mb-10 shadow-lg hover:scale-105 transition-transform duration-300"/>
    <p class="text-4xl md:text-5xl font-bold">
        CZSSPC
    </p>
    <p class="text-xl md:text-2xl mt-6 leading-relaxed">
        Comilla Zilla School Science Project Club
        <br>
        <span class="text-blue-200">One of the most successful clubs of CZS</span>
    </p>
    <div class="mt-10 space-x-4">
        <a href="/committee" class="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-all inline-block">
            View Committee
        </a>
        <a href="/contact" class="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-all inline-block">
            Get Involved
        </a>
    </div>
</div>

<div class="grow text-center text-white text-3xl font-semibold mt-20 px-4">
    <p class="text-3xl md:text-4xl font-bold mb-8">
        About CZSSPC
    </p>
    <p class="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
        Comilla Zilla School Science Project Club was established in <span class="font-bold text-blue-300">2019</span> with a passion for fostering scientific thinking and innovation among students.
    </p>

    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto mb-12">
        <p class="text-2xl md:text-3xl font-bold mb-6">
            Our Mission
        </p>
        <p class="text-lg md:text-xl leading-relaxed">
            Our mission is to foster a passion for science and innovation among students in Comilla Zilla School by providing a collaborative platform for project development, skill enhancement, and knowledge sharing.
        </p>
    </div>

    <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
        <p class="text-2xl md:text-3xl font-bold mb-8">
            Why Join CZSSPC?
        </p>
        <div class="space-y-6 text-left">
            <div class="flex items-start space-x-4">
                <span class="text-2xl text-blue-300 font-bold">✓</span>
                <div>
                    <p class="font-bold text-lg mb-2">Robotics & Project Development</p>
                    <p class="text-base md:text-lg">Practice your skills in robotics and hands-on project development on our school campus.</p>
                </div>
            </div>
            <div class="flex items-start space-x-4">
                <span class="text-2xl text-blue-300 font-bold">✓</span>
                <div>
                    <p class="font-bold text-lg mb-2">Collaborate with Like-minded Students</p>
                    <p class="text-base md:text-lg">Meet and work with other passionate students who share your interest in science and innovation.</p>
                </div>
            </div>
            <div class="flex items-start space-x-4">
                <span class="text-2xl text-blue-300 font-bold">✓</span>
                <div>
                    <p class="font-bold text-lg mb-2">Well-Structured Laboratory</p>
                    <p class="text-base md:text-lg">Access to modern equipment and facilities designed to support your scientific endeavors.</p>
                </div>
            </div>
            <div class="flex items-start space-x-4">
                <span class="text-2xl text-blue-300 font-bold">✓</span>
                <div>
                    <p class="font-bold text-lg mb-2">Experienced Mentors</p>
                    <p class="text-base md:text-lg">Get guidance from experienced teachers and leaders who are dedicated to your growth.</p>
                </div>
            </div>
        </div>
    </div>
</div>