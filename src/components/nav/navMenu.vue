<template>
  <Menu theme="dark"
        :active-name="`${spreadItem}`"
        :open-names="this.spreadGroup"
        :accordion="true"
        id="nav_menu">
    <template v-for="item in data">
      <submenu :name="item.name">
        <template slot="title">
          <Icon :type="item.type" size="20" style="position: relative;top: 2px"></Icon>
          {{item.text}}
        </template>
        <template v-for="child in item.children">
          <router-link :to="child.link">
            <menu-item :name="child.name">{{child.text}}</menu-item>
          </router-link>
        </template>
      </submenu>
    </template>
  </Menu>
</template>

<script>
  import data from './config/data'

  export default {
    name: "navMenu",
    data() {
      return {
        data,
        spreadItem:"",
        spreadGroup:[],
      }
    },
    methods:{
      spread(){
        this.$set(this.spreadGroup,0,this.$route.meta.group.toString())
        this.spreadItem=this.$route.meta.item.toString();

      }
    },
    created(){
      this.spread()
    }
  }
</script>

<style lang="less">
  #nav_menu {
    .ivu-menu-submenu-title {
      padding: 9px 24px;
    }
    .ivu-menu-vertical,.ivu-menu-item, .ivu-menu-vertical,.ivu-menu-submenu-title {
      padding: 9px 24px;
    }
  }
</style>
