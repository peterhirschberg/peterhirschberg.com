<template>
  <header>
    <div class="top-area">
      <h3 class="pagesubtitle backbutton" @click="$router.go(-1)"><i class="mdi mdi-chevron-left"></i>Back</h3>
      <h1 class="pagetitle terminal"><i class="mdi less-glow" :class="icon"></i> {{ title }}</h1>
      <i class="mdi mdi-facebook button fbButton less-glow" @click="fbShare()"></i>
    </div>
    <hr>
    <br><br>
  </header>  
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
    icon: String
  },
  methods: {
    fbShare() {
      const url = location.href
      FB.ui({
        method: 'share',
        href: url
      }, function(response){});
    }
  }
}
</script>

<style scoped lang="scss">
.top-area {
  display: flex;
}
.backbutton {
  flex: 0 0 auto;
}
.pagetitle {
  display: inline-block;
  text-align: center;
  flex: 1 1 auto;
}
.fbButton {
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 32px;
  transition: all .5s;
  &:hover {
    transform: scale(1.3);
  }
}
</style>
