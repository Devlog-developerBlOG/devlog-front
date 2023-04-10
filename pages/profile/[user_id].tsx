import { GetServerSideProps, NextPage } from "next";
import CustomAxios from "../../utils/lib/CustomAxios";
import { ProfileType } from "../../types";
import { Profile } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";
import { SWRConfig } from "swr";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../components/header"), { ssr: false });

const ProfilePage: NextPage<{ fallback: Record<string, ProfileType> }> = ({
  fallback,
}) => {
  return (
    <SWRConfig value={fallback}>
      <Header />
      <Profile />
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user_id } = ctx.query;
  const { Authorization } = await UseGetToken(ctx);

  try {
    const { data } = await CustomAxios.get(`/account/${user_id}`, {
      headers: { Authorization },
    });
    const { data: CalendarIndata } = await CustomAxios.get(
      `/account/calendar/${user_id}`,
      {
        headers: { Authorization },
      }
    );
    const { data: MyBoardData } = await CustomAxios.get(
      `account/post/${user_id}`,
      {
        headers: { Authorization },
      }
    );

    return {
      props: {
        fallback: {
          [`/account/${user_id}`]: data,
          [`/account/calendar/${user_id}`]: CalendarIndata,
          [`account/post/${user_id}`]: MyBoardData,
        },
      },
    };
  } catch (error) {
    return { props: {} };
  }
};

export default ProfilePage;
