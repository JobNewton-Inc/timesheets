        
        var fields;
        
        fields = [
            {
                "name": "name of employee",
                "department" : "department",
                "weekending" : "for week ending",
                "exemptions" : "exemptions"
            },
            {
                "morning" : "in",
                "afternoon": "in",
                "overtime" : "in"
            }
        ];
        // current date - from http://rainbow.arch.scriptmania.com/scripts
        // Array of day names
        function showDate(ele){
            var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

                var monthNames = new Array("January","February","March","April","May","June","July",
                                           "August","September","October","November","December");

                var dt = new Date();
                var y  = dt.getYear();
            $('.'+ele).text(dayNames[dt.getDay()] + ", " + monthNames[dt.getMonth()] + " " + dt.getDate() + ", " + y);
        }

        $(function(){
            //$('#head').html('<h2>'+fields[0].name+'</h2><input type="text" name="'+fields[0].name+'">')
            //console.log(fields[0].name)
            //console.log(fields[0].department)
            showDate("today")
        });
