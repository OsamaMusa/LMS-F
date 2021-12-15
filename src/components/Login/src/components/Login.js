
import axios from 'axios';
import SignInUser from '@/Models/SingInUser';
export default {
   name: 'sign-in',

   props: {

   },
   data() {
      return {
         show: false,
         username: '',
         password: '',
         hasErrors: false,
         errorString: '',
         isLoading: false

      }
   },
   methods: {
      signIn() {
         this.isLoading = true
         if (this.username == '' || this.password == '') {
            this.hasErrors = true;
            this.errorString = 'Error ! , please fill all data'
            this.isLoading = false

            return
         }
         var user = new SignInUser(this.username, this.password)
         axios.post('Auth',
            user
         ).then(response => {
            if (response.status == 200) {
               localStorage.setItem('Token', response.data);
               axios.get('/api/Users/' + this.username, {

                  headers: {
                     Authorization: 'Bearer ' + response.data
                  }

               }).then(res => {
                  if (res.status == 200) {

                     var user = JSON.stringify(res.data);
                     localStorage.setItem('user', user)
                     console.log(user)
                     window.location.href = "/"


                  }

               })

            }
         })
            .catch(err => {
               if (err) {
                  this.hasErrors = true
                  this.username = ''
                  this.password = ''
                  this.errorString = `Error !!`
                  this.isLoading = false
               }
            })

      }
   }
}