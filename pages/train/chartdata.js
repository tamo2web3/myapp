import React, { Component } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

class ChartShow extends Component {

   formatdate(dt) {
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth()+1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (m + '/' + d);
  };

  getafterndays(n){
     var dt = new Date();
     dt.setDate(dt.getDate()+n);
     return this.formatdate(dt);
  };

  getdatediff(dateString1, dateString2) {
    var date1 = new Date(dateString1);
    var date2 = new Date(dateString2);
    var msDiff  = date1.getTime() - date2.getTime();
    return Math.ceil(msDiff / (1000 * 60 * 60 *24));
  }

  getfuturearray(n) {
    return (
      [this.getafterndays(-n + 7), this.getafterndays(-n + 14), this.getafterndays(-n + 21), this.getafterndays(-n + 28)]
    );
  }

  render () {

    // let actdays    = ['11/05','11/06','11/13','11/19','11/20', '11/26','11/27','12/03','12/04','12/10'];
    // let databefore = [53.5, 53.5, 53.5, 54.5, 54.0, 53.5, 53.5, 53.5, 54.0, 54.0];
    // let dataafter  = [53.0, 53.0, 52.5, 53.5, 53.0, 52.5, 52.5, 52.5, 53.5, 53.0];

    let actdays    = ['12/03'	,'12/04','12/10','12/11','12/17', '12/18'	,'12/25','01/07'];
    let databefore = [53.5		, 53.5	, 54.0	, 54.0	, 53.5	, 53.5		, 53.0	, 53.5	];
    let dataafter  = [52.5		, 52.5	, 53.5	, 53.0	, 52.5	, 53.0		, 52.0	, 52.5	];

    let nowform = this.getafterndays(0);

    // let actdays = this.props.gyms.map((gym, index) => {
    //   return gym[1]
    // });

    let actform = actdays[actdays.length-1];
    let actdiff = this.getdatediff(nowform, actform);
    let futuredays = this.getfuturearray(actdiff);
    const labels = actdays.concat(futuredays);

    // let databefore = this.state.gyms.map((gym, index) => {
    //   return gym[5]
    // });
    //
    // let dataafter = this.state.gyms.map((gym, index) => {
    //   return gym[6]
    // });

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: 'Weight Chart',
        },
      },
      scales: {
        y: {
          min: 50,
          max: 60,
        },
      },
    };

    const data = {
      labels,
      datasets: [
        {
          label: 'Before',
          data:  databefore,
          borderColor: 'rgb(255, 50, 35)',
          backgroundColor: 'rgba(255, 50, 35, 0.5)',
        },
        {
          label: 'After',
          data: dataafter,
          borderColor: 'rgb(33, 133, 208)',
          backgroundColor: 'rgba(33, 133, 208, 0.5)',
        },
      ],
    };

    return <Line options={options} data={data} />;
  };
}

export default ChartShow;
