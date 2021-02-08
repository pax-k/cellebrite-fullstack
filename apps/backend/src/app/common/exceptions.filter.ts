import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();

    response.status(statusCode).json({
      statusCode,
      error: exception.response.error,
      message: exception.response.message,
      type: 'HttpException',
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

export class EntityExceptionFilter
  implements ExceptionFilter<NotFoundException> {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    response.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      message: exception.message,
      type: 'NotFoundException',
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
