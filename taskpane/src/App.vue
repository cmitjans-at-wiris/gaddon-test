<template>
  <h1>Hello From Vue</h1>
  <button @click="onClick">
    Insert Image
  </button>
</template>

<script lang='ts'>
/* global google */
export default {
  setup() {
    const onClick = () => {
      google.script.run
        .withSuccessHandler((a: any) => console.log(a))
        .withFailureHandler((error: any) => console.error(`Error: ${error}`))
        .insertImage();
    };

    return {
      onClick,
    };
  },
};
</script>

<style>

</style>
