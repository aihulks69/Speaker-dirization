<template>
  <nav
      id="nav"
      class="sm:container sm:mx-auto relative z-10"
  >
    <!-- Header start -->
    <div
        class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
    >
      <!-- Header menu links and small screen humberger menu start -->
      <div
          class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos start -->
        <div>
          <router-link
              class="flex items-center text-primary-dark dark:text-ternary-light"
              to="/"
          >

            <svg
                class="w-9 h-9"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 :fill="theme === 'dark' ? '#f6f7f8' : '#2b384a'"
            >
              <g><rect fill="none" height="24" width="24"/><path d="M15.5,11.5c0,2-2.5,3.5-2.5,5h-2c0-1.5-2.5-3-2.5-5C8.5,9.57,10.07,8,12,8S15.5,9.57,15.5,11.5z M13,17.5h-2V19h2V17.5z M22,12c0-2.76-1.12-5.26-2.93-7.07l-1.06,1.06C19.55,7.53,20.5,9.66,20.5,12c0,2.34-0.95,4.47-2.49,6.01l1.06,1.06 C20.88,17.26,22,14.76,22,12z M3.5,12c0-2.34,0.95-4.47,2.49-6.01L4.93,4.93C3.12,6.74,2,9.24,2,12c0,2.76,1.12,5.26,2.93,7.07 l1.06-1.06C4.45,16.47,3.5,14.34,3.5,12z M17.5,12c0,1.52-0.62,2.89-1.61,3.89l1.06,1.06C18.22,15.68,19,13.93,19,12 c0-1.93-0.78-3.68-2.05-4.95l-1.06,1.06C16.88,9.11,17.5,10.48,17.5,12z M7.05,16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89 c0-1.52,0.62-2.89,1.61-3.89L7.05,7.05C5.78,8.32,5,10.07,5,12C5,13.93,5.78,15.68,7.05,16.95z"/></g>
            </svg>
            <span
                class="font-bold text-xl"
            >
              Hulks AI
            </span>
          </router-link>
        </div>
        <!-- Header logos end -->

        <!-- Small screen humberger menu start -->

        <div class="sm:hidden flex">
          <!-- Theme switcher small screen start -->
          <theme-switcher
              :theme="theme"
              class="block mr-4 bg-primary-light dark:bg-ternary-light p-2 shadow-sm rounded-full cursor-pointer"
          />
          <!-- Theme switcher small screen end -->
          <button
              aria-label="Humberger Menu"
              class="focus:outline-none"
              type="button"
              @click="isOpen = !isOpen"
          >
            <svg
                class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  v-if="isOpen"
                  clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  fill-rule="evenodd"
              ></path>
              <path
                  v-if="!isOpen"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Small screen humberger menu end -->
      </div>
      <!-- Header menu links and small screen humberger menu end -->

      <!-- Header links start -->
      <div
          :class="isOpen ? 'block' : 'hidden'"
          class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
      >
<!--        <router-link
            aria-label="Home"
            class="block text-left font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-400 dark:hover:text-indigo-200 sm:mx-4 mb-2 sm:py-2"
            to="/home"
        >Home
        </router-link>-->
        <div
            class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
        >
          <a
              aria-label="github"
              href="#"
              class="sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2"
          >
            Github
          </a>
        </div>
      </div>
      <!-- Header links end -->

      <!-- Header right section buttons start -->
      <div
          class="hidden sm:flex justify-between items-center md:flex-row"
      >
        <!-- Github button -->
        <a
            aria-label="github"
            class="bg-primary-light dark:bg-ternary-light text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 flex items-center px-2 py-1 space-x-2 bg-gray-100 rounded-md"
            href="#"
        >
          <svg
              class="h-5 w-5 mr-1"
              fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          Github
        </a>

        <!-- Github me button end -->

        <!-- Theme switcher -->
        <theme-switcher
            :theme="theme"
            class="ml-3 bg-primary-light dark:bg-ternary-light p-2 shadow-sm rounded-full cursor-pointer"
        />
        <!-- Theme switcher -->
      </div>
      <!-- Header right section buttons stendart -->
    </div>
    <!-- Header end -->
  </nav>
</template>

<script>

import ThemeSwitcher from './ThemeSwitcher';

export default {
  components: {
    ThemeSwitcher,
  },
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
  },
  methods: {
  },
  updated() {
  },
};
</script>

<style scoped>

</style>
