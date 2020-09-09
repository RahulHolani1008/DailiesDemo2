<template>
  <div>
    <div class="create-student-page">
      <div class="main-card">
        <div
          class="text-center text-h2 text-weight-bold q-mb-lg text-dailies-blue"
        >Step 1 - Create student</div>
        <div class="row main-card-row bg-white">
          <div class="col-4 row">
            <DFileInput style="width: 99%;" />
            <q-separator vertical inset />
          </div>
          <div class="col-8 q-px-xl q-py-xl">
            <span class="text-grey-7 text-weight-bold fs--18">Student Name</span>
            <DTextField
              bgcolor="white"
              type="text"
              :outlined="true"
              :isLabel="false"
              placeholder="John Doe"
              class="full-width q-mb-lg q-mt-sm"
            />

            <span class="text-grey-7 text-weight-bold fs--18">Date of Birth</span>
            <DTextField
              bgcolor="white"
              type="text"
              :outlined="true"
              :isLabel="false"
              :isDate="true"
              placeholder="John Doe"
              class="full-width"
            />
            <p
              class="text-grey q-mb-lg fs--18 text-italic q-pr-xl"
            >Birthday is used to recommend courses, we won't share this information with anyone.</p>

            <span
              class="text-grey-7 text-weight-bold fs--18 q-mb-sm"
              style="display: inline-block;"
            >Learning Needs (optional)</span>
            <DSelect :stringOptions="options" :model="learningNeeds" @model="getLearningNeeds" />

            <DButton
              label="Create Student"
              textColor="white"
              class="bg-dailies-blue q-mt-lg button-radius button-fs-18"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DButton from "../components/base-components/DButton.vue";
import DTextField from "../components/base-components/DTextField.vue";
import DFileInput from "../components/base-components/DFileInput.vue";
import DSelect from "../components/base-components/DSelect.vue";
export default {
  components: {
    DButton,
    DTextField,
    DFileInput,
    DSelect,
  },
  name: "CreateStudent",
  data() {
    return {
      options: ["N/a", "Class XI", "Class X", "Class XI", "Class XII"],
      learningNeeds: "",
    };
  },
  methods: {
    getLearningNeeds: function (value) {
      this.learningNeeds = value;
    },
  },
};
</script>
