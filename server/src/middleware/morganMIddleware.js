import morgan from "morgan";
import logger from "../utility/logger.js";
export const morganMiddleware = morgan(
    function(tokens, req, res){
        return JSON.stringify({
          ip:req.headers['x-forwarded-for'] || req.ip,
          method : tokens.method(req, res),
          url: tokens.url(req, res),
          status: Number.parseFloat(tokens.status(req, res)),
          content_length: tokens.res(req, res, 'content-length'),
          response_time: Number.parseFloat(tokens['response-time'](req, res)),
          user_agent:req.headers['user-agent']

        })
    },
    {
        stream: {
            write: (data)=>{                
                logger.http('incoming_request',data)
                
            }
        }
    }
)