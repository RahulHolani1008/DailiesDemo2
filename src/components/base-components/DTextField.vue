<template>
  <div>
    <q-input
      :filled="filled"
      :bg-color="bgcolor"
      :prefix="prefix"
      v-model="innerModel"
      :label="label"
      color="black"
      :type="type"
      mask="##/##"
      label-color="black"
      v-if="!isDate && !isPassword && inputType=='month'"
      :rules="rules"
      lazy-rules
      :outlined="outlined"
      rounded
    />
    <q-input
      :filled="filled"
      :bg-color="bgcolor"
      :prefix="prefix"
      v-model="innerModel"
      :label="label"
      color="black"
      :type="type"
      mask="(###) ### - ####"
      label-color="black"
      v-if="!isDate && !isPassword && inputType =='tel'"
      :rules="rules"
      lazy-rules
      :outlined="outlined"
      rounded
    />
    <q-input
      :filled="filled"
      :bg-color="bgcolor"
      :prefix="prefix"
      v-model="innerModel"
      :label="label"
      color="black"
      :type="type"
      mask="#####"
      label-color="black"
      v-if="!isDate && !isPassword && inputType=='zip'"
      :rules="rules"
      lazy-rules
      :outlined="outlined"
      rounded
    />
    <q-input
      :filled="filled"
      :bg-color="bgcolor"
      :prefix="prefix"
      v-model="innerModel"
      :label="label"
      color="black"
      :placeholder="placeholder"
      :type="type"
      label-color="black"
      v-if="!isDate && !isPassword && inputType=='text' && isLabel==true"
      :rules="rules"
      lazy-rules
      :outlined="outlined"
      rounded
    />

    <q-input
      :filled="filled"
      :bg-color="bgcolor"
      :prefix="prefix"
      v-model="innerModel"
      color="black"
      :placeholder="placeholder"
      :type="type"
      v-if=" !isDate && !isPassword && inputType=='text' && isLabel==false"
      :rules="rules"
      lazy-rules
      :outlined="outlined"
      rounded
    />
    <q-input
      :filled="filled"
      :bg-color="bgcolor"
      :prefix="prefix"
      color="black"
      label-color="black"
      v-model="passwordModel"
      :type="isPwd ? 'password' : 'text'"
      v-if="isPassword"
      :rules="rules"
      lazy-rules
      :outlined="outlined"
      rounded
    ></q-input>

    <q-input
      v-model="date"
      mask="date"
      :rules="['date']"
      :outlined="outlined"
      rounded
      v-if="isDate"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
<style lang="scss" scoped>
.q-field__input {
  border-color: blue !important;
}
</style>
<script>
export default {
  data() {
    return {
      passwordModel: this.model,
      isPwd: true,
      innerModel: this.model,
      date: this.model,
    };
  },
  methods: {
    onRejected() {
      alert("rejected");
    },
    toggleVisibility() {
      this.isPwd = !this.isPwd;
    },
  },
  props: {
    filled: {
      default: false,
    },
    isPassword: {
      default: false,
    },
    isLabel: {
      default: true,
    },
    isDate: {
      default: false,
    },
    inputType: {
      default: "text",
    },
    placeholder: {
      default: "",
    },
    type: {
      default: "text",
    },
    label: {
      default: "Password",
    },
    model: {
      default: "",
    },
    rules: {
      default: () => [],
    },
    outlined: {
      default: false,
    },
    filled: {
      default: false,
    },
    accept: {
      default: ".pdf, .doc, .docx",
    },
    iconName: {
      default: "",
    },
    prefix: {
      default: "",
    },
    bgcolor: {
      default: "",
    },
  },
  mounted() {},
  watch: {
    innerModel: function (value) {
      this.$emit("model", value);
    },
    model: function (value) {
      this.innerModel = this.model;
    },
    passwordModel: function (value) {
      this.$emit("model", value);
    },
  },
};
</script>
