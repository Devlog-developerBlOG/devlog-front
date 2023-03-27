import axios, { AxiosRequestConfig } from "axios";
import { UseGeTokenDocument, UseSetToken } from "../../Hooks/useToken";
import { BASEURL } from "./BaseUrl";

export const requestCheck = async (config: AxiosRequestConfig) => {
  if (typeof window !== "object") return config;
  const { Authorization, RefreshToken } = UseGeTokenDocument();

  if (config.headers && Authorization) {
    config.headers["Authorization"] = Authorization;
  } else if (
    !Authorization &&
    config.url !== "auth/signup" &&
    config.url !== "auth/signin" &&
    config.url !== "post"
  ) {
    try {
      const { data } = await axios.patch(
        `${BASEURL}/auth/reissue`,
        {},
        { headers: { RefreshToken } }
      );
      if (config.headers)
        config.headers["Authorization"] = `Bearer ${data.accessToken}`;
      UseSetToken(data.accessToken, data.refreshToken, null);
    } catch (e) {
      console.log(e);
    }
  }

  return config;
};
