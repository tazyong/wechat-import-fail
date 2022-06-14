<script lang="ts" setup>
import { getQueryString } from '@/utils';

const queryString = getQueryString({
  a: [1, 2],
  b: 'abc',
});
</script>

<template>
  {{ queryString }}
</template>