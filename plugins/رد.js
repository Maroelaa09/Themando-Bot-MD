let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,`*وخد احا كمان مني عشان مخنوق 👽*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🐧', key: m.key } })
  }

   if (/^عبيط|يا عبيط$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*تــنــمــر لــفــل ماكــس 😂*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
   if (/^منور|منوره$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*ايــه الــنــور ده كــلــه 😺*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '😺', key: m.key } })
   }
    if (/^😂$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*تــدوم يعمري 💘*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
}
    if (/^كسمك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*لو بتشتم البوت ف ينعل كسم ال خلفتك*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
}

 if (/^يابوت|يا بوت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*مخلاص يخويا بقا هو انا لعبة*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
await conn.sendMessage(m.chat, { react: { text: '🗿', key: m.key } })
 } 

   if (/^معطوب$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*تــتــكلم عــن نــفــســك صـح؟ 😂*',m) //wm, null, [['Menu', '#menu']], m) botones :v
await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
   }

   if (/^بوت خول|بوت زفت|خرا عليك$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'  *اخرص يبن المنيوكه*',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^بحبك|احبك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*لو ولد خف شرمطه واسترجل لو بنت ف انا بحبك اوي*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

   if (/^بوت زق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'*انــقــلــع بــس 😂💔*', m) //wm, null, [['Menu', '#menu']], m) botones :V

   }
 if (/^همممم/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اعــوز بـي الله مــنــك 😂💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 
  
 if (/^كسم البوت|كسم المطور$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بس يبن الشرموطه اخرص*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 
  
 if (/^في ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وربــنــا مــا اعــرف 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 
  
 if (/^تست$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*شغال يعمري*`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  
 } 
  
 if (/^صباح الخير$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*صــبــاح الــنــور  😘❤️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*مــنــور وربــنــا  😂❤️*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
 } 
  
 if (/^اخرس|اسكت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*اخــرس انــت 🗿💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـجاهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*مـلــلــل جــدد 😃💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 
 } 
  
 if (/^السلام عليكم |السلام عليكم ورحمة الله|سلام عليكم|السلام عليكم ورحمة الله وبركاته $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*وعليكم السلام ورحمة الله وبركاته ♥*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 
 } 
     
 if (/^🤖$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*هل انت بوت ياصحبي؟ 🗿*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     
 if (/^🐤$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐤🐤🐤🐤🐤`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^اه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*الــشــارع الــي وراه 😂💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^نعم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*حد ناداك؟ 🐦*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 

  
 if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, `*الحمد لله و انت 🐧؟*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
} 

 if (/^تتجوزني|تتجوزني؟$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `*بــس يــعــم بــتــكــســف 😭💔*`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
 return !0 } 
 export default handler
