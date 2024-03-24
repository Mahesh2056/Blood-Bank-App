const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { 
    createInventoryController, 
    getInventoryController,
    getDonarsController,
    getHospitalController,
    getOrgnaisationController,
    getOrgnaisationForHospitalController, 
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

//GET DONARS RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET ORGANISATION RECORDS
router.get("/get-organisation", authMiddleware, getOrgnaisationController);

//GET ORGANISATION RECORDS
router.get(
    "/get-organisation-for-hospital", 
    authMiddleware, 
    getOrgnaisationForHospitalController
);

module.exports = router;