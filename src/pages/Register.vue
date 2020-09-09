<template>
  <div>
    <div class="main-login-page">
      <div class="main-card">
        <div class="text-center text-h2 text-weight-bold q-mb-lg">
          <span class="text-dailies-blue">Dailies</span>
          <span class="text-dailies-green">Pods</span>
        </div>
        <div class="row main-card-row bg-white">
          <div class="col-6 q-px-xl">
            <h4 class="text-weight-bold text-grey-9 q-mb-lg">Sign Up</h4>
            <q-form @submit="onSubmit">
              <span class="text-grey-7 text-weight-bold">Adult Name</span>
              <DTextField
                bgcolor="white"
                type="text"
                :outlined="true"
                :isLabel="false"
                placeholder="John Doe"
                class="full-width q-mb-lg q-mt-sm"
                :rules="nameRules"
              />

              <span class="text-grey-7 text-weight-bold">Adult Email</span>
              <DTextField
                bgcolor="white"
                type="email"
                :outlined="true"
                :isLabel="false"
                placeholder="john.doe@email.com"
                class="full-width q-mt-sm q-mb-lg"
                :rules="emailRules"
              />

              <span class="text-grey-7 text-weight-bold">Password</span>
              <DTextField
                bgcolor="white"
                type="password"
                :outlined="true"
                :isLabel="false"
                placeholder="* * * *"
                class="full-width q-mt-sm"
                :rules="passwordRules"
              />

              <DButton
                label="Sign Up"
                textColor="white"
                class="bg-dailies-blue q-mt-lg button-radius button-fs-18"
                type="submit"
              />
            </q-form>

            <div class="q-mt-xl relative-position">
              <q-separator inset />
              <p
                class="text-center text-weight-bold text-grey login-with absolute-center bg-white q-px-lg"
              >OR SIGN UP WITH</p>
            </div>

            <div class="text-center q-mt-xl">
              <span class="social_logo">
                <img src="../assets/google_logo.png" />
              </span>

              <span class="social_logo bg-facebook-blue q-ml-md">
                <img src="../assets/facebook_logo.png" />
              </span>
            </div>

            <p class="fs--18 q-mt-xl">
              <span class="text-grey">Already have an account?</span>
              <router-link to="/" class="q-ml-md text-light-blue-9 text-weight-bold">Log in</router-link>
            </p>

            <p class="text-italic">
              <span class="text-grey">By Signing up you agree to the</span>
              <a href="#" class="text-light-blue-9 q-ml-xs">Terms of service</a>
              <span class="text-grey q-ml-xs">and</span>
              <a href="#" class="text-light-blue-9 q-ml-xs">privacy policy</a>
            </p>
          </div>
          <div class="col-6">
            <q-badge color="orange" floating>22</q-badge>
            <img src="../assets/signup_image.png" class="height-width-100per" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DButton from "../components/base-components/DButton.vue";
import DTextField from "../components/base-components/DTextField.vue";
export default {
  components: {
    DButton,
    DTextField,
  },
  name: "Register",
  data() {
    return {
      emailRegEx: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      nameRules: [(val) => !!val || "Name is required"],
      emailRules: [
        (val) => !!val || "Email is required",
        (val) => this.emailRegEx.test(val) || "Enter a valid email address",
      ],
      passwordRules: [
        (val) => !!val || "Password is required",
        (val) =>
          val.length >= 6 || "Password length must be atleast 6 characters",
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({
        name: "CreateStudent",
      });
    },
  },
};
</script>
