import styled from "@emotion/styled";

export const BoardItem = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: 2vh;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  transition: all ease 0.25s 0s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const BoardItemTop = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const EmptyImg = styled.div`
  width: 100%;
  height: 150px;
`;

export const Title = styled.span`
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  padding-left: 12px;
  margin-top: 20px;
  //글자수가많으면 ...으로 처리한다
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PostImgWrapper = styled.div`
  width: 100%;
  height: 170px;
  img {
    height: 170px;
    object-fit: cover;
  }
`;

export const desc = styled.div`
  width: 100%;
  font-size: 0.8rem;
  overflow: hidden;
  padding-left: 12px;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ItemBottom = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  border-top: 1px solid #eef0f1;
  padding: 5%;
`;

export const BottomLeft = styled.div`
  display: flex;
  gap: 10px;
`;

export const MemberImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MemberId = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

export const date = styled.div`
  color: gray;
  font-size: 0.8rem;
`;
