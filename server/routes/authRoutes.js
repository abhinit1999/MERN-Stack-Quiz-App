const express = require("express");
const authController= require ("../controllers/authController.js");
const checkIsUserAuthenticated =require ("../middlewares/authMiddleware.js");



const router = express.Router();

router.post("/admin/register", authController.userRegistration);
router.post("/admin/login", authController.userLogin);

// Forget Password

router.post("/forget-password", authController.forgetPassword);
router.post("/forget-password/:id/:token", authController.forgetPasswordEmail);

// Email Verification

// router.get("/verify/:token", authController.saveVerifiedEmail);

// Protected Routes

router.post(
  "/change-password",
  checkIsUserAuthenticated,
  authController.changePassword
);

// For Admin to Add Questions//

// router.post("/add/question",authController.addQuestion)

module.exports=router;
