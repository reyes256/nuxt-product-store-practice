<template>
  <div>
    <header class="shadow-md bg-white">
      <nav class="container mx-auto p-4">
        <li><NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink></li>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style>
.router-link-exact-active {
  color: green;
}
</style>
