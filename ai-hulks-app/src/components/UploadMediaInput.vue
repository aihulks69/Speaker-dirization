<template>
  <div class="p-4 bg-white w-max bg-white dark:bg-opacity-10 m-auto rounded-lg mb-2 bg-opacity-60">
    <div class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg" style="width:450px;">
      <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
      <div class="input_field flex flex-col w-max mx-auto text-center">
        <label class="text-center">
          <input @change="upload" class="text-sm cursor-pointer w-36 hidden" type="file">
          <div class="text-center hover:shadow-lg bg-primary-gradient text-white shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-transparent focus:outline-none hover:shadow-m px-3 py-2 rounded-md cursor-pointer">
            <span>Select</span>
          </div>
        </label>
        <div class="mt-4 title text-indigo-500 uppercase text-xs dark:text-gray-200">or drop files here</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "upload-media-input",
  pros: {
    fileType: String, //type of file
    default: "",
  },
  methods: {
    upload(event) {
      console.log(this.fileType, event.target.files);
      this.$emit('upload-file', '');
    },
  }
}
</script>

<style scoped>

</style>
