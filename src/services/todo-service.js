const TodoModel = require("../db/models/todo-model");
const ApiError = require("../exceptions/api-error");

class TodoService {
    async getTodo(user_id) {
        return await TodoModel.find({ user_id }).sort([
            ["done", 1],
            ["createdAt", -1],
        ]);
    }

    async create(title, done, user_id) {
        const task = await TodoModel.findOne({ user_id, title })
        if (task) throw ApiError.DuplicateTask();

        return await TodoModel.create({ user_id, title, done });
    }

    async update(req) {
        return TodoModel.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: "after",
        })
            .then((data) => {
                if (!data) {
                    return {
                        message: `Cannot Update task with ${id}. Maybe task not found!`,
                    };
                } else {
                    return data;
                }
            })
            .catch((err) => {
                return { message: "Error Update user information" };
            });
    }

    async delete(id) {
        const task = await TodoModel.findOne({ _id: id });

        if (task) {
            return TodoModel.deleteOne({ _id: id });
        }

        throw ApiError.TaskNotFound();
    }
}

module.exports = new TodoService();