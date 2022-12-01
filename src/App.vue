<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { useCompaniesStore } from "./store/index";
export default {
    setup() {
        const store = useCompaniesStore();
        store.loadCompanies();
    },
};
</script>
