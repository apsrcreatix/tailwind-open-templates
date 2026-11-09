"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define types for the data structures
interface Article {
    date: string;
    title: string;
    description: string;
    link: string;
}

interface Job {
    role: string;
    company: string;
    years: string;
}

interface Project {
    title: string;
    description: string;
    link: string;
    image: string;
}

interface SpeakingEvent {
    title: string;
    event: string;
    description: string;
    videoLink: string;
}

interface Podcast {
    title: string;
    podcast: string;
    description: string;
    link: string;
}

interface ShowcaseItem {
    title: string;
    description: string;
    link: string;
    image: string;
}

interface SpeakingEventsData {
    conferences: SpeakingEvent[];
    podcasts: Podcast[];
}

// Define props types for each component
interface HeaderProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

interface HeroSectionProps {
    title: string;
    description: string;
    randomImage: () => string;
}

interface ShowcaseSectionProps {
    showcaseData: ShowcaseItem[];
}

interface ProjectsSectionProps {
    projectsData: Project[];
}

interface SpeakingEventsSectionProps {
    speakingEventsData: SpeakingEventsData;
}

interface ImageGalleryProps {
    randomImage: () => string;
}

interface ArticlesSectionProps {
    articles: Article[];
}

interface WorkExperienceSectionProps {
    work: Job[];
}

// Components
const Header = ({ toggleTheme, isDarkMode }: HeaderProps) => (
    <header className="flex justify-between items-center mb-10">
        <nav className="flex space-x-5">
            <Link href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">About</Link>
            <Link href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">Articles</Link>
            <Link href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">Projects</Link>
            <Link href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">Speaking</Link>
            <Link href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">Uses</Link>
        </nav>
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none transition-colors duration-200" aria-label="Toggle Theme" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-gray-600 dark:stroke-gray-300 transition-colors">
                <title>SVG</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0018 15.75a9.717 9.717 0 00-9.75 9.75V18a3 3 0 013-3h6.75z" />
            </svg>
        </button>
    </header>
);

const HeroSection = ({ title, description, randomImage }: HeroSectionProps) => (
    <section className="text-center mb-14">
        <div className="w-20 h-20 rounded-full mx-auto mb-5 overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image src={randomImage()} alt="Profile Picture" width={80} height={80} className="object-cover" />
        </div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">{description}</p>
        <div className="flex justify-center mt-5 space-x-4">
            <Link href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <title>SVG</title>
                    <path d="M8.2 20.2c-1.2 0-2.3-.3-3.3-.8 1.2-1.1 1.9-2.8 1.9-4.6 0-1.3-.4-2.5-1.1-3.6.4-.1.9-.1 1.3-.1 2.2 0 4.1 1.5 4.6 3.7-.2 0-.4.1-.6.1 0 .8-.6 1.4-1.3 1.4-.3 0-.6 0-.9-.1.6 1.9 2.3 3.2 4.3 3.3-1.3.9-3 1.4-4.8 1.4M19 12c0 .3-.3.6-.6.6H5.5c-.3 0-.6-.3-.6-.6v-.1c0-.3.3-.6.6-.6H18.4c.3 0 .6.3.6.6zm-6.5 4.5c-.3 0-.6-.3-.6-.6v-.1c0-.3.3-.6.6-.6H5.5c.3 0 .6.3.6.6v.1c0 .3-.3.6-.6.6H12.5zm6.5-9c-.3 0-.6-.3-.6-.6v-.1c0-.3.3-.6.6-.6H5.5c.3 0 .6.3.6.6v.1c0 .3-.3.6-.6.6H18.4z" />
                </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <title>SVG</title>
                    <path d="M12 2.2C6.6 2.2 2.2 6.6 2.2 12s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2Zm0 2.8c3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9-3.8 0-6.9-3.1-6.9-6.9 0-3.8 3.1-6.9 6.9-6.9Zm0 1.7c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6.7-1.6 1.6-1.6 1.6.7 1.6 1.6Zm4.9 0c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6.7-1.6 1.6-1.6 1.6.7 1.6 1.6Zm0 4.6c-2.4 0-4.3 1.9-4.3 4.3 0 .8.7 1.5 1.5 1.5h5.6c.8 0 1.5-.7 1.5-1.5 0-2.4-1.9-4.3-4.3-4.3Z" />
                </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <title>SVG</title>
                    <path d="M12 2.2c5.4 0 9.8 4.4 9.8 9.8s-4.4 9.8-9.8 9.8S2.2 17.4 2.2 12 6.6 2.2 12 2.2Zm0 3.3c-3.5 0-6.3 2.8-6.3 6.3 0 1.7.8 3.1 2.1 4.1.2.1.4.2.6.2.6 0 1.1-.4 1.4-1 .3-.5.4-1.1.2-1.6-1.4-1.6-2.2-3.7-2.2-6.7 0-3.5 2.8-6.3 6.3-6.3 3.5 0 6.3 2.8 6.3 6.3 0 3-.9 5.1-2.2 6.7-.2.5-.2 1.2.2 1.6.3.6.9 1 1.4 1 2.2-1 2.1-2.4 2.1-4.1 0-3.5-2.8-6.3-6.3-6.3z" />
                </svg>
            </Link>
        </div>
    </section>
);

const ShowcaseSection = ({ showcaseData }: ShowcaseSectionProps) => (
    <section className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            You can build anything with Tailwind CSS.
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Well not quite anything, like you can&apos;t build a spaceship with it.
            But you can definitely build the website for the spaceship — NASA did.
        </p>
        <div className="mt-16 sm:mt-20">
            <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {showcaseData.map((item) => (
                    <li key={item.title} className="group relative flex flex-col items-start">
                        <div className="relative z-10 flex h-24 w-full items-center justify-center rounded-xl bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={item.image} alt={item.title} width={1000} height={1000} className="object-cover rounded-xl" style={{
                                height: "100%",
                                width: "100%"
                            }} />
                        </div>
                        <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Link href={item.link}>
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                <span className="relative z-10">{item.title}</span>
                            </Link>
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            {item.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const ProjectsSection = ({ projectsData }: ProjectsSectionProps) => (
    <section className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Things I&apos;ve made trying to put my dent in the universe.
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;ve worked on tons of little projects over the years but these are
            the ones that I&apos;m most proud of.... Many of them are open-source, so
            if you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
        </p>
        <div className="mt-16 sm:mt-20">
            <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project) => (
                    <li key={project.title} className="group relative flex flex-col items-start">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={project.image} alt={project.title} width={32} height={32} className="h-8 w-8" />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                            <Link href={project.link}>
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                <span className="relative z-10">{project.title}</span>
                            </Link>
                        </h2>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            {project.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const SpeakingEventsSection = ({ speakingEventsData }: SpeakingEventsSectionProps) => (
    <section className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;ve spoken at events all around the world and been interviewed for
            many podcasts.
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            One of my favorite ways to share my ideas is live on stage, where
            there&apos;s so much more communication bandwidth than there is in
            writing, and I love podcast interviews because they give me the
            opportunity to answer questions instead of just present my opinions.
        </p>

        <div className="mt-16 sm:mt-20">
            <div className="space-y-20">
                <section aria-labelledby="conferences-label" className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                        <h2 id="conferences-label" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Conferences</h2>
                        <div className="md:col-span-3">
                            <div className="space-y-16">
                                {speakingEventsData.conferences.map((event) => (
                                    <article key={event.title} className="group relative flex flex-col items-start">
                                        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                                            <Link href={event.videoLink}>
                                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                                <span className="relative z-10">{event.title}</span>
                                            </Link>
                                        </h3>
                                        <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                                            </span>
                                            {event.event}
                                        </p>
                                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                            {event.description}
                                        </p>
                                        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                                            Watch video
                                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                                                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="podcasts-label" className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                        <h2 id="podcasts-label" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Podcasts</h2>
                        <div className="md:col-span-3">
                            <div className="space-y-16">
                                {speakingEventsData.podcasts.map((podcast) => (
                                    <article key={podcast.title} className="group relative flex flex-col items-start">
                                        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
                                            <Link href={podcast.link}>
                                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                                                <span className="relative z-10">{podcast.title}</span>
                                            </Link>
                                        </h3>
                                        <p className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
                                            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                                            </span>
                                            {podcast.podcast}
                                        </p>
                                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                            {podcast.description}
                                        </p>
                                        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                                            Listen now
                                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                                                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
);

const ImageGallery = ({ randomImage }: ImageGalleryProps) => (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {Array.from({ length: 4 }, (_, i) => (
            <div key={String(i)} className="overflow-hidden rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <Image src={randomImage()} alt={`Gallery image ${i + 1}`} width={300} height={300} className="object-cover transition-transform duration-200 hover:scale-105" />
            </div>
        ))}
    </section>
);

const ArticlesSection = ({ articles }: ArticlesSectionProps) => (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        {articles.map((article) => (
            <div key={article.title} className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">{article.date}</p>
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{article.description}</p>
                <Link href={article.link} className="text-blue-500 hover:underline">Read article &gt;</Link>
            </div>
        ))}
    </section>
);

const WorkExperienceSection = ({ work }: WorkExperienceSectionProps) => (
    <section className="flex flex-col md:flex-row justify-between gap-8 mb-14">
        <div>
            <h2 className="text-xl font-bold mb-5">Work</h2>
            {work.map((job, index) => (
<div key={String(index)} className="mb-4">
                    <h3 className="font-semibold">{job.role}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{job.years}</p>
                </div>
            ))}
        </div>
        <div>
            <h3 className="text-lg font-bold mb-3">Stay up to date</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Get notified when I publish something new, and unsubscribe at any time.</p>
            <form className="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Email address" required className="border px-4 py-2 rounded focus:outline-none flex-grow bg-white dark:bg-gray-800 text-black dark:text-white" />
                <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-200">Join</button>
            </form>
        </div>
    </section>
);

import { unsplash_avatars } from "@/data";

let imageCounter = 0;
const randomImage = () => {
    const img = unsplash_avatars[imageCounter % unsplash_avatars.length];
    imageCounter++;
    return img;
};

// Main Page Component
const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("dark", isDarkMode);
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="font-sans antialiased min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white">
            <div className="max-w-screen-lg mx-auto px-4 py-12">
                <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <HeroSection
                    title={data.hero.title}
                    description={data.hero.description}
                    randomImage={randomImage}
                />
                <ShowcaseSection showcaseData={data.showcase} />
                <ProjectsSection projectsData={data.projects} />
                <SpeakingEventsSection speakingEventsData={data.speakingEvents} />
                <ImageGallery randomImage={randomImage} />
                <ArticlesSection articles={data.articles} />
                <WorkExperienceSection work={data.work} />
            </div>
        </div>
    );
};

export default HomePage;

const data = {
    hero: {
        title: "Software designer, founder, and amateur astronaut.",
        description: "I'm Spencer, a software designer and entrepreneur based in New York City. I'm the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
    },
    articles: [
        {
            date: "September 5, 2022",
            title: "Crafting a design system for a multiplanetary future",
            description: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
            link: "#",
        },
        {
            date: "September 2, 2022",
            title: "Introducing Animaginary: High performance web animations",
            description: "When you're building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
            link: "#",
        },
        {
            date: "July 14, 2022",
            title: "Rewriting the cosmOS kernel in Rust",
            description: "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it's been a while since I've seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
            link: "#",
        },
    ],
    work: [
        {
            role: "CEO",
            company: "Planetaria",
            years: "2019 — Present",
        },
        {
            role: "Product Designer",
            company: "Airbnb",
            years: "2014 — 2019",
        },
        {
            role: "iOS Software Engineer",
            company: "Facebook",
            years: "2011 — 2014",
        },
        {
            role: "Shift Supervisor",
            company: "Starbucks",
            years: "2008 — 2011",
        },
    ],
    projects: [
        {
            title: "Planetaria",
            description: "Creating technology to empower civilians to explore space on their own terms.",
            link: "http://planetaria.tech",
            image: randomImage(),
        },
        {
            title: "Animaginary",
            description: "High performance web animation library, hand-written in optimized WASM.",
            link: "#",
            image: randomImage(),
        },
        {
            title: "HelioStream",
            description: "Real-time video streaming library, optimized for interstellar transmission.",
            link: "#",
            image: randomImage(),
        },
        {
            title: "cosmOS",
            description: "The operating system that powers our Planetaria space shuttles.",
            link: "#",
            image: randomImage(),
        },
        {
            title: "OpenShuttle",
            description: "The schematics for the first rocket I designed that successfully made it to orbit.",
            link: "#",
            image: randomImage(),
        },
    ],
    speakingEvents: {
        conferences: [
            {
                title: "In space, no one can watch you stream — until now",
                event: "SysConf 2021",
                description: "A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.",
                videoLink: "#",
            },
            {
                title: "Lessons learned from our first product recall",
                event: "Business of Startups 2020",
                description: "How we dealt with the fallout from unexpectedly having to recall every single unit of our flagship cosmOS personal space shuttle.",
                videoLink: "#",
            },
        ],
        podcasts: [
            {
                title: "Building Planetaria on a $0 budget",
                podcast: "Startup Hour",
                description: "I joined @foobar to talk about the early days of Planetaria and some of the challenges we faced trying to bootstrap our ambitious vision.",
                link: "#",
            },
            {
                title: "How to build a space shuttle in your garage",
                podcast: "The Indie Hackers Podcast",
                description: "Had a great time chatting with @csallen about the non-technical things that go into building a space company.",
                link: "#",
            },
            {
                title: "Planetaria: Building a new future for civilian space exploration",
                podcast: "The Untitled Space Podcast",
                description: "Fascinating conversation with @space_gal about our long-term vision for Planetaria and why we're so obsessed with getting everyday people into space.",
                link: "#",
            },
        ],
    },
    showcase: [
        {
            title: "OpenAI / ChatGPT",
            description: "Marketing website & chat interface",
            link: "#",
            image: randomImage(),
        },
        {
            title: "Lemon Squeezy",
            description: "SaaS application",
            link: "#",
            image: randomImage(),
        },
        {
            title: "Shopify",
            description: "Ecommerce platform website",
            link: "#",
            image: randomImage(),
        },
        {
            title: "Wealthfront",
            description: "Fintech marketing website",
            link: "#",
            image: randomImage(),
        },
        {
            title: "loom",
            description: "Meetings on. Meetings off.",
            link: "#",
            image: randomImage(),
        },
        {
            title: "The Verge",
            description: "Technology blog & media",
            link: "#",
            image: randomImage(),
        },
        {
            title: "Letterdrop",
            description: "Next-generation newsletter platform",
            link: "#",
            image: randomImage(),
        },
        {
            title: "Make Ship Happen",
            description: "Optimized for ecommerce and logistics websites.",
            link: "#",
            image: randomImage(),
        },
    ],
};
