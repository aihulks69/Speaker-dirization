<template>
  <div
      class="bg-white w-max bg-white dark:bg-opacity-10 m-auto rounded-lg bg-opacity-60"  @dragover.prevent @drop.prevent>
    <div
      class="p-4 space-y-4 border-4 border-dotted border-gray-300 rounded-lg"
      v-if="uploaded && files.length"
    >
      <ul
          v-for="(file, index) in files"
          :key="index"
      >
        <li
            class="text-green-300 flex space-x-3 items-center justify-center"
        >
          <span>
            {{file.name}}
          </span>
          <a
              @click="initFiles"
              class="cursor-pointer text-red-500 hover:text-red-600"
          >
            <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </a>
        </li>
      </ul>
      <button
          :disabled="'isProcessing'"
          @click="process()"
          class="mx-auto hover:shadow-lg process-btn text-white shadow-md focus:ring-2 focus:ring-red-300 focus:ring-offset-2 border border-transparent flex focus:outline-none hover:shadow-m items-center px-3 py-2 rounded-md text-base"
      >
        <svg v-if="isProcessing" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Process
      </button>
    </div>
    <div
        v-else
        @drop="dragFile"
        class="p-4 space-y-4 relative border-4 border-dotted border-gray-300 rounded-lg">
      <svg
          class="text-indigo-500 md:w-24 w-20 mx-auto"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      <div class="flex flex-col w-max mx-auto text-center">
        <label class="text-center">
          <input
              @change="upload"
              class="text-sm cursor-pointer w-36 hidden"
              type="file">
          <div
              class="text-center hover:shadow-lg bg-primary-gradient text-white shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-transparent focus:outline-none hover:shadow-m px-3 py-2 rounded-md cursor-pointer"
          >
            <span>Select</span>
          </div>
        </label>
        <div
            class="mt-4 title text-indigo-500 uppercase text-xs dark:text-gray-200"
        >
          or drop files here
        </div>
      </div>
      <div v-if="error" class="text-red-600 text-sm text-center">File not supported</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "upload-media-input",
  props: {
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data: () => (
      {
        files: [],
        error: false,
        uploaded: false,
      }
      ),
  methods: {
    upload(e) {
      this.files = e.target.files;
      if(this.files.length){
       this.sendEvent();
      }
    },
    dragFile(e) {
      this.files = e.dataTransfer.files;
      if(this.files.length){
        this.sendEvent();
      }
    },
    sendEvent() {
      this.uploaded = false;
      const singleFile = this.files[0];
      if (this.checkFileType(singleFile)) {
        this.error = false;
        this.$emit('upload-file', singleFile);
        this.uploaded = true;
      } else {
        this.error = true;
      }
    },
    checkFileType(file) {
      const supportedAudioList = ['mp3', 'wav', 'mpeg']
      if (file) {
        const fileType = file['type']
            .split('/')
            .pop()
        return supportedAudioList.includes(fileType);
      }
      return false
    },
    initFiles() {
      this.files = [];
    },
    process() {
      this.$emit('process-file', this.files[0]);
    }
  }
}
</script>

<style scoped>
.process-btn {
  background: linear-gradient(135deg, #ef0a6c 0%, #9560c5 100%);
}
</style>
