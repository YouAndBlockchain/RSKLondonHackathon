pragma solidity >=0.4.22 <0.6.0;
contract Garbage {

    mapping(address => uint16) cleaners;
    
    mapping(uint16 => uint16) zoneCount;
    
    address[] allAddress;
    
    uint8 allAddressInd = 0;
    
    mapping(address => uint16) cleanersToken;
    
    event AddEvent(
        address indexed _from,
        uint _value,
        uint16 _zone
    );
    
    event AddToken(
        address indexed _from,
        uint indexed _id,
        uint _value,
        uint8 geox,
        uint8 geoy
    );

    function add (uint8 geox, uint8 geoy) public {
        
        //define zone from geolocalisation
        uint16 zone = geox + geoy;
        
        cleaners[msg.sender] = zone;
        allAddress[allAddressInd] = msg.sender;
        allAddressInd++;
        
        //count the number of picture in the zone
        zoneCount[zone] = zoneCount[ zone ] + 1 ;

        emit AddEvent(msg.sender, zoneCount[zone], zone);
        
        // if number of cleaners who take the picture is reach
        if (zoneCount[zone] == 2) {
            
            for (uint8 i = 0; i < allAddress.length; i++) {
                address a = allAddress [ i ] ;
                
                if (cleaners[a] == zone) {
                    //add a token
                    cleanersToken[a] = cleanersToken[ a ] + 1 ;
                    
                    // emit an event for city to get notification and follow users token
                    emit AddToken(a, cleanersToken[ a ], cleanersToken[ a ], geox, geoy);
                }
            }
            
            //block zone for futher add
            zoneCount[zone] = 9999 ;
        }
    }
}

