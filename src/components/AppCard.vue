<template>
  <div class="bg-white rounded">
    <div class="p-3 text-gray-900 text-lg w-full">
      <slot name="header"></slot>
    </div>
    <div class="p-3 text-gray-800">
      <slot></slot>
    </div>
    <div class="p-3 text-gray-600">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard"
}
</script>