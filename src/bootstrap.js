import { globalErrorHandling } from "./middlewares/GlobalErrorHandling.js";
import { AppError } from "./utils/AppError.js";
import userRouter from "./modules/User/user.routes.js";

export function bootstrap(app) {
  app.use(userRouter);

  app.all("*", (req, res, next) => {
    next(new AppError("Endpoint was not found", 404));
  });

  app.use(globalErrorHandling);
}
