import winston from 'winston'
import 'winston-daily-rotate-file'
const {colorize, combine, timestamp, printf, json} = winston.format
const transports = [];
if(process.env.NODE_ENV !=='production'){
  transports.push(
    new winston.transports.Console({
      level:'debug',
      format:combine(colorize({all:true}),timestamp({format:'YYYY-MM-DD hh:mm:ss.SSS A'}), printf((info)=>`[${info.timestamp}] ${info.level}: ${info.message}`) ),
    })
  )

}
transports.push(
  new winston.transports.DailyRotateFile({
    level:"info",
    filename:"combined-%DATE%.log",
    datePattern: 'YYYY-MM-DD',
    maxFiles:'14d',
    maxSize:'20m',
    format: combine(timestamp({format:"YYYY-MM-DD hh:mm:ss.SSS A"}),json())

    
  }),
  new winston.transports.DailyRotateFile({
  level: "error",
  filename: "error-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: "14d",
  maxSize: "20m",
  format: combine(timestamp({ format: "YYYY-MM-DD hh:mm:ss.SSS A" }), json())
}),

  new winston.transports.DailyRotateFile({
    level:"http",
    filename:'http-%DATE%.log',
    datePattern:'YYYY-MM-DD',
    maxFiles:'14d',
    maxSize:'20m',
    format:combine(
      timestamp({format:'YYYY-MM-DD hh:mm:ss.SSS A'}),
      json()
    )
  })
)
const logger = winston.createLogger({
  level:'silly',
  defaultMeta:{
    service:"CodeCraft",
  },
  transports,
  exceptionHandlers:[
    new winston.transports.DailyRotateFile({
      filename:'exception-%DATE%.log',
      format:combine(timestamp({format:'YYYY-MM-DD'}),json())
    })
  ],
  rejectionHandlers:[
    new winston.transports.DailyRotateFile({
      filename:'rejection-%DATE%.log',
      format:combine(timestamp({format:'YYYY-MM-DD'}), json())
    })
  ]
})
export default logger