import { email } from '@/actions'
import styles from './commission.module.css'
import { FiSend } from 'react-icons/fi'

export default function Commission() {
  return (
    <section className="container relative flex flex-col items-center">
      <h1 className="mb-10 text-4xl font-extrabold">Commission</h1>
      <p className="text-justify">
        Phasellus sed metus scelerisque, tristique nisl quis, sodales risus.
        Vestibulum ac varius quam. Nullam iaculis mauris ac lectus ullamcorper
        fringilla. Maecenas ultricies at nisl ut consequat. Aenean tellus orci,
        ornare ac mattis ac, cursus et tortor. Phasellus scelerisque lacus in
        viverra fringilla. Ut varius mi vitae magna sagittis laoreet.
      </p>
      <p className="text-justify">
        Maecenas eu pharetra urna, eu sollicitudin ex. Aenean et pellentesque
        ante. Maecenas eget orci fermentum, vehicula arcu et, dignissim lacus.
        Nulla ullamcorper blandit orci ac ultrices. Donec sed bibendum mauris.
        Sed tristique, nibh ac vestibulum elementum, neque orci rutrum neque, eu
        finibus nibh arcu at dolor. Nunc id luctus augue. In hendrerit ultrices
        ultricies. Proin dapibus at massa eu vulputate. In at libero id augue
        molestie rutrum.
      </p>
      <form
        action={email}
        className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-5">
        <div className="w-full gap-5 md:flex">
          <label className="flex w-full flex-col md:w-1/2">
            <span className="text-xs font-semibold">Name</span>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className="mt-2 rounded border-0 bg-gray-100 p-3 text-gray-800 focus:outline-none dark:bg-gray-800 dark:text-gray-50"
            />
          </label>
          <label className="flex w-full flex-col md:w-1/2">
            <span className="text-xs font-semibold">Email</span>
            <input
              required
              type="text"
              name="email"
              placeholder="me@email.com"
              className="mt-2 rounded border-0 bg-gray-100 p-3 text-gray-800 focus:outline-none dark:bg-gray-800 dark:text-gray-50"
            />
          </label>
        </div>
        <label className="flex flex-col">
          <span className="text-xs font-semibold">Message</span>
          <textarea
            required
            name="message"
            placeholder="Message"
            className="mt-2 h-40 rounded border-0 bg-gray-100 p-3 text-gray-800 focus:outline-none dark:bg-gray-800 dark:text-gray-50"
          />
        </label>
        <button
          type="submit"
          className="mx-auto mt-4 flex items-center gap-2 rounded-full bg-gray-100 px-6 py-4 font-semibold transition hover:scale-105 dark:bg-gray-800">
          Submit
          <FiSend />
        </button>
      </form>
    </section>
  )
}
