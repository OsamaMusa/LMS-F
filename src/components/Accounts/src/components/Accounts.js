
export default {
  name: 'src-components-accounts',
  components: {},
  props: [],
  data () {
    return {
        id:this.$route.params.id  
    }
  },
  
  computed: {

  },
  mounted () {
    console.log(this.id);
  },
  methods: {

  },
 
}


