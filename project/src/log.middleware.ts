import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";

@Middleware()
export class LogMiddleware {
    Nest {
        resolve(): ExpressMiddleware {
            return (request, response, next) => {
                baseUrl: request.baseUrl,
                    hostname: request.hostname,
                    subdomains: request.subdomains,
                    ip: request.ip,
                    method: request.method,
                    originalUrl: request.originalUrl,
                    path: request.path,
                    protocol: request.protocol,
                    headers,
            };
            console.log(respuesta);
            next();
        }
}
}