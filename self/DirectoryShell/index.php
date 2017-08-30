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
		<div style="margin-top:10vh;margin-left:20vw;width:60vw;margin-bottom: 20vh">
			
			<div id="folder-top">
				<h2>Folder parent</h2>

			</div>

			<div id="folder">
			<?php
			function is_dir_empty($dir) {
			  if (!is_readable($dir)) return NULL; 
			  return (count(scandir($dir)) == 2);
			}
			
			// Function to sort given values alphabetically
			function alphasort($a, $b) {
				return strcasecmp($a->getPathname(), $b->getPathname());
			}
			// Class to put forward the values for sorting
			class SortingIterator implements IteratorAggregate {
				private $iterator = null;
				public function __construct(Traversable $iterator, $callback) {
					$array = iterator_to_array($iterator);
					usort($array, $callback);
					$this->iterator = new ArrayIterator($array);
				}
				public function getIterator() {
				return $this->iterator;
				}
			}
			// Get a full list of dirs & files and begin sorting using above class & function
			$path = $_SERVER['DOCUMENT_ROOT'];
			$objectList = new SortingIterator(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path), RecursiveIteratorIterator::SELF_FIRST), 'alphasort');
			// With that done, create arrays for out final ordered list and a temp array of files to copy over
			$finalArray = $tempArray =  array();
			// To start, push folders from object into finalArray, files into tempArray
			foreach ($objectList as $objectRef) {
				$fileFolderName = rtrim(substr($objectRef->getPathname(), strlen($path)),"..");
				if ($objectRef->getFilename()!="." && $fileFolderName[strlen($fileFolderName)-1]!="/") {
						$fileFolderName!="/" && is_dir($path.$fileFolderName) ? array_push($finalArray,$fileFolderName) : array_push($tempArray,$fileFolderName);
				}
			}
			// Now push root files onto the end of finalArray and splice from the temp, leaving only files that reside in subsirs
			for ($i=0;$i<count($tempArray);$i++) {
				if (count(explode("/",$tempArray[$i]))==2) {
					array_push($finalArray,$tempArray[$i]);
					array_splice($tempArray,$i,1);
					$i--;
				}
			}
			// Lastly we push remaining files into the right subdirs in finalArray
			for ($i=0;$i<count($tempArray);$i++) {
				$insertAt = array_search(dirname($tempArray[$i]),$finalArray)+1;
				for ($j=$insertAt;$j<count($finalArray);$j++) {
					if (	strcasecmp(dirname($finalArray[$j]), dirname($tempArray[$i]))==0 &&
						strcasecmp(basename($finalArray[$j]), basename($tempArray[$i]))<0 ||
						strstr(dirname($finalArray[$j]),dirname($tempArray[$i]))) {
						$insertAt++;
					}
				}
				array_splice($finalArray, $insertAt, 0, $tempArray[$i]);
			}
			// Finally, we have our ordered list, so display in a UL
			$dirCount = 0;

			echo "<ul id='ulparent'>\n<li class='folder-parent'><a class='content-head' data-toggle='collapse' href='#ul0'><span class='oi oi-caret-bottom'></span>directory</a></li>\n";
			$lastPath="";
			for ($i=0;$i<count($finalArray);$i++) {
				$fileFolderName = $finalArray[$i];
				$thisDepth = count(explode("/",$fileFolderName));
				$lastDepth = count(explode("/",$lastPath));
				
				if ($thisDepth > $lastDepth) {
					
					echo "<ul id=ul".$dirCount." class='collapse'>\n";
				}
				if ($thisDepth < $lastDepth) {
					for ($j=$lastDepth;$j>$thisDepth;$j--) {
						
						echo "</ul>\n";
					}
				}
				if (is_dir(getcwd().$finalArray[$i])) {
					$dirCount++;

					echo "<li class='folder-parent'>";
					echo "<a class='content-head' data-toggle='collapse' ";
					echo "href=#ul".($dirCount);
					

					if (is_dir_empty(getcwd().$finalArray[$i])) {
					  echo ">"; 
					}else{
					  echo "><span class='oi oi-caret-bottom'></span>";
					}
					
					echo basename($fileFolderName)."</a>";
					echo "</li>\n";
				} else {
					$extension = explode(".", basename($fileFolderName));
					
					echo "<li>";

					switch (end($extension)) {
						case 'jpg':
						case 'jpeg':
						case 'png':
							echo "<span class='oi oi-image'></span>";
							break;
						case 'css':
						case 'js':
						case 'php':
							echo "<span class='oi oi-book'></span>";
							break;
						
						default:
							echo "<span class='oi oi-file'></span>";
							break;
					}

					echo basename($fileFolderName)."</li>\n";
				}

				$lastPath = $fileFolderName;
			}
			echo "</ul>\n</ul>";
			?>
			</div>
		</div>
	</div>
	<script src="js/vendor/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
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
