<template>
  <div
      class="container mx-auto mt-8 pb-2"
  >
    <div
        class="border-t-2 border-gray-200 pt-4 dark:border-secondary-dark"
    >
      <!-- Footer copyright start -->
      <div
          class="flex justify-between items-center text-center">
        <div
            class="text-sm text-ternary-dark dark:text-ternary-light"
        >
          &copy; Copyright {{ copyrightDate }}.
          <a
              href="https://stoman.me"
              target="__blank"
              class="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline"
          >Hulks AI</a
          >
        </div>
        <a
            href="#"
            target="__blank"
            class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-full bg-gray-200 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2"
        >
          <svg
              class="h-5 w-5"
              fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
      <!-- Footer copyright end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyrightDate: new Date().getFullYear(),
    };
  },
  mounted() {
  },
  updated() {
  },
};
</script>

<style scoped></style>
