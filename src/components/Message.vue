<template>
  <h1 id="message"> {{ msg || 'default message' }}</h1>
</template>

<script>
export default {
  name: 'message',
  props: [
    'msg'
  ]
}
</script>
