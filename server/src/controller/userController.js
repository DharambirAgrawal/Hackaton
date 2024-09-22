import asyncHandler from 'express-async-handler';
export const registerUser = asyncHandler(async (req, res) => {

    res.json({
        message: "User Registered",
    });
});