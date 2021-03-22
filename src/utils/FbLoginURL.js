import { makeState, makeNum } from './makeState';

// This is URL provided by FB Platform for logging into this app via FB.
export const FbLoginURL = () => {
  return `
    https://www.facebook.com/v10.0/dialog/oauth?client_id=${process.env.GATSBY_FB_APP_CLIENT_ID}&redirect_uri=${process.env.GATSBY_API_URL}&state={st=state${makeState(6)},ds=${makeNum(9)}}&locale=th_TH
  `
}
