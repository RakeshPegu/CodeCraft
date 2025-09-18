import { format } from 'morgan';
import winston, { info } from 'winston'
import 'winston-daily-rotate-file'
const {colorize, combine, timestamp, printf, json, errors} = winston.format
const transports = [];
if(process.env.NODE_ENV !=='production'){
  transports.push(
    new winston.transports.Console({
      level:'debug',
      format:combine(colorize({all:true}),timestamp({format:'YYYY-MM-DD hh:mm:ss.SSS A'}), printf((info)=>`[${info.timestamp}] ${info.level}: ${info.message}`) ),
    })
  )

}
const createFileTransport = (level, filename)=>{
  return   new winston.transports.DailyRotateFile({
    level:level,
    filename:`${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    maxFiles:'14d',
    maxSize:'20m',
    format: combine(timestamp({format: ()=> new Date.toISOString()}),errors({stack:true}), json())
})}

transports.push(
  createFileTransport('info', 'combined'),
  createFileTransport('error', 'error'),
  createFileTransport('http', 'http')
)

const logger = winston.createLogger({
  level:'silly',
  defaultMeta:{
    service:"CodeCraft",
  },
  transports,
  exceptionHandlers:[
    createFileTransport('error', 'exceptioin')
   
  ],
  rejectionHandlers:[
    createFileTransport('error', 'reject')  
  ]
})
export default logger