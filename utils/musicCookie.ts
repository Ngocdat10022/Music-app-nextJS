import Cookies from "js-cookie";
const encodeIdKey: string = "encodeId";
const objCookie = {
  expires: 30,
};
export const setCookiesSongId = (id: string) => {
  if (id) {
    Cookies.set(encodeIdKey, id, {
      ...objCookie,
    });
  } else {
    Cookies.remove(encodeIdKey, {
      ...objCookie,
    });
  }
};
export const getCookiesSongId = () => {
  const songId = Cookies.get(encodeIdKey);
  return songId;
};
