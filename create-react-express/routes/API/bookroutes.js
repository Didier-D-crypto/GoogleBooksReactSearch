const router = require ('express').Router();
const { savedBooks} = require ('../../controllers/controller');

router.route( '/').get(savedBooks)




module.exports=router;