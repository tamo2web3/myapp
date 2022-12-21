import React, { Component } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

class ChartShow extends Component {

  state = {
    gyms:[]
  };

   formatdate(dt) {
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth()+1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '/' + m + '/' + d);
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

    const gyms =
    [
      {
        adr: 0x3EEB4cA726691B231dcF4511c6bb66a30D8A8E1E,
        actdate: '2022/12/03',
        machine: 'Treadmill',
        min: 45,
        cal: 400,
        keybefore: 55,
        keyafter: 54,
        stuffmessage: 'Good1',
        uname: 'Tamotsu Kajihara'
      },
      {
        adr: 0x3EEB4cA726691B231dcF4511c6bb66a30D8A8E1E,
        actdate: '2022/12/04',
        machine: 'Treadmill',
        min: 45,
        cal: 400,
        keybefore: 54,
        keyafter: 53,
        stuffmessage: 'Good2',
        uname: 'Tamotsu Kajihara'
      }
    ];
    this.setState({gyms: gyms})


    let nowform = this.getafterndays(0);

    // let actdays = this.props.gyms.map((gym, index) => {
    //   return gym[1]
    // });

    let actdays = ['2022/12/04','2022/12/05'];
    let databefore = [55,54];
    let dataafter = [54,53];

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
          display: true,
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
