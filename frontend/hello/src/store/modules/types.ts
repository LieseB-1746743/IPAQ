export interface LoginState {
    status: string,
    token: string,
    refreshToken: string,
    username: string,
    role: string,
    authenticated: boolean,
}

export interface SnackBarSate {
    snackbarMessage: string,
    snackbarType: string,
}
