const express = require("express");
const userauthController= require ("../controllers/userAuthController");
const checkIsUserAuthenticated =require ("../middlewares/userAuthMidleware");
const authController= require ("../controllers/authController");



const router = express.Router();

router.post("/users/register", userauthController.userRegistration);
router.post("/users/login", userauthController.userLogin);

// router.post("/admin/register", authController.userRegistration);
// router.post("/admin/login", authController.userLogin);
// Forget Password

router.post("/forget-password", authController.forgetPassword);
router.post("/forget-password/:id/:token", authController.forgetPasswordEmail);


router.post(
  "/change-password",
  checkIsUserAuthenticated,
  authController.changePassword
);



module.exports=router;
