<template>
  <nav>
    <ul class="menu">
      <li class="menu-item" v-for="m in menu">
        <NuxtLink class="menu-item__link" :key="`${m.id}`" :to="`/${m.slug}`">{{ m.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  const menu = [
    {
      id: 1,
      name: "Home",
      slug: ""
    },
    {
      id: 2,
      name: "Command List",
      slug: "command-list"
    },
    {
      id: 3,
      name: "List of leagues",
      slug: "list-of-leagues"
    }
  ]
</script>

<style lang="scss">
  .menu {
    display: flex;
    align-items: center;
    gap: 1.5em;
  }

  .menu-item__link {
    position: relative;
    padding: .5em;
    &[aria-current="page"] {
      &::before {
        content: "";
        position: absolute;
        width: calc(100% - 1rem);
        height: 3px;
        background: var(--color-primary);
        bottom: 0px;
      }
    }
  }

  
</style>