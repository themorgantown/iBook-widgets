//	HYPE.documents["remove-white-flash.wdgt"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "remove-white-flash.wdgt_Resources";
	var documentName = "remove-white-flash.wdgt";
	var documentLoaderFilename = "removewhiteflash_hype_generated_script.js";

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
	if(typeof HYPE_108 == "undefined") {
		if(typeof window.HYPE_108_DocumentsToLoad == "undefined") {
			window.HYPE_108_DocumentsToLoad = new Array();
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=108';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_108();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",f:"d",N:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",aL:"i",Y:"i",A:"c",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"13":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2011.51.27%20AM.png",x:"visible",a:96,q:"100% 100%",b:50,j:"absolute",r:"inline",c:76.3485,k:"div",z:"7",d:400},"21":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2012.00.43%20PM.png",x:"visible",a:729,q:"100% 100%",b:20,j:"absolute",r:"inline",c:81.098205,k:"div",z:"11",d:400},"16":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2011.51.27%20AM.png",x:"visible",a:66,q:"100% 100%",b:20,j:"absolute",r:"inline",c:76.3485,k:"div",z:"4",d:400},"11":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2011.51.27%20AM.png",x:"visible",a:86,q:"100% 100%",b:40,j:"absolute",r:"inline",c:76.3485,k:"div",z:"6",d:400},"14":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2011.51.27%20AM.png",x:"visible",a:56,q:"100% 100%",b:10,j:"absolute",r:"inline",c:76.3485,k:"div",z:"3",d:400},"17":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2011.51.27%20AM.png",x:"visible",a:76,q:"100% 100%",b:30,j:"absolute",r:"inline",c:76.3485,k:"div",z:"5",d:400},"12":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2011.51.27%20AM.png",x:"visible",a:46,q:"100% 100%",b:0,j:"absolute",r:"inline",c:76.3485,k:"div",z:"2",d:400},"20":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2012.00.47%20PM.png",x:"visible",a:727,q:"100% 100%",b:20,j:"absolute",r:"inline",c:84.583333,k:"div",z:"10",d:400},"15":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2011.51.27%20AM.png",x:"visible",a:106,q:"100% 100%",b:60,j:"absolute",r:"inline",c:76.3485,k:"div",z:"8",d:400},"18":{o:"content-box",h:"Screen%20Shot%202012-09-05%20at%2011.51.27%20AM.png",x:"visible",a:116,q:"100% 100%",b:70,j:"absolute",r:"inline",c:76.3485,k:"div",z:"9",d:400}},sceneIndex:0,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:3,i:"a",e:494,r:1,s:86,o:"11"},{f:"2",t:0,d:3,i:"a",e:454,r:1,s:46,o:"12"},{f:"2",t:0,d:3,i:"a",e:474,r:1,s:66,o:"16"},{f:"2",t:0,d:3,i:"b",e:74,r:1,s:40,o:"11"},{f:"2",t:0,d:3,i:"b",e:34,r:1,s:0,o:"12"},{f:"2",t:0,d:3,i:"b",e:54,r:1,s:20,o:"16"},{f:"2",t:0,d:3,i:"a",e:514,r:1,s:106,o:"15"},{f:"2",t:0,d:3,i:"b",e:94,r:1,s:60,o:"15"},{f:"2",t:0.69999999,d:3,i:"b",e:104,r:1,s:70,o:"18"},{f:"2",t:0.69999999,d:3,i:"a",e:524,r:1,s:116,o:"18"},{f:"2",t:1,d:3,i:"a",e:504,r:1,s:96,o:"13"},{f:"2",t:1,d:3,i:"b",e:84,r:1,s:50,o:"13"},{f:"2",t:1.3666667,d:3,i:"b",e:64,r:1,s:30,o:"17"},{f:"2",t:1.3666667,d:3,i:"a",e:484,r:1,s:76,o:"17"},{f:"2",t:1.7666667,d:2.9999998,i:"b",e:44,r:1,s:10,o:"14"},{f:"2",t:1.7666667,d:2.9999998,i:"a",e:464,r:1,s:56,o:"14"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:4.7666664}},perspective:"600px",oid:"19",backgroundColor:"#FFFFFF",name:"Untitled Scene Copy"}];


	
	var javascripts = [];


	
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
	hypeDoc.setMainContentContainerID("removewhiteflash_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

