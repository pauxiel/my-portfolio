
import Image from 'next/image';


export default function Page() {
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sparkaflame🔥
      </h1> */}

      <h2 className="mb-3 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
         Paul Obayuwana · Software Engineer · Cloud & DevOps
      </h2>

      <div className='prose prose-neutral dark:prose-invert'>
            <p className="mb-4">
            I help teams design and operate reliable cloud systems — infrastructure
          as code, CI/CD pipelines, containerized deployments, and end-to-end observability. I also build production web apps and platforms. Here are a few recent projects and highlights.
      </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I write about cloud architecture and DevOps best practices. Browse my
          articles for practical guides, or <strong>contact me</strong> to discuss
          consulting or a collaboration.
        </p>
      </div>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}


