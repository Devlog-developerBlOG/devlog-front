import { GetServerSideProps } from "next";
import CustomAxios from "../../utils/lib/CustomAxios";
import { ProfileType } from "../../types";
import { Header, Profile } from "../../components";
import { UseGetToken } from "../../Hooks/useToken";

export default function ProfilePage({
  ProfileData,
}: {
  ProfileData: ProfileType;
}) {
  return (
    <>
      <Header />
      <Profile ProfileData={ProfileData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { user_id } = ctx.query;
  const { Authorization } = await UseGetToken(ctx);

  try {
    const { data } = await CustomAxios.get(`/user_profile/${user_id}`, {
      headers: { Authorization },
    });
    if (data) {
      const ProfileData = data;
      return { props: { ProfileData } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
