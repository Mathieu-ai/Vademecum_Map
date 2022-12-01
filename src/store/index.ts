import { useSessionStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { $GetComps, comps } from "./config";
// ^^ file where the initialization of comps are done

export const useCompaniesStore = defineStore("companies", {
    state: () => ({ comps: { all: useSessionStorage('all', []), status: 0, lastUpdated: '' } }),
    actions: {
        async loadCompanies() {
            await $GetComps()

            this.comps.all = comps.ALL
            this.comps.status = comps.STATUS
            this.comps.lastUpdated = comps.lastUpdated
        },
    },
});
