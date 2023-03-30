import { useRouter } from "next/router";
import * as S from "./styled";
import Image from "next/image";
import { CalendarType, postListType, ProfileType } from "../../types";
import profilenoneImg from "../../public/Img/profile.png";
import useSWR from "swr";
import { useEffect, useState } from "react";
import BoardItem from "../boarditem";
import CustomAxios from "../../utils/lib/CustomAxios";

export default function Profile() {
  const router = useRouter();
  const tenArr = Array.from(Array(40), (_, index) => index + 1);
  const sevenArr = Array.from(Array(7), (_, index) => index + 1);
  const userId = router.query.user_id;
  const { data: ProfileData } = useSWR<ProfileType>(`account/${userId}`);
  const { data: CalendarData } = useSWR<CalendarType[]>(
    `account/calendar/${userId}`
  );
  const { data: MyBoardData } = useSWR<postListType[]>(
    `account/post/${userId}`
  );
  const [boards, setBoards] = useState<postListType[]>();
  const handleClickGrassBox = async (date: string) => {
    const { data } = await CustomAxios.get(`?date=${date}`);
    setBoards(data);
  };

  useEffect(() => {
    setBoards(MyBoardData);
  }, [MyBoardData]);

  console.log(CalendarData, userId);

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
            {sevenArr
              .map((i) => (
                <tr key={i}>
                  {tenArr
                    .map((it) => (
                      <td key={it}>
                        <S.GrassBox
                          style={{
                            background:
                              CalendarData &&
                              CalendarData[it * i - 1]?.postCount
                                ? "#aa77ff"
                                : "#EAEEF2",
                          }}
                          onClick={() =>
                            handleClickGrassBox(
                              (CalendarData && CalendarData[it]?.date) || ""
                            )
                          }
                        />
                      </td>
                    ))
                    .reverse()}
                </tr>
              ))
              .reverse()}
          </table>
        </S.TableWrapper>
        <S.BoardsWrapper>
          {boards ? (
            boards.map((i) => (
              <BoardItem
                key={i.idx}
                idx={i.idx}
                title={i.title}
                isMine={i.isMine}
                content={i.content}
                writer={i.writer}
                likeCount={i.likeCount}
                createdDate={i.createdDate}
              />
            ))
          ) : (
            <p>로딩중</p>
          )}
        </S.BoardsWrapper>
      </S.ProfileRightWrapper>
    </S.Profile>
  );
}
