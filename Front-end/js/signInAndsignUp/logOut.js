function logout() {
    localStorage.removeItem("token")
    showFormLogin()
}