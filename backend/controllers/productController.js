const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null, config.PROJECT_DIR+'/public/media') // here we specify the destination . in this case I specified the current directory
  },
  filename: function(req, file, cb){
    console.log(file);
    cb(null, file.originalname) // here we specify the file saving name . in this case I specified the original file name
  }
})

const upload = multer({storage: storage})


router.get('/', productModel.getProducts);

router.get('/:id', productModel.getOneProduct);

router.post('/new', auth.verifyToken, upload.single('image'), productModel.createProduct);

router.patch('/:id', auth.verifyToken, upload.single('image'), productModel.updateProduct);

router.delete('/:id', auth.verifyToken, productModel.deleteProduct);


module.exports = router;