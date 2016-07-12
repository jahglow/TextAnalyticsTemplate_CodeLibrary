class Page_detailed_analysis {
    static private const PageId = "detailed_analysis";

    static function Hide(context) {
        return false
    }

    static function Render(context) {
        var metaData = new MetaData(context.report, context.log);
        //var configurationManager = new ConfigurationManager();
        //var dashboardComponents = new DashboardComponents(context.Report, metaData, configurationManager, context.Log);
        //context.PageContext.Items.Add("dashboardComponents", dashboardComponents);

        var parameterUtilities = new ParameterUtilities(context.report, context.state, context.log);
        var pageTemplate = new PageTemplate(context.component, context.report, parameterUtilities, context.log);
        pageTemplate.Process(PageId);

        TALibrary.setReport(context.pageContext, context.log, context.report, context.confirmit, context.user);
        TALibrary.setCurrentQuestion(context.pageContext.Items["questionID"]);
    }

    static function txtCategory_Hide(context){
        return false;
    }

    static function txtCategory_Render(context){
        context.component.Output.Append("Category");
    }

    static function lstCategory_Hide(context){
        return false;
    }
}