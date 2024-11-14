const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="nikalthescammer@gmail.com"
global.location="Baihata,Kokeria."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Assam";
global.github=process.env.GITHUB|| "https://github.com/Nikhildad907";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BlTdrToe2IYKxUWvK1FgrY";
global.website=process.env.GURL || "https://chat.whatsapp.com/BlTdrToe2IYKxUWvK1FgrY" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://pic.surf/fl7" || "https://pic.surf/cmy" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© LeGod x NicK 🚶" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916001031685";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_29_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtckRzenNoZjlJZVVTTWR1YVllcTc2ZTNFM0RnRnFNcmVETEF2OVJXbXNvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNjAwMTAzMTY4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzkzNTg4QjREMkRENTI5RjNERkM4RDkyNzU0Q0JEMzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjA4OTYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE2MDAxMDMxNjg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RTkyMEMyMDY3MDdBNTcxN0M2QjQ2RkI5QzdGNTQ0RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE2MDg5NjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTYwMDEwMzE2ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNDQTE4NUMyMEM2QThDMUU4MEZENTExNDhFMjc4MEUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTYwODk2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNjAwMTAzMTY4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0UxNkYxMjRBNDc3RjAwOUM5RDJFQjNBNUY5Nzc1NEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNjA4OTY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkg0cDNxLWZnUUx1bzIxeVdYZXBUUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTllMTVjNWUtZTljNS00ZGI1LWI5YzYtNmFhZTQwZGM2YWZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDE1OCxcbiAgICAgIDE5MyxcbiAgICAgIDEzNCxcbiAgICAgIDI2LFxuICAgICAgMjU0LFxuICAgICAgNjgsXG4gICAgICAxMTksXG4gICAgICA3NyxcbiAgICAgIDc4LFxuICAgICAgMjE3LFxuICAgICAgMTM5LFxuICAgICAgMTEyLFxuICAgICAgMTgyLFxuICAgICAgMTE2LFxuICAgICAgMTY0LFxuICAgICAgMTkzLFxuICAgICAgMTUwLFxuICAgICAgMTQ2LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMjI2LFxuICAgICAgMjA3LFxuICAgICAgMTE3LFxuICAgICAgMTk1LFxuICAgICAgMjQ1LFxuICAgICAgMjMsXG4gICAgICAxLFxuICAgICAgMTgyLFxuICAgICAgMjIzLFxuICAgICAgMTg1LFxuICAgICAgMjA1LFxuICAgICAgMTUsXG4gICAgICAxOTEsXG4gICAgICAxMTAsXG4gICAgICA5NCxcbiAgICAgIDI4LFxuICAgICAgMTA4LFxuICAgICAgODEsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVpKTUZCR01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjAwMTAzMTY4NTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuqqq+qkquqkqFwiLFxuICAgIFwibGlkXCI6IFwiNjcxMTc0ODc1NDY1ODk6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnoxMjY0SEVQeUMyYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2RXovVEZIMSs5dGNHRXczbk1zb3NxMjgvajFZVkZSUFd5cTZqRXpxdDBjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlV3WWRxeVlqS0tqUlRGNDN5NFNDelhGN2R3cG1aN0ZaRlNpMmhuZUI4emY4Q3UzcjZGdlBsU2hraUU3SThXb1lUOFZzaEVLQXNybWVYNVNNYlU5N0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJoM2lrVTZOQVVXaHlnYmMyVUJmcHJGSzZ6WnFFaUpqQWJibU9CaGtyeWpVajJnejE0bXFKNnBSVlM2WC8wcUZuMWR4S0pTTk5RSnZZTXhpbGZkM0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjAwMTAzMTY4NTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2MDg5NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHd1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd3US5qc29uIjogIntcImtleURhdGFcIjpcIlZGL1h3R2diY1R2M0lScFZKQkpLK1QyS21oaUxLbjMwWDA3OXFpL2syU3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk3NzAyMzEzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNjA4OTYzNDI0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "LeGod x NicK NAME TO SUNA HI HOGA 🐐" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "NicK PacK",
  packname: process.env.PACK_NAME || "NicK",
  botname : process.env.BOT_NAME  || "LeGod x NicK",
  ownername:process.env.OWNER_NAME|| "NikhiL",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "NIKHIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
