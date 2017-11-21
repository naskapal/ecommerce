new Vue({
  el: '#app',
  data: {
    items: [],
    cart: [],
    total: 0
  },
  methods: {
    findAllListings: function() {
      axios.get('http://localhost:3000/items')
        .then(response => {
          this.items = response.data
          console.log(response.data);
        })
        .catch(err => {
          console.error(err);
        })
    },
    addToCart: function(itemObj) {
      let exist = false
      this.cart.forEach(item => {
        if (itemObj._id === item._id) {
          exist = true
          item.amount = (item.amount + 1)
          this.total += itemObj.price
        }
      })
      if (!exist) {
        this.cart.push({
          amount: 1,
          ...itemObj
        })
        this.total += itemObj.price
      }
    },
    removeOne: function(itemObj) {
      this.cart.forEach(item => {
        if (itemObj._id === item._id) {
          if (item.amount > 0) {
            item.amount = (item.amount - 1)
            this.total -= itemObj.price
          }
        }
      })
    },
    remove: function(itemObj) {
      let indexItem = -1
      this.cart.forEach((item, index) => {
        if (itemObj._id === item._id) {
          indexItem = index
          this.total -= (item.price * item.amount)
        }
      })
      this.cart.splice(indexItem, 1)
    }
  },
  created: function() {
    this.findAllListings()
  }
})