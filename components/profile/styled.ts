import styled from "@emotion/styled";

export const Profile = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 10%;
`;

export const ProfileImpormation = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 auto;
  padding: 40px 0;
  border: 1px solid black;
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
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const UserEmail = styled.div`
  color: gray;
  font-size: 20px;
`;

export const UserName = styled.span`
  font-size: 20px;
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
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;

  border: 1px solid;
`;

export const ProfileRightWrapper = styled.div`
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  gap: 30px;
  border: 1px solid black;
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
`;

export const GrassBox = styled.div`
  width: 14px;
  height: 14px;
  background: #aa77ff;
  border-radius: 3px;
`;

export const TableWrapper = styled.div`
  width: 45vw;
  height: 170px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
`;

export const DateContent = styled.div``;
