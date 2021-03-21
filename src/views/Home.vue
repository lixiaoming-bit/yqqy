<template>
  <div class="home">
    <Header />
    <Drawer />
  </div>
</template>

<script>
import { Header, Drawer } from '@/components'
export default {
  name: 'Home',
  components: {
    Header,
    Drawer
  }
}
</script>
