 /*jslint browser: true*/
 /*global $, jQuery, alert*/

 $(document).ready(function () {

     "use strict";
    /* =================================================================
        Chart JS
     ================================================================= */

    // MEMBERSHIP CHART - Line graph
    // Labels along the x-axis
    // var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"];
    // // Drawing the lines data
    // var allMembers = [282,350,411,502,635,809,947,1402,3700,5267,7523,8765];
    // var payingMembers = [86,114,106,106,107,111,133,221,783,2478,3267,3999];

    var membershipCtx = document.getElementById("membershipChart");



    var membershipChart = null;
    var payingMembers = ((typeof payingMembers) == 'undefined') ? null : payingMembers;

    if(payingMembers == null){
      membershipChart = new Chart(membershipCtx, {

          type: 'bar',
          options : {
            maintainAspectRatio: false,
            responsive: true, 
            scales: {
              yAxes: [{
                   
                       
                          position: "left",
                          id: "y-axis-0",
                          
                      
                      },
                      
                      {
                        ticks: {
                          beginAtZero: true,
                          stacked: true,
                          position: "right",
                          id: "y-axis-1",
                          userCallback: function(label) {
                            // when the floored value is the same as the value we have a whole number
                            if (Math.floor(label) === label) {
                              return label;
                            }
                          },
                        }
                      }],
            },
          },
          data: {
            labels: months,
            datasets: [
              {
                data: allMembers,
                id: "y-axis-0",
                label: "New Active members",
                borderColor: "#41b3f9",
                backgroundColor: "#41b3f9",
                fill: false
              },
              {
                data: revokedMembers,
                id: "y-axis-0",
                label: "Lost members",
                borderColor: "#eb6864",
                backgroundColor: "#eb6864",
                fill: false
              },
              {
                type: 'line',
                label: 'Total People',
                id: "y-axis-1",
                borderColor: "#1aad55",
                backgroundColor: "#1aad55",
                data: totalMembers,
                fill: false
              }
            ]
          }
        });

    }
    else{
      membershipChart = new Chart(membershipCtx, {
          type: 'line',
          options : {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  userCallback: function(label) {
                    // when the floored value is the same as the value we have a whole number
                    if (Math.floor(label) === label) {
                      return label;
                    }
                  },
                }
              }],
            },
          },
          data: {
            labels: months,
            datasets: [
              {
                data: allMembers,
                label: "All members",
                borderColor: "#3e95cd",
                backgroundColor: "#3e95cd",
                fill: false
              },
              {
                data: payingMembers,
                label: "Dues-Paying members",
                borderColor: "#4c5667",
                backgroundColor: "#4c5667",
                fill: false
              }
            ]
          }
        });
    }

   


 });
