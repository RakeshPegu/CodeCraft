import morgan from "morgan";
import logger from "../utility/logger.js";
export const morganMiddleware = morgan(
    function(token, req, res){
        return JSON.stringify({
          ip:req.ip,
          method : token.method(req, res),
          url: token.url(req, res),
          status: Number.parseFloat(token.status(req, res)),
          content_length: token.res(req, res, 'content-length'),
          response_time: Number.parseFloat(token['response-time'](req, res)),
          user_agent:req.headers['user-agent']

        })
    },
    {
        stream: {
            write: (msg)=>{
                const data = JSON.parse(msg)
                logger.http('incoming_request',data)
                
            }
        }
    }
)