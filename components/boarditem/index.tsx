import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import { useState } from "react";
import { postListType } from "../../types";
import { NextPage } from "next";

const BoardItem: NextPage<postListType> = ({
  isMine,
  title,
  content,
  idx,
  writer,
  images,
  createdDate,
}) => {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const [boardImg, setboardImg] = useState(images);
  const [profileImg, setProfileImg] = useState(images[0]);

  return (
    <S.BoardItem onClick={() => redirect(`/post/${idx}`)}>
      {boardImg ? (
        <Image
          src={boardImg[0]}
          alt="게시글 이미지"
          width={100}
          height={310}
          objectFit="cover"
        />
      ) : (
        <p>Loading..</p>
      )}

      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.desc>{content}</S.desc>
        <S.ItemBottom>
          <S.BottomLeft>
            <S.MemberImg>
              {/* <S.MemberImg onClick={() => redirect(`/profile/${user_id}`)}> */}
              {profileImg ? (
                <Image
                  width={20}
                  height={20}
                  src={profileImg}
                  alt="프로필 이미지"
                  objectFit="cover"
                />
              ) : (
                <Image
                  width={20}
                  height={20}
                  src={profilenoneImg}
                  alt="프로필 이미지"
                />
              )}
            </S.MemberImg>
            <S.MemberId>{writer.name}</S.MemberId>
          </S.BottomLeft>
          <S.date>{createdDate}</S.date>
        </S.ItemBottom>
      </S.TextBox>
    </S.BoardItem>
  );
};

export default BoardItem;
