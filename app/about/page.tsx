import Image from "next/image";
import HeroImageSquare from "@/public/hero-image-square.png";
export default function AboutPage() {
  return (
    <main>
      <section className="container max-w-4xl px-4 py-8 mx-auto ">
        <div className="grid items-center gap-8 mb-12 md:grid-cols-2">
          <div className="relative h-[300px] w-full">
            <Image
            width={400}
            height={400}
              src={HeroImageSquare.src}
              alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
              className="absolute inset-0 object-cover rounded-lg"
            />
          </div>
          <div>
            <p
              className="mb-4 text-sm text-grap-600 uppercase"
              aria-hidden="true"
            >
              About printforge
            </p>
            <h1 className="mb-4 text-2xl font-semibold">
              Empowering makers worldwide
            </h1>
            <p className="mb-4 text-gray-600">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p className="text-gray-600">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-200" aria-hidden="true" />
      <section
        className="py-12 pb-10 border-b-1 border-gray-200"
        aria-hidden="true"
      >
        <div className="px-16 mx-auto max-w-7xl">
          <h2 id="key-features" className="sr-only">
            Key Features
          </h2>
          <div className="grid gap-6 md:gap-0 md:grid-cols-3 divide-gray-200 md:divide-x-1">
            <article className="p-6 bg-white">
              <h3 className="mb-3 text-xl font-semibold">100K+ Models</h3>
              <p className="text-gray-600">
                Access our vast library of community-created 3D models, from
                practical tools to artistic creations.
              </p>
            </article>
            <article className="p-6 bg-white ">
              <h3 className="mb-3 text-xl font-semibold">Active Community</h3>
              <p className="text-gray-600">
                Join thousands of makers who share tips, provide feedback, and
                collaborate on projects.
              </p>
            </article>
            <article className="p-6 bg-white">
              <h3 className="mb-3 text-lg font-semibold">Free to Use</h3>
              <p className="text-gray-600">
                Most models are free to download, with optional premium features
                for power users.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl mx-auto px-4 py-8">
        <div className="prose max-w-none">
          <h1 className="mb-4 text-3xl font-bold">Our vision</h1>
          <p className="mb-4 text-gray-700">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what&apos;s
            possible with 3D printing.
          </p>
          <hr className="my-2 w-1/4 border-t border-gray-400 mx-auto" />
          <p className="text-gray-700">
            Whether you&apos;re a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
        </div>
      </section>
    </main>
  );
}
