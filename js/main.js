$("document").ready(function(){
    $(".tab-slider--body, .slider-prd").hide();
    $(".tab-slider--body:first, .slider-prd:first").show();
});

$(".tab-slider--nav li").click(function() {
    var self = $(this);
    var currentSwitch = self.closest(".switch-slider");
    currentSwitch.find(".tab-slider--body").hide();
    var activeTab = self.attr("rel");
    currentSwitch.find("#"+activeTab).fadeIn();
        if(self.attr("rel") == "tab2"){
            currentSwitch.find('.tab-slider--tabs').addClass('slide');
        }else{
            currentSwitch.find('.tab-slider--tabs').removeClass('slide');
        }
    currentSwitch.find(".tab-slider--nav li").removeClass("active");
    self.addClass("active");
});
