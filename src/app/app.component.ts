import { Component, OnInit } from '@angular/core';
import { MockService } from '../app/mock.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  constructor(private api: MockService, private http: HttpClient) { }

  options: any;
  doughnutOptions: any;
  value!: string;
  weatherIcons: any;
  seriesLabel: any;
  optionBar3: any;
  mergeOption: any;
  loading = false;
  optionBar2: any;
  lateralGraphOption: any;
  optionPie: any;
  emptyDonutOptions: any;


  ngOnInit(): void {
    this.renderDhoughnut();
    this.iconBars();
    this.lineChart();
    this.multipleBars();
    this.lateralGraph();
    this.pieChart();
    this.emptyDonut();

  }

  getData() {
    this.loading = true;
    this.api
      .getData()
      .then((data) => {
        this.mergeOption = { series: [{ data }] };
      })
      .catch((e) => {
        /** Error Handler */
      })
      .then(() => {
        this.loading = false;
      });
  }

  renderDhoughnut() {
    //Doughnut///////////////
    this.value = '50%'
    this.doughnutOptions = {
      toolbox: {
        show: true,
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },
      legend: {
        orient: 'vertical',
        top: '80%',
        left: 'center',
        icon: 'roundRect'
      },
      series: [
        {
          name: 'Pesquisa de Satifação',
          type: 'pie',
          stillShowZeroSum: false,
          radius: ['40%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            formatter: this.value,
            show: true,
            position: 'center',
            fontWeight: 'bold',
            fontSize: 36
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 0.5, name: 'SMS' },
            { value: 0.3, name: 'Email' },
            { value: 0.2, name: 'NewsLetter' }
          ],
          showEmptyCircle: true
        }
      ],
    }
  }

  barValue!:number;

  onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
    this.barValue = event.value;
  }

  iconBars() {
    /////////Gráfico barras 3 - Icons

    this.weatherIcons = {
      'Sunny': 'http://simpleicon.com/wp-content/uploads/sun.png',
      // 'Sunny': 'https://echarts.apache.org/examples/data/asset/img/weather/sunny_128.png',
      'Cloudy': 'https://echarts.apache.org/examples/data/asset/img/weather/cloudy_128.png',
      'Showers': 'https://echarts.apache.org/examples/data/asset/img/weather/showers_128.png'
    };

    this.seriesLabel = {
      normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 2
      }
    }

    this.optionBar3 = {
      title: {
        text: 'Wheater Statistics'
      },
      tooltip: {
        //trigger: 'axis',
        // axisPointer: {
        //   type: 'shadow'
        // }
        valueFormatter: (value: any) => value + ' mm'
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: [{
        triggerEvent: true,
        type: 'category',
        data: ['Pessimo', 'Ruim', 'Regular', 'Bom', 'Otimo'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: function (value: any) {
            //console.log(value);

            return '{' + value + '| }\n{value|' + value + '}';
          },
          margin: 20,
          rich: {
            value: {
              lineHeight: 20,
              align: 'center'
            },
            Pessimo: {
              height: 20,
              align: 'center',
              backgroundColor: {
                image: this.weatherIcons.Sunny
              }
            },
            Ruim: {
              height: 20,
              align: 'center',
              backgroundColor: {
                image: this.weatherIcons.Cloudy
              }
            },
            Regular: {
              height: 20,
              align: 'center',
              backgroundColor: {
                image: this.weatherIcons.Showers
              }
            },
            Bom: {
              height: 20,
              align: 'center',
              backgroundColor: {
                image: this.weatherIcons.Showers
              }
            },
            Otimo: {
              height: 20,
              align: 'center',
              backgroundColor: {
                image: this.weatherIcons.Showers
              }
            }

          }
        }
      },
      {
        type: 'category',
        data: ['43%', '60%', '75%', '89%', '0%'],
        position: 'bottom',
        offset: 50,
        //margin: 20,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          fontSize: 16,
          height: 20
        }
      }],
      yAxis: {
        show: false,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        }
      },
      series: [
        {
          name: 'City Alpha',
          type: 'bar',
          barWidth: '60%',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.09)'
          },
          data: [
            {
              value: 43,
              itemStyle: {
                color: '#EB5757',
                shadowColor: '#EB5757'
              },
            },
            {
              value: 60,
              itemStyle: {
                color: '#E09243',
                shadowColor: '#E09243'
              },
            },
            {
              value: 75,
              itemStyle: {
                color: '#F2C94C',
                shadowColor: '#F2C94C'
              },
            },
            {
              value: 89,
              itemStyle: {
                color: '#00BF60',
                shadowColor: '#00BF60'
              },
            },
            {
              value: 0,
              itemStyle: {
                color: '#219653',
                shadowColor: '#219653'
              }
            }
          ],
          itemStyle: {
            barBorderRadius: 5,
            borderWidth: 1,
            borderType: 'solid',
            //borderColor: '#73c0de',
            shadowColor: '#5470c6',
            shadowBlur: 3
          }

        }
      ]
    }
  }

  lineChart() {
    ///// Line chart
    this.options = {
      title: {
        text: 'Teste 1',
        textStyle: {
          fontSize: 16
        },
        left: 'left'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      legend: {
        data: ['vendas']
      },
      tooltip: {},
      series: [
        {
          name: 'vendas',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    };
  }

  multipleBars() {
    ///Gráfico de barras 2

    this.optionBar2 = {
      tooltip: {},
      xAxis: [
        {
          data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        {
          position: 'bottom',
          offset: 30,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          data: ['Winter', 'Spring', 'Summer', 'Autumn']
        }
      ],
      yAxis: {},
      series: [{
        name: 'Series',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(220, 220, 220, 0.8)'
        }
      }]
    }
  }

  lateralGraph() {
    /////// gráfico lateral

    const seriesLabel = {
      show: true
    };

    this.lateralGraphOption = {
      title: {
        text: 'Weather Statistics'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['City Alpha', 'City Beta', 'City Gamma']
      },
      grid: {
        left: 100
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'value',
        name: 'Days',
        axisLabel: {
          formatter: '{value}'
        }
      },
      yAxis: {
        type: 'category',
        inverse: true,
        data: ['Sunny', 'Cloudy', 'Showers'],
        axisLabel: {
          formatter: function (value: any): any {
            return '{' + value + '| }\n{value|' + value + '}';
          },
          //margin: 20,
          rich: {
            value: {
              lineHeight: 30,
              align: 'center'
            },
            Sunny: {
              height: 40,
              align: 'center',
              backgroundColor: {
                image: this.weatherIcons.Sunny
              }
            },
            Cloudy: {
              height: 40,
              align: 'center',
              backgroundColor: {
                image: this.weatherIcons.Cloudy
              }
            },
            Showers: {
              height: 40,
              align: 'center',
              backgroundColor: {
                image: this.weatherIcons.Showers
              }
            }
          }
        }
      },
      series: [
        {
          name: 'City Alpha',
          type: 'bar',
          data: [165, 170, 30],
          label: seriesLabel,
          markPoint: {
            symbolSize: 1,
            symbolOffset: [0, '50%'],
            label: {
              formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
              backgroundColor: 'rgb(242,242,242)',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,
              padding: [4, 10],
              lineHeight: 26,
              // shadowBlur: 5,
              // shadowColor: '#000',
              // shadowOffsetX: 0,
              // shadowOffsetY: 1,
              position: 'right',
              distance: 20,
              rich: {
                a: {
                  align: 'center',
                  color: '#fff',
                  fontSize: 18,
                  textShadowBlur: 2,
                  textShadowColor: '#000',
                  textShadowOffsetX: 0,
                  textShadowOffsetY: 1,
                  textBorderColor: '#333',
                  textBorderWidth: 2
                },
                b: {
                  color: '#333'
                },
                c: {
                  color: '#ff8811',
                  textBorderColor: '#000',
                  textBorderWidth: 1,
                  fontSize: 22
                }
              }
            },
            data: [
              { type: 'max', name: 'max days: ' },
              { type: 'min', name: 'min days: ' }
            ]
          }
        },
        {
          name: 'City Beta',
          type: 'bar',
          label: seriesLabel,
          data: [150, 105, 110]
        },
        {
          name: 'City Gamma',
          type: 'bar',
          label: seriesLabel,
          data: [220, 82, 63]
        }
      ]
    };

  }

  pieChart() {
    this.optionPie = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          label: {
            show: false
          },
          itemStyle: {
            color: '#eee'
          },
          silent: true,
          z: -1,
          animation: false
        },
        {
          name: 'Access From',
          type: 'pie',
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          label: {
            formatter: '0%',
            show: true,
            position: 'center',
            fontWeight: 'bold',
            fontSize: 24
          },
          stillShowZeroSum: false,
          showEmptyCircle: false,
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 0, name: 'Respondidas' },
            { value: 0, name: 'Não respondidas' }
          ]
        }
      ]
    }
  };

  ////////////////empty donut
  data = [{
    value: 2,
    name: "Apple",
    itemStyle: { color: 'red' }
  }, {
    value: 3,
    name: "Grapes",
    itemStyle: { color: 'blue' }
  }, {
    value: 7,
    name: "Pineapples",
    itemStyle: { color: 'pink' }
  }, {
    value: 9,
    name: "Oranges",
    itemStyle: { color: 'yellow' }
  }, {
    value: 15,
    name: "Bananas",
    itemStyle: { color: 'brown' }
  }]

  valueDonut = '50%';

  zerarDados() {
    this.data.map(item => {
      item.value = 0
    })
    this.valueDonut = '0%';
  }



  emptyDonut() {

    this.zerarDados();

    let isAllZero = this.data.every(item => item.value === 0);

    this.data.map(item => {
      item.itemStyle = { color: isAllZero ? '#cbcdd1' : item.itemStyle.color }
    })

    this.emptyDonutOptions = {

      legend: {
        orient: "vertical",
        left: "left",
        data: ["Apple", "Grapes", "Pineapples", "Oranges", "Bananas"]
      },
      series: [{
        type: "pie",
        radius: ['70%', '50%'],
        data: this.data,
        label: {
          formatter: this.valueDonut,
          show: true,
          position: 'center',
          fontWeight: 'bold',
          fontSize: 24
        }
      }]

    };


  }
}
