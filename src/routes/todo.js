const Router = require("express").Router;
const router = new Router();
const TodoController = require("../controllers/todo-controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/", authMiddleware, TodoController.getTodos);
router.post("/", body("title").isLength({ min: 3, max: 512 }), authMiddleware, TodoController.create);
router.patch("/:id", authMiddleware, TodoController.update);
router.delete("/:id", authMiddleware, TodoController.delete);

module.exports = router;