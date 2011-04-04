<html>
<head>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">
     $(document).ready(function(){
	     $("button").click(foo = function(){
		     $("div#toolbox").toggle(20);
		     $("div#toolbox_button").html(">");
		 });
	     $("div#toolbox_button").click(function(){
		     foo();
		 });
	 });
</script>
</head>
<body>
<button>Hide</button>
<div id="toolbox" style="float:left;background:grey;height:100%">
Test
</div>
<div id="toolbox_button" style="float:left;background:grey;height:100%;margin-top:auto;margin-bottom:auto">
<
</div>
<p>This is a paragraph with little content.</p>
<p>This is another small paragraph.</p>
</body>
</html>

