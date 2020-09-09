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
            <h4 class="text-weight-bold text-grey-9 q-mb-lg">Login</h4>
            <q-form @submit="onSubmit">
              <span class="text-grey-7 text-weight-bold">Email</span>
              <DTextField
                bgcolor="white"
                type="email"
                :outlined="true"
                :isLabel="false"
                placeholder="john.doe@email.com"
                class="full-width q-mb-xl q-mt-sm"
                :rules="emailRules"
              />

              <span class="text-grey-7 text-weight-bold">Password</span>
              <DTextField
                bgcolor="white"
                type="password"
                :outlined="true"
                label
                :isPassword="true"
                placeholder="* * * *"
                class="full-width q-mt-sm"
                :rules="passwordRules"
              />
              <a
                href="#"
                class="float-right text-weight-bold text-grey-7 text-decoration-none q-mr-lg q-mt-sm"
              >Forgot Password?</a>
              <DButton
                label="Login"
                type="submit"
                textColor="white"
                class="bg-dailies-blue q-mt-xl button-radius button-fs-18"
              />
            </q-form>

            <div class="q-mt-xl relative-position">
              <q-separator inset />
              <p
                class="text-center text-weight-bold text-grey login-with absolute-center bg-white q-px-lg"
              >OR LOGIN WITH</p>
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
              <span class="text-grey">Don't have an account?</span>
              <router-link to="/register" class="q-ml-md text-light-blue-9 text-weight-bold">Sign up</router-link>
            </p>
          </div>
          <div class="col-6">
            <img src="../assets/login_image.png" class="height-width-100per" />
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
  name: "Login",
  data() {
    return {
      emailRegEx: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
    onSubmit() {},
  },
};
</script>
