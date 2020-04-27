const router = require ('express').Router();
const { savedBooks} = require ('../../controllers/controller');

router.route( '/').get(savedBooks)


// router.post('/books/new', bookController.addBook);

// router.get('/books/:id',bookController.findById); 

// router.get('/books', bookController.findAll);

// router.put('/books/update', bookController.markRead); 

// router.delete('/books/delete/:id', bookController.deleteById); 

// router.put('/search', req,res =>
// 

module.exports=router;