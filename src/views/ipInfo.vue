<template lang="pug">
.absolute.-bottom-64.flex.flex-col.bg-white.gap-y-4.gap-x-12.px-8.pt-8.pb-12.rounded-md(class='lg:-bottom-20 lg:flex-row')
    // Flex item #1
    .flex.flex-col
        h3.text-xs.mb-2.uppercase  IP Address 
        span.text-2xl  {{ ipInfo.address }} 
    // Flex item #2
    .flex.flex-col
        h3.text-xs.mb-2.uppercase  Location 
        span.text-2xl  {{ ipInfo.state }} 
    // Flex item #3
    .flex.flex-col
        h3.text-xs.mb-2.uppercase  Timezone 
        span.text-2xl UTC {{ ipInfo.timezone }} 
    // Flex item #4
    .flex.flex-col
        h3.text-xs.mb-2.uppercase  Isp 
        span.text-2xl  {{ ipInfo.isp }} 
</template>

<script lang="ts">
export default {
    props: {
        ipInfo: {
            type: Object,
        },
    },
};
</script>
