<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg" required/>
            </div>

            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control form-control-lg" required />
            </div>
            <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control form-control-lg" required />
            </div>

            <div class="form-group">
                <label>Date Of Birth</label>
                <input type="date" class="form-control form-control-lg" required/>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" required/>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered 
                <router-link to="/log-in">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>