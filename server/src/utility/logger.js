import winston from 'winston'
import 'winston-daily-rotate-file'
const {colorize, combine, timestamp, printf, json, errors} = winston.format;
const createFileTransport = (level, filename)=>{
  return   new winston.transports.DailyRotateFile({
    level:level,
    filename:`${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    maxFiles:'14d',
    maxSize:'20m',
    format: combine(timestamp(),errors({stack:true}), json())
})}

const transports = [];

  
if(process.env.NODE_ENV !== 'production'){
  transports.push(
    new winston.transports.Console({
      level:'debug',
      format:combine(colorize({all:true}),errors({stack:true}),timestamp({format: 'YYYY-MM-DD HH-mm-ss.SSS'}), printf((info)=>`[${info.timestamp}] ${info.level}: ${info.message}`))
    })
  )

}else{

transports.push(
  createFileTransport('info', 'combined'),
  createFileTransport('error', 'error'),
  createFileTransport('http', 'http')
)
}
const logger = winston.createLogger({
  level:'silly',
  defaultMeta:{
    service:"CodeCraft",
  },
  transports,
  exceptionHandlers:process.env.NODE_ENV === 'production' ? [createFileTransport('error', 'exception')]:[],
  rejectionHandlers:process.env.NODE_ENV === 'production'?[createFileTransport('error', 'reject')]:[]


})
export default logger