var tmpColor;

$('#btn-save').click(function(){
	saveChanges();
	closeModel();
});

var closeModel = function(){
	$('#myModal').modal('toggle');
};

var saveChanges = function(){
	var fontSizeH1 = $('#font-size-h1').val();
	$('h1').css('font-size', fontSizeH1);
	$('h1').css('color', '#' + tmpColor);
	var skinColor = $('#change-skin').val();
	$('body').attr("class", "home " + skinColor);
	var imgSize = $('#img-size').val();
	console.log(imgSize);
	$('#flower-img').css('width', imgSize);
};


$('#color-picker').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		tmpColor = hex;
		$('#color-picker').css('backgroundColor', '#' + hex);
	}
});
