import Image from "next/image";
// import { Layout } from "@/components/component/layout";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 md:gap-20">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Eunseong Lee
                  </h1><br></br>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                    Game Designer
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    설명
                  </p>
                </div>
              </div>
              <Image
                alt="Eunseong Lee"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h2><br></br>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              프로젝트
            </p><br></br>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-lg">
              <Image
                alt="Project 1"
                className="mb-4 aspect-[4/3] w-full rounded-md object-cover"
                height="300"
                src="/placeholder.svg"
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
                src="/placeholder.svg"
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
                src="/placeholder.svg"
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

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  About
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Experienced Game Developer and Producer
                </h2><br></br>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ullam ratione fugit voluptate, veniam quasi repudiandae minima! Fugiat saepe facere expedita in, optio necessitatibus blanditiis inventore itaque nostrum, doloribus qui?
                </p><br></br>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo hic unde provident, eos alias? Aliquam veritatis exercitationem facilis inventore nulla repellendus quod quaerat delectus eaque. Magnam, tempore quas. Fugiat.
                </p><br></br>
                <p>by. Chat GPT</p>
              </div>
            </div>
            <Image
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                연락처
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="grid gap-4">
                <input placeholder="Name" type="text" className="input-class border rounded p-2" />
                <input placeholder="Email" type="email" className="input-class border rounded p-2" />
                <textarea placeholder="Message" rows={4} className="textarea-class border rounded p-2"></textarea>
                <button type="submit" className="button-class bg-blue-500 text-white rounded p-2">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}