Draw.loadPlugin(function(ui)
{
	// Adds resource for action
	mxResources.parse('demoFunction=DEMO function');

	// Adds action
	ui.actions.addAction('demoFunction', function()
	{
		alert('go');
	});
	
	var menu = ui.menus.get('extras');
	var oldFunct = menu.funct;
	
	menu.funct = function(menu, parent)
	{
		oldFunct.apply(this, arguments);
		
		ui.menus.addMenuItems(menu, ['-', 'demoFunction'], parent);
	};
});