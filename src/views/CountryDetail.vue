<template>
  <div class="container country-detail">
      <div class="row mt-5">
          <div class="col">
              <h1 v-if="country">{{country}}</h1>
          </div>
      </div>
      <div class="row mt-5">
          <button-component
          v-for="(button, index) in buttons"
          :key="index"
          :btnClass="button.class"
          :text="button.name"
          @ClickEvent="renderChart(button.action)"
          ></button-component>
      </div>
      <div class="row mt-5">
          <div class="col">
            <div class="chart-container"
                v-if="getConfirmed.length > 0"
            >
                <line-chart
                :label="'Confirmed'"
                :chartData="getConfirmed"
                :chartColors="confirmedChartColors"
                :options="chartOptions"
                :height="200"
                ></line-chart>
            </div>
          </div>
      </div>
      <div class="row mt-5">
          <div class="col">
            <div class="chart-container"
                v-if="getPositive.length > 0"
            >
                <line-chart
                :label="'Positive'"
                :chartData="getPositive"
                :chartColors="positiveChartColors"
                :options="chartOptions"
                :height="200"
                ></line-chart>
            </div>
          </div>
      </div>
      <div class="row mt-5">
          <div class="col">
            <div class="chart-container"
                v-if="getDeaths.length > 0"
            >
                <line-chart
                :label="'Deaths'"
                :chartData="getDeaths"
                :chartColors="deathsChartColors"
                :options="chartOptions"
                :height="200"
                ></line-chart>
            </div>
          </div>
      </div>
      <div class="row mt-5">
          <div class="col">
            <div class="chart-container"
                v-if="getRecovered.length > 0"
            >
                <line-chart
                :label="'Recovered'"
                :chartData="getRecovered"
                :chartColors="recoveredChartColors"
                :options="chartOptions"
                :height="200"
                ></line-chart>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LineChart from '../components/Layout/LineChart/LineChart.vue'
import ButtonComponent from '../components/UI/Button/ButtonComponent.vue'
export default {
  components: { LineChart, ButtonComponent },
    name: 'country-detail',
    data(){
        return{
            country: '',
            chartOptions: {
                responsive: true,
                maintainAspectratio: false,
            },
            buttons:[
                {
                    name: 'Confirmed',
                    class: ['btn-primary'],
                    action: 'confirmed',
                    status: true
                },
                {
                    name: 'Positive',
                    class: ['btn-primary'],
                    action: 'positive',
                    status: false
                },
                {
                    name: 'Deaths',
                    class: ['btn-primary'],
                    action: 'death',
                    status: false
                },
                {
                    name: 'Recovered',
                    class: ['btn-primary'],
                    action: 'recovered',
                    status: false
                }
            ]
        }
    },
    methods:{
        async fetchData(id){
            const response = await this.$store.dispatch('getAllStatus', id)

            console.log(response)

            return response
        },
        renderChart(ev){
            console.log(ev)
        }
    },
    computed:{
        ...mapGetters(['getAllCountryStatus']),
        ...mapGetters(['getConfirmed']),
        ...mapGetters(['getPositive']),
        ...mapGetters(['getDeaths']),
        ...mapGetters(['getRecovered']),
        ...mapGetters(['confirmedChartColors']),
        ...mapGetters(['positiveChartColors']),
        ...mapGetters(['deathsChartColors']),
        ...mapGetters(['recoveredChartColors']),

    },
    created(){
        let routeParams = this.$route.params.id
        this.fetchData(routeParams)
        this.country = routeParams
    }
}
</script>

<style lang="scss" scoped>
.data{
    margin: 15px 0;
}
</style>