<script setup lang="ts">
import { useLocale } from '/@/locales/useLocale';

const { getAntdLocale } = useLocale();
</script>

<template>
  <a-config-provider :locale="getAntdLocale">
    <hello-world></hello-world>
  </a-config-provider>
</template>
