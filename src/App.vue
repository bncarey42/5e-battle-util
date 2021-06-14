<template>
  <div id="app" class="container min-h-screen max-w-full bg-gray-900">
    <nav-bar/>
    <div class="m-auto flex justify-center w-2/3">
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar},
  comments: {NavBar}
}
</script>
