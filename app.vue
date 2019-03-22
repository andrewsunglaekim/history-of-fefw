







              <template>
                <button
                  @click="handleClick"
                  class="our-cool-vue-component">
                  click me!
                </button>
              </template>

              <script>
                export default {
                  name: 'OurCoolVueComponent',

                  methods: {
                    handleClick() {
                      console.log('Wow, js is cool!');
                    },
                  },
                };
              </script>







