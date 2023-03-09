<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <Main/>
        <Side/>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Main from '@/components/Main.vue';
import Side from '@/components/Side.vue';


export default defineComponent({
  name: 'App',
  components: {
    Side, Main,
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
.gap-30 {
  gap: 30px;
}
#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
