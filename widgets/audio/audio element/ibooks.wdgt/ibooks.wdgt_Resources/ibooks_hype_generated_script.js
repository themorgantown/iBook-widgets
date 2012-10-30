//	HYPE.documents["ibooks.wdgt"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "ibooks.wdgt_Resources";
	var documentName = "ibooks.wdgt";
	var documentLoaderFilename = "ibooks_hype_generated_script.js";

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
	if(typeof HYPE_124 == "undefined") {
		if(typeof window.HYPE_124_DocumentsToLoad == "undefined") {
			window.HYPE_124_DocumentsToLoad = new Array();
			window.HYPE_124_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=124';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_124_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_124();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",aZ:"i",aL:"i",A:"c",Y:"i",X:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"13":{c:261,d:72,I:"None",J:"None",K:"None",L:"None",M:0,w:" <audio id=\"element2\" controls=\"controls\" preload=\"preload\">\n    \n    <source src=\"data:audio/mpeg;base64,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\" type=\"audio/mpeg\"> <!-- Safari and iPhone -->\n    \n    </audio>\n    ",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",O:0,P:0,C:"#A0A0A0",z:"9",k:"div",D:"#A0A0A0",a:27,b:449},"3":{c:261,d:72,I:"None",J:"None",K:"None",L:"None",M:0,w:" <audio id=\"element2\" controls=\"controls\" preload=\"preload\">\n    \n    <source src=\"shakedown2.mp3\" type=\"audio/mpeg\"> <!-- Safari and iPhone -->\n    \n    </audio>\n    ",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",O:0,P:0,C:"#A0A0A0",z:"2",k:"div",D:"#A0A0A0",a:10,b:207},"7":{aV:8,w:"element<div>2</div>",x:"visible",a:488,Z:"break-word",y:"preserve",b:191,r:"inline",z:"6",j:"absolute",aS:8,aT:8,k:"div",t:16,aU:8,G:"#000000"},"8":{b:292,z:"7",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:4,javascriptOid:"10"},F:"center",G:"#000000",aP:"pointer",w:"Play1",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"4":{aU:8,G:"#000000",c:209,aV:8,r:"inline",d:179,s:"Courier,'Courier New',Monospace",t:16,Z:"break-word",v:"normal",w:"&lt;audio id=\"element2\" controls=\"controls\" preload=\"preload\"&gt;\n   &lt;source src=\"shakedown2.mp3\" type=\"audio/mpeg\"&gt; &lt;!-- Safari and iPhone --&gt;\n&lt;/audio&gt;",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,aT:8,a:228,b:194},"14":{aV:8,w:"See:&nbsp;http://gonze.com/xipf/datauri/",x:"visible",a:264,Z:"break-word",y:"preserve",j:"absolute",r:"inline",aA:{type:5,goToURL:"http://gonze.com/xipf/datauri/",openInNewWindow:false},z:"10",aS:8,aT:8,b:449,k:"div",aP:"pointer",t:16,aU:8,G:"#000000"},"9":{b:337,z:"8",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:4,javascriptOid:"11"},F:"center",G:"#000000",aP:"pointer",w:"Play2",x:"visible",I:"Solid",a:16,y:"preserve",J:"Solid"},"5":{aV:8,w:"&lt;audio id=\"element1\" controls=\"controls\" preload=\"preload\"&gt;\n   &lt;source src=\"shakedown2.mp3\" type=\"audio/mpeg\"&gt; &lt;!-- Safari and iPhone --&gt;\n&lt;/audio&gt;",x:"visible",a:228,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"4",c:209,aS:8,aT:8,d:179,b:24,k:"div",s:"'Courier New',Courier,Monospace",aU:8,G:"#000000",t:16},"6":{aV:8,w:"element<div>1</div>",x:"visible",a:493,Z:"break-word",y:"preserve",b:18,r:"inline",z:"5",j:"absolute",aS:8,aT:8,k:"div",t:16,aU:8,G:"#000000"},"2":{c:261,d:72,I:"None",J:"None",K:"None",L:"None",M:0,w:" <audio id=\"element1\" controls=\"controls\" preload=\"preload\">\n    \n    <source src=\"shakedown.mp3\" type=\"audio/mpeg\"> <!-- Safari and iPhone -->\n    \n    </audio>\n    ",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",O:0,P:0,C:"#A0A0A0",z:"1",k:"div",D:"#A0A0A0",a:16,b:34}},sceneIndex:0,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"1",backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [{name:"play1",source:"function(hypeDocument, element, event) {\n\t/*\t\n\t\thypeDocument - access to the hype document API:\n\t\t\t\t\t\tMETHODS:\n\t\t\t\t\t\thypeDocument.documentName()\n\t\t\t\t\t\thypeDocument.sceneNames()\n\t\t\t\t\t\thypeDocument.currentSceneName()\n\t\t\t\t\t\thypeDocument.showSceneNamed(sceneName, optionalTransition)\n\t\t\t\t\t\thypeDocument.showNextScene(optionalTransition)\n\t\t\t\t\t\thypeDocument.showPreviousScene(optionalTransition)\n\t\t\t\t\t\thypeDocument.playTimelineNamed(timelineName)\n\t\t\t\t\t\thypeDocument.getElementById(id)\n\n\t\t\t\t\t\tMORE INFO:\n\t\t\t\t\t\thttp://tumult.com/hype/documentation/javascript/\n\t\n\t\telement - DOMHTMLElement that triggered this function being called\n\t\tevent - event that triggered this function being called\n\t*/\n\t\n\tvar myAudio = document.getElementById(\"element1\"); myAudio.play();}",identifier:"10"},{name:"play2",source:"function(hypeDocument, element, event) {\n\t/*\t\n\t\thypeDocument - access to the hype document API:\n\t\t\t\t\t\tMETHODS:\n\t\t\t\t\t\thypeDocument.documentName()\n\t\t\t\t\t\thypeDocument.sceneNames()\n\t\t\t\t\t\thypeDocument.currentSceneName()\n\t\t\t\t\t\thypeDocument.showSceneNamed(sceneName, optionalTransition)\n\t\t\t\t\t\thypeDocument.showNextScene(optionalTransition)\n\t\t\t\t\t\thypeDocument.showPreviousScene(optionalTransition)\n\t\t\t\t\t\thypeDocument.playTimelineNamed(timelineName)\n\t\t\t\t\t\thypeDocument.getElementById(id)\n\n\t\t\t\t\t\tMORE INFO:\n\t\t\t\t\t\thttp://tumult.com/hype/documentation/javascript/\n\t\n\t\telement - DOMHTMLElement that triggered this function being called\n\t\tevent - event that triggered this function being called\n\t*/\n\tvar myAudio2 = document.getElementById(\"element2\"); myAudio2.play();\n\t\n}",identifier:"11"}];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("ibooks_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

