import * as S from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { UseGeTokenDocument, UseRemoveToken } from "../../Hooks/useToken";
import useSWR from "swr";
import { ProfileType } from "../../types";

export default function Header() {
  const router = useRouter();
  const { data: profileData } = useSWR<ProfileType>("/account/");
  const { Authorization } = UseGeTokenDocument();
  const isProfile = router.asPath.includes("/profile");
  const LastLinkText = Authorization
    ? isProfile
      ? "로그아웃"
      : "프로필"
    : "로그인";

  const Logout = () => {
    UseRemoveToken();
    router.push("/");
  };

  const handleHeaderClick = () => {
    switch (LastLinkText) {
      case "로그아웃":
        return Logout();
      case "로그인":
        return router.push(`/auth/signin`);
      case "프로필":
        return router.push(`/profile/${profileData?.accountIdx}`);
    }
  };

  return (
    <S.HeaderWapper>
      <S.HeaderTopWapper>
        <S.HeaderLeftWapper>
          <Link href="/post">
            <a>
              <S.HeaderTitle>Devlog</S.HeaderTitle>
            </a>
          </Link>
        </S.HeaderLeftWapper>
        <S.HeaderRightWapper>
          <Link href="/post">
            <a>홈</a>
          </Link>
          <Link href="/post/add">
            <a>생성</a>
          </Link>
          <S.LastLink onClick={handleHeaderClick}>{LastLinkText}</S.LastLink>
        </S.HeaderRightWapper>
      </S.HeaderTopWapper>
    </S.HeaderWapper>
  );
}
