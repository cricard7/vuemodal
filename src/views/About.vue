<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" @click="showmod">show modal</button>
    <modal name="hello-world">
       <h1>hello, world!</h1>
       <h2>{{msg}}</h2>
    </modal>

    <div>
      <h1>dynamic</h1>
      <button type="button" @click="showmod2">dynamic modal</button>
    </div>

    <div>
      <h1>dynamic vfor</h1>
      <button v-for="act in actions" @click="showmod3(act)" type="button">dynamic modal</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'about',
  components: {
    
  },
  data: function(){
    return {
      items: [1,2,3,4],
      msg: "testing",
      actions: [
        { id: 1,
          action: "do something"
        },
         { id: 2,
          action: "do something 2"
        },
         { id: 3,
          action: "do something 3"
        },

      ]

    }
  },
  methods: {


    showmod: function(){
      this.$modal.show('hello-world');
      
    },
    showmod2: function(){

          this.$modal.show({
      template: `
        <div>
          <h1>This is created inline</h1>
          <p>{{ text }}</p>
        </div>
      `,
      props: ['text']
    }, {
      text: 'This text is passed as a property'
    }, {
      
    }, {
      'before-close': (event) => { console.log('this will be called before the modal closes'); }
    })

    },
    testfunc: function(id){
      alert("run from modal" + id);
    },
    showmod3: function(act){
      

      this.$modal.show({
          template: `
            <div>
              <h1>This is created inline</h1>
              <p>{{ text }}</p>
              <p>{{id}}</p>
              <button @click="fxn(id)"> run fxn</button>
            </div>
          `,
          props: ['text', 'id', 'fxn']
        }, {
          text: act.action,
          id: act.id,
          fxn: this.testfunc
        }, {
          
        }, {
          'before-close': (event) => { console.log('this will be called before the modal closes'); }
        })


    }

  }
}
</script>