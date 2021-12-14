<template>
  <h1>Hello From Vue</h1>
  <button @click="onClick">
    Insert Image
  </button>
</template>

<script lang='ts'>
import { GASClient } from 'gas-client';

export default {
  setup() {
    const { serverFunctions } = new GASClient();

    const onClick = () => {
      serverFunctions.insertImage()
        .then(() => console.log('Success!'))
        .catch((error: any) => console.error(`Error: ${error}`));
    };

    return {
      onClick,
    };
  },
};
</script>

<style>

</style>
