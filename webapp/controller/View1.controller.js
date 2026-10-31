sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("jsonmodel.controller.View1", {
        onInit() {
            this.defineDataFn();
        },
        defineDataFn: function() {

            // named json model
            var oEmpData = {

                 empName: "Global Employee Name Header", 
                 
                employees : [
                   {
                        empId: "001",
                        empName: "Jeet",
                        designation: "Tester"
                    },
                    {
                        empId: "002",
                        empName: "Sarah",
                        designation: "Developer"
                    },
                    {
                        empId: "003",
                        empName: "Satya",
                        designation: "Analyst"
                    },
                    {
                        empId: "004",
                        empName: "Priyanka",
                        designation: "HR"
                    },
                    {
                        empId: "005",
                        empName: "Subham",
                        designation: "Project Manager"
                    }
                ]
            };
            var oEmpModel = new JSONModel(oEmpData);
            this.getView().setModel(oEmpModel,"EmployeeModel");

            // default json model
            var sData = {
                students : [
                    {
                        name: "Arjun"
                    },
                {
                    name: "Chabbi"
                }
                ]
            };
            var studentModel = new JSONModel(sData);
            this.getView().setModel(studentModel);

            var oNewEmpModel = new JSONModel();
            this.getView().setModel(oNewEmpModel,"Employees");
            this.getView().getModel("Employees").setData(oEmpData);
        }
    });
});