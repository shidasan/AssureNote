///<reference path='src/Api.ts'/>
///<reference path='d.ts/jquery.d.ts'/>
///<reference path='src/AssureNote.ts'/>
///<reference path='src/Panel.ts'/>
///<reference path='src/LayoutEngine.ts'/>
///<reference path='src/PluginManager.ts'/>

module AssureNote {
	//Deprecated
	export class FixMeModel {
	}

}


$(() => {
	var AssureNoteApp = new AssureNote.AssureNoteApp();

	//Api.GetCase(1, 1, (CaseData: any) => {
	//	var contents = CaseData.contents;
	//	var summary = CaseData.summary;

	//	Case.SetInitialData(CaseData.DCaseName, JSON.stringify(summary), contents, CaseData.caseId, CaseData.commitId);
	//	//Case.ParseASN(contents, null);
	//	//var casedecoder = new assureit.casedecoder();
	//	//var root = casedecoder.parseasn(case0, contents, null);
	//	//case0.setelementtop(root);

	//	var Screen = new AssureIt.ScreenManager(shapelayer, contentlayer, controllayer, backgroundlayer);
	//	var Viewer = new AssureIt.CaseViewer(Case, pluginManager, Api, Screen);

	//	pluginManager.RegisterKeyEvents(Viewer, Case, Api);
	//	pluginManager.CreateSideMenu(Viewer, Case, Api);

	//	Viewer.Draw();
	//	var TopView = Viewer.ViewMap[Viewer.ElementTop.Label];
	//	Viewer.Screen.SetCaseCenter(TopView.AbsX, TopView.AbsY, TopView.HTMLDoc);

	//});
});