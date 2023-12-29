import{_ as r}from"./Odysseyn1x.f106730e.js";import{_ as c,r as s,o as u,c as d,a as e,b as i,d as a,w as n,e as t}from"./app.67485abd.js";const p={},h=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"Se utilizzi un computer con una CPU AMD Ryzen, probabilmente riscontrerai problemi. Se si verificano problemi, \xE8 necessario utilizzare un Mac o un computer con una CPU Intel per seguire questa guida.")],-1),m=e("p",null,"Odysseyn1x \xE8 una distro Linux avviabile tramite live-booting che consente di eseguire rapidamente checkra1n su un dispositivo compatibile. checkra1n \xE8 un tool in grado di eseguire il Jailbreak di milioni di dispositivi iOS con un SoC A7-A11 su firmware 12.0-14.8.1.",-1),v=e("p",null,"After installing checkra1n, we'll be using a script to install Odysseyra1n. This replaces important parts of the jailbreak with modern and fast alternatives.",-1),y={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"TIP",-1),g=e("p",null,"Sui dispositivi A8X e A9X non \xE8 possibile utilizzare Odysseyn1x 2.14 (richiesto per 14.5+) senza l'uso di una versione di pongoOS personalizzata e checkra1n in modalit\xE0 CLI. \xC8 possibile utilizzare una versione personalizzata di Odysseyn1x per aggirare il problema.",-1),f=e("h2",{id:"requisiti",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),i(" Requisiti")],-1),b=e("li",null,[i("Unit\xE0 USB da 256MB o superiore "),e("ul",null,[e("li",null,"Se non hai un'unit\xE0 USB, ma hai un'altra forma di hardware rimovibile supportato (es. Un CD o DVD), \xE8 possibile utilizzarlo invece di un'unit\xE0 USB")])],-1),k={href:"https://github.com/asdfugil/checkn1x_a9x_kerninfo_pongoOS/releases/tag/14.5-a9x-4",target:"_blank",rel:"noopener noreferrer"},S=e("ul",null,[e("li",null,'Questa versione di odysseyn1x viene definita come una versione "solo per A9X", tuttavia i dispositivi A8X presentano problemi simili a quelli dei dispositivi A9X, quindi questa versione di odysseyn1x \xE8 ideale per entrambe le CPU'),e("li",null,'Per computer a 64 bit, scarica la versione "AMD64"'),e("li",null,'Per computer a 32 bit, scarica la versione "i686"')],-1),x={href:"https://github.com/ventoy/Ventoy/releases",target:"_blank",rel:"noopener noreferrer"},z=t('<p><img src="'+r+'" alt="Uno screenshot del menu di Odysseyn1x"></p><h2 id="installare-ventoy" tabindex="-1"><a class="header-anchor" href="#installare-ventoy" aria-hidden="true">#</a> Installare Ventoy</h2><ol><li>Scarica ed estrai il contenuto del file <code>Ventoy.zip</code></li><li>Inserisci l&#39;unit\xE0 USB se non l&#39;hai gi\xE0 fatto e apri il file <code>Ventoy2Disk.exe</code></li><li>Seleziona l&#39;unit\xE0 USB dalla quale vuoi avviare Odysseyn1x <ul><li>Questa unit\xE0 USB verr\xE0 completamente cancellata</li><li>Assicurati di eseguire il backup di tutti i dati importanti in anticipo</li></ul></li><li>Fai clic su <code>Install</code> e conferma di essere ok con il cancellare l&#39;unit\xE0 USB <ul><li>Non rimuovere l&#39;unit\xE0 USB fino a quando il processo non sar\xE0 completato</li></ul></li><li>Una volta installato, copia il file iso di Odysseyn1x che hai scaricato sul drive USB</li></ol><h2 id="avviare-odysseyn1x" tabindex="-1"><a class="header-anchor" href="#avviare-odysseyn1x" aria-hidden="true">#</a> Avviare Odysseyn1x</h2><ol><li>Riavvia il pc, vai nelle impostazioni del BIOS e disabilita il Secure Boot, quindi entra nel boot picker e seleziona l&#39;unit\xE0 USB da avviare <ul><li>Questo \xE8 diverso per ogni computer</li><li>Cerca il tuo PC o la marca della scheda madre per scoprire come entrare nelle impostazioni del BIOS se non sei sicuro</li></ul></li><li>Premi Invio una volta che visualizzi la schermata di Ventoy per avviare Odysseyn1x</li></ol><h2 id="eseguire-checkra1n" tabindex="-1"><a class="header-anchor" href="#eseguire-checkra1n" aria-hidden="true">#</a> Eseguire checkra1n</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se si utilizza un cavo USB-C a Lightning per eseguire questo processo, \xE8 possibile riscontrare problemi ad entrare in modalit\xE0 DFU</p><p>In caso di problemi, usa un cavo USB-A a Lightning e, se necessario, usa anche un adattatore USB-C a USB-A.</p></div>',7),q=e("li",null,[i("Una volta caricato odysseyn1x, seleziona "),e("code",null,"checkra1n (A9X)")],-1),U=e("code",null,"Start",-1),A=e("ul",null,[e("li",null,"Segui le istruzione finch\xE9 il tuo dispositivo non mostra uno schermo nero")],-1),O=e("li",null,"Una volta che il dispositivo si avvia, \xE8 possibile uscire da checkra1n, ma non spegnere il computer",-1),B=t('<h2 id="lo-script-di-odysseyra1n" tabindex="-1"><a class="header-anchor" href="#lo-script-di-odysseyra1n" aria-hidden="true">#</a> Lo script di Odysseyra1n</h2><p>I seguenti passaggi devono essere eseguiti solo una volta e sono opzionali ma altamente consigliati per un&#39;esperienza pi\xF9 fluida con un bootstrap moderno.</p><ol><li>Sblocca il tuo dispositivo</li><li>Assicurati che il tuo computer sia autorizzato dal tuo dispositivo</li><li>Seleziona <code>Odysseyra1n</code> su Odysseyn1x</li><li>Sileo dovrebbe installarsi sul dispositivo</li><li>Non chiudere Odysseyn1x siccome sar\xE0 necessario ri-eseguire il jailbreak fra pochi minuti</li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>After installing Odysseyra1n, <strong>do not</strong> install Cydia from the Loader app.</p></div>',4),I=t('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function w(C,N){const o=s("router-link"),l=s("ExternalLinkIcon");return u(),d("div",null,[h,e("p",null,[i("Odysseyra1n is a "),a(o,{to:"/types-of-jailbreak/#semi-tethered-jailbreaks"},{default:n(()=>[i("semi-tethered jailbreak")]),_:1}),i(", meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more.")]),m,v,e("div",y,[_,e("p",null,[i("Se utilizzi un dispositivo A8X o A9X con iOS 14.4.2 o precedente, \xE8 necessario seguire la guida di "),a(o,{to:"/it_IT/using-odysseyn1x"},{default:n(()=>[i("Odysseyn1x")]),_:1}),i(" e usare la versione 0.12.2 di checkra1n.")])]),g,f,e("ul",null,[b,e("li",null,[i("L\u2019ultima versione di "),e("a",k,[i("Odysseyn1x per A9X"),a(l)]),S]),e("li",null,[e("a",x,[i("Ventoy"),a(l)])])]),z,e("ol",null,[q,e("li",null,[i("Adesso ti verranno illustrate delle istruzioni per riavviare il tuo dispositivo in "),a(o,{to:"/it_IT/faq/#what-is-dfu-mode"},{default:n(()=>[i("modalit\xE0 DFU")]),_:1}),i(", clicca "),U,i(" per iniziare "),A]),O]),B,e("p",null,[i("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),a(o,{to:"/faq/#what-are-tweaks"},{default:n(()=>[i("tweaks")]),_:1}),i(", themes, packages and more.")]),I])}var P=c(p,[["render",w],["__file","index.html.vue"]]);export{P as default};
