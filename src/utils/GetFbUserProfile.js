import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "./FBLoginValidations"

export const GetFbUserProfile = async () => {
  const url_with_code = window.location.search.match(/(code=)(.*)(?=&state)/)
  const code = url_with_code ? url_with_code[2] : null
  const token = await getAccessToken(code)
  const appToken = await getAppAccessToken()
  const objectFromDebug = await inspectAccessToken(token, appToken)
  const profile_of_person = await getUserProfile(objectFromDebug.data.user_id, token)
  return profile_of_person;
}
