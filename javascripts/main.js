$(document).ready(function(){
	$('#reader').html5_qrcode(function(data){
            $('#read_error').html("");
            $("#vid_error").html("");
			$('#read').html(data);

            $(".read_text").val("" + data)
		},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			$('#vid_error').html(videoError);
		}
	);
});
