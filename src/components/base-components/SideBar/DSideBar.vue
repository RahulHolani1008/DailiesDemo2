<template>
  <div
    class="absolute bg-white sidebar-main"
    @mouseover="expanded = true"
    @mouseleave="expanded = false"
    :class="{fullwidth: expanded}"
  >
    <div class="icon q-mt-md q-mx-md">
      <img src="../../../assets/Dailies-icon-1000.png" width="33" class="logo-icon" />
      <img src="../../../assets/Dailies-logo-1000.png" width="130" class="logo-full" />
    </div>

    <div class="menus q-mt-lg q-mx-md text-dailies-blue">
      <ul class>
        <li class="active">
          <span class="menu-icon">
            <q-icon name="font_download" />
          </span>
          <span class="menu-text">Home</span>
        </li>

        <li>
          <span class="menu-icon">
            <q-icon name="font_download" />
          </span>
          <span class="menu-text">My Classes</span>
        </li>

        <li>
          <span class="menu-icon">
            <q-icon name="font_download" />
          </span>
          <span class="menu-text">Pods</span>
        </li>

        <li>
          <span class="menu-icon">
            <q-icon name="font_download" />
          </span>
          <span class="menu-text">My Teachers</span>
        </li>
      </ul>
    </div>

    <div class="bottom-actions q-mx-md text-dailies-blue">
      <ul>
        <li>
          <span class="menu-icon">
            <q-icon name="font_download" />
          </span>
          <span class="menu-text">Settings</span>
        </li>

        <li>
          <span class="menu-icon">
            <q-icon name="font_download" />
          </span>
          <span class="menu-text">Logout</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "DSideBar",
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
<style>
.sidebar-main {
  height: 100vh;
  width: 80px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: 0.3s ease;
}

.sidebar-main.fullwidth {
  width: 200px;
}

.sidebar-main .icon {
  text-align: center;
}

.logo-full {
  display: none;
}

.menus ul,
.bottom-actions ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.menus ul li,
.bottom-actions ul li {
  cursor: pointer;
  border-radius: 25px;
  margin-bottom: 15px;
  transition: 0.3s ease-in-out;
  display: flex;
}

.menus ul li.active,
.bottom-actions ul li.active {
  background-color: rgba(31, 95, 159, 0.15);
}

.menu-icon {
  font-size: 30px;
  margin-right: 25px;
  padding-left: 9px;
  padding-bottom: 3px;
  transition: 0.3s ease;
}

.menu-text {
  padding-top: 14px;
  display: none;
  white-space: nowrap;
}

.bottom-actions {
  position: absolute;
  bottom: 0;
  width: calc(100% - 32px);
}

.sidebar-main.fullwidth .icon {
  text-align: left;
  margin-left: 16px;
}

.fullwidth .menus ul li,
.fullwidth .bottom-actions ul li {
  background-color: rgba(31, 95, 159, 0.15);
}

.fullwidth .menu-icon {
  padding-left: 15px;
}

.fullwidth .menu-text {
  display: block;
}

.fullwidth .logo-icon {
  display: none;
}

.fullwidth .logo-full {
  display: block;
}
</style>
