<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :width="props.size"
    :height="props.size"
  >
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
  /** 前缀 */
  prefix: {
    type: String,
    default: 'icon',
  },
  /** 名称 */
  name: {
    type: String,
    required: true,
  },
  /** 颜色 */
  color: {
    type: String,
    default: '#333',
  },
  /** 大小 */
  size: {
    type: String,
    default: '1em',
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
