<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Tryswag</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	<link rel="stylesheet" href="css/base.css">
	<link href="css/open-iconic-bootstrap.css" rel="stylesheet">
	
</head>

<body>
	<div class="wrapper">
		<h1>INDEX</h1>
		<h2>localhost</h2>
		<div id="sticky-anchor"></div>
		<div id="bar-colour-div">
			<a href="#" id="nav-content">localhost index</a>
			<ul id="nav">
				<li>link 1</li>
				<li>link 2</li>
				<li>link 3</li>
			</ul>
		</div>
		<div style="margin-top:10vh;margin-left:20vw;width:60vw;height: 200vh">
			
			<a class="content-head" data-toggle="collapse" href="#content-ul" aria-expanded="false" aria-controls="content-ul">
				<span class="oi oi-folder"></span>folder
			</a>
			<ul id="content-ul" class="collapse show">
				<li><span class="oi oi-file"></span>item</li>
				<li><span class="oi oi-image"></span>item</li>
				<li>item</li>
				<li>
					<a class="content-head" data-toggle="collapse" href="#content-ul1" aria-expanded="false" aria-controls="content-ul1">
						folder
					</a>
					<ul id="content-ul1" class="collapse">
						<li>item</li>
						<li>item</li>
						<li>item</li>
						<li>item</li>
					</ul>
				<li>item</li>
				<li>item</li>
				</li>
			</ul>
			
			<?PHP
			  function getFileList($dir)
			  {
			    // array to hold return value
			    $retval = array();

			    // add trailing slash if missing
			    if(substr($dir, -1) != "/") $dir .= "/";

			    // open pointer to directory and read list of files
			    $d = @dir($dir) or die("getFileList: Failed opening directory $dir for reading");
			    while(false !== ($entry = $d->read())) {
			      // skip hidden files
			      if($entry[0] == ".") continue;
			      if(is_dir("$dir$entry")) {
			        $retval[] = array(
			          "name" => "$dir$entry/",
			          "type" => filetype("$dir$entry"),
			          "size" => 0,
			          "lastmod" => filemtime("$dir$entry")
			        );
			      } elseif(is_readable("$dir$entry")) {
			        $retval[] = array(
			          "name" => "$dir$entry",
			          "type" => mime_content_type("$dir$entry"),
			          "size" => filesize("$dir$entry"),
			          "lastmod" => filemtime("$dir$entry")
			        );
			      }
			    }
			    $d->close();

			    return $retval;
			  }

			  $dirlist = getFileList("images");
			   echo "<pre>",print_r($dirlist),"</pre>";
			?>

		</div>
	</div>
	<script src="js/vendor/jquery.js"></script>


	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

	<script type="text/javascript">
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('#sticky-anchor').offset().top;
		if (window_top > div_top) {
			$('#bar-colour-div').addClass('stick');
			$('#nav').addClass('nav-stick');
			$('#nav-content').addClass('nav-content-stick');
			$('#sticky-anchor').height($('#sticky').outerHeight());
		} else {
			$('#bar-colour-div').removeClass('stick');
			$('#nav').removeClass('nav-stick');
			$('#nav-content').removeClass('nav-content-stick');
			$('#sticky-anchor').height(0);
		}
	}

	$(function() {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});

	</script>
</body>

</html>
