<template>
  <v-app>
    <Header/>
    <Aside/>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Header from '../components/basic/Header'
import Aside from '../components/basic/Aside'
export default {
  name: 'Home',
  components: { Aside, Header }
}
</script>
