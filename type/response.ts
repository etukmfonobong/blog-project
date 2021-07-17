type userProfile = {
  id: number
  photoUrl: string
  username: string
}
export type profileResponse = {
  email: string
  profile: userProfile
  uid: string
}
