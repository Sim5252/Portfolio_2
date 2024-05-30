/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rAxAcYNJolg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// eslint-disable react/no-unescaped-entities 

import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <LaptopIcon className="h-6 w-6" />
          <span className="sr-only">John Doe's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b" id="hero">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    John Doe
                  </h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">Software Engineer</p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    I'm a passionate software engineer with expertise in building scalable and innovative web
                    applications. I love tackling complex challenges and creating solutions that make a difference.
                  </p>
                </div>
              </div>
              <img
                alt="John Doe"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the projects I've worked on.
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-4">
                <img
                  alt="Project 1"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Project 1</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A web application that helps users manage their tasks and projects.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <img
                  alt="Project 2"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Project 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A mobile app that helps users track their fitness goals and activities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <img
                  alt="Project 3"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Project 3</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A web-based data visualization tool that helps users analyze complex datasets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="skills">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are the technologies and tools I'm proficient in.
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <ComponentIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">React</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <TreesIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">Node.js</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <ChromeIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">JavaScript</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <TypeIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">TypeScript</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <DatabaseIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">MongoDB</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <DatabaseIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">PostgreSQL</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <ContainerIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">Docker</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CloudIcon className="h-12 w-12" />
                <h3 className="text-lg font-bold">AWS</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out to me if you have any questions or would like to discuss a project.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  )
}


function ContainerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}


function TreesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  )
}


function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}