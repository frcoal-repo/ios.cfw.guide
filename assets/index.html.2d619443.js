import{_ as d}from"./sideloadly_win.6263388d.js";import{_ as c,r as a,o as h,c as p,a as e,b as o,d as t,w as n,e as r}from"./app.67485abd.js";const u={},m=e("p",null,"HomeDepot is capable of jailbreaking every 32-bit iOS device on firmware version 9.1 up to 9.3.4, as well as A5(X) devices on 8.0 to 8.4.1.",-1),f=e("p",null,"Note that the HomeDepot jailbreak is not \u201Cpersistent\u201D (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.",-1),g=e("p",null,"Due to how custom applications are installed to the device, in most cases you will need to reinstall the HomeDepot jailbreak application to your device every 7 days from your computer.",-1),y=e("p",null,"We will use the Sideloadly tool to install the HomeDepot jailbreak application to your iOS device for use in the next step.",-1),w=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1),_=e("div",{class:"custom-container tip",id:"ifJailbreaksAppSigned"},[e("p",null,[o(" HomeDepot is currently signed at "),e("a",{href:"https://jailbreaks.app/legacy.html",target:"_blank"},"jailbreaks.app"),o(" for easy installation without a computer. ")])],-1),b={href:"http://wall.supplies/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://wall.supplies/OLD%20iPhone%20HACKED.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/LukeZGD/ohd/releases",target:"_blank",rel:"noopener noreferrer"},D={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},S=r('<p><img src="'+d+'" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="patching-home-depot" tabindex="-1"><a class="header-anchor" href="#patching-home-depot" aria-hidden="true">#</a> Patching Home Depot</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This is only needed on iOS 8.0 to 8.4, it is not needed for iOS 8.4.1 or for iOS 9.1 to 9.3.4.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><h3 id="macos-and-linux" tabindex="-1"><a class="header-anchor" href="#macos-and-linux" aria-hidden="true">#</a> macOS and Linux</h3><ol><li>Open your Terminal application</li><li>Change directory to the folder where you saved the script and h3lix.ipa files <ul><li>If you saved them to Downloads, this would be <code>cd ~/Downloads</code></li></ul></li><li>Type <code>./patch.sh</code> in the terminal</li><li>Drag and drop the MixtapePlayer <code>.ipa</code> file into the terminal</li><li>Press Enter</li></ol></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><ol><li>Drag the MixtapePlayer <code>.ipa</code> onto the patch.cmd file</li></ol></div><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the HomeDepot <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The HomeDepot application can now be opened from home screen.</p><h2 id="running-homedepot" tabindex="-1"><a class="header-anchor" href="#running-homedepot" aria-hidden="true">#</a> Running HomeDepot</h2><ol><li>Open the HomeDepot application from your home screen</li><li>Tap <code>Prepare for Jailbreak</code> -&gt; <code>Accept</code> -&gt; <code>Dismiss</code> -&gt; <code>Proceed with Jailbreak</code> -&gt; <code>Begin Installation</code> -&gt; <code>Use Provided Offsets</code></li></ol><p>When jailbreaking for a second time, an option called &quot;Kickstart Jailbreak&quot; will replace &quot;Prepare for Jailbreak&quot;. Tap that instead.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If your device crashes or restarts unexpectedly and the jailbreak isn&#39;t installed, simply try running the exploit again until it does work.</p></div><h2 id="untethering" tabindex="-1"><a class="header-anchor" href="#untethering" aria-hidden="true">#</a> Untethering</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>These steps are only applicable for devices on 9.1 to 9.3.4 - A5(X) devices on 8.0 to 8.4.1 should skip this step.</p></div><p>This is an optional step which allows the jailbreak to run automatically when your device is booted. This means that you won&#39;t have to re-jailbreak through the HomeDepot app after your device is turned off.</p>',18),T=r("<ol><li>Open the Cydia application</li><li>Check the &quot;Sources&quot; tab and ensure &quot;tihmstar&#39;s beta repo&quot; is added <ul><li>If you can&#39;t find it, tap <code>Edit</code> -&gt; <code>+</code> and enter <code>repo.tihmstar.net</code></li></ul></li><li>Open the &quot;Search&quot; tab and enter &quot;UntetherHomeDepot&quot;</li><li>Tap on the tweak and then tap &quot;Install&quot; in the top right-hand corner of the screen</li><li>Confirm the installation</li></ol><p>Once finished, you will be prompted to reboot your device.</p>",2),I={class:"custom-container tip"},O=e("p",{class:"custom-container-title"},"TIP",-1);function q(H,P){const i=a("ExternalLinkIcon"),s=a("RouterLink"),l=a("router-link");return h(),p("div",null,[m,f,g,y,w,_,e("ul",null,[e("li",null,[o("The latest version of HomeDepot for your iOS version: "),e("ul",null,[e("li",null,[o("Home Depot for "),e("a",b,[o("iOS 9.1-9.3.4"),t(i)])]),e("li",null,[o("Home Depot for "),e("a",v,[o("iOS 8.0-8.4.1"),t(i)]),e("ul",null,[e("li",null,[o("If you are on iOS 8.0 to 8.4, you also need to get the latest version of the "),e("a",k,[o("ohd patcher"),t(i)])])])])])]),e("li",null,[o("The latest version of "),e("a",D,[o("Sideloadly"),t(i)])]),e("li",null,[o("The latest version of "),e("a",x,[o("iTunes"),t(i)]),o(" if on Windows")])]),S,e("p",null,[o("You will have to use Cydia to install the untether. If you are unfamiliar with how Cydia works, please read "),t(s,{to:"/installing-homedepot/using-cydia.html"},{default:n(()=>[o("Using Cydia")]),_:1}),o(" first, before returning to this page.")]),T,e("p",null,[o("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),t(l,{to:"/faq/#what-are-tweaks"},{default:n(()=>[o("tweaks")]),_:1}),o(", themes and more.")]),e("div",I,[O,e("p",null,[o("If you wish to use a more modern package manager, continue to "),t(l,{to:"/installing-zebra"},{default:n(()=>[o("Installing Zebra")]),_:1})])])])}var j=c(u,[["render",q],["__file","index.html.vue"]]);export{j as default};
