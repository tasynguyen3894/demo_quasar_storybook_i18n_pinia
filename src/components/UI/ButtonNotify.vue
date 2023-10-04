<template>
  <button @click="$q.notify(props.message)">{{ props.label }}</button>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';

const props = withDefaults(defineProps<{
  label: string,
  message: string
}>(), {
  label: '',
  message: ''
})

const $q = useQuasar();
</script>
