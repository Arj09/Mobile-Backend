const express  = require("express")
const { getAllData, createData, deleteData, updateData, getData } = require("../controller/dataController")
const router = express.Router()



router.route("/").get(getAllData).post(createData)
router.route("/:id").delete(deleteData).put(updateData).get(getData)

module.exports = router