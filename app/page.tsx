import Image from "next/image";
// import { Layout } from "@/components/component/layout";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Label } from "@/components/ui/label";
import { JSX, SVGProps } from "react";
import { useState } from 'react';
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";


export default function Home() {
  return (    
  <div className="flex flex-col min-h-screen">
    <header className="bg-black text-white py-4 px-6 md:px-10 flex items-center justify-between sticky top-0 z-50">
     <Link className="text-2xl font-bold" href="#">
       이은성 포트폴리오
     </Link>
     <nav className="hidden md:flex items-center space-x-6">
       <Link className="hover:underline" href="#home">
         홈
       </Link>
       <Link className="hover:underline" href="#projects">
         작업물
       </Link>
       <Link className="hover:underline" href="#about">
         소개
       </Link>
       <Link className="hover:underline" href="#contact">
         연락처
       </Link>
     </nav>
     <Button className="md:hidden" variant="outline">
       <MenuIcon className="h-6 w-6" />
     </Button>
   </header>
   <main className="flex flex-col gap-12 md:gap-20" >
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-bule-200" id="home">
      
        <div className="flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    이은성
                    <br />
                    
                  </h1><br></br>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  게임 기획자
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Game Designer
                  </p>
                </div>
              </div>
              <Image
                alt="Eunseong Lee"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="500"
                src="/a.png"
                width="500"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 bg-gray-100 lg:py-32 flex  justify-center "id="projects">
        <div className="container px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            프로젝트
            </h2><br></br>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Projects
            </p><br></br>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-lg">
              <Image
                alt="Project 1"
                className="mb-4 aspect-[4/3] w-full rounded-md object-cover"
                height="300"
                src="/game1.png"
                width="400"
              />
              <h3 className="text-lg font-semibold">페이퍼테일(PaperTale)</h3>
              <p className="text-gray-500 dark:text-gray-400">
                로그라이트 디펜스 게임(mobile)
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-lg">
              <Image
                alt="Project 2"
                className="mb-4 aspect-[4/3] w-full rounded-md object-cover"
                height="300"
                src="/game2.PNG"
                width="400"
              />
              <h3 className="text-lg font-semibold">벤딩타(Vendingtta)</h3>
              <p className="text-gray-500 dark:text-gray-400">
                벨트스크롤 슈팅 게임(PC)
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-lg">
              <Image
                alt="Project 3"
                className="mb-4 aspect-[4/3] w-full rounded-md object-cover"
                height="300"
                src="/game3.webp"
                width="400"
              />
              <h3 className="text-lg font-semibold">점핑점핑(JumpingJumping)</h3>
              <p className="text-gray-500 dark:text-gray-400">
                플랫포머 게임(PC)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white-100 dark:bg-white-800 flex justify-center "id="about">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  게임 디자인 철학
                </h2><br></br>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                게임은 단순한 오락을 넘어서, 플레이어에게 의미 있는 경험을 제공해야 한다고 믿습니다. 
                저는 플레이어의 피드백을 적극적으로 수용하고, 이를 통해 게임을 끊임없이 발전시키는 것을 중요시합니다. 
                또한, 다양한 장르와 플랫폼에 걸쳐 폭넓은 경험을 쌓으며, 각 게임의 특성에 맞는 독창적인 아이디어를 제안하고 구현해왔습니다.
                </p><br></br>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                
                </p><br></br> 
                
              </div>
            </div>
            <Image
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/page3.jpg"
              width="550"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-gray-100 dark:bg-white-800 py-12 md:py-24"
        id="contact"
      >
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">문의</h2>
          <form className="max-w-md mx-auto" >
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                htmlFor="name"
              >
                이름
              </label>
              <Input id="name" placeholder="이름을 입력해주세요" type="text" />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                htmlFor="email"
              >
                이메일
              </label>
              <Input id="email" placeholder="이메일을 입력해주세요" type="email" />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                htmlFor="message"
              >
                문의
              </label>
              <Textarea
                id="message"
                placeholder="문의 내용을 입력해주세요"
                rows={5}
              />
            </div>
            <Button className="w-full cursor-x" type="button" variant="outline">
              메시지 보내기
            </Button>
          </form>
        </div>
      </section>
    
    </main>
    </div>
  );
}
 
  

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}