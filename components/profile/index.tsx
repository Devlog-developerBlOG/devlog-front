import { useEffect, useState } from "react";
import CustomAxios from "../../utils/lib/CustomAxios";
import Boarditem from "../boarditem/index";
import { useRouter } from "next/router";
import * as S from "./styled";
import Image from "next/image";
import { PostIdType, ProfileType } from "../../types";
import profilenoneImg from "../../public/Img/profile.png";

export default function Profile({
  ProfileData,
}: {
  ProfileData?: ProfileType;
}) {
  const [profile, SetProfile] = useState(ProfileData);
  const [Blogs, setBlogs] = useState<PostIdType[]>();
  const [my, setmy] = useState(false);
  const router = useRouter();
  const user_id = router.query.user_id;
  const redirect = (url: string) => router.push(url);
  const tenArr = Array.from(Array(30), (_, index) => index + 1);
  const sevenArr = Array.from(Array(7), (_, index) => index + 1);

  useEffect(() => {
    async function Getprofile() {
      // const res = await CustomAxios.get(`user_profile/${user_id}`);
      const res2 = await CustomAxios.get(`boards/${user_id}`);
      const { data } = await CustomAxios.get("user_name");
      if (data.user_id == user_id) setmy(true);
      // SetProfile(res?.data);
      setBlogs(res2?.data.blogs);
    }

    Getprofile();
  }, []);

  function sortObject(a: any, b: any) {
    return b.board_id - a.board_id;
  }

  return (
    <S.Profile>
      <S.ProfileImpormation>
        <S.MyProfileWrapper>
          <S.ProfileImg>
            {profile?.url ? (
              <Image
                src={profile?.url}
                width={230}
                height={230}
                alt="profile 이미지"
              />
            ) : (
              <Image
                width={230}
                height={230}
                src={profilenoneImg}
                alt="profile 이미지"
              />
            )}
          </S.ProfileImg>
          <S.User>
            <S.UserName>{"김성길"}</S.UserName>
            {/* {my ? (
                <S.GOEdit onClick={() => redirect("/profile/Edit")}>
                  프로필 편집
                </S.GOEdit>
              ) : null} */}
            <S.UserEmail>{"dngh0825@gmail.com"}</S.UserEmail>
            <S.GOEdit onClick={() => redirect("/profile/Edit")}>
              프로필 편집
            </S.GOEdit>
          </S.User>
        </S.MyProfileWrapper>
        <S.MyService>
          <S.ServiceBox>
            <S.ServiceTitle>프로젝트</S.ServiceTitle>
            <S.ServiceContents>
              <S.ServiceContent>Devlog</S.ServiceContent>
            </S.ServiceContents>
          </S.ServiceBox>
        </S.MyService>
      </S.ProfileImpormation>
      <S.ProfileRightWrapper>
        <S.IntroMd>안녕하세요 프론트 공부하는 유환빈이라고 합니다</S.IntroMd>
        <S.TableWrapper>
          <table>
            {sevenArr.map((i) => (
              <tr key={i}>
                {tenArr.map((it) => (
                  <td key={it}>
                    <S.GrassBox />
                  </td>
                ))}
              </tr>
            ))}
          </table>
        </S.TableWrapper>
      </S.ProfileRightWrapper>
    </S.Profile>
  );
}
