(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9vc0":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r("HDdC"),n=r("fXoL"),s=r("hsl2");let i=(()=>{class e{constructor(e){this.msgSvc=e}handleErrorForV2API(e){let t=Object.prototype.toString.call(e);if("[object Array]"===t){if(!e[0].statusCode.toString().startsWith("20"))return this.msgSvc.errors(`code: ${e[0].statusCode}, message: ${e[0].message}`),!0}else if("[object Object]"===t&&!e.statusCode.toString().startsWith("20"))return this.msgSvc.errors(`code: ${e.statusCode}, message: ${e.message}`),!0;return!1}handleError(e){return e.error instanceof ErrorEvent?this.msgSvc.errors("'An error occurred:', "+e.error.message):"[object Object]"===Object.prototype.toString.call(e.error)?this.msgSvc.errors(`code: ${e.error.statusCode} , message: ${e.error.message}`):"[object String]"===Object.prototype.toString.call(e.error)?this.msgSvc.errors(`code: ${e.status} , message: ${e.error}`):this.msgSvc.errors(`code: ${e.status} , message: ${e.message}`),function(e,t){return new a.a(t=>t.error(e))}(`Backend returned code ${e.error.statusCode}, body was: `+e.error.message)}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(s.a))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},EnSQ:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var a=r("JIr8"),n=r("fXoL"),s=r("tk/3"),i=r("9vc0");let o=(()=>{class e{constructor(e,t){this.http=e,this.errorSvc=t,this.endpoint="/coredata",this.version="/api/v2",this.urlPrefix=`${this.endpoint}${this.version}`,this.configUrl="/config",this.endpointHealthUrl=this.urlPrefix+"/ping",this.eventCountUrl=this.urlPrefix+"/event/count",this.readingCountUrl=this.urlPrefix+"/reading/count",this.allEventsUrl=this.urlPrefix+"/event/all",this.allReadingsUrl=this.urlPrefix+"/reading/all",this.associatedEventsByDeviceNameUrl=this.urlPrefix+"/event/device/name/",this.associatedReadinsByDeviceNameUrl=this.urlPrefix+"/reading/device/name/"}getConfig(){return this.http.get(`${this.urlPrefix}${this.configUrl}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}endpointHealth(){return this.http.get(""+this.endpointHealthUrl).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}eventCount(){return this.http.get(""+this.eventCountUrl).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}readingCount(){return this.http.get(""+this.readingCountUrl).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allEventsPagination(e,t){return this.http.get(`${this.allEventsUrl}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allReadingsPagination(e,t){return this.http.get(`${this.allReadingsUrl}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allAssocaitedReadingsByDeviceNamePagination(e,t){return this.http.get(`${this.associatedEventsByDeviceNameUrl}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}allAssocaitedEventsByDeviceNamePagination(e,t){return this.http.get(`${this.associatedReadinsByDeviceNameUrl}?offset=${e}&limit=${t}`).pipe(Object(a.a)(e=>this.errorSvc.handleError(e)))}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(s.a),n.Qb(i.a))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},jWsY:function(e,t,r){"use strict";r.r(t),r.d(t,"CoreDataModule",function(){return d});var a=r("ofXK"),n=r("tyNb"),s=r("fXoL");let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["app-core-data"]],decls:23,vars:0,consts:[[1,"card","mb-2"],[1,"card-header"],[1,"fa","fa-info-circle","mr-2","text-info"],[1,"card-body"],[1,"card"],[1,"nav","nav-tabs","card-header-tabs","font-weight-bold"],[1,"nav-item"],["routerLink","./event","routerLinkActive","active",1,"nav-link"],["routerLink","./reading","routerLinkActive","active",1,"nav-link"]],template:function(e,t){1&e&&(s.Lb(0,"div",0),s.Lb(1,"div",1),s.Jb(2,"i",2),s.Lb(3,"span"),s.wc(4,"Tips"),s.Kb(),s.Kb(),s.Lb(5,"div",3),s.wc(6," An event represents a collection of one or more sensor readings. Some sensors or devices are only providing a single value \u2013 a single reading - at a time. Other sensors spew multiple values whenever they are read. An event must have at least one reading. Events are associated to a sensor or device. "),s.Jb(7,"br"),s.Jb(8,"br"),s.wc(9," The following data is only for the convenience of the user to view the data format of the data center, which does not make any sense to manipulate! "),s.Jb(10,"br"),s.wc(11," The dynamic display effect of the data is that only the API of the Core Data service is called periodically, with intervals of 3 seconds. "),s.Kb(),s.Kb(),s.Lb(12,"div",4),s.Lb(13,"div",1),s.Lb(14,"ul",5),s.Lb(15,"li",6),s.Lb(16,"a",7),s.wc(17,"Event"),s.Kb(),s.Kb(),s.Lb(18,"li",6),s.Lb(19,"a",8),s.wc(20,"Reading"),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Lb(21,"div",3),s.Jb(22,"router-outlet"),s.Kb(),s.Kb())},directives:[n.h,n.g,n.j],styles:[""]}),e})();var o=r("EnSQ");const c=[{path:"",component:i,children:[{path:"",redirectTo:"event",pathMatch:"full"},{path:"event",component:(()=>{class e{constructor(e){this.dataSvc=e,this.pauseOperate=!0}ngOnInit(){}feedEvents(){this.feedInterval=setInterval(()=>{this.dataSvc.allEventsPagination(0,5).subscribe(e=>{0!==e.events.length?e.events.forEach((e,t)=>{$("#data-event-stream").prepend('<p class="user-select-all">'+JSON.stringify(e)+"</p>")}):$("#data-event-stream").prepend('<p class="user-select-all">no data stream available, please confirm whether there is at least one device to collect data</p>')})},3e3)}start(){this.pauseOperate=!1,this.feedEvents()}pause(){this.pauseOperate=!0,window.clearInterval(this.feedInterval)}operateToggle(){this.pauseOperate=!this.pauseOperate}ngOnDestroy(){window.clearInterval(this.feedInterval)}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(o.a))},e.\u0275cmp=s.Cb({type:e,selectors:[["app-event"]],decls:18,vars:2,consts:[[1,"card"],[1,"card-header"],[1,"font-weight-bold"],[1,"fa","fa-area-chart","mr-2","text-danger"],[1,"text-secondary"],[1,"card-header","p-2"],["role","group",1,"btn-group","btn-group-sm"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-play","mr-1"],["type","button",1,"btn","btn-info",3,"disabled","click"],[1,"fa","fa-pause","mr-1"],[1,"card-body"],["id","data-event-stream",1,"w-100","overflow-auto",2,"height","350px"]],template:function(e,t){1&e&&(s.Lb(0,"div",0),s.Lb(1,"div",1),s.Lb(2,"span",2),s.Jb(3,"span",3),s.Lb(4,"span",4),s.wc(5,"Event Data Stream"),s.Kb(),s.Kb(),s.Kb(),s.Lb(6,"div",5),s.Lb(7,"div",6),s.Lb(8,"button",7),s.Tb("click",function(){return t.start()}),s.Lb(9,"span"),s.Jb(10,"i",8),s.wc(11,"Start"),s.Kb(),s.Kb(),s.Lb(12,"button",9),s.Tb("click",function(){return t.pause()}),s.Lb(13,"span"),s.Jb(14,"i",10),s.wc(15,"Pause"),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Lb(16,"div",11),s.Jb(17,"pre",12),s.Kb(),s.Kb()),2&e&&(s.xb(8),s.cc("disabled",!t.pauseOperate),s.xb(4),s.cc("disabled",t.pauseOperate))},styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),e})()},{path:"reading",component:(()=>{class e{constructor(e){this.dataSvc=e,this.pauseOperate=!0}ngOnInit(){}feedEvents(){this.feedInterval=setInterval(()=>{this.dataSvc.allReadingsPagination(0,5).subscribe(e=>{0!==e.readings.length?e.readings.forEach((e,t)=>{$("#data-reading-stream").prepend('<p class="user-select-all">'+JSON.stringify(e)+"</p>")}):$("#data-event-stream").prepend('<p class="user-select-all">no data stream available, please confirm whether there is at least one device to collect data</p>')})},3e3)}start(){this.pauseOperate=!1,this.feedEvents()}pause(){this.pauseOperate=!0,window.clearInterval(this.feedInterval)}operateToggle(){this.pauseOperate=!this.pauseOperate}ngOnDestroy(){window.clearInterval(this.feedInterval)}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(o.a))},e.\u0275cmp=s.Cb({type:e,selectors:[["app-reading"]],decls:18,vars:2,consts:[[1,"card"],[1,"card-header"],[1,"font-weight-bold"],[1,"fa","fa-area-chart","mr-2","text-danger"],[1,"text-secondary"],[1,"card-header","p-2"],["role","group",1,"btn-group","btn-group-sm"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-play","mr-1"],["type","button",1,"btn","btn-info",3,"disabled","click"],[1,"fa","fa-pause","mr-1"],[1,"card-body"],["id","data-reading-stream",1,"w-100","overflow-auto",2,"height","350px"]],template:function(e,t){1&e&&(s.Lb(0,"div",0),s.Lb(1,"div",1),s.Lb(2,"span",2),s.Jb(3,"span",3),s.Lb(4,"span",4),s.wc(5,"Reading Data Stream"),s.Kb(),s.Kb(),s.Kb(),s.Lb(6,"div",5),s.Lb(7,"div",6),s.Lb(8,"button",7),s.Tb("click",function(){return t.start()}),s.Lb(9,"span"),s.Jb(10,"i",8),s.wc(11,"Start"),s.Kb(),s.Kb(),s.Lb(12,"button",9),s.Tb("click",function(){return t.pause()}),s.Lb(13,"span"),s.Jb(14,"i",10),s.wc(15,"Pause"),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Lb(16,"div",11),s.Jb(17,"pre",12),s.Kb(),s.Kb()),2&e&&(s.xb(8),s.cc("disabled",!t.pauseOperate),s.xb(4),s.cc("disabled",t.pauseOperate))},styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),e})()}]}];let l=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(c)],n.i]}),e})(),d=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},imports:[[a.b,l]]}),e})()}}]);