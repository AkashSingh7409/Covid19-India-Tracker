$(document).ready(function(){
     var url = "https://api.covid19india.org/data.json"

     $.getJSON(url,function(data){
     	console.log(data)

     	var total_active, total_confirmed, total_recovered, total_deaths, last_updated, todays_confirmed, todays_recovered, todays_deaths
        
        var state = []
        var active = [] 
        var confirmed = []
        var recovered = []
        var deaths = []
        var deltaconfirmed = []
        var deltarecovered = []
        var deltadeaths = []

        $.each(data.statewise,function(id,obj){
          state.push(obj.state)
          active.push(obj.active) 
          confirmed.push(obj.confirmed)
          recovered.push(obj.recovered)
          deaths.push(obj.deaths)
          deltaconfirmed.push(obj.deltaconfirmed)
          deltarecovered.push(obj.deltaconfirmed)
          deltadeaths.push(obj.deltadeaths)


        })

        state.shift()
        active.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        deltaconfirmed.shift()
        deltarecovered.shift()
        deltadeaths.shift()

        console.log(state)

     	total_active = data.statewise[0].active
     	total_confirmed = data.statewise[0].confirmed
     	total_recovered = data.statewise[0].recovered
     	total_deaths = data.statewise[0].deaths
        last_updated = data.statewise[0].lastupdatedtime
        todays_confirmed = data.statewise[0].deltaconfirmed
        todays_recovered = data.statewise[0].deltarecovered
        todays_deaths = data.statewise[0].deltadeaths

     	$("#active").append(total_active)
     	$("#confirmed").append(total_confirmed)
     	$("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)
        $("#lastupdatedtime").append(last_updated)
        $("#deltaconfirmed").append(todays_confirmed)
        $("#deltarecovered").append(todays_recovered)
        $("#deltadeaths").append(todays_deaths)

        var myChart = document.getElementById("myChart").getContext('2d')

        var chart = new Chart(myChart,{

        	type:'bar',
        	data:{
                labels:state,
                datasets:[
                      {
                      	 label: "Confirmed",
                      	 data: confirmed,
                      	 backgroundColor: "orange",
                         borderWidth : "1",
                      	 minBarLength: 100
                      },
                      {
                      	 label: "Recovered",
                      	 data: recovered,
                      	 backgroundColor: "limegreen",
                         borderWidth : "1",
                      	 minBarLength: 100
                      },
                      {
                      	 label: "Deceased",
                      	 data: deaths,
                      	 backgroundColor: "red",
                         borderWidth : "1",
                      	 minBarLength: 100
                      },
                       {
                         label: "Active",
                         data: active,
                         backgroundColor: "dodgerblue",
                         borderWidth : "1",
                         minBarLength: 100
                      }

                ]
        	},
        	options:{
            responsive: true
          }
        })
    
     })
})