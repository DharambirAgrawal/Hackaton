import asyncHandler from "express-async-handler";

export const registerUser = asyncHandler(async (req, res) => {
  console.log("User Registered");

  res.json({
    message: "User Registered Successfully!!",
  });
});

export const signupUser = asyncHandler(async (req, res) => {
  console.log("User Registered");
  res.json({
    message: "User Sign up Successfully!!",
  });
});

export const userData = asyncHandler(async (req, res) => {
  console.log("Returned User Data");
  res.json({
    data: [
      {
        name: "name1",
      },
    ],
  });
});
