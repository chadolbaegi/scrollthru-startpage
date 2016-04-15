$('document').ready(function() {
	 var d = new Date();
	 var n = d.getHours();
	 var jinx;
	 if(n < 12) {
		 $('.greeting').text('Good morning');
		 jinx = 0;
	 }
	 else if(n < 17) {
		 $('.greeting').text('Good afternoon');
		 jinx = 0;
	 }
	 else {
		 $('.greeting').text('Good evening');
		 jinx = 1;
	 }
	 if (jinx > 0) {
		 $('.jinx').text('Welcome home!');
	 }
	 else {
		 $('.jinx').text('Have a good day!');
	 }
});