
import Image from 'next/image';
// import praying from 'public/praying.jpg';
// import fire from 'public/fire.jpg';
// import bowing from 'public/bowing.jpg'
// import layinghand from 'public/laying-hand.jpg'
// import ignite from 'public/ignite.jpg'
// import cry from 'public/cry.jpg'


export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sparkaflame🔥
      </h1>
      <div className='prose prose-neutral dark:prose-invert'>
            <p className="mb-4">
        Sparkflame is a vibrant community passionately dedicated to igniting the flames of faith within the hearts of young men and women. we believe in the power of prayer and cultivating spiritual growth through sound doctrine and transformative teaching. 
      </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          we are based in Niagara falls, Canada and in patnership with family care center ministry.. 
          {/* and committed to discipleship through sharing God's Word via our blog and social media platforms. Join our community and be part of this movement! */}
        </p>
      </div>
      <div className="my-8">
        {/* <BlogPosts /> */}
      </div>
    </section>
  )
}


