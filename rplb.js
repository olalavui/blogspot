function recentpostslabel(e){document.write("<ul>");for(var t=0;t<e.feed.entry.length;t++){for(var a=0;a<e.feed.entry[t].link.length;a++)if("alternate"==e.feed.entry[t].link[a].rel){var r=e.feed.entry[t].link[a].href;break}for(var s=0;s<e.feed.entry[t].category.length;s++)var n=e.feed.entry[t].category[s].term,l="/search/label/"+n;var c,i=e.feed.entry[t].published.$t,o=i.substring(8,10)+" thag "+i.substring(5,7)+", "+i.substring(0,4),p=e.feed.entry[t].title.$t,f=e.feed.entry[t].media$thumbnail.url;try{c=f.replace("s72-c","s1600")}catch(e){c="https://4.bp.blogspot.com/-00O66C-eBQs/W0IcokXSnOI/AAAAAAAAL_k/g4KtDm7SkQsoe7_G0vZ_C_nU0Gf_-kyVQCLcBGAs/s1600/safe_image.png"}var d=f.replace("s72-c","w200-h112-p-k-no-nu"),u=f.replace("s72-c","w400-h225-p-k-no-nu"),h=f.replace("s72-c","w800-h450-p-k-no-nu"),g=f.replace("s72-c","w1600-h900-p-k-no-nu"),m=e.feed.entry[t].summary.$t.substring(0,150),y='<li><div class="imageContainer"><a href='+r+'  title="'+p+'"><img class="label_thumb" alt="'+p+'" src='+c+' srcset="'+d+" 200w, "+u+" 400w, "+h+" 800w, "+g+' 1600w"></a></div><a class="label_title" href='+r+' title="'+p+'">'+p+'</a><div class="toe"><span class="post-label"><a href="'+l+'" title="'+n+'">'+n+'</a></span><span class="post-date">'+o+'</span></div><p class="post-summary">'+m+"...</p></li>";document.write(y)}document.write("</ul>")}
