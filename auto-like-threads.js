javascript:(function(){
  /* Infinite Auto-Like: scrolls and likes forever, logs to console only */
  var STEP=700,DELAY=900,totalLiked=0,rounds=0;
  function clickLikes(){
    var liked=0;
    try{
      document.querySelectorAll('[aria-label="Like"]').forEach(function(v){
        var clickable=v.parentNode||v;
        if(clickable&&!clickable.matches('[aria-pressed="true"],[aria-checked="true"],[aria-disabled="true"]')){
          try{clickable.click();liked++;totalLiked++;}catch(e){console.log('Click error:',e);}
        }
      });
    }catch(e){console.log('Like button query error:',e);}
    console.log('Cycle '+(rounds+1)+': Liked '+liked+', Total: '+totalLiked);
  }
  function scrollCycle(){
    var doc=document.documentElement;
    var currScroll=window.scrollY||doc.scrollTop;
    var height=doc.scrollHeight;
    var client=doc.clientHeight;
    clickLikes();
    window.scrollBy(0,STEP);
    rounds++;
    setTimeout(scrollCycle,DELAY);
  }
  try{scrollCycle();}catch(e){console.log('Fatal error, restarting loop...',e);setTimeout(scrollCycle,DELAY);}
})();
