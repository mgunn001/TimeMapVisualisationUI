	var jsonObjRes = {};
	$(document).ready(function() {
	 	var SERVERHOST = "http://localhost:3000/GetResponse";

	 	$(".getJSONFromServer").click(function(event){
		 	if($(this).parents("form")[0].checkValidity()){
		 			event.preventDefault();

		 		var queryStr="?"+$(".argumentsForm input").serialize();	    		
	    		$.ajax({
		          type: "GET",
/*		          url: SERVERHOST+queryStr,
*/		          url:'timemapsumjson_httpgulflabororg.json',
		          dataType: "text",
		          success: function( data, textStatus, jqXHR) {	

	    			jsonObjRes= $.parseJSON($.trim(data));
	    			console.log(jsonObjRes);		
	    			drawImageGrid(jsonObjRes); // calling Image Grid Function here      	
	    			drawImageSlider(jsonObjRes);
	    			drawTimeLine(jsonObjRes);
	    			$(".tabContentWrapper").show();
		          },
	  			  error: function( data, textStatus, jqXHR) {
	  		      	var errMsg = "some problem fetching the response";
	  		      	alert(errMsg);	 
	  		      }
				});
	 		}
	 		
	 	});
	});
		