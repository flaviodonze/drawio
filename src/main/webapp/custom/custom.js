	this.resizeListener = mxUtils.bind(this, function()
	{
		alert('res');
	});
	
	mxEvent.addListener(window, 'resize', this.resizeListener);