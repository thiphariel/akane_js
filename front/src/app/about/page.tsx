'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <section className="container relative flex flex-col items-center">
      <h1 className="mb-10 text-4xl font-extrabold">About</h1>
      <div className="flex">
        <div className="flex-1 pr-12 text-justify">
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
            pellentesque elit ullamcorper dignissim cras tincidunt lobortis
            feugiat vivamus. Vel eros donec ac odio tempor. Commodo odio aenean
            sed adipiscing diam donec adipiscing tristique. Odio ut sem nulla
            pharetra diam sit amet nisl suscipit. Montes nascetur ridiculus mus
            mauris vitae ultricies leo integer. Mi tempus imperdiet nulla
            malesuada pellentesque elit eget gravida. Consectetur a erat nam at
            lectus urna duis convallis. Lorem ipsum dolor sit amet consectetur
            adipiscing. Non arcu risus quis varius quam quisque. Sit amet dictum
            sit amet justo donec. Parturient montes nascetur ridiculus mus
            mauris vitae.
          </p>
          <p>
            Nulla aliquet enim tortor at auctor urna. Diam vulputate ut pharetra
            sit amet aliquam id diam. Facilisis volutpat est velit egestas.
            Sapien faucibus et molestie ac feugiat. Viverra maecenas accumsan
            lacus vel facilisis volutpat est velit egestas. Fusce id velit ut
            tortor. Ut etiam sit amet nisl purus in mollis nunc. Egestas sed sed
            risus pretium quam vulputate dignissim suspendisse in. Arcu felis
            bibendum ut tristique et egestas. Aliquam sem et tortor consequat id
            porta nibh venenatis cras. Sit amet nisl purus in mollis. Tincidunt
            nunc pulvinar sapien et ligula. Nisi scelerisque eu ultrices vitae
            auctor eu augue. Bibendum ut tristique et egestas quis ipsum. Cursus
            mattis molestie a iaculis at erat.
          </p>
        </div>
        <motion.div
          className=""
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}>
          <Image
            className="rounded-md"
            src="/images/ayu.jpg"
            alt="Ayu"
            width={240}
            height={240}
          />
        </motion.div>
      </div>
    </section>
  )
}
