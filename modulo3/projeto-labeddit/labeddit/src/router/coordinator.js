export const goToLoginPage = (navigate) => {
    navigate('../login')
}
export const goToSignUpPage = (navigate) => {
    navigate('../signup')
}
export const goToPostsFeedPage = (navigate) => {
    navigate('../feed')
}
export const goToPostDetailsPage = (navigate, id) => {
    navigate(`../feed/post/${id}`)
}

export const goBackPage = (navigate) => {
    navigate(-1)
}