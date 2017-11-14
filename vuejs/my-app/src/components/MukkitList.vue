<template>
  <ul class="mukkit-list">
    <li v-for="food in foodList">
      <span>{{food}}</span>
    </li>
    <li>
      <input type="text"
        ref="input"
        v-model="newFood"
        v-on:keypress.enter="addFood">
      <button v-on:click="addFood">먹킷리스트 추가</button>
    </li>
  </ul>
</template>

<script>
const DEFAULT_INITIALIZE_FOOD_LIST = [ '치킨', '탕수육', '닭도리탕' ]
export default {
  name: 'MukkitList',
  data () {
    return {
      foodList: [...DEFAULT_INITIALIZE_FOOD_LIST],
      newFood: ''
    }
  },
  mounted () {
    this.focusFood()
  },
  methods: {
    focusFood () {
      this.$refs.input.focus()
    },
    addFood () {
      if (this.foodList.indexOf(this.newFood) === -1) {
        this.foodList.push(this.newFood)
        this.newFood = ''
        this.focusFood()
      } else {
        alert('해당 음식은 이미 있습니다.')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mukkit-list-container {
    text-align: center;
  }

  .mukkit-list {
    display: block;
    width: 90%;
    max-width: 480px;
    margin: 40px auto 0;
    padding: 0;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .25);
  }

  .mukkit-list li {
    display: flex;
    height: 3.2em;
    line-height: 3.2em;
    border-bottom: 1px solid #d8d8d8;
    text-align: center;
  }

  .mukkit-list li:last-child {
    border-bottom: 0;
  }

  .mukkit-list li input,
  .mukkit-list li button {
    display: inline-block;
    flex: 1;
    flex-grow: 1;
    border: none;
  }

  .mukkit-list li input,
  .mukkit-list li span {
    display: inline-block;
    padding: 0 .6em;
  }

  .mukkit-list li input {
    flex-grow: 2;
  }

  .mukkit-list li button {
    background-color: #0063ca;
    color: #ffffff;
  }
</style>
