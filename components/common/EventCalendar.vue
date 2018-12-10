<template>
  <vue-event-calendar :events="events"
    @month-changed="handleMonthChanged"
    @day-changed="handleDayChanged" ></vue-event-calendar>
</template>

<script>
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'
  import 'vue-event-calendar/dist/style.css'
  export default {
    props: [
      'date',
      'events'
    ],
    watch: {
      date(newVal, oldVal) {
        console.log('to', newVal)
        this.$EventCalendar.toDate(newVal)
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleMonthChanged(date) {
        // console.log(evt)
        // const date = parse(evt, 'MM/YYYY')
        this.$emit('change', date.split('/').reverse().join('/'))
      },
      handleDayChanged(evt) {
        const date = parse(evt.date)
        console.log('dd', date)
        this.$emit('change', format(date, 'YYYY/MM'))
        this.$emit('changeCurrentDay', format(date, 'YYYY/MM/DD'))
      }
    },
    mounted() {
      // console.log(this.$refs['cal'])
      //this.$EventCalendar.toDate("2018/01/01")
    }
  }
</script>

<style>

</style>
