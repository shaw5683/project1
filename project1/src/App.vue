<template>
  <div id="app">
    <h3 class="todolist" v-text='title'></h3>
    <input type="text" v-model='things' v-on:keyup.13='insert' placeholder="Please input something!">
    <ul>
      <li v-for='(item,index) in lists' v-bind:class='{done:item.done}' v-on:click='change(item)'>
        {{index+1+'  '+item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
const storage='112';
import Storage from './storage.js';
export default {
  name: 'app',
  data () {
    return {
      title:'TodoList',
      lists:Storage.fetch(),
      things:''
    }
  },
  watch:{
    lists:{
      handler: function(val,oldVal){
        Storage.save(val);
      },
      deep:true
    }
  },
  methods:{
    change:function(item){
      item.done=!item.done;
    },
    insert:function(){
      this.lists.push({label:this.things,done:false});
      this.things='';
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
.todolist{
  font-size: 40px;
  margin-bottom: 100px;
}
#app{
  margin:400px auto;
  width:400px;
}
.done{
  color:green;
}
li{
  color:red;
  font-size: 20px;
}
input{
  width:250px;
  height: 50px;
  font-size: 20px;
}
</style>
