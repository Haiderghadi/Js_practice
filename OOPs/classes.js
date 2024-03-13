const user = {
  username: "haider",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("got details");
  },
};

console.log(user.loginCount);
console.log(user.getUserDetails());
