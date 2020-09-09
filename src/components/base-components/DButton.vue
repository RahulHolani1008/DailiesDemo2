<template>
  <span style="display: inline-block;">
    <q-btn
      :push="push"
      :color="color"
      :text-color="textColor"
      :label="label"
      v-on:click="buttonClicked"
      class="rounded-borders q-px-md"
      :type="type"
      :outline="outline"
      rounded
      v-if="!isIconRight && !isIconLeft"
      no-caps
    />

    <q-btn
      :push="push"
      :color="color"
      :text-color="textColor"
      :label="label"
      v-on:click="buttonClicked"
      class="rounded-borders q-px-md"
      :type="type"
      icon="search"
      v-if="isIconLeft"
      :outline="outline"
      rounded
    />

    <q-btn
      :push="push"
      :color="color"
      :outline="outline"
      :text-color="textColor"
      :label="label"
      v-on:click="buttonClicked"
      v-if="isIconRight"
      class="rounded-borders q-px-md"
      :type="type"
      icon-right="keyboard_arrow_right"
      rounded
    ></q-btn>
  </span>
</template>
<script>
export default {
  props: {
    color: {
      default: "bg-dailies-blue",
    },
    textColor: {
      default: "black",
    },
    label: {
      default: "Push me",
    },
    outline: {
      default: false,
    },
    push: {
      default: true,
    },
    type: {
      default: "submit",
    },
    iconRightName: {
      default: "",
    },
    isIconRight: {
      default: false,
    },
    isIconLeft: {
      default: false,
    },
    noCaps: {
      default: false,
    },
  },
  methods: {
    buttonClicked() {
      this.$emit("click", true);
    },
  },
};
</script>
