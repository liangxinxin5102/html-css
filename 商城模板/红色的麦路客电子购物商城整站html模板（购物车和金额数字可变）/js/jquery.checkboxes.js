/*checkedbox lib*/
;(function(d){d.fn.toggleCheckboxes=function(a,b){a=a||"*";b=b||false;var c=d([]);this.each(function(){var e=d("input[type=checkbox]",this).filter(a).each(function(){this.checked=!this.checked}).filter(":checked");c=e});if(!b){c=this}return c};d.fn.checkCheckboxes=function(a,b){a=a||"*";b=b||false;var c=d([]);this.each(function(){var e=d("input[type=checkbox]",this).filter(a).each(function(){this.checked=true}).filter(":checked");c=e});if(!b){c=this}return c};d.fn.unCheckCheckboxes=function(a,b){a=a||"*";b=b||false;var c=d([]);this.each(function(){var e=d("input[type=checkbox]",this).filter(a).each(function(){this.checked=false}).filter(":not(:checked)");c=e});if(!b){c=this}return c};d.radioCheckboxGroup=function(e,a){a=a||"*";var b="input[type=checkbox]";if(e){b+="[name="+e+"]"}var c=d(b).filter(a);c.click(function(){c.not(this).each(function(){this.checked=false}).end()})}})(jQuery);

/*address checked*/
$(document).ready(function(){
	$(".now_address_l li").click(function() {
		$("input:radio[name='address']").each(function(index) {
			if($("#rad"+(index+1)).attr("checked")) {
				$("#ra"+(index+1)).addClass('cur');
			} else {
				$("#ra"+(index+1)).removeClass('cur');
			}
		});
	});
});