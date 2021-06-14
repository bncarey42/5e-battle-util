<template>
  <nav id="nav" class="p-4 w-full bg-transparent flex justify-between ">
    <div>
      <div class="px-1 rounded font-bold text-green-700 hover:bg-gray-700 hover:bg-opacity-70 flex align-middle">
      <router-link to="/">
        <img src="../assets/images/70sDice.png" class="w-10" alt="dice-logo" title="Dice Logo">
      </router-link>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="px-3 py-1 font-bold rounded text-green-600 hover:bg-gray-700 hover:bg-opacity-70" v-for="route in routes" :key="route.path">
        <router-link :to="route.path" :title="route.description">{{ route.name }}</router-link>
      </div>
    </div>
    <div>
      ???
    </div>
  </nav>
</template>
<script>
import router from '@/router/index';
export default {
  name: 'NavBar',
  data: () => {
    return {
      routes: []
    }
  },
  created() {
    let routes = [... router.options.routes];
    routes.shift();
    this.routes = routes;
  }
}
</script>
<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>