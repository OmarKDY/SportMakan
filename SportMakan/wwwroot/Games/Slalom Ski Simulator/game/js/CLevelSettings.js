function CLevelSettings(){
    var _aGateInfos;
    
    
    this._init = function(){
               
        _aGateInfos = new Array();
        _aGateInfos[0] = [{final_x:CANVAS_WIDTH/2+600,time_next:4000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:3000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:3000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:3000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:3000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:0}];

        
        _aGateInfos[1] = [{final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-400,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:0}];
                      
        _aGateInfos[2] = [{final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-400,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-400,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-500,time_next:0}];
                      
                      
        _aGateInfos[3] = [{final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-400,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-400,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:0}];
                      
                      
        _aGateInfos[4] = [{final_x:CANVAS_WIDTH/2+600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:2000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-100,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+900,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1500},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:0}];              
                      
        _aGateInfos[5] = [{final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:600},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:600},
                          {final_x:CANVAS_WIDTH/2+600,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:0}]; 
                      
                      
                      
         _aGateInfos[6] = [
                          {final_x:CANVAS_WIDTH/2,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:600},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2,time_next:500},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:800},
                          {final_x:CANVAS_WIDTH/2+500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:1000},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+600,time_next:600},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:1000},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-300,time_next:0}]; 
        
        _aGateInfos[7] = [{final_x:CANVAS_WIDTH/2,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:800},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:800},
                          {final_x:CANVAS_WIDTH/2-200,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2-200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:800},
                          {final_x:CANVAS_WIDTH/2+200,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:800},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:800},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:0}]; 
                      
        
        _aGateInfos[8] = [{final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-1100,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:600},
                          {final_x:CANVAS_WIDTH/2-300,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:500},
                          {final_x:CANVAS_WIDTH/2,time_next:500},
                          {final_x:CANVAS_WIDTH/2,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+900,time_next:600},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2+300,time_next:800},
                          {final_x:CANVAS_WIDTH/2-600,time_next:800},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:800},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2-500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-900,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-1100,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+1100,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-900,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-900,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-900,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:1000}]; 
                      
                      
            _aGateInfos[9] = [
                          {final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:500},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+800,time_next:600},
                          {final_x:CANVAS_WIDTH/2+900,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:600},
                          {final_x:CANVAS_WIDTH/2+300,time_next:900},
                          {final_x:CANVAS_WIDTH/2-600,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-1100,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2-100,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:500},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+800,time_next:600},
                          {final_x:CANVAS_WIDTH/2+600,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:600},
                          {final_x:CANVAS_WIDTH/2+300,time_next:900},
                          {final_x:CANVAS_WIDTH/2-600,time_next:800},
                          {final_x:CANVAS_WIDTH/2+100,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:800},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:500},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:0}
                        ];           
       
        _aGateInfos[10] = [
                          {final_x:CANVAS_WIDTH/2+200,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-600,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+700,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+400,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+600,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:500},
                          {final_x:CANVAS_WIDTH/2+500,time_next:500},
                          {final_x:CANVAS_WIDTH/2+700,time_next:800},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-900,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-900,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:800},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:500},
                          {final_x:CANVAS_WIDTH/2+500,time_next:500},
                          {final_x:CANVAS_WIDTH/2+400,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:500},
                          {final_x:CANVAS_WIDTH/2+100,time_next:500},
                          {final_x:CANVAS_WIDTH/2,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-900,time_next:0}
                        ];     
        
        _aGateInfos[11] = [
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1500},
                          {final_x:CANVAS_WIDTH/2-500,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-900,time_next:500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1100},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:500},
                          {final_x:CANVAS_WIDTH/2+400,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:800},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-900,time_next:500},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:500},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1200},
                          {final_x:CANVAS_WIDTH/2+700,time_next:1000},
                          {final_x:CANVAS_WIDTH/2-1000,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+400,time_next:800},
                          {final_x:CANVAS_WIDTH/2,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:500},
                          {final_x:CANVAS_WIDTH/2+200,time_next:800},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+800,time_next:1000},
                          {final_x:CANVAS_WIDTH/2+500,time_next:500},
                          {final_x:CANVAS_WIDTH/2+400,time_next:500},
                          {final_x:CANVAS_WIDTH/2+300,time_next:800},
                          {final_x:CANVAS_WIDTH/2+1000,time_next:1200},
                          {final_x:CANVAS_WIDTH/2-800,time_next:2000},
                        ];   
        NUM_LEVELS = _aGateInfos.length;
    };
    
    this.getGateInfos = function(iLevel){
        return _aGateInfos[iLevel-1];
    };
    
    
    this._init();
}