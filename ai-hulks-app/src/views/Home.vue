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
              Support multiple speakers dirization
            </li>
          </ul>
          <div
              class="flex justify-center mt-8 space-x-4"
          >
            <a
                href="#demo"
                class="hover:shadow-lg bg-primary-gradient text-white shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-transparent flex focus:outline-none hover:shadow-m items-center px-3 py-2 rounded-md text-base"
            >
              Try it now!
            </a>
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
              class="mb-4 font-medium text-center text-gray-900 dark:text-gray-300 text-2xl sm:text-3xl title-font"
          >
            How it works
          </h1>
        </div>
      </div>
    </section>
    <!-- Demo Section -->
    <section
        id="demo"
        class="py-4 relative mx-auto space-y-4"
    >
      <div
        class="bg-red-5 space-y-4 md:items-center md:justify-between md:flex md:text-left text-center"
      >
        <p
            class="flex-1 text-gray-900 sm:pb-0 pb-4 md:text-xl dark:text-gray-300 text-2xl sm:text-3xl"
        >
          Separate different speakers in audio recording.
        </p>
        <upload-media-input
            class="flex-1"
            :is-processing="processing"
            @upload-file="onUpload"
            @reset="onReset"
            @process-file="onProcess"
        />
      </div>
    </section>
    <!-- Team Section -->
    <section
        class="py-4 space-y-5 relative w-full px-4 mx-auto bg-indigo-50 bg-opacity-30 dark:bg-opacity-10"
    >
      <div
          class="ml-auto mr-auto md:mx-auto sm:text-center space-y-8"
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
          class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 items-stretch"
      >
        <div
            v-for="team in teams"
            :key="team.id"
            class="mt-8 space-y-2 items-center sm:flex md:flex-row flex-col mx-auto"
            style="width: 300px"
        >
          <img
              v-if="team.image"
              :src="team.image"
              class="object-cover hover:shadow-xl w-20 h-20 rounded-full shadow sm:mx-0 mx-auto md:mr-3"
          />
          <avatar v-else class="md:mr-3" size="80" :username="team.name"></avatar>
          <div
              class="text-center md:text-left"
          >
            <p
                class="text-md font-semibold text-gray-800 dark:text-ternary-light"
            >
              {{team.name}}
            </p>
            <p
                class="text-sm text-gray-600 dark:text-gray-400"
            >
              {{team.role}}
            </p>
            <div class="flex mt-1 md:justify-start justify-center">
              <a
                  :href="team.linkedin"
                  class="text-sm text-blue-400 hover:text-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" class="w-4 h-4">
                  <g>
                    <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Tech -->
    <section
        class="py-4 flex flex-col items-center justify-center"
    >
      <h1
          class="mb-6 text-2xl font-medium text-center text-gray-900 dark:text-gray-300 sm:text-3xl title-font"
      >
        Built With
      </h1>
      <ul
          class="flex gap-4 sm:gap-8"
      >
        <li
            v-tooltip="{ content: tech.title, placement: 'bottom', classes: ['text-sm text-white bg-gray-900 p-1 z-10 bg-opacity-80 mt-1'] }"
            v-for="tech in techs"
            :key="tech.id"
            class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4"
        >
          <a
              :href="tech.url"
          >
            <img
                class="w-10 h-8"
                :src="require('../assets/images/' + tech.image)"
                :alt="tech.title">
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>

import UploadMediaInput from "../components/UploadMediaInput";
import endpoint from "../api/endpoint";

export default {
  name: 'Home',
  components: {
    UploadMediaInput,
  },
  data:() => (
      {
        uploaded: false,
        processing: false,
        errorProcessing: false,
        teams: [
          { id: 1, name: 'Pragya Goyal', role: '', image: '', linkedin: '#' },
          { id: 2, name: 'Debasish Dutta', role: '', image: '', linkedin: '#' },
          { id: 3, name: 'Jisha Jose', role: '', image: '', linkedin: '#' },
          { id: 4, name: 'Tanish Kumar', role: '', image: '', linkedin: '#' },
          { id: 5, name: 'Ahmed Mansoura', role: 'Software Engineer', image: 'https://lh3.googleusercontent.com/ogw/ADea4I4_kYk5pTrBeB65pM8VmTmFYOn7dHBtNXaWYXZKAw=s83-c-mo', linkedin: 'https://www.linkedin.com/in/ahmed-m-649526176/' },
        ],
        techs: [
          { id: 1, title: 'Tailwind', image: 'tailwind-logo.png', url: 'https://tailwindcss.com/'},
          { id: 2, title: 'VueJs', image: 'vuejs-logo.png', url: 'https://vuejs.org/'},
          { id: 3, title: 'Flask', image: 'flask-logo.jpg', url: 'https://flask.palletsprojects.com/'},
        ]
      }
  ),
  mounted() {
  },
  methods: {
    onUpload() {
      this.uploaded = true;
    },
    onReset() {
      this.processing = false;
    },
    onProcess(file) {
      this.processing = true;
      console.log('here', file)
      let formData = new FormData();
      formData.append("image", file);
      endpoint.uploadAudio(formData)
          .then(response => {
            this.$modal.show('result-modal')
            console.log(response)
          })
          .catch(error => {
            console.log(error);
            this.$notify({ type: 'error', text: 'Oops something went wrong!' })
            this.errorProcessing = true;
          })
          .finally(() => this.processing = false)
    },
  }
}
</script>
<style>
  .bg-primary-gradient {
  background: linear-gradient(135deg, #7a65fd 0%, #1d6fa3 100%);
}
</style>
