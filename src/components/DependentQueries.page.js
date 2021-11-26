import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: userResponse } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const userData = userResponse?.data;
  const channelId = userData?.channelId;

  const { data: coursesResponse } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  const coursesData = coursesResponse?.data;

  console.log(coursesData);

  return <div>Dependent Queries Page</div>;
};
