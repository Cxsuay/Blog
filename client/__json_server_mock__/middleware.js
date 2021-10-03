module.exports = (req, res, next) => {
  // 匹配拦截 登陆请求
  // if (req.method === "POST" && req.path === "/login") {
  //   if (req.body.username === "jack" && req.body.password === "123") {
  //     return res.status(200).json({
  //       user: {
  //         token: "123", // jwt
  //       },
  //     });
  //   } else {
  //     return res.status(200).json({ message: "用户名或者密码错误。" });
  //   }
  // }
  next();
};
