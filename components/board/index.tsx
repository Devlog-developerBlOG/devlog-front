import * as S from "./styled";
import { useRouter } from "next/router";
import BoardItem from "../boarditem/index";
import {postListType } from "../../types/PostType";
import useSWR from 'swr';

interface PostProps {
  list : postListType[]
}

export default function Board() {
  const router = useRouter();
  const redirect = (url: string) => router.push(url);
  const { data } = useSWR<PostProps>('/post');
  const blogs = data?.list;
  console.log(data);

  return (
    <S.BlogWapper>
      <S.BlogButtonBox>
        <S.Button color="#aeddff" onClick={() => redirect("/post/add")}>
          +
        </S.Button>
      </S.BlogButtonBox>
      <S.BLogWarpper>
        {blogs ? (
          blogs.map((i, index) => (
            <BoardItem
              key={index}
              idx={i.idx}
              isMine={i.isMine}
              title={i.title}
              content={i.content}
              images={i.images}
              writer={i.writer} 
              likeCount={i.likeCount}
              createdDate={i.createdDate}
              />
          ))
        ) : (
          <S.loadingWapper>
            불러오는중
          </S.loadingWapper>
        )}
      </S.BLogWarpper>
    </S.BlogWapper>
  );
}