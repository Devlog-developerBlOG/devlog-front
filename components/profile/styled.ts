import styled from "@emotion/styled";

export const Profile = styled.div`
  width: 100%;
  height: 93vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 10%;
`;

export const ProfileImpormation = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 auto;
  padding: 40px 0;
  gap: 40px;
`;

export const MyProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 230px;
    height: 230px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 0 20px;
`;

export const GOEdit = styled.div`
  width: 100%;
  font-size: 15px;
  border: 0.1px solid darkgray;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const UserEmail = styled.div`
  color: gray;
  font-size: 15px;
`;

export const ModifyCompanyInput = styled.input`
  color: gray;
  font-size: 15px;
  border-radius: 5px;
  padding: 3px 5px;
  border: 0.1px solid darkgray;
`;

export const UserNameInput = styled.input`
  padding: 5px 0 5px 10px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const UserName = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const uploadBlogs = styled.div`
  margin: 0 auto;
  gap: 50px;
  padding: 40px 0;
  margin: 0 auto;
  width: 85%;
  height: 2000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Hr = styled.hr`
  width: 85%;
  margin: 0 auto;
`;

export const MyService = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  margin: 0 20px;

  border: 1px solid darkgray;
  border-radius: 8px;
`;

export const ProfileRightWrapper = styled.div`
  width: 75%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  gap: 30px;
`;

export const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ServiceTitle = styled.div`
  font-size: 15px;
`;

export const ServiceContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceContent = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: aliceblue;
`;

export const IntroMd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 200px;
  border: 3px solid #eef0f1;
  border-radius: 10px;
`;

export const IntroMdModify = styled.input`
  width: 90%;
  height: 200px;
  border: 3px solid #eef0f1;
  border-radius: 10px;
  text-align: center;
`;

export const GrassBox = styled.div`
  width: 14px;
  height: 14px;
  background: #aa77ff;
  border-radius: 3px;
  cursor: pointer;
`;

export const TableWrapper = styled.div`
  height: 170px;
  display: flex;
  justify-content: space-between;
`;

export const DateContent = styled.div``;

export const BoardsWrapper = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  overflow-y: scroll;
`;
