import service from ".";

export function apiLogin(data) {
  return service({
    method: "post",
    url: "/login",
    data: data,
  });
}

//用户注册
export function apiRegister(data) {
  return service({
    method: "post",
    url: "/register",
    data: data,
  });
}
