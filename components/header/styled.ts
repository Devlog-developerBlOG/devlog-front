import styled from "@emotion/styled";

export const HeaderWapper = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  padding: 0 3%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const HeaderTitle = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
`;

export const HeaderTopWapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const ProfileImg = styled.span`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
  object-fit: cover;
`;

export const EmptyWapper = styled.div`
  width: 120px;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: black;
  color: white;
  width: 70px;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;

export const HeaderBottomWapper = styled.div`
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  gap: 5vw;

  a{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const Header = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const HeaderMenu = styled.span`
  width: 150px;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
