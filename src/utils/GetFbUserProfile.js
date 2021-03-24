import { getAccessToken, getAppAccessToken, inspectAccessToken, getUserProfile } from "./FBLoginValidations"

export const GetFbUserProfile = async () => {
  const token = await getAccessToken(GetCodeFromUrl())
  const appToken = await getAppAccessToken()
  const objectFromDebug = await inspectAccessToken(token, appToken)
  const profile_of_person = await getUserProfile(objectFromDebug.data.user_id, token)
  return profile_of_person;
}

const GetCodeFromUrl = () => {
  const url_with_code = window.location.search.match(/(code=)(.*)(?=&state)/)
  const code = url_with_code ? url_with_code[2] : null
  return code;
}
