import uiSlider from "jquery-ui-slider/jquery-ui"

export default {
	init() {
        if(!document.querySelector('[data-slider]')) return;

        $("[data-slider]").slider({
            animate: "slow",
            range: "min",    
            value: 50,
            slide : function(event, ui) {    
                $("[data-slider-res]").text(ui.value + ' %');        
                $("#send-result-polzunok").val(ui.value);    
            }
        });
        $('[data-slider-res]').text($("[data-slider]").slider("value") + ' %');    
        $("#send-result-polzunok").val($("[data-slider]").slider("value"));    
	}
}