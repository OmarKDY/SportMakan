function CGfxButton(iXPos,iYPos,oSprite,oParentContainer){
    var _bDisable;
    var _iScale;
    var _aCbCompleted;
    var _aCbOwner;
    var _aParams = [];
    var _oListenerDown;
    var _oListenerRelease;
    
    var _oButton;
    var _oParentContainer = oParentContainer;
    
    this._init =function(iXPos,iYPos,oSprite){
        _bDisable = false;
        _iScale = 1;
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oButton = createBitmap( oSprite);
        _oButton.x = iXPos;
        _oButton.y = iYPos; 
                                   
        _oButton.regX = oSprite.width/2;
        _oButton.regY = oSprite.height/2;
        _oButton.cursor = "pointer";
        _oParentContainer.addChild(_oButton);
        
        
        this._initListener();
    };
    
    this.unload = function(){
       _oButton.off("mousedown", _oListenerDown);
       _oButton.off("pressup" , _oListenerRelease); 
       
       _oParentContainer.removeChild(_oButton);
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this._initListener = function(){
       _oListenerDown = _oButton.on("mousedown", this.buttonDown);
       _oListenerRelease = _oButton.on("pressup" , this.buttonRelease);      
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.addEventListenerWithParams = function(iEvent,cbCompleted, cbOwner,aParams){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };
    
    this.enable = function(){
        _bDisable = false;
    };
    
    this.disable = function(){
        _bDisable = true;
    };
    
    this.buttonRelease = function(){
        if(_bDisable){
            return;
        }
        
        playSfxSound("click",1,false);
        
        _oButton.scaleX = _iScale;
        _oButton.scaleY = _iScale;

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP],_aParams);
        }
    };
    
    this.buttonDown = function(){
        if(_bDisable){
            return;
        }
        
        _oButton.scaleX = 0.9*_iScale;
        _oButton.scaleY = 0.9*_iScale;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN],_aParams);
       }
    };
    
    this.setPosition = function(iXPos,iYPos){
        _oButton.x = iXPos;
        _oButton.y = iYPos;
    };
    
    this.setX = function(iXPos){
         _oButton.x = iXPos;
    };
    
    this.setY = function(iYPos){
        _oButton.y = iYPos;
    };
    
    this.setScale = function(iScale){
        _iScale = iScale;
        _oButton.scaleX = _oButton.scaleY = iScale;
    };
    
    this.getButtonImage = function(){
        return _oButton;
    };
    
    
    this.getX = function(){
        return _oButton.x;
    };
    
    this.getY = function(){
        return _oButton.y;
    };

    this._init(iXPos,iYPos,oSprite);
}