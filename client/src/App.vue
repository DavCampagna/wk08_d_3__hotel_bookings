<template lang="html">
  <div>
  </div>
</template>

<script>
import BookingService from './services/BookingService.js'
import BookingsForm from './components/BookingsForm'
import BookingGrid from './components/BookingGrid'

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {

  },
  methods: {
    fetchData(){
        BookingService.getBookings()
        .then(bookings => this.bookings = bookings);
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style lang="css" scoped>
</style>
