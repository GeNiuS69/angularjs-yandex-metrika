function MetrikaProvider(){var e,t={clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!1,trackHash:!0,ut:"noindex"};return{configureCounter:function(e){t=angular.extend(e,newConfig)},$get:function(){return{counterConfig:t,oauthToken:e}}}}function MetrikaPrototype(){var e=this;e.fireEvent=function(e){console.warn("["+e+"] You should provide counter id to use Yandex metrika events")}}function Metrika(){function e(){var e="yandex_metrika_callbacks";window[e]=window[e]||[],window[e].push(function(){try{window[n.counterName]=new Ya.Metrika(n.counterConfig)}catch(e){}});var t=document.getElementsByTagName("script")[0],r=document.createElement("script"),o=function(){t.parentNode.insertBefore(r,t)};return r.type="text/javascript",r.async=!0,r.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==window.opera?document.addEventListener("DOMContentLoaded",o,!1):o(),e}function t(e){window[n.counterName].reachGoal(e)}var n=this;return n.counterConfig.id?(n.counterName="yaCounter"+n.counterConfig.id,n.fireEvent=t,void e()):void console.warn("You should provide counter id to use Yandex metrika counter")}Metrika.prototype=MetrikaPrototype;var module=angular.module("yandex-metrika",[]);module.provider("metrika",MetrikaProvider),module.service("metrika",Metrika);