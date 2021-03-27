import { gql, useQuery } from '@apollo/client';

const USER_QUERY = gql`
  query($fb_id: String_comparison_exp!) {
    users(where: { fb_id: $fb_id }) {
      id
      first_name
      last_name
      fb_id
      posts {
        id
        content
        user {
          first_name
        }
      }
      login_time
    }
  }
`;

export const UserInRails = fb_id => {

console.log(fb_id);

  const { loading, error, data } = useQuery(
    USER_QUERY,
    { variables: {fb_id: { _eq: fb_id }} }
  );

  if (loading) {
    console.log("Loading...");
  }

  if (error) {
    console.log(JSON.stringify(error, null, 2));
  }

  return data;

}