import { GetServerSideProps, NextPage } from "next";
import CustomAxios from "../../utils/lib/CustomAxios";
import { postListType, ProfileType } from "../../types";
import { Header, Profile } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";
import { SWRConfig } from "swr";

const ProfilePage: NextPage<{ fallback: Record<string, ProfileType> }> = (
  { fallback },
  Authorization
) => {
  return (
    <SWRConfig value={fallback}>
      <Header isLogin={Authorization ? true : false} />
      <Profile />
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user_id } = ctx.query;
  const { Authorization } = await UseGetToken(ctx);
  console.log(Authorization);

  const head = {
    headers: { Authorization },
  };

  try {
    const { data } = await CustomAxios.get(`/account/${user_id}`, head);
    const { data: CalendarIndata } = await CustomAxios.get(
      `/account/calendar`,
      head
    );
    const { data: MyBoardData } = await CustomAxios.get(
      `account/post/${user_id}`,
      head
    );
    return {
      props: {
        fallback: {
          [`/account/${user_id}`]: data,
          "/account/calendar": CalendarIndata,
          [`account/post/${user_id}`]: MyBoardData,
        },
        Authorization,
      },
    };
  } catch (error) {
    return { props: {} };
  }
};

export default ProfilePage;
