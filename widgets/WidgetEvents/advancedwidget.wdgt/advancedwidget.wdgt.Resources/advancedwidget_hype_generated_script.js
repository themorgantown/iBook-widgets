//	HYPE.documents["advancedwidget.wdgt"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "advancedwidget.wdgt.Resources";
	var documentName = "advancedwidget.wdgt";
	var documentLoaderFilename = "advancedwidget_hype_generated_script.js";
	var mainContainerID = "advancedwidget_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_137 == "undefined") {
		if(typeof window.HYPE_137_DocumentsToLoad == "undefined") {
			window.HYPE_137_DocumentsToLoad = new Array();
			window.HYPE_137_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=137';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_137_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_137();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",aJ:"i",m:"c",bI:"f",T:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {};
	
	var scenes = [{initialValues:{"4":{aV:8,w:"This is the first scene.",x:"visible",a:22,Z:"break-word",b:39,j:"absolute",r:"inline",aS:8,k:"div",y:"preserve",aT:8,z:"1",t:16,G:"#000000",aU:8},"5":{b:181,z:"2",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",aA:[{type:1,transition:1,sceneSymbol:1}],G:"#000000",aP:"pointer",w:"next",x:"visible",I:"Solid",a:246,y:"preserve",J:"Solid"}},sceneIndex:0,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"1",backgroundColor:"#FFFFFF",name:"firstscene"},{initialValues:{"8":{b:181,z:"1",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",aA:[{type:1,transition:1,sceneSymbol:1}],G:"#000000",aP:"pointer",w:"next",x:"visible",I:"Solid",a:246,y:"preserve",J:"Solid"},"9":{aV:8,w:"This is the middle scene. Leaving the widget from this scene (or any scene) will return you to the <div>first scene.</div>",x:"visible",a:62,Z:"break-word",b:47,j:"absolute",r:"inline",c:469,aS:8,k:"div",aT:8,d:36,t:16,y:"preserve",z:"2",aU:8,G:"#000000"}},sceneIndex:1,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"7",backgroundColor:"#FFFFFF",name:"Middle Scene"},{initialValues:{"3":{aV:8,w:"This is the 'quiet scene' which contains no audio. <div>In the &lt;head&gt; area, we're switching to this scene when leaving the widget.  You can use this scene to forcefully pause, audio, or just use it to ensure that all audio and video in your document is cleared and doesn't play</div><div>when the widget is closed. </div>",x:"visible",a:41,Z:"break-word",b:49,j:"absolute",r:"inline",c:478,aS:8,k:"div",aT:8,d:165,t:16,y:"preserve",z:"1",aU:8,G:"#000000"},"6":{b:264,z:"2",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,F:"center",aA:[{type:1,sceneOid:"1",transition:1}],G:"#000000",aP:"pointer",w:"Back to First",x:"visible",I:"Solid",a:236,y:"preserve",J:"Solid"}},sceneIndex:2,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"2",backgroundColor:"#FFFFFF",name:"quietscene"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

