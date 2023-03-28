/* eslint-disable react/no-children-prop */
import { useRouter } from "next/router";
import Image from "next/image";
import profilenoneImg from "../../public/Img/profile.png";
import * as S from "./styled";
import { postListType } from "../../types";
import { NextPage } from "next";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BoardItem: NextPage<postListType> = ({
  isMine,
  title,
  content,
  idx,
  writer,
  createdDate,
}) => {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const imgRex = /<img[^>]+src\s*=\s*[\"']?([^>\"']+)[\"']?[^>]*>/g;

  const arr = content.match(imgRex);
  const notImageContent = content.replace(imgRex, "");

  return (
    <S.BoardItem onClick={() => redirect(`/post/${idx}`)}>
      <S.Title>{title}</S.Title>
      <S.PostImgWrapper>
        {arr ? (
          <ReactMarkdown
            remarkPlugins={[[remarkGfm]]}
            children={arr[0] || ""}
            rehypePlugins={[rehypeRaw]}
          />
        ) : (
          <S.EmptyImg />
        )}
      </S.PostImgWrapper>
      <S.desc>{notImageContent}</S.desc>
      <S.ItemBottom>
        <S.BottomLeft>
          <S.MemberImg>
            {writer.profileUrl ? (
              <Image
                width={15}
                height={15}
                src={writer.profileUrl}
                alt="프로필 이미지"
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <Image
                width={15}
                height={15}
                src={profilenoneImg}
                alt="프로필 이미지"
              />
            )}
          </S.MemberImg>
          <S.MemberId>{writer.name}</S.MemberId>
        </S.BottomLeft>
        <div>
          <S.date>{createdDate}</S.date>
        </div>
      </S.ItemBottom>
    </S.BoardItem>
  );
};

export default BoardItem;
