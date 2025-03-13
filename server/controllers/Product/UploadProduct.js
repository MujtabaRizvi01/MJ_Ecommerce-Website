const UploadProductPermission = require("../../helpers/permissions");
const productModel = require("../../models/productModel");

async function UploadProductController(req, res) {
  try {
    const sessionUserId = req.userId;

    // To prevent unauthorized product uploads, even if a general user gains access to the admin panel, upload functionality remains restricted.
    if (!UploadProductPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }

    const uploadProduct = new productModel(req.body);
    const saveProduct = await uploadProduct.save();

    res.status(200).json({
      data : saveProduct,
      error: false,
      success: true,
      message: "Product Uploaded",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UploadProductController;
