namespace web_app.Model
{
    public class ResponseHandler
    {
        public static ApiResponse GetExceptionResponse(Exception ex)
        {
            ApiResponse response = new ApiResponse();
            response.ResponseData = ex.Message;
            return response;
        }
        public static ApiResponse GetAppResponse(ResponseType type, object? contract)
        {
            ApiResponse response;

            response = new ApiResponse { ResponseData = contract };
            switch (type)
            {
                case ResponseType.Success:
                    response.Message = "Success";
                    break;
                case ResponseType.NotFound:
                    response.Message = "No record available";
                    break;
            }
            return response;
        }
    }
}
