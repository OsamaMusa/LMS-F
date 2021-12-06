
export default {
  name: 'src-components-welcome-new-user',
  components: {},
  props: [],
  data () {
    return {
      user : JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) :{username:'test user'} ,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


