<template>
  <div class=" planodefundobandeira">
    <nav class="navbar bg-blue-700 bg-opacity-20">
      <slot name="header"></slot>
    </nav>
    <div class="drawer min-h-screen">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <slot name="mainpage"></slot>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>

        <slot name="sidebar"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style>
.planodefundobandeira {
  background-image: url("../assets/brasilboliviawalppaper.png");
  background-size: cover; /* Isso garante que a imagem cubra todo o corpo */
  background-position: center; /* Isso centraliza a imagem */
}
</style>
