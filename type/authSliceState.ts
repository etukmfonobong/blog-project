export type user = {
  uid: string
  username: string
  photoUrl: string
}

export interface authState {
  user: user
  jwtToken: string
  refreshToken: string
}
