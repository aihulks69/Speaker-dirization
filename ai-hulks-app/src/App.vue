<template>
  <div :class="appTheme">
    <!-- Back Drop -->
    <div
        class="absolute inset-0 w-full h-full overflow-hidden opacity-40"
    >
      <svg
          viewBox="0 0 150 350"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="absolute top-0 right-0 w-auto h-full opacity-20"
      >
        <defs>
          <path d="M0 0h50v50H0z"></path>
          <path d="M0 0h50v50H0z"></path>
          <path d="M0 0h150v150H0z"></path>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g>
            <g fill="#3B82F6" fill-rule="nonzero">
              <path
                  d="M25 25c13.807 0 25-11.193 25-25H0c0 13.807 11.193 25 25 25z"
              ></path>
            </g>
            <g transform="translate(0 100)">
              <mask fill="#fff"><use xlink:href="#path-1"></use></mask>
              <path
                  d="M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50H0V0h25z"
                  fill="#F9C7FF"
                  mask="url(#mask-2)"
              ></path>
            </g>
            <g transform="translate(100 100)">
              <mask fill="#fff"><use xlink:href="#path-3"></use></mask>
              <path
                  d="M25 25c13.807 0 25-11.193 25-25H0c0 13.807 11.193 25 25 25z"
                  fill="#93FFFD"
                  fill-rule="nonzero"
                  mask="url(#mask-4)"
              ></path>
            </g>
            <g transform="translate(0 200)">
              <mask fill="#fff"><use xlink:href="#path-5"></use></mask>
              <path
                  d="M75 75c0 41.421 33.579 75 75 75V0c-41.421 0-75 33.579-75 75z"
                  fill="#421984"
                  fill-rule="nonzero"
                  mask="url(#mask-6)"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <svg
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="absolute top-0 left-0 w-auto h-full opacity-20"
      >
        <defs>
          <path d="M0 0h50v50H0z"></path>
          <path d="M0 0h50v50H0z"></path>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="matrix(-1 0 0 1 150 0)">
            <g transform="translate(0 25)" fill="#93FFFD" fill-rule="nonzero">
              <path
                  d="M25 0C11.193 0 0 11.193 0 25h50C50 11.193 38.807 0 25 0z"
              ></path>
            </g>
            <path
                d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0h25v50H25z"
                transform="translate(100)"
                fill="#FF642D"
            ></path>
            <g transform="translate(0 100)">
              <mask fill="#fff"><use xlink:href="#path-1"></use></mask>
              <path
                  d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0h25v50H25z"
                  fill="#B3EBFF"
                  mask="url(#mask-2)"
              ></path>
            </g>
            <g transform="translate(100 200)">
              <mask fill="#fff"><use xlink:href="#path-3"></use></mask>
              <path
                  d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0h25v50H25z"
                  fill="##7A8AF3"
                  mask="url(#mask-4)"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div>
      <!-- App Navbar -->
      <Navbar/>
      <!-- App Container -->
      <transition name="fade" mode="out-in">
        <router-view :theme="appTheme" />
      </transition>
      <back-to-top
          visibleoffset="500"
          right="40px"
          bottom="40px"
          class="shadow-lg"
      >
        <i data-feather="arrow-up"></i>
      </back-to-top>
      <!-- App Footer -->
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {Footer, Navbar},
  data: () => {
    return {
      appTheme: localStorage.getItem('theme'),
    };
  },
  mounted() {
    //feather.replace();
  },
  updated() {
    //feather.replace();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.vue-back-to-top {
  /*@apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;*/
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}
.fade-leave-active {
  animation: going 0.4s;
}
@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
