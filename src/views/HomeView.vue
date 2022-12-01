<template lang="pug">
.flex.flex-col.h-screen.max-h-screen
    // Search / Results
    .z-20.flex.justify-center.relative
        // Search Input
        .w-full.max-w-screen-sm
            h1.text-black.font-bold.text-center.text-3xl.pb-4 vademecum Map
        // IP Info
        IPInfo(v-if='ipInfo' :ipInfo='ipInfo')
    // Map
    #map.h-full.z-10
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import leaflet from 'leaflet'
import axios from 'axios'
import IPInfo from '@/views/ipInfo.vue'
import { useCompaniesStore } from '../store/index'

export default defineComponent({
    components: { IPInfo },
    setup() {
        const store = useCompaniesStore()
        let map: any;
        const queryIp = ref("")
        const ipInfo = ref()
        onMounted(() => {
            map = leaflet.map('map').setView([48.855369, 2.291886], 18);

            leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                minZoom: 2
            }).addTo(map);
            store.comps.all.forEach(c => {
                const coor = c['field_coordinates']
                if (coor) {
                    leaflet.marker(coor).addTo(map)
                        .bindPopup(c['title'])
                }
            })
        })



        const getIpInfo = async () => {
            try {
                const data = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_AnbtJegozhBunRlgsLgsDkZhTdQs9&ipAddress=${queryIp.value}`)
                const result = await data.data
                ipInfo.value = {
                    address: result.ip,
                    state: result.location.region,
                    timezone: result.location.timezone,
                    isp: result.isp,
                    lat: result.location.lat,
                    lng: result.location.lng,
                }
                leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(map)
                // leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(map)
                map.setView([ipInfo.value.lat, ipInfo.value.lng], 13)
            } catch (err: any) {
                alert(err.message)
            }
        }
        return { queryIp, ipInfo, getIpInfo, store }
    },
})
</script>
