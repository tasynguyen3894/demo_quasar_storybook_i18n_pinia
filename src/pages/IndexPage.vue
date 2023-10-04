<template>
  <ColorChip color="yellow" />
  <PiniaButton />
  <ButtonNotify
    label="Notify"
    message="Message"
  />
</template>

<script setup lang="ts">
import ColorChip from 'src/components/UI/ColorChip.vue';
import PiniaButton from 'src/components/UI/PiniaButton.vue';
import ButtonNotify from 'src/components/UI/ButtonNotify.vue';
</script>
