<template>
  <div
      class="container mx-auto relative z-10 space-y-12">
    <!-- Banner -->
    <section
        class="text-gray-600 body-font"
    >
      <div class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div
            class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
        >
          <h1
              class="mb-4 text-3xl font-medium text-gray-900 dark:text-gray-300 title-font sm:text-4xl"
          >
            Hulks AI
          </h1>
          <h3
              class="text-2xl text-gray-700 dark:text-gray-100">
            The right AI Speaker dirization solution for you.
          </h3>
          <ul
              class="pl-6 mt-4 list-disc dark:text-gray-50 text-left"
          >
            <li
                class="text-left"
            >
              Simple and User friendly
            </li>
            <li>
              Support any type of audio file
            </li>
            <li>
              Support multi speaker dirization
            </li>
          </ul>
          <div
              class="flex justify-center mt-8 space-x-4"
          >
            <button
                class="hover:shadow-lg bg-primary-gradient text-white shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-transparent flex focus:outline-none hover:shadow-m items-center px-3 py-2 rounded-md text-base"
            >
              Try it now!
            </button>
          </div>
        </div>
        <div
            class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2"
        >
          <img
              alt="hero"
              class="object-cover object-center rounded"
              src="../assets/images/landing.svg">
        </div>
      </div>
    </section>
    <!-- How it works Section -->
    <section
        class="py-4 text-gray-900 dark:text-gray-300 body-font bg-indigo-50 bg-opacity-30 dark:bg-opacity-10"
    >
      <div
          class="container px-5 pb-24 mx-auto"
      >
        <div
            class="mb-20 text-center"
        >
          <h1
              class="mb-4 text-2xl font-medium text-center text-gray-900 dark:text-gray-300 sm:text-3xl title-font"
          >
            How it works
          </h1>
        </div>
      </div>
    </section>
    <!-- Demo Section -->
    <section
        class="py-4 relative mx-auto space-y-4"
    >
      <div
        class="space-y-4 md:items-center md:justify-between md:flex md:text-left text-center"
      >
        <p
            class="flex-1 text-2xl text-gray-900 sm:pb-4 md:text-xl dark:text-gray-300"
        >
          Separate different speakers in audio recording.
        </p>
        <upload-media-input
            class="flex-1"
            @upload-file="onUpload"
        />
      </div>
    </section>
    <!-- Team Section -->
    <section
        class="py-4 space-y-5 relative w-full px-4 mx-auto bg-indigo-50 bg-opacity-30 dark:bg-opacity-10"
    >
      <div
          class="ml-auto mr-auto md:mx-auto sm:text-center space-y-4"
      >
        <h1
            class="text-2xl font-medium text-center text-gray-900 dark:text-gray-300 sm:text-3xl title-font"
        >
          Our team
        </h1>
        <p
            class="text-base text-gray-700 md:text-xl dark:text-ternary-light text-center"
        >
          We are a team of interested and talented individuals.
        </p>
      </div>
      <div
          class="grid gap-10 self-center row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
            class="mt-8 flex items-center justify-center space-x-2"
        >
          <img
              src="../assets/images/default-user.png"
              class="object-cover w-20 h-20 ml-4 rounded-full shadow"
          />
          <div
              class="relative"
          >
            <p
                class="text-lg font-bold text-gray-800 dark:text-ternary-light"
            >
              John
            </p>
            <p
                class="text-sm text-gray-600 dark:text-gray-400"
            >
              Developer
            </p>
          </div>
        </div>
        <div
            class="flex items-center justify-center space-x-2"
        >
          <img
              alt="avatar"
              src="../assets/images/default-user.png"
              class="object-cover w-20 h-20 ml-4 rounded-full shadow"
          />
          <div
              class="relative"
          >
            <p
                class="text-lg font-bold text-gray-800 dark:text-ternary-light"
            >
              John
            </p>
            <p
                class="text-sm text-gray-600 dark:text-gray-400">
              Developer
            </p>
          </div>
        </div>
        <div
            class="flex items-center justify-center space-x-2"
        >
          <img
              alt="avatar"
              src="../assets/images/default-user.png"
              class="object-cover w-20 h-20 ml-4 rounded-full shadow"
          />
          <div
              class="relative"
          >
            <p
                class="text-lg font-bold text-gray-800 dark:text-ternary-light"
            >
              John
            </p>
            <p
                class="text-sm text-gray-600 dark:text-gray-400"
            >
              Developer
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Tech -->
    <section
        class="py-4 flex flex-col items-center justify-center"
    >
      <h1
          class="mb-3 text-2xl font-medium text-center text-gray-900 dark:text-gray-300 sm:text-3xl title-font"
      >
        Built With
      </h1>
      <ul
          class="flex gap-4 sm:gap-8"
      >
        <li
            class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4"
        >
          <img
              class="w-10 h-8"
              src="../assets/images/tailwind-logo.png"
              alt="tailwind">
        </li>
        <li
            class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4"
        >
          <img
              class="w-10 h-8"
              src="../assets/images/vuejs-logo.png"
              alt="vuejs"
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

import UploadMediaInput from "../components/UploadMediaInput";

export default {
  name: 'Home',
  components: {
    UploadMediaInput,
  },
  data:() => (
      {
        uploaded: false
      }
  ),
  mounted() {
  },
  methods: {
    onUpload(event) {
      console.log(event);
      this.uploaded = true;
    },
  }
}
</script>
<style>
  .bg-primary-gradient {
  background: linear-gradient(135deg, #7a65fd 0%, #1d6fa3 100%);
}
</style>
