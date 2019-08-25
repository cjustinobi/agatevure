  export default {
    methods: {
      formatDate(date) {
        const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'}
        const format = new Date(date)
        return format.toLocaleDateString('en-GB', dateOptions)
      }
    }
  }