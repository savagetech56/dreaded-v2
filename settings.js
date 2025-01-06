/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUo2QnhGVnJabFduOVdYcEs2WVhTTTBhSEpQbnhwNFlSQjZMeTRGcEJWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2lGS1RFWS9WeEdPN0MyeEZnaytQb0paam1ZZFRuTEdyVVA1THJ3STdBND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTk5LaHFFRjJRSGV4ZDZIcW1zWTkrS3ZpNWtPaU9KY2NteXZyOEQ1ZjFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjNEtKQnpxVzI2aHF0UnV5RkhBak5UWEoreC9sTnc3QzJ3M3VoWmxhVTNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMSVppQ0MzOEc2M1hMRjJmbDNRVEhjWnhiSUpjQXdhSElEMGJTMHhYVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9UY2tUOTV3ZVVsUzZRS09zVFJFdkpBZGpYTmZCN3pzQWE2WTVLdTU0V0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZYRWxsUnhUeXBFblJrL2lBLzBlMnF1a3N6NmM1MWpwVnFUcUR0M0hGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidS8vOEpNcGJnUDgydlpmd01kelNST1Y2eDFDc0VvMGVXaVB5a3pRamdFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRzdlI1cDV1b200ZzhsanBmWE1NalQzcXBYZU5kKzNkR3pkMXUwZ1BjTUR4enY0djhaUzk3MWVxUlR5MzVjMGRXRjI0dlMxUWJsTFVuVXY3QmNiaGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6ImVXc01kTnlvTHd2UmIwUFJTS3dxNi9ha0ZxQTkxeEFtVDV4V0FGenVIQVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE2NjM3ODAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM0RTBCNzA2OEEzQUU2MzMwRDVGMzJCM0JFN0Q5RTVEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzYxNDU3NzR9XSwibmV4dFByZUtleUlkIjozMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpWTjc2YzBKU2pxdGdEQUF3ZXEtMlEiLCJwaG9uZUlkIjoiNmYzMTc3NDgtYzMzNS00MTBlLWFmYzktMzFlYjc4MDExZTU5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQyQlJiaHJycjBsaXN0NWJTekxZTkdSS3F4ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwOGE1WTY4ZXJhd0tTdlVkT1EvL3dXU2tWa1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVRSVlhBVEoiLCJtZSI6eyJpZCI6IjI1NDcxNjYzNzgwMzo2MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ0b3hpYyBzYXZhZ2UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p6b2cvMEhFTmoyN2JzR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijhzd1lqR3FKWWFBR2loUnZ5ZU1GSGRLdCszRXN4aGQ5aU9tYXcvbXV5eWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhCZnNTa1h6c1MyQ3BYS0RrSFlORUl4bGJ0RDZTUVVEcVFMb2tMT01aMUhwUUNGV2dzY1V2ZW9VQUVRZmhYZnloTGVZMUlWYzFUZURjYWllSmRnb0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0QmZMM2RtWXF6MGZKQjU1dHdFMUNtektJSGlLenVqdkUrY3RLMzdKNVEzcGtnNmlLaE82bktUUkhzMFEycHBoTjhSNGtsRUFzWHVtdnhOd2w0Rnlodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxNjYzNzgwMzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTE1HSXhxaVdHZ0Jvb1ViOG5qQlIzU3JmdHhMTVlYZllqcG1zUDVyc3NvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MTQ1NzY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1HZiJ9';

const prefix = process.env.PREFIX || ',';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'toxic 🤖';
const dev = process.env.DEV || '254716637803';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'toxic';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'false';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'typing';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
