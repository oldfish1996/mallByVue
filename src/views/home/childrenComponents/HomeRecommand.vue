<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div> {{item.title}} </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  justify-content: space-around;
}
.recommend-item a {
  text-align: center;
  text-decoration: none;
  color: pink;
  padding: 1rem 0 1rem 0;
}
.recommend-item a:hover {
  color: deeppink
}
.recommend-item img {
  width: 5rem;
  height: 5rem;
}

</style>