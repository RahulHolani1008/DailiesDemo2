<template>
  <div class="text-center">
    <div class="wrapper-div q-mx-auto q-mt-xl bg-light-blue-1">
      <div
        class="base-image-input"
        :style="{ 'background-image': `url(${imageData})` }"
        v-if="imageData "
      ></div>

      <div class="base-image-input base-image-input-default" v-if="!imageData"></div>
    </div>
    <input
      style="display: none;"
      id="fileInput"
      ref="fileInput"
      type="file"
      @input="onSelectFile($event)"
      accept="image/gif, image/jpeg, image/png"
    />
    <q-btn
      @click="chooseImage"
      class="fileinput-button q-mt-xl bg-light-blue-1 text-dailies-blue text-weight-bolder q-px-xl"
    >
      Add Profile Photo
      <br />(optional)
    </q-btn>
  </div>
</template>
<script>
export default {
  props: {
    imageData: {
      default: null,
    },
  },
  methods: {
    chooseImage() {
      let btn = document.getElementById("fileInput");
      btn.click();
    },
    onSelectFile(event) {
      var files = event.srcElement.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
  },
};
</script>
<style>
.wrapper-div {
  border-radius: 100%;
  width: 180px;
  height: 180px;
  padding: 15px;
}

.base-image-input {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-position: center;
  background-size: contain;
}

.file-input {
  display: none;
}
</style>