/* img-gallery v1.0.0 ©2019 Joel Ellis */!function(e){let n=e.getElementById("file-input"),t=e.getElementById("grid"),l=e.getElementById("colls");function a(){t.innerHTML="",n.files&&.new Array(n.files).sort(function(a, b){return (a.name<b.name)?-1:(a.name>b.name)?1:0}).forEach(function(e){var n=new FileReader;n.addEventListener("load",function(){var n=new Image;n.title=e.name,n.style.width="100%",n.onload=()=>{n.height=n.naturalHeight},n.src=this.result,t.appendChild(n)}),n.readAsDataURL(e)})}a(),t.style.columnCount=l.value,l.addEventListener("change",()=>{a(),t.style.columnCount=l.value}),n.addEventListener("change",a)}(document,window);
