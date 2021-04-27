// Service to check authentication for user and to signOut
const Auth = {
  signOut() {
    return localStorage.removeItem("token");
  },
  isAuth() {
    return localStorage.getItem("token");
  }
};
export default Auth;
