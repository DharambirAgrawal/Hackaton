import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Code, Rocket, Zap } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">HackProject</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header> */}
      {/* <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to Our Hackathon Project
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Revolutionizing the way we interact with technology. Join us
                  on this exciting journey of innovation.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Experience unparalleled speed and performance with our
                  cutting-edge technology.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrate our solution into your existing workflows
                  and systems.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Rocket className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Future-Proof</h3>
                <p className="text-gray-600">
                  Stay ahead of the curve with our forward-thinking approach to
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stay Updated
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our newsletter to get the latest updates on our project.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main> */}
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 HackProject. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  );
}
