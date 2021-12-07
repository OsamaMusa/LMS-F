import axios from 'axios';

export default {
  name: 'src-components-books',
  components: {},
  props: [
  ],
  data () {
    return {
      dialog: false,
      dialogDelete: false,
        headers: [
          {
            text: 'Author Name',
            align: 'start',
            value: 'author',
          },
          { text: 'Title', value: 'title' },
          { text: 'Available', value: 'avilable' },
          { text: 'Total number', value: 'totalNum' },
          { text: 'Price $', value: 'price' }
        ],
      desserts:[
     
      ],
      editedIndex: -1,
      editedItem: {
      },
      defaultItem: {
        
      },
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  created () {
  },
  mounted () {
          this.initialize()    
  },
  
  methods: {
  
    initialize(){
      axios
    .get('AllBooks')
    .then(
      response => (this.desserts = response.data),
      )
    }

  },
}


