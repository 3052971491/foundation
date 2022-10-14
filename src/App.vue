<script setup lang="ts">
import { useLocale } from '/@/locales/useLocale';

const { getAntdLocale } = useLocale();
</script>

<template>
  <a-config-provider :locale="getAntdLocale">
    <router-view />
  </a-config-provider>
</template>
