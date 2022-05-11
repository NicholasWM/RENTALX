import "reflect-metadata";
import express, { NextFunction, Response, Request } from 'express'
import "express-async-errors"
import { router } from "./routes";
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../../../../swagger.json'
import '../typeorm'

import "../../container"
import { AppError } from "../../errors/AppError";

const app = express();

app.use(express.json())
app.use(router)
app.use((err:Error, request: Request, response:Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.status).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))


try {
    app.listen(3333, ()=> console.log("Server is running"))
    
} catch (error) {
    console.log(error);
    
}