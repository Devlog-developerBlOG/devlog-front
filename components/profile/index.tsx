import { useRouter } from "next/router";
import * as S from "./styled";
import Image from "next/image";
import { CalendarType, ProfileType } from "../../types";
import profilenoneImg from "../../public/Img/profile.png";
import useSWR from "swr";

export default function Profile() {
  const router = useRouter();
  const tenArr = Array.from(Array(40), (_, index) => index + 1);
  const sevenArr = Array.from(Array(7), (_, index) => index + 1);
  const { data: ProfileData } = useSWR<ProfileType>(
    `account/${router.query.user_id}`
  );
  const { data: CalendarData } = useSWR<CalendarType[]>(
    `account/calendar/${router.query.user_id}`
  );

  console.log(CalendarData, router.query.user_id);

  return (
    <S.Profile>
      <S.ProfileImpormation>
        <S.MyProfileWrapper>
          <S.ProfileImg>
            {ProfileData?.profileUrl ? (
              <Image
                src={ProfileData.profileUrl}
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
            <S.UserName>{ProfileData?.name}</S.UserName>
            <S.UserEmail>{ProfileData?.email}</S.UserEmail>
            <S.UserEmail>{`회사 : ${ProfileData?.company || ""}`}</S.UserEmail>
            <S.GOEdit onClick={() => router.push("/profile/Edit")}>
              프로필 편집
            </S.GOEdit>
          </S.User>
        </S.MyProfileWrapper>
        <S.MyService>
          <S.ServiceBox>
            <S.ServiceTitle>service</S.ServiceTitle>
            <S.ServiceContents>
              <S.ServiceContent>Devlog</S.ServiceContent>
            </S.ServiceContents>
          </S.ServiceBox>
        </S.MyService>
      </S.ProfileImpormation>
      <S.ProfileRightWrapper>
        <S.IntroMd>안녕하세요 프론트 공부하는 유환빈이라고 합니다</S.IntroMd>
        <S.TableWrapper>
          <S.DateContent></S.DateContent>
          <table>
            {sevenArr.map((i) => (
              <tr key={i}>
                {tenArr
                  .map((it) => (
                    <td key={it}>
                      <S.GrassBox
                        style={{
                          background:
                            CalendarData && CalendarData[it * i - 1]?.postCount
                              ? "#aa77ff"
                              : "#EAEEF2",
                        }}
                      />
                    </td>
                  ))
                  .reverse()}
              </tr>
            ))}
          </table>
        </S.TableWrapper>
      </S.ProfileRightWrapper>
    </S.Profile>
  );
}
