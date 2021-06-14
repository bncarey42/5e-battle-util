<template>
  <div class="grid grid-cols-2">
      <div class="m-4" v-for="app in routes" :key="app.path">
        <app-card class="h-full bg-opacity-90 bg-yellow-50">
          <template v-slot:header>
            <router-link :to="app.path"><h1 class="text-green-900 text-xl hover:underline">{{ app.name }}</h1></router-link>
          </template>
          {{ app.description }}
        </app-card>
      </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard'
import router from "@/router";

export default {
  name: 'Home',
  components: {
    AppCard
  },
  data: () => {
    return {
      routes: []
    }
  },
  created() {
    let routes = [...router.options.routes];
    routes.shift();
    this.routes = routes;
  }
}
</script>
