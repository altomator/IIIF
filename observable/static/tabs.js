/*
 Tabs
 (c) 2009 By Xul.fr
 Freeware
*/


function loadit(element)
{
	console.log("loadit: ",myLocale)
	var container = document.getElementById('container');

	if (element.rel.includes("locale") ) {
		container.src=element.rel+myLocale;
	} else {
		container.src=element.rel;
	}
	console.log(container.src);

	var tabs=document.getElementById('tabs').getElementsByTagName("a");
	for (var i=0; i < tabs.length; i++)
	{
		if(tabs[i].rel == element.rel)
			tabs[i].className="selected";
		else
			tabs[i].className="";
	}
}

function startit()
{

	var tabs=document.getElementById('tabs').getElementsByTagName("a");
	var container = document.getElementById('container');
	container.src = tabs[0].rel;
}

window.onload=startit;
