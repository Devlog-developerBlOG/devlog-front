import * as S from "./styled";
import BoardItem from "../boarditem/index";
import { postListType } from "../../types/PostType";
import useSWR from "swr";

export default function Board() {
  const { data } = useSWR<postListType[]>("/post");

  return (
    <S.BlogWapper>
      <S.BLogWarpper>
        {data ? (
          data.map((i, index) => (
            <BoardItem
              key={index}
              idx={i.idx}
              isMine={i.isMine}
              title={i.title}
              content={i.content}
              writer={i.writer}
              likeCount={i.likeCount}
              createdDate={i.createdDate}
            />
          ))
        ) : (
          <S.loadingWapper>불러오는중</S.loadingWapper>
        )}
      </S.BLogWarpper>
    </S.BlogWapper>
  );
}
